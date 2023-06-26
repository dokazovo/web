import {Link} from "react-router-dom";
import {MedicationConstraints, MedicationScore} from "../Model";

function MedicationPreview({medication}) {

  function score(score) {
    if (score === MedicationScore.Undefined) {
      return ''
    } else if (score === MedicationScore.Low) {
      return 'border-danger'
    } else if (score === MedicationScore.Medium) {
      return 'border-warning'
    } else if (score === MedicationScore.High) {
      return 'border-success'
    }
  }

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

  return (
      <Link to={`/medications/${medication.id}`} className="text-decoration-none">
        <div className={`card ${score(medication.score)} mb-2`}>
          <div className="card-body">
            <h5 className="card-title">{medication.tradeName}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {medication.substance?.activeIngredients?.map(ai => ai.name).join(', ')}
            </h6>
            <div className="row">
              <div className="col-6">
                <p className="card-text">Відпуск {constraints(medication.constraints)}</p>
              </div>
              <div className="col-6">Від {medication.price} грн</div>
            </div>
          </div>
        </div>
      </Link>
  )
}

export default MedicationPreview;