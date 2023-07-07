import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ApiService from "../ApiService";

function MedicationsIndex() {
  const {id} = useParams()
  const [medications, setMedications] = useState([])

  useEffect(() => {
    ApiService
        .getMedications(id)
        .then(data => setMedications(data))

  }, [id])
  return (
      <div className="container">
        {
          medications.map(m =>
              <div>
                <Link className="p-2" to={`/medications/${m.id}`} key={m.id} style={{ textDecoration: 'none' }}>
                  {m.tradeName}
                </Link>
              </div>
          )
        }
      </div>
  );
}

export default MedicationsIndex;