
import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER    = 'SET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

/* ------------   ACTION CREATORS     ------------------ */

const setUser = user => ({ type : SET_CURRENT_USER, user });
const removeUser = () => ({ type : REMOVE_CURRENT_USER });

/* ------------       REDUCER     ------------------ */

export default function reducer (user = null, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return action.user;
            break;
        case REMOVE_CURRENT_USER:
            return {}
            break;
        default:
            return user;
    }
    
}

/* ------------       DISPATCHERS     ------------------ */

const resToData = res => res.data;

export const login = cred => dispatch => {
    axios
        .post('/login')
        .then(resToData)
        .then(user => dispatch(setUser(user)))
        .catch(console.error.bind(console))
}

export const signup = cred => dispatch => {
    axios
        .post('/signup')
        .then(resToData)
        .then(user => dispatch(setUser(user)))
        .catch(console.error.bind(console))
}







