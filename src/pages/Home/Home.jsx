import { useState, useEffect } from 'react';
import { fetchMoviesTrending } from 'services/api';
import { toast } from 'react-toastify';
import { Circles } from 'react-loader-spinner';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './Home.module.css';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      setError('');
      try {
        const data = await fetchMoviesTrending();
        setMovies(data.results);
      } catch (error) {
        setError('There is something wrong in your action');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, []);
  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  return (
    <section>
      <h1 className={css.homeTitle}>Tranding today</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
    </section>
  );
};
