import SearchForm from "../components/SearchForm";
import {useNavigate} from "react-router-dom";

function Home() {
  const navigate = useNavigate()

  function submitHandler(query) {
    navigate(`search/${query}`)
  }

  return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center mt-4">Пошук ліків</h1>
            <h6 className="text-center">Оцінка рівня дослідженості ліків на основі джерел доказової медицини.</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <SearchForm onSubmit={submitHandler}/>
          </div>
        </div>
      </div>
  );
}

export default Home;