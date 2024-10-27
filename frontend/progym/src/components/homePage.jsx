import React from "react";
import NavBar from "./navBar";
import "./homePage.css"
import Ecard from "./exerciseInput";
import whistory from "../data/sample.jsx"


function homePage(){
   

    return (
        <div className="container">
            <div className="title">
                <h1>Hello user</h1>
                <div>
                    <h2>Today's workout</h2>
                    <div className="cards">
                        {whistory.map((exercise, index) => (
                            <Ecard key={index} name={exercise.name} weight={exercise.weight} reps={exercise.reps} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default homePage;