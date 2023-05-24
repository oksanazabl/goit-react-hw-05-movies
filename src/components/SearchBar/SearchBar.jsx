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
        <GoSearch style={{ width: 12, height: 12, marginLeft:5 }} /></button>
      </label>
    </form>
  );
};
