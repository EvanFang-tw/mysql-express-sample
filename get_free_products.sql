CREATE DEFINER=`root`@`%` PROCEDURE `get_free_products`(min_price INT)
BEGIN

  select
    id, 
    name, 
    remark, 
    price,
    if(price < min_price, 'Yes', 'No') as is_free
  from 
    products;

END