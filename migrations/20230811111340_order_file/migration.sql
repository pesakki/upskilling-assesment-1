-- This is an empty migration.
INSERT INTO assesment2.shipped (order_date, status, total_amount, quantity, subtotal, rating, comment)
SELECT order_date, status, total_amount, quantity, subtotal, rating, comment
FROM ecommerce_products
WHERE order_date IS NOT NULL
  AND status IS NOT NULL
  AND total_amount IS NOT NULL
  AND quantity IS NOT NULL
  AND subtotal IS NOT NULL
  AND rating IS NOT NULL
  AND comment IS NOT NULL;