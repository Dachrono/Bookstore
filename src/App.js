import { Routes, Route } from 'react-router-dom';
import Books from './routes/bookPage';
import Categories from './routes/categories';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
