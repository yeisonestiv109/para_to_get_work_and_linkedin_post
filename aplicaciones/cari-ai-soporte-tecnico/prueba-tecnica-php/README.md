# Prueba técnica Cari AI — Reporte en PHP (Slim Framework + Twig)

Solución al ejercicio: *"Elaborar un reporte en PHP usando el framework de tu predilección"*.

Elegí **Slim 4** (micro-framework, similar en filosofía a Laravel/Symfony pero mucho más liviano
para un ejercicio puntual) + **Twig** para las vistas + **SQLite** como base de datos (para que el
reporte se pueda ejecutar de inmediato, sin necesitar instalar y configurar un servidor MySQL
aparte). La lógica SQL es la misma que usaría contra MySQL/PostgreSQL; solo cambia el DSN de
conexión (`sqlite:...` → `mysql:host=...;dbname=...`).

El reporte que implementé es el de **"Total de ventas por producto"** (uno de los 3 solicitados en
la prueba), usando exactamente las tablas `Client`, `Product` y `Orders` del ejercicio.

## Estructura del proyecto

```
prueba-tecnica-php/
├── composer.json
├── database/
│   ├── schema.sql      # Esquema + datos de ejemplo (idénticos a las tablas del examen)
│   ├── seed.php         # Script que crea database/cariai.sqlite a partir de schema.sql
│   └── cariai.sqlite    # Base de datos generada (se crea al ejecutar seed.php)
├── public/
│   └── index.php        # Rutas de la app (Slim): "/" (HTML) y "/api/ventas-por-producto" (JSON)
├── templates/
│   └── reporte_ventas.twig   # Vista del reporte
└── vendor/               # Dependencias de Composer (no incluidas; instalar con `composer install`)
```

## Cómo ejecutarlo

Requisitos: PHP 8.2+ con extensión `pdo_sqlite` (viene por defecto en la mayoría de instalaciones)
y Composer.

```bash
cd prueba-tecnica-php
composer install
php database/seed.php          # crea database/cariai.sqlite con los datos del ejercicio
php -S 127.0.0.1:8099 -t public
```

Luego abrir en el navegador:
- **Reporte HTML:** http://127.0.0.1:8099/
- **Mismo reporte en JSON:** http://127.0.0.1:8099/api/ventas-por-producto

## Resultado esperado (verificado)

| Producto   | Referencia | Cantidad | Total       |
|------------|------------|----------|-------------|
| Televisor  | 100-342    | 18       | $27.000.000 |
| Nevera     | 100-343    | 5        | $15.000.000 |
| Microondas | 100-344    | 5        | $2.500.000  |

Coincide exactamente con el reporte de ejemplo de la prueba. La query central (en
`public/index.php`) es:

```sql
SELECT
    p.Name       AS producto,
    p.Reference  AS referencia,
    SUM(o.Quantity) AS cantidad,
    SUM(o.Total)    AS total
FROM Orders o
JOIN Product p ON p.ProductId = o.ProductId
GROUP BY p.ProductId, p.Name, p.Reference
ORDER BY p.ProductId
```

## Nota de diseño
Separé la consulta SQL, el render (Twig) y las rutas (Slim) siguiendo el mismo principio que
aplico en mis proyectos de backend: cada capa con una responsabilidad clara, para que un cambio en
la vista no obligue a tocar la lógica de datos, y viceversa — más fácil de mantener y de depurar
cuando alguien reporta un problema en producción.
