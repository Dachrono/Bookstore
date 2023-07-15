import PropTypes from 'prop-types';
import ActionButtons from './buttons';

function BookItem({ book }) {
  return (
    <div className="book-preview" key={book.id}>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.category}</p>
      <p>{book.comments}</p>
      <ActionButtons />
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
