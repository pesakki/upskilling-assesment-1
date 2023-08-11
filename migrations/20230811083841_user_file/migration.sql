-- This is an empty migration.

 INSERT INTO assesment2.user (username, email, password, first_name, last_name, address, phone_number,street_address,city,state,postal_code,country)
SELECT username, email, password, first_name, last_name, address, phone_number,street_address,city,state,postal_code,country
FROM ecommerce_products
WHERE username IS NOT NULL
  AND email IS NOT NULL
  AND password IS NOT NULL
  AND first_name IS NOT NULL
  AND last_name IS NOT NULL
  AND address IS NOT NULL
  AND phone_number IS NOT NULL
  AND street_address IS NOT NULL
  AND city IS NOT NULL
  AND state IS NOT NULL
  AND postal_code IS NOT NULL
  AND country IS NOT NULL;