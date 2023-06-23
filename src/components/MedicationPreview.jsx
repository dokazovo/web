import {Link} from "react-router-dom";

function MedicationPreview({medication}) {

  function score(score) {
    if (score === 0) {
      return ''
    } else if (score === 1) {
      return 'border-danger'
    } else if (score === 2) {
      return 'border-warning'
    } else if (score === 3) {
      return 'border-success'
    }
  }

  function isOverTheCounter(isOverTheCounter) {
    return medication.isOverTheCounter ? 'За рецептом' : 'Без рецепта'
  }

  return (
      <Link to={`/medications/${medication.id}`} className="text-decoration-none">
        <div className={`card ${score(medication.score)} mb-2`}>
          <div className="card-body">
            <h5 className="card-title">{medication.tradeName}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {medication.activeIngredients?.map(ai => ai.name).join(', ')}
            </h6>
            <div className="row">
              <div className="col-6">
                <p className="card-text">{isOverTheCounter(medication.isOverTheCounter)}</p>
              </div>
              <div className="col-6">Від {medication.price} грн</div>
            </div>
          </div>
        </div>
      </Link>
  )
}

export default MedicationPreview;