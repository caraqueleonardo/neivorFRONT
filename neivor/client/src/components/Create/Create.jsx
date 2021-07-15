import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPay,  showTikets } from "../../actions/index";
import Pay from "../Pay/Pay"
import "./Create.css";

function Create() {
  const dispatch = useDispatch();
  const tiket = useSelector((store) => store.pay);

  useEffect(() => {
    dispatch(showTikets());
  // eslint-disable-next-line no-use-before-define
  }, [dispatch]);
  
  const [state, setState] = useState({
    name: "",
    dni: "",
    departament:"",
    total: "",
  });
  
  const ChangeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: state.name,
      dni: state.dni,
      departament: state.departament,
      total: state.total,
      debt: "owes"
    };
    
    if (!obj.name) {
      alert('you must enter a name')
      return
    }
    if (!obj.dni) {
      alert('you must enter a dni')
      return
    } 
    dispatch(createPay(obj));
   
    e.target.reset();
    alert('creating your payment order');
    dispatch(showTikets());
    setState({
      name: "",
      dni: "",
      departament: "",
      debt: "",
    });
  };
  
  return (
    <div className="Form">
      <header>
        <h1 id="title">Generate Tiket </h1>
      </header>
      <form id="survey-form" className="form" noValidate 
        onChange={ChangeInput}
        onSubmit={handleSubmit}>
        <div className="divForm">
          <div>
            <label className="text-label">Name</label>
            <input className="btm" type="text" 
              name="name"
              value={state.name}
              ></input>
          </div>
          <div>
            <label className="text-label">Dni</label>
            <input className="btm" type="text"
              name="dni"
              value={state.dni}
              ></input>
          </div>
          <div>
            <label className="text-label">Department</label>
            <input className="btm" type="text"
              name="departament"
              value={state.departament}
              ></input>
          </div>
          <div>
            <label className="text-label">Total</label>
            <input className="btm" type="text"
              name="total"
              value={state.total}
              ></input>
          </div>
            <button className="submitForm" type="submit"> Generate </button>
            <Pay tiket={tiket} />
        </div>
      </form>
    </div>
  );
}

export default Create;