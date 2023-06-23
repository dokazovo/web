import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Search() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function inputChangeHandler(e) {
    setQuery(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()
    navigate(`search-result/${query}`)
    setQuery('')
  }

  return (
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Назва препарату" aria-label="Search"
               value={query} onChange={inputChangeHandler}/>
        <button className="btn btn-outline-success" type="submit" onClick={submitHandler}>Знайти</button>
      </form>
  );
}

export default Search;