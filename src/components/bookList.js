import BookItem from './bookItem';

const books = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Science fiction',
    comments: 'Comments 1',
    completed: false,
  },
  {
    id: 2,
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    category: 'Fantasía',
    comments: 'Comments 1',
    completed: false,
  },
  {
    id: 3,
    title: 'El viejo y el mar',
    author: 'Ernest Hemingway',
    category: 'Novela',
    comments: 'Comments 1',
    completed: false,
  },
  {
    id: 4,
    title: 'El caballero de la armadura oxidada',
    author: 'Robert Fisher',
    category: 'Novela',
    comments: 'Comments 1',
    completed: false,
  },
];

function List() {
  return (
    <>
      { books.map((book) => (<BookItem key={book.id} book={book} />)) }
    </>
  );
}

export default List;
