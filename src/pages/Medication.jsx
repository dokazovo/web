import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import MedicationPreview from "../components/MedicationPreview";
import ApiService from "../ApiService";

function Medication() {
  const {id} = useParams()
  const [medication, setMedication] = useState({})

  useEffect(() => {
    const nid = parseInt(id)
    ApiService
        .getMedication(nid)
        .then(data => setMedication(data))
  }, [id])

  function isOverTheCounter(isOverTheCounter) {
    return isOverTheCounter ? 'За рецептом' : 'Без рецепта'
  }

  function scoreStyle(score) {
    if (score === 0) {
      return ''
    } else if (score === 1) {
      return 'text-bg-danger'
    } else if (score === 2) {
      return 'text-bg-warning'
    } else if (score === 3) {
      return 'text-bg-success'
    }
  }

  function scoreTitle(score) {
    if (score === 0) {
      return 'Не розрахований рівень дослідженості'
    } else if (score === 1) {
      return 'Низький рівень дослідженості'
    } else if (score === 2) {
      return 'Задовільний рівень дослідженості'
    } else if (score === 3) {
      return 'Високий рівень дослідженості'
    }
  }

  function reviewStyle(review) {
    if (review.result === -1) {
      return 'list-group-item-danger'
    } else if (review.result === 0) {
      return ''
    } else if (review.result === 1) {
      return 'list-group-item-success'
    }
  }

  return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-2">
            <div className="card">
              <div className={`card-header ${scoreStyle(medication.score)}`}>{scoreTitle(medication.score)}</div>
              <div className="card-body">
                <h5 className="card-title">{medication.tradeName}</h5>
                <p>{isOverTheCounter(medication.isOverTheCounter)}</p>
                <p>Від {medication.price} грн</p>
                <p>Активна речовина
                  {medication.substance?.activeIngredients?.map(ai =>
                      <Link className="nav-link link-primary" to={`/ingredients/${ai.id}`} key={ai.id}>
                        {ai.name}
                      </Link>
                  )}
                </p>
                <p>Фармакологічна група
                  <Link className="nav-link link-primary" to={`/atc/${medication.pharmacologicalGroup}`}>
                    {medication.substance?.pharmacologicalGroup}
                  </Link>
                </p>
              </div>
            </div>
            <div className="card mt-2">
              <div className="card-body">
                <h5 className="card-title">Звіт Dokazovo</h5>
                <ul className="list-group">
                  {medication.reviews?.map((review, index) =>
                      <li className={`list-group-item ${reviewStyle(review)}`} key={index}>{review.description}</li>
                  )}
                </ul>
              </div>
            </div>
            <div className="card mt-2">
              <div className="card-body">
                <h5 className="card-title">Показання до застосування</h5>
                {medication.substance?.indications?.map(indication =>
                    <Link className="nav-link link-primary" to={`/diseases/${indication.id}`} key={indication.id}>
                      {indication.title}
                    </Link>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Аналогічні препарати</h5>
                {medication.alternatives?.map(alt => <MedicationPreview medication={alt} key={alt.id}/>)}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Medication;