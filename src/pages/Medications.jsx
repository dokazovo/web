import {useEffect, useState} from "react";
import ApiService from "../ApiService";
import {Link} from "react-router-dom";

function Medications() {
  const [medications, setMedications] = useState([])

  useEffect(() => {
    ApiService
        .getMedications()
        .then(data => setMedications(data))

  }, [])

  return (
      <div className="container">
        {medications.map(medication =>
            <p>
              <Link to={`/medications/${medication.id}`} key={medication.id} style={{ textDecoration: 'none' }}>
                {medication.tradeName}
              </Link>
            </p>
        )}
      </div>
  );
}

export default Medications;