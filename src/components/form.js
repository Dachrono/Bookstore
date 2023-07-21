import { useDispatch, useSelector } from 'react-redux';
import { apiPost } from '../redux/books/booksSlice';

function Form() {
  const dispatch = useDispatch();
  const itemId = useSelector((state) => state.books.books.length + 1);
  const category = 'Por defectoXD';

  return (
    <>
      <form className="form">
        <h1 id="name">ADD NEW BOOK</h1>
        <input type="text" id="title" placeholder="Book Title" />
        <input type="text" id="author" placeholder="Author" />
        <button
          type="button"
          onClick={() => dispatch(apiPost(
            {
              item_id: `item${itemId}`,
              title: document.getElementById('title').value,
              author: document.getElementById('author').value,
              category,
            },
          ))}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
