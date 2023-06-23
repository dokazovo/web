import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import MedicationPreview from "../components/MedicationPreview";
import ApiService from "../ApiService";

function SearchResult() {
  const {query} = useParams()
  const [medications, setMedications] = useState([])

  useEffect(() => {
    const data = ApiService.getMedications()
    setMedications(data)
  }, [query])

  return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h6 className="text-body-secondary">Результати за запитом <strong>{query}</strong>:</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {medications.map(medication=> <MedicationPreview medication={medication} key={medication.id} />)}
          </div>
        </div>
      </div>
  );
}

export default SearchResult;