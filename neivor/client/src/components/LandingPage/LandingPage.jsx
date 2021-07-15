import { Link } from "react-router-dom";
import "../LandingPage/LandingPage.css"

function LandingPage () {
    return (
        <div className="body">
            <div className="landing">
                <h2> Welcome </h2>
            </div>
            <div className="btn">
                <Link to="/home">
                    <button type="submit"> Enter </button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;