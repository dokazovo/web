import {useState} from "react";
import {useNavigate} from "react-router-dom";

function SearchForm(props) {
  const navigate = useNavigate()
  const [query, setQuery] = useState(props.value ?? '')

  function inputChangeHandler(e) {
    setQuery(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()
    if (query) navigate(`/search/${query}`)
  }

  return (
      <form role="search">
        <div className="container mt-2">
          <div className="row">
            <div className="col-sm-9 mb-2">
              <input className="form-control" type="search" placeholder="Назва препарату" aria-label="SearchForm"
                     value={query} onChange={inputChangeHandler} />
            </div>
            <div className="col-sm-3 d-grid gap-2 mb-2">
              <button className="btn btn-success" type="submit" onClick={submitHandler}>Знайти</button>
            </div>
          </div>
        </div>
      </form>
  );
}

export default SearchForm;