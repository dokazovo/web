import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import MedicationPreview from "../components/MedicationPreview";
import ApiService from "../ApiService";
import {MedicationConstraints, MedicationScore} from "../Model";

function Medication() {
  const {id} = useParams()
  const [medication, setMedication] = useState({})

  useEffect(() => {
    ApiService
        .getMedication(id)
        .then(data => setMedication(data))
  }, [id])

  function constraints(constraint) {
    if (constraint === MedicationConstraints.Undefined) {
      return ''
    } else if (constraint === MedicationConstraints.OverTheCounter) {
      return 'без рецепта'
    } else if (constraint === MedicationConstraints.Prescription) {
      return 'за рецептом'
    } else if (constraint === MedicationConstraints.DependsOnForm) {
      return 'залежить від форми'
    }
  }

  function scoreStyle(score) {
    if (score === MedicationScore.Undefined) {
      return ''
    } else if (score === MedicationScore.Low) {
      return 'text-bg-danger'
    } else if (score === MedicationScore.Medium) {
      return 'text-bg-warning'
    } else if (score === MedicationScore.High) {
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
    if (review.effect === -1) {
      return 'list-group-item-danger'
    } else if (review.effect === 0) {
      return ''
    } else if (review.effect === 1) {
      return 'list-group-item-success'
    }
  }

  return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mt-2">
            <div className="card">
              <div className={`card-header ${scoreStyle(medication.score)}`}>{scoreTitle(medication.score)}</div>
              <div className="card-body">
                <h5 className="card-title">{medication.tradeName}</h5>
                <p>Відпуск {constraints(medication.constraints)}</p>
                <p>Знайти на&nbsp;
                  <a href={`https://tabletki.ua/uk/search/${medication.tradeName}`} target="_blank" rel="noreferrer"
                     style={{ textDecoration: 'none' }}>
                    tabletki.ua
                  </a>
                </p>
                <p>МНН: <strong>{medication.inn}</strong></p>
                <p>Розпізнані інгридієнти
                  {medication.substance?.activeIngredients?.map(ai =>
                      <Link className="nav-link link-primary" to={`/ingredients/${ai.id}`} key={ai.id}>
                        {ai.genericName}
                      </Link>
                  )}
                </p>
                <p>Фармакологічна група
                  <Link className="nav-link link-primary" to={`/atc/${medication.pharmacologicalGroup}`}>
                    {medication.substance?.chemicalGroup?.pharmacologicalGroup?.name}
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
                    <Link className="nav-link link-primary" to={`/diseases/${indication.code}`} key={indication.code}>
                      {indication.name}
                    </Link>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-2">
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