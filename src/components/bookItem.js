import PropTypes from 'prop-types';
import ActionButtons from './buttons';

function BookItem({ book }) {
  return (
    <div className="book-preview" key={book.item_id}>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.category}</p>
      <ActionButtons book={book} />
    </div>
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
