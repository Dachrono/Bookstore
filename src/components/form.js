import '../style/form.css';
import { useDispatch } from 'react-redux';
import { apiPost } from '../redux/books/booksSlice';

function Form() {
  const dispatch = useDispatch();
  const category = 'Action';

  return (
    <>
      <form className="form">
        <h1 id="name">ADD NEW BOOK</h1>
        <div className="content">
          <input type="text" id="title" placeholder="Book Title" required />
          <input type="text" id="author" placeholder="Author" required />
          <button
            type="button"
            onClick={() => {
              dispatch(apiPost(
                {
                  item_id: Date.now().toString(),
                  title: document.getElementById('title').value,
                  author: document.getElementById('author').value,
                  category,
                },
              ));
              document.getElementsByClassName('form')[0].reset();
            }}
          >
            ADD BOOK
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
