/*
  # Insert sample data for book review platform

  1. Sample Books
    - Insert popular books across different genres
    - Include realistic cover images from Pexels
    - Add proper metadata like ISBN, publication dates, etc.

  2. Sample Reviews (will be added after user registration)
    - These will be created through the application interface
*/

-- Insert sample books
INSERT INTO books (title, author, description, cover_image, genre, publication_date, isbn, pages) VALUES
(
  'To Kill a Mockingbird',
  'Harper Lee',
  'A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice. Through the young eyes of Scout and Jem Finch, Harper Lee explores with rich humor and unswerving honesty the irrationality of adult attitudes toward race and class in the Deep South of the 1930s.',
  'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
  'Fiction',
  '1960-07-11',
  '978-0-06-112008-4',
  281
),
(
  '1984',
  'George Orwell',
  'Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell''s nightmare vision of a totalitarian, bureaucratic world.',
  'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
  'Science Fiction',
  '1949-06-08',
  '978-0-452-28423-4',
  328
),
(
  'Pride and Prejudice',
  'Jane Austen',
  'When Elizabeth Bennet meets the proud and prejudiced Mr. Darcy, sparks fly. But is it love or hate? One of the most cherished love stories in English literature, Jane Austen''s 1813 masterpiece has a lasting effect on everyone who reads it.',
  'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg',
  'Romance',
  '1813-01-28',
  '978-0-14-143951-8',
  432
),
(
  'The Great Gatsby',
  'F. Scott Fitzgerald',
  'Set in the summer of 1922, the novel follows Nick Carraway, a young bond salesman who moves next door to the mysterious millionaire Jay Gatsby. Gatsby is famous for his lavish parties, but his true desire is to reunite with his lost love, Daisy Buchanan.',
  'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
  'Fiction',
  '1925-04-10',
  '978-0-7432-7356-5',
  180
),
(
  'The Catcher in the Rye',
  'J.D. Salinger',
  'The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caulfield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days.',
  'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
  'Fiction',
  '1951-07-16',
  '978-0-316-76948-0',
  277
),
(
  'The Hobbit',
  'J.R.R. Tolkien',
  'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.',
  'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg',
  'Fantasy',
  '1937-09-21',
  '978-0-547-92822-7',
  366
),
(
  'Harry Potter and the Philosopher''s Stone',
  'J.K. Rowling',
  'Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle.',
  'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
  'Fantasy',
  '1997-06-26',
  '978-0-439-70818-8',
  223
),
(
  'The Lord of the Rings',
  'J.R.R. Tolkien',
  'One Ring to rule them all, One Ring to find them, One Ring to bring them all, and in the darkness bind them. In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power.',
  'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
  'Fantasy',
  '1954-07-29',
  '978-0-544-00341-5',
  1216
),
(
  'Dune',
  'Frank Herbert',
  'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the "spice" melange, a drug capable of extending life and enhancing consciousness.',
  'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg',
  'Science Fiction',
  '1965-08-01',
  '978-0-441-17271-9',
  688
),
(
  'The Handmaid''s Tale',
  'Margaret Atwood',
  'In the world of the near future, who will control women''s bodies? Offred is a Handmaid in the Republic of Gilead. She may leave the home of the Commander and his wife once a day to walk to food markets whose signs are now pictures instead of words.',
  'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
  'Science Fiction',
  '1985-08-17',
  '978-0-385-49081-8',
  311
),
(
  'Gone Girl',
  'Gillian Flynn',
  'On a warm summer morning in North Carthage, Missouri, it is Nick and Amy Dunne''s fifth wedding anniversary. Presents are being wrapped and reservations are being made when Nick''s clever and beautiful wife disappears from their rented McMansion on the Mississippi River.',
  'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
  'Mystery',
  '2012-06-05',
  '978-0-307-58836-4',
  419
),
(
  'The Girl with the Dragon Tattoo',
  'Stieg Larsson',
  'Forty years ago, Harriet Vanger disappeared from a family gathering on the island owned by the powerful Vanger clan. Her body was never found, yet her uncle is convinced it was murder - and that the killer is a member of his own tightly knit but dysfunctional family.',
  'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg',
  'Mystery',
  '2005-08-01',
  '978-0-307-45454-8',
  672
);