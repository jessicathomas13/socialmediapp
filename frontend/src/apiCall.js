import axios from "axios"

export const loginCall = async(user,dispatch) =>{
    dispatch({type: "LOGIN_START"});
    try{
        const res = await axios.post("auth/login", user)
        dispatch({type:"LOGIN_SUCCESS", payload:res.data})
    }catch(error){
        dispatch({type:"LOGIN_FAIL", payload:error})

    }
}

export const logoutCall = async (dispatch) => {
    dispatch({ type: "LOGOUT" });
  };