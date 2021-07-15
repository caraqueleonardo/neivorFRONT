import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showTikets } from "../../actions/index";
import Cancelar from "../Cancelar/Cancelar"
import '../Home/Home.css'

function Validate() {
  const dispatch = useDispatch();
  const tiket = useSelector((store) => store.pay);
  useEffect(() => {
    dispatch(showTikets());
  // eslint-disable-next-line no-use-before-define
  }, [dispatch]);
  // eslint-disable-next-line
  return (
    <>
      <div>
          {tiket.map((data) => (
              <Cancelar data={data}/>
          )) 
          }
      </div>
    </>
  );
}

export default Validate;