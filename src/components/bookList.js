import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { apiData } from '../redux/books/booksSlice';
import BookItem from './bookItem';

function List() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiData());
  }, []);
  const books = useSelector((store) => store.books);
  return (
    <>
      { books.books.map((book) => (<BookItem key={book.item_id} book={book} />)) }
    </>
  );
}

export default List;
