import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchMovieDetails } from 'services/api';
import css from './MovieDetails.module.css';
import { Loader } from 'components/Loader/Loader';
import noPoster from '../../images/no_poster.jpg';

export const MoviesDetails = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { moviesId } = useParams();
  const location = useLocation;
  const backLink = location?.state?.from ?? '/';

  useEffect(() => {
    if (!moviesId) return;
    const fetchMovie = async () => {
      try {
        const data = await fetchMovieDetails(moviesId);

        setMovieData(data);
      } catch (error) {
        toast.error('There is something wrong in your action');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [moviesId]);

  return (
    <section className={css.section}>
      {movieData && (
        <>
          <Link className={css.linkGoBack} to={backLink}>
            GO BACK
          </Link>
          <div className={css.movieCard}>
           
              <img
                className={css.imgMain}
                src={movieData.poster_path ?`https://image.tmdb.org/t/p/w200${movieData.poster_path}`:noPoster}
                alt="movie poster"
              />
           
            <div>
              <ul>
                <li className={css.cardListItem}>
                  <h1>{`${
                    movieData.original_title
                  }(${movieData.release_date?.slice(0, 4)})`}</h1>
                  <div>{`User score: ${
                    movieData.vote_average?.toFixed() * 10
                  }%`}</div>
                </li>
                <li className={css.cardListItem}>
                  <h2> Overview</h2>
                  <div>{movieData.overview}</div>
                </li>
                <li className={css.cardListItem}>
                  <h2> Genres</h2>
                  {movieData.genres?.map(g => g.name).join(', ')}
                </li>
              </ul>
            </div>
          </div>
          <h3>Additional information</h3>
          <ul>
            <li className={css.navLinks}>
              <Link to="cast" state={{ from: backLink }}>
                Cast
              </Link>
            </li>
            <li className={css.navLinks}>
              <Link to="reviews" state={{ from: backLink }}>
                Reviews
              </Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
      {isLoading && <Loader/>}
    </section>
  );
};
