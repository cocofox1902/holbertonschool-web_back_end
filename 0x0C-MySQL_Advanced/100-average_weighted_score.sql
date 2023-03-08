DELIMITER //

CREATE PROCEDURE ComputeAverageWeightedScoreForUser(IN user_id INT)
BEGIN
    DECLARE total_score FLOAT;
    DECLARE total_weight FLOAT;
    DECLARE avg_score FLOAT;
    
    SELECT SUM(score * weight) INTO total_score, SUM(weight) INTO total_weight
    FROM grades
    WHERE user_id = user_id;
    
    IF total_weight > 0 THEN
        SET avg_score = total_score / total_weight;
    ELSE
        SET avg_score = 0;
    END IF;
    
    INSERT INTO weighted_scores (user_id, average_score)
    VALUES (user_id, avg_score)
    ON DUPLICATE KEY UPDATE average_score = avg_score;
END //

DELIMITER ;
