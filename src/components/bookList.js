import { useSelector } from 'react-redux';
import BookItem from './bookItem';

function List() {
  const books = useSelector((store) => store.books);
  return (
    <>
      { books.books.map((book) => (<BookItem key={book.item_id} book={book} />)) }
    </>
  );
}

export default List;
