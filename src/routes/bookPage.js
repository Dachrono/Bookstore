import List from '../components/bookList';
import Form from '../components/form';
import NavBar from '../components/navBar';

function Books() {
  return (
    <div>
      <NavBar />
      <h1>Books list</h1>
      <List />
      <Form />
    </div>
  );
}

export default Books;
