
const initialState = {
    pay:[],
}

export default function rootReducer(state = initialState, action){
    switch(action.type){

        case "SHOW_TIKET":
            return {
              ...state,
              pay: action.payload
            }

        case "CREATE_PAY":
            return {
                ...state,
                pay: action.payload,
            }
        default:
            return state
    }
}