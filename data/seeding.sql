BEGIN;

INSERT INTO instrument ("instrument_name")VALUES
('Guitare'),
('Basse'),
('Piano'),
('Flûte'),
('Synthétiseur'),
('Triangle');

INSERT INTO music_style ("music_name") VALUES
('Rock'),
('Jazz'),
('Electro'),
('Alternative'),
('Hip-Hop'),
('Metal'),
('Country'),
('Gospel'),
('Salsa'),
('Indie');

INSERT INTO level ("level_name") VALUES
('Débutant'),
('Intermédiaire'),
('Avancé');

INSERT INTO member ("firstname", "lastname", "email", "birthdate" , "user_password", "user_description", "city_code") VALUES
('Cyril', 'Chappellier', 'cyril-c@gmail.com','1990-01-09' , '$2b$10$79fDqa0fB.yd2H0eB8c5b./Mr.IuefSR9nvKFP0PP0tFkGJl4Rs6i', 'Je recherche un groupe de metal pour faire de la guitare éléctrique', '75056'),
('Jeremy', 'Marques', 'jeremy-m@gmail.com','1989-12-12' , '$2b$10$79fDqa0fB.yd2H0eB8c5b./Mr.IuefSR9nvKFP0PP0tFkGJl4Rs6i', 'Guitariste confirmé, je recherche un batteur et un bassiste, pour monter un groupe de musique alternative', '45234'),
('Arnaud', 'Ferreira', 'arnaud-m@gmail.com','1992-08-31' , '$2b$10$79fDqa0fB.yd2H0eB8c5b./Mr.IuefSR9nvKFP0PP0tFkGJl4Rs6i', 'Pianiste amateur, je cherche un groupe de salsa', '77288'),
('Baptiste', 'Champbenoit', 'baptiste-c@gmail.com','1993-02-10' , '$2b$10$79fDqa0fB.yd2H0eB8c5b./Mr.IuefSR9nvKFP0PP0tFkGJl4Rs6i', 'Dj, je cherche des samples pour composition de musique electro', '33063'),
('Amaury', 'Delaroque', 'amaury-d@gmail.com','1986-02-10' , '$2b$10$79fDqa0fB.yd2H0eB8c5b./Mr.IuefSR9nvKFP0PP0tFkGJl4Rs6i', 'Dj et guitariste, je cherche des samples pour composition de musique hip-hop', '31555');

INSERT INTO message ("content", "status", "sender_id", "reicever_id") VALUES
('Hello', false, 1, 2),
('Good', true, 2, 3),
('Comment ça va la famille', false, 3, 2),
('Yo yo yo', true, 3, 1),
('Whatsup', false, 4, 2),
('Sampler un son', true, 3, 2);

INSERT INTO invitation ("status", "request_user_id", "response_user_id") VALUES
(2, 3, 2),
(1, 1, 2),
(0, 4, 1);

INSERT INTO user_has_instrument_level ("instrument_id", "level_id", "member_id") VALUES
(1, 3, 1),
(3, 1, 2),
(1, 1, 3),
(1, 1, 4),
(1, 1, 5);

INSERT INTO appreciate_music_style ("member_id", "music_style_id") VALUES
(1, 1),
(2, 4),
(3, 9),
(4, 3),
(5, 5);

COMMIT;