import Search from "../components/Search";

function Home() {
  return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Пошук</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Search/>
          </div>
        </div>
      </div>
  );
}

export default Home;