import {useEffect, useState} from "react";
import ApiService from "../ApiService";
import {Link, Outlet} from "react-router-dom";

function Medications() {
  const [index, setIndex] = useState([])

  useEffect(() => {
    ApiService
        .getMedicationsIndex()
        .then(data => setIndex(data))

  }, [])

  return (
      <div className="container">
        <h1 className="text-center">Препарати по алфавіту</h1>
        <div className="d-flex flex-wrap mb-2">
          {
            index.map(i =>
                <Link className="p-2" to={`/medications/index/${i.id}`} key={i.id} style={{ textDecoration: 'none' }}>
                  {i.id}
                </Link>
            )
          }
        </div>
        <Outlet />
      </div>
  );
}

export default Medications;