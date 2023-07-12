import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import MovieDetail from './pages/movieDetail/movieDetail';
import Search from './components/search/search';

function App() {

  return (
    <div className="App">
      <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<MovieDetail />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/:searchInput" element={<Search />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
