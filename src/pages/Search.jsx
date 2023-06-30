import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import MedicationPreview from "../components/MedicationPreview";
import ApiService from "../ApiService";
import SearchForm from "../components/SearchForm";

function Search() {
  const {query} = useParams()
  const [isLoaded, setIsLoaded] = useState(false)
  const [medications, setMedications] = useState([])

  useEffect(() => {
    ApiService
        .searchMedications(query)
        .then(data => {
          setIsLoaded(true)
          setMedications(data)
        })
  }, [query])

  return (
      <div className="container">
        <div className="row">
          <div className="col">
            <SearchForm value={query} />
            <h6 className="text-body-secondary">Результати за запитом <strong>{query}</strong>:</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {!isLoaded &&
              <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }
            {medications.map(medication=> <MedicationPreview medication={medication} key={medication.id} />)}
          </div>
        </div>
      </div>
  );
}

export default Search;