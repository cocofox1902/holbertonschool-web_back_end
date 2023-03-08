CREATE PROCEDURE ComputeAverageWeightedScoreForUsers
AS
BEGIN
    -- Create a temporary table to hold the weighted scores for all students
    CREATE TABLE #weighted_scores (
        user_id INT,
        weighted_score DECIMAL(5,2)
    )
    
    -- Insert the weighted scores for all students into the temporary table
    INSERT INTO #weighted_scores
    SELECT user_id, SUM(score * weight) / SUM(weight) AS weighted_score
    FROM scores
    GROUP BY user_id
    
    -- Update the average_weighted_score column in the users table with the computed values
    UPDATE users
    SET average_weighted_score = ws.weighted_score
    FROM #weighted_scores ws
    WHERE users.id = ws.user_id
    
    -- Drop the temporary table
    DROP TABLE #weighted_scores
END
