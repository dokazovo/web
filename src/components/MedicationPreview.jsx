import {Link} from "react-router-dom";

function MedicationPreview({medication}) {

  function score(score) {
    switch (score) {
      case 0:
        return ''
      case 1:
        return 'border-danger'
      case 2:
        return 'border-warning'
      case 3:
        return 'border-success'
      default:
        throw new Error('Score is out of range')
    }
  }

  function isOverTheCounter(isOverTheCounter) {
    return medication.isOverTheCounter ? 'За рецептом' : 'Без рецепта'
  }

  return (
      <Link to={`/medications/${medication.id}`} className="text-decoration-none">
        <div className={`card ${score(medication.score)} mb-2`}>
          <div className="card-body">
            <div className="row">
              <div className="col-8">
                <h5 className="card-title">{medication.tradeName}</h5>
              </div>
              <div className="col-4">{medication.price} грн</div>
            </div>
            <h6 className="card-subtitle mb-2 text-body-secondary">{medication.activeIngredient}</h6>
            <p className="card-text">{isOverTheCounter(medication.isOverTheCounter)}</p>
          </div>
        </div>
      </Link>
  )
}

export default MedicationPreview;