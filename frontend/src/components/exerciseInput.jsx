import React, { useState } from "react";
import "./exerciseInput.css"

const Ecard = (props) => {
  const [weight, setWeight] = useState(props.weight);
  const [reps, setReps] = useState(props.reps);
  const[workoutName,setName]=useState(props.name)
  console.log(props.name)

  const increaseWeight = () => setWeight(weight + 1);
  const decreaseWeight = () => setWeight(weight > 0 ? weight - 1 : 0);

  const increaseReps = () => setReps(reps + 1);
  const decreaseReps = () => setReps(reps > 0 ? reps - 1 : 0);

  const handleWeightChange = (e) => {
    
    setWeight(Number(e.target.value));}

  const handleRepsChange = (e) => setReps(Number(e.target.value));

  return (
    <div className="ecard">
      <div className="workoutdata">
        <h2>{workoutName}</h2>
    <div className="workout">
      <div className="exdata">
        <label>Weight: </label>
        <div className="chgbuttons">
        <button className="chg" onClick={decreaseWeight}>-</button>
        <input
        className="inp"
          type="number"
          value={weight}
          onChange={handleWeightChange}
          
        />
        <button className="chg" onClick={increaseWeight}>+</button></div>
      </div>

      <div className="exdata">
        <label>Reps: </label>
        <div className="chgbuttons">
        <button className="chg" onClick={decreaseReps}>-</button>
        <input className="inp" type="number" value={reps} onChange={handleRepsChange} min="0" />
        <button className="chg" onClick={increaseReps}>+</button></div>
      </div>
      </div>
      <div>

      </div>
    </div>
    </div>
  );
};

export default Ecard;
