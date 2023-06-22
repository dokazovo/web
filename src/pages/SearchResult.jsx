import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import MedicationPreview from "../components/MedicationPreview";

function SearchResult() {
  const {query} = useParams()
  const [medications, setMedications] = useState([])

  useEffect(() => {
    console.log('Fetching data for ' + query)
    const data = [
        {id: 1, tradeName: 'Paracetamol', price: 1180, activeIngredient: 'Acetaminophen', score: 3, isOverTheCounter: true},
        {id: 2, tradeName: 'Foobar', price: 546, activeIngredient: 'Foobaba', score: 1, isOverTheCounter: false},
        {id: 3, tradeName: 'Fuflomizin', price: 897, activeIngredient: 'Fuflotrava', score: 0, isOverTheCounter: false}
      ]
    setMedications(data)
  }, [query])

  return (
      <div className="container">
        <div className="row">
          <h6 className="text-body-secondary">Результати за пошуковим запитом {query}:</h6>
        </div>
        {medications.map(medication=> <MedicationPreview medication={medication} key={medication.id} />)}
      </div>
  );
}

export default SearchResult;