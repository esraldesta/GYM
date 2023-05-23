import { createContext, useEffect, useReducer } from "react"
import jwt_decode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext()
export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            // console.log(JSON.parse(action.payload));
            return {user:action.payload}
        case "LOGOUT":
            return { user: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
    useEffect(()=>{
        const access_token = localStorage.getItem("access_token")
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

        if(access_token){
            var jwt_username = jwt_decode(access_token).username;
            var jwt_id = jwt_decode(access_token).user_id;
            dispatch({type:"LOGIN",payload:{"username":jwt_username,"id":jwt_id}})            
        }
    },[])
    console.log("state updated: ",state);

    return(
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}