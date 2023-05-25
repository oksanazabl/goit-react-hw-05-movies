import { fetchMovieByQuery } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get('q');

  useEffect(() => {
    if (!searchQuery) return;

    const fetchMovie = async () => {
 
      setIsLoading(true);
      try {
        const data = await fetchMovieByQuery(searchQuery);

        setMovies(data.results);
      } catch (error) {
         toast.error('There is something wrong in your action');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [searchQuery]);

  return (
    <section>
      <div>
        <h1>SEARCH MOVIE</h1>
        <SearchBar />
        {movies.length > 0 && <MoviesList movies={movies} />}
      </div>
      {isLoading && <Loader/>}
    </section>
  );
};
