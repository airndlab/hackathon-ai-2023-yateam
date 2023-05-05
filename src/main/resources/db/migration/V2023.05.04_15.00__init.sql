-- Миграция для создания таблицы Category:
CREATE TABLE IF NOT EXISTS category
(
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    description TEXT
);
-- Миграция для создания таблицы User:
CREATE TABLE IF NOT EXISTS "user"
(
    id       SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
-- Миграция для создания таблицы Practice:
CREATE TABLE IF NOT EXISTS practice
(
    id           SERIAL PRIMARY KEY,
    name         VARCHAR(255) NOT NULL,
    description  TEXT,
    link         TEXT,
    category_id  INTEGER      NOT NULL,
    author       VARCHAR(255) NOT NULL,
    created_date TIMESTAMP    NOT NULL,
    CONSTRAINT fk_practice_category
        FOREIGN KEY (category_id)
            REFERENCES category (id)
            ON DELETE CASCADE
);
-- Миграция для создания таблицы Vote:
CREATE TABLE IF NOT EXISTS vote
(
    id          SERIAL PRIMARY KEY,
    user_id     INTEGER NOT NULL,
    practice_id INTEGER NOT NULL,
    rating      INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    CONSTRAINT fk_vote_user
        FOREIGN KEY (user_id)
            REFERENCES "user" (id)
            ON DELETE CASCADE,
    CONSTRAINT fk_vote_practice
        FOREIGN KEY (practice_id)
            REFERENCES practice (id)
            ON DELETE CASCADE
);
-- Миграция для создания таблицы Comment:
CREATE TABLE IF NOT EXISTS comment
(
    id           SERIAL PRIMARY KEY,
    user_id      INTEGER   NOT NULL,
    practice_id  INTEGER   NOT NULL,
    text         TEXT      NOT NULL,
    created_date TIMESTAMP NOT NULL,
    CONSTRAINT fk_comment_user
        FOREIGN KEY (user_id)
            REFERENCES "user" (id)
            ON DELETE CASCADE,
    CONSTRAINT fk_comment_practice
        FOREIGN KEY (practice_id)
            REFERENCES practice (id)
            ON DELETE CASCADE
);