import SearchForm from "../components/SearchForm";

function Home() {
  return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="px-4 py-5 my-5 text-center">
              <h1 className="display-5 fw-bold text-body-emphasis">Пошук ліків</h1>
              <div className="col-lg-6 mx-auto">
                <h6 className="mb-4">Оцінка рівня дослідженості ліків на основі джерел доказової медицини.</h6>
              </div>
              <div className="justify-content-sm-center">
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
          </div>
        </div>
      </div>
  );
}

export default Home;