

export function showTikets() {
  return function (dispatch) {
    return fetch(`https://leonardo123.herokuapp.com/obtain`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "SHOW_TIKET", payload: json });
      });
  };
}

export function showInfo(id) {
  return function (dispatch) {
    return fetch(`https://leonardo123.herokuapp.com/search/${id}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "SHOW_TIKET", payload: json });
      });
  };
}

export function createPay(obj) {
  console.log(obj)
  return (dispatch) =>
    fetch("https://leonardo123.herokuapp.com/home/generate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "CREATE_PAY",
          payload: json,
        });
      });
}

export function delet(id) {
  return (dispatch) =>
    fetch(`https://leonardo123.herokuapp.com/delete/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "DELTE_PAY",
          payload: json,
        });
      });
}

export function Pay(data) {
  return (dispatch) =>
    fetch("https://leonardo123.herokuapp.com/update", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "CREATE",
          payload: json,
        });
      });
}
