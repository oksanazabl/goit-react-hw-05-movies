import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/movies/Movies';
import { Layout } from './Layout/Layout';
import { MoviesDetails } from '../pages/MovieDetails/MovieDetails';
import { Cast } from '../components/Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Container } from './Container/Container';
export const App = () => {
  return (
    <>
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      </Container>
    </>
  );
};
