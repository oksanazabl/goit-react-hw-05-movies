import { useSearchParams } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';

export const SearchBar = () => {
  const [, setSearchParams] = useSearchParams();
  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ q: e.target.elements.query.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type={'text'} name="query" />
        <button type="submit">SEARCH
        <GoSearch style={{ width: 25, height: 25 }} /></button>
      </label>
    </form>
  );
};
