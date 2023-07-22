import '../style/bookPage.css';
import List from '../components/bookList';
import Form from '../components/form';
import NavBar from '../components/navBar';

function Books() {
  return (
    <>
      <NavBar />
      <div className="bookList">
        <List />
      </div>
      <div className="Line" />
      <Form />
    </>
  );
}

export default Books;
