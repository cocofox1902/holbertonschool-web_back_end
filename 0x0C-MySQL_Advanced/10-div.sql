-- Write a SQL script that creates a function SafeDiv

USE <database_name>;

CREATE FUNCTION SafeDiv (a INT, b INT) RETURNS FLOAT
BEGIN
  IF (b = 0) THEN
    RETURN 0;
  ELSE
    RETURN a / b;
  END IF;
END;