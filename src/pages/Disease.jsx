import {useParams} from "react-router-dom";

function Disease() {
  const {id} = useParams()

  return (
      <h1 className="text-center">Сторінка {id} у розробці 👷</h1>
  );
}

export default Disease;