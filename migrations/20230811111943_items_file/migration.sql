-- This is an empty migration.

insert into assesment2.mobile (name,description,price,image_url,category) select name,description,price,image_url,category from ecommerce_products
where name is not null
and description is not null
and price is not null
and image_url is not null
and category is not null;
