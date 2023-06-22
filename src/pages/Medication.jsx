import {useParams} from "react-router-dom";

function Medication() {
  const {id} = useParams()

  return (
      <>
        {id}
      </>
  )
}

export default Medication