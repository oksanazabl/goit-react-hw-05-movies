import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieReviews } from 'services/api';

export const Reviews = () => {
  const { moviesId } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [, setIsLoading] = useState(true);

  useEffect(() => {
    if (!moviesId) return;
    const fetchMovie = async () => {
       
      try {
        const data = await fetchMovieReviews(moviesId);

        setMovieData(data);
      } catch (error) {
         toast.error('There is something wrong in your action');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [moviesId]);
 
  if (!movieData) {
    return;
  }
  return movieData.length > 0 ? (
    <section>
      <div>
        <ul>
          {movieData?.map(review => (
            <li key={review.id}>
              <div>{`Author
: ${review.author}`}</div>
              <br />
              <div>{`${review.content}`}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  ) : (
    <h4>There is not any reviews for now</h4>
  );
};
