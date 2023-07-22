import '../style/buttons.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { apiErase } from '../redux/books/booksSlice';

function ActionButtons({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="buttonCont">
      <button type="button">Comments</button>
      |
      <button type="button" className="btnAcc" onClick={() => dispatch(apiErase(book.item_id))}>Remove</button>
      |
      <button type="button" className="btnAcc">Edit</button>
    </div>
  );
}

ActionButtons.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ActionButtons;
