import { useSearchParams } from 'react-router-dom';
import Select from '../ui/Select';

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSortBy = searchParams.get('sortBy') || '';

  function handleChange(e) {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      value={currentSortBy}
      onChange={handleChange}
      type="white"
    ></Select>
  );
}

export default SortBy;
