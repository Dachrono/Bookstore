import '../style/bookItem.css';
import PropTypes from 'prop-types';
import ActionButtons from './buttons';

function BookItem({ book }) {
  return (
    <>
      <div className="book-preview" key={book.item_id}>
        <div className="book-cover">
          <p className="cat">{book.category}</p>
          <h2 className="tit">{book.title}</h2>
          <p className="aut">{book.author}</p>
          <div className="btns">
            <ActionButtons book={book} />
          </div>
        </div>
        <div className="porcent">
          <div className="Oval-2" />
          <div className="msj">
            <div className="number">64%</div>
            <div className="txt">completed</div>
          </div>
        </div>
        <div className="Line-2"> </div>
        <div className="progress">
          <p className="curr">CURRENT CHAPTER</p>
          <p className="chap">Chapter 17</p>
          <button type="button" className="up">UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
