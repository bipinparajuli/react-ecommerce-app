const redux=require('redux');
const createStore=redux.createStore;

const initialState={
counter:0
}

//reducer

const createReducer=(state=initialState,action)=>{
    if(action.type === 'INC_COUNTER')
    {
        return{
            ...state,counter:state.counter+1
        }
    }
    if(action.type === 'ADD_COUNTER')
    {
        return{
            ...state,counter:state.counter+action.value
        }
    }
    return state
}

//store

const store=createStore(createReducer);
console.log(store.getState())

//subscription
store.subscribe(()=>{
    console.log('SUBSCRIPTION : ', store.getState())
})

//dispatching
store.dispatch({type:'INC_COUNTER'})
store.dispatch({type:'ADD_COUNTER',value:10})
console.log(store.getState())