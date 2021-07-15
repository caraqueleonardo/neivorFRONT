import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showInfo , Pay } from "../../actions/index";
import '../Home/Home.css'

function Home() {

  const dispatch = useDispatch();
  const tiket = useSelector((store) => store.pay);
  // eslint-disable-next-line

  const [datos, setDatos] = useState({
    title:'',
    a: false,
  })
  
  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name] : e.target.value,
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setDatos({
      ...datos,
      a:true
    })
    if(datos.title){
      return dispatch(showInfo(datos.title));
    }
  }
  //vaciar input
  function vaciar(e) {
    e.target.value='';
  }

  const handle = (e) => {
    const data = {
      id:tiket.id,
      name: tiket.name,
      dni: tiket.dni,
      departament: tiket.departament,
      total: tiket.total,
      debt:"paid"
    };
    alert("process")
    return dispatch(Pay(data));
  }

  return (
    <div className="home">
          <form onSubmit={handleSubmit}>
            <input onFocus={vaciar} onBlur={vaciar} name="title" onChange={handleInputChange} placeholder="Enter code..."></input>
            <button type="submit" >Search</button>
          </form>
          <div>
            <form onSubmit={handle}>
              <h1>Name:  {tiket.name}</h1>
              <h1>DNI:  {tiket.dni}</h1>
              <h1>Total:  ${tiket.total}</h1>
              <button type="submit">To Pay</button>
            </form>
          </div>
    </div>
  );
}

export default Home;