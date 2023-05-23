import {useForm} from "../../store/useForm";
import {Link} from "react-router-dom";

export default function Countries () {
  const apiKey = useForm(state => state.apiKey)
  return (
    <div>
      <h1>Countries</h1>
      <h2>sua api key é: {apiKey}</h2>

      <Link to="/">
        Voltar
      </Link>
    </div>
  )
}