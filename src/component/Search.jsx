import { MdSearch } from "react-icons/md";

const Search = ({ handelSearchEvent }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="30" />
      <input
        onChange={(event) => handelSearchEvent(event.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};

export default Search;
