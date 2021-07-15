import React from "react";
import { useDispatch } from "react-redux";
import { delet, showTikets } from "../../actions/index";

function Cancelar({ data }) {
    const dispatch = useDispatch();
    const handle = (e) => {
        e.preventDefault()
            dispatch(delet(data.id))
            dispatch(showTikets());
        }
  return (
    <div className="card">
        <h1>Neivor</h1>
        <div className="detail">
            <form onSubmit={handle}>
                <p>{" " + data.name }</p>
                <p>State:  {data.debt}</p>
                <button type="submit">Cancel</button>
            </form>
        </div>
      </div>
  );
}

export default Cancelar;