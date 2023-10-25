CREATE DATABASE IF NOT EXISTS survey_db;

USE survey_db;

CREATE TABLE IF NOT EXISTS survey_mvp (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    vote VARCHAR(255) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    --created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO survey_mvp (email, vote)
VALUES 
    ('usr1@ex.com', 'MEAN Stack'),
    ('usr2@ex.com', 'MERN Stack'),
    ('usr3@ex.com', 'LAMP Stack'),
    ('usr4@ex.com', 'Java Spring Stack'),
    ('usr5@ex.com', 'Ruby on Rails'),
    ('usr6@ex.com', 'Django Stack'),
    ('usr7@ex.com', 'MEAN Stack'),
    ('usr8@ex.com', 'MERN Stack'),
    ('usr9@ex.com', 'LAMP Stack'),
    ('usr10@ex.com', 'Java Spring Stack');
    ('usr11@ex.com', 'MERN Stack');

    SELECT vote, COUNT(vote) as vote_count
    FROM survey_mvp
    GROUP BY vote;

    --errores posibles
    -- duplicacion
    ERROR 1062 (23000): Duplicate entry 'usr11@ex.com' for key 'survey_mvp.email'
