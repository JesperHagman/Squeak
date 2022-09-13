import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Errorcode: 404... page not found</h3>
      <p onClick={() => navigate(-1)}>Go back</p>
    </div>
  );
}
