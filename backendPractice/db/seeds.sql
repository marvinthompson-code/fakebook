-- \c fakebook_db;

INSERT INTO users
    (id, full_name, username, email, profile_picture, bio) 
VALUES 
    ('001', 'test seed user', 'testSeedUser', 'test@testseed.test', 'PROFILEPICURL', 'This is a test bio'),
    ('002', 'test seed user 2', 'testSeedUser2', 'test2@testseed.test', 'PROFILEPICURL', 'This is a test bio'),
    ('003', 'test seed user 3', 'testSeedUser3', 'test3@testseed.test', 'PROFILEPICURL', 'This is a test bio');

INSERT INTO posts
    (image_url, owner_id, original_author, content)
VALUES
    ('https://www.therevolverclub.com/cdn/shop/articles/best-budget-dj-turntables-under-300_1400x1050_f22c05bf-ff11-448b-99e1-843ed6a0ec85.jpg?v=1633610291&width=1400', '001', '001', 'Check out my new Turntables!'),
    ('https://media.istockphoto.com/id/1461816749/photo/a-crowd-of-people-with-raised-arms-during-a-music-concert-with-an-amazing-light-show-black.jpg?s=612x612&w=0&k=20&c=-hdWCLDP5AI9A3mjq3JPMPKhXxJ2P1iItPDFktQHxX8=', '002', '002', 'That last concert was so much fun'),
     ('https://media.istockphoto.com/id/1461816749/photo/a-crowd-of-people-with-raised-arms-during-a-music-concert-with-an-amazing-light-show-black.jpg?s=612x612&w=0&k=20&c=-hdWCLDP5AI9A3mjq3JPMPKhXxJ2P1iItPDFktQHxX8=', '003', '003', 'That last concert was so much fun');


