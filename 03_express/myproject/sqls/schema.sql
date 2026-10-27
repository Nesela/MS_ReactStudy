use test;

DROP TABLE IF EXISTS board;
DROP TABLE IF EXISTS user;

CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT ,
    name VARCHAR(100) NOT NULL,
    addr VARCHAR(2000) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'user'
);

CREATE TABLE board (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    user_id INT NOT NULL,

    FOREIGN KEY (user_id) REFERENCES user(id)
);

-- 안씀
-- test insert
INSERT INTO user (name, addr)
VALUES ('hong-gd', 'seoul'),
        ('kim-sd', 'suwon'),
        ('lee-ss', 'incheon');

        INSERT INTO board (title, content, user_id)
        VALUES ('첫번째 글', '안녕하세요', 1),
                ('두번째 글', 'node.js 공부중입니다.', 2),
                ('웹앱 만들기', 'express 재밌네요.', 1);

-- tset select
SELECT * FROM user;
SELECT * FROM board;

-- test dummy insert procedure
DELIMITER $$

CREATE PROCEDURE insert_dummy_boards(IN count INT)
BEGIN
    DECLARE i INT DEFAULT 1;

    WHILE i <= count DO
        INSERT INTO board (title, content, user_id)
        VALUES (CONCAT('더미 게시글 ', i), CONCAT('더미 게시글 내용 ', i), FLOOR(1 + RAND() * 3));

        SET i = i + 1;
    END WHILE;
END;
$$

DELIMITER ;

CALL insert_dummy_boards(200);

SELECT COUNT(*) FROM board;