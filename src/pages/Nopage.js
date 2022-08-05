import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="text-center py-5">
    <h1>Error 404</h1>
    <Link to="/">GO TO HOME</Link>
    </div>
  );
}

export default NoPage;
