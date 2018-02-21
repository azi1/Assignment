import {LOGIN_SUCCESS, LOADING, USER_UPDATE,ADD_TASK,DELETE_TASK} from '../actions/types';

const INTIAL_STATE = {name:'', loading:false, error:false,success:false,Todo: new Array()}

export default (state = INTIAL_STATE, action) => {
    console.log(action.payload);  

    switch (action.type)
    {
       case LOGIN_SUCCESS: 
       return{...state, name:action.payload,loading:false,success:true};

       case LOADING:
       return{...state, loading:true};

       case USER_UPDATE:
       return { ...state, [action.payload.props]: action.payload.value }
      
       case ADD_TASK:
       return { ...state,  Todo: [...state.Todo, action.payload],success:true};
       case DELETE_TASK:
        return { ...state,  Todo: action.payload};
       default:
       return state;
       
    }
};