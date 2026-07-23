<?php
// Crea (o recrea) la base de datos SQLite database/cariai.sqlite a partir de schema.sql
$dbPath = __DIR__ . '/cariai.sqlite';
if (file_exists($dbPath)) {
    unlink($dbPath);
}

$pdo = new PDO('sqlite:' . $dbPath);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$sql = file_get_contents(__DIR__ . '/schema.sql');
$pdo->exec($sql);

echo "Base de datos creada correctamente en: {$dbPath}\n";
