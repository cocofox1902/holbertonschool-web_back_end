SELECT band_name, 
       (YEAR(split)) - (YEAR(formed)) AS lifespand
FROM metal_bands 
WHERE style LIKE '%Glam Rock%'
ORDER BY lifespand DESC;
