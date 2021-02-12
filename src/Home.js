import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import "./Home.css";
import UserContext from "./UserContext";

function Home() {
    const { currentUser } = useContext(UserContext);

    return (
        <div className="Home">
            <div className="container text-center">
                <h1 className="mb-4 font-weight-bold">QR Menu</h1>
                <p className="lead">Your restaurant menu online</p>
                {currentUser ? (
                    <h2>Welcome Back {currentUser}!</h2>
                ) : (
                        <Link className="btn btn-primary font-weight-bold" to="/login">
                            Log in
                        </Link>
                    )}
            </div>
        </div>
    );
}

export default Home;
