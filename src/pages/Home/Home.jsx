import { useState, useEffect } from 'react';
import { fetchMoviesTrending } from 'services/api';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './Home.module.css';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await fetchMoviesTrending();
        setMovies(data.results);
      } catch (error) {
        toast.error('There is something wrong in your action');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, []);

  return (
    <section>
      <h1 className={css.homeTitle}>Tranding today</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading &&  <Loader />}
    </section>
  );
};
