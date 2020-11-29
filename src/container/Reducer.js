export const initailState={
    Electronic:[],
    Assories:[],
    Grossery:[],
    Furniture:[],
    Others:[],
login:[],
backdrop:[],
addtocart:[]
}



function Reducer(state,action) {
    console.log(action)
switch(action.type){
    case 'Electronic':
        //logic for adding
        return {...state,
        Electronic:[...state.basket,action.item]
        }
        
        case "Assories":
            //LOGIC FOR adding to the electronic
            return {...state,
            Assories:[...state,action.item]}
            
            
        case "Grossery":
            //LOGIC FOR adding to the electronic
            return {...state,
            Grossery:[...state,action.item]}
            
            
        case "Furniture":
            //LOGIC FOR adding to the electronic
            return {...state,
                Furniture:[...state,action.item]}
            
            
        case "Others":
            //LOGIC FOR adding to the electronic
            return {...state,
            Others:[action.item]}

        case 'LOG_IN':
        return {...state,login:action.item}

        case 'ADD_TO_CART':
            return {...state,addtocart:action.item}
    

        case "BACK_DROP_CARD_DETAIL" :
            return {...state,backdrop:action.item}


                default:
                return state
}

}


export default Reducer
