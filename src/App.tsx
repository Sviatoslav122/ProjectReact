import React from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import MoviesPage from './containers/MoviesPage';
import MovieDetails from './components/MovieDetails';

const App: React.FC = () => {
  return (
      <Router>
        <div className="App">

          <Route  path="/" element={<MoviesPage/>} />
          <Route path="/movies/:id" element={<MovieDetails/>} />

        </div>
      </Router>
  );
};

export default App;
