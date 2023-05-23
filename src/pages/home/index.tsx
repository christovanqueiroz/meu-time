import {useForm} from "../../store/useForm";
import {Link} from "react-router-dom";
import {footballApi} from "../../services/football";

export default function Home() {
  const { apiKey, setApiKey }  = useForm()

  const getTeams = () => {
    console.log(footballApi.getTeams("33"))
  }

  return (
    <div className="h-full w-full">
      <input placeholder="Api key" value={apiKey} onChange={(event) => setApiKey(event.target.value)}/>

      <button onClick={getTeams}>
        Get countries
      </button>

      <div className="pt-20">
        <Link to="/countries" className="border rounded border-amber-700 p-2 m-2">
          Avançar para countries
        </Link>
      </div>
    </div>
  )
}