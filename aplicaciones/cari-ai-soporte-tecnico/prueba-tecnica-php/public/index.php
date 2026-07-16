<?php
declare(strict_types=1);

use Slim\Factory\AppFactory;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();

// --- Conexión a la base de datos (SQLite, autocontenida para poder correr el ejemplo sin instalar MySQL) ---
function getConnection(): PDO
{
    $dbPath = __DIR__ . '/../database/cariai.sqlite';
    $pdo = new PDO('sqlite:' . $dbPath);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    return $pdo;
}

// --- Twig para renderizar la vista del reporte ---
$loader = new FilesystemLoader(__DIR__ . '/../templates');
$twig = new Environment($loader);

/**
 * Reporte: Total de ventas por producto
 * (uno de los 3 reportes solicitados en la prueba, usando las mismas tablas
 * Client, Product y Orders)
 */
$app->get('/', function (Request $request, Response $response) use ($twig) {
    $pdo = getConnection();

    $sql = "
        SELECT
            p.Name       AS producto,
            p.Reference  AS referencia,
            SUM(o.Quantity) AS cantidad,
            SUM(o.Total)    AS total
        FROM Orders o
        JOIN Product p ON p.ProductId = o.ProductId
        GROUP BY p.ProductId, p.Name, p.Reference
        ORDER BY p.ProductId
    ";

    $stmt = $pdo->query($sql);
    $rows = $stmt->fetchAll();

    $totalGeneral = 0;
    foreach ($rows as $row) {
        $totalGeneral += (float) $row['total'];
    }

    $html = $twig->render('reporte_ventas.twig', [
        'rows' => $rows,
        'totalGeneral' => $totalGeneral,
        'generadoEn' => date('Y-m-d H:i:s'),
    ]);

    $response->getBody()->write($html);
    return $response;
});

/**
 * Endpoint extra: mismo reporte en JSON (útil para consumir desde otra
 * pantalla o para pruebas automáticas)
 */
$app->get('/api/ventas-por-producto', function (Request $request, Response $response) {
    $pdo = getConnection();

    $sql = "
        SELECT
            p.Name       AS producto,
            p.Reference  AS referencia,
            SUM(o.Quantity) AS cantidad,
            SUM(o.Total)    AS total
        FROM Orders o
        JOIN Product p ON p.ProductId = o.ProductId
        GROUP BY p.ProductId, p.Name, p.Reference
        ORDER BY p.ProductId
    ";

    $rows = $pdo->query($sql)->fetchAll();

    $response->getBody()->write(json_encode($rows, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    return $response->withHeader('Content-Type', 'application/json');
});

$app->run();
