import { useNavigate } from 'react-router-dom';
import { logUserOut } from '../apollo';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome!</h1>
      <button onClick={() => logUserOut(navigate)}>Log out now!</button>
    </div>
  );
}
