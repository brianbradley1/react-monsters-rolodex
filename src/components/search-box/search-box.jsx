import "./search-box.styles.css";

function SearchBox({ onChangeHandler, className, placeholder }) {
  return (
    <div>
      <input
        className={`search-box ${className} `}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default SearchBox;
