import {useNavigate} from "react-router-dom"
function Notfound() {
  let navigate = useNavigate()
  return (
    <div>
      Not found
      <div onClick={() => navigate('/')}>redirect</div>
    </div>
  );
}

export default Notfound;
