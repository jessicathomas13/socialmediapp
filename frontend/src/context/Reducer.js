const Reducer = (state,action) =>{
    switch(action.type){
        case "LOGIN_START":
            return{
                user:null,
                isFetching:true,
                error:false
            };

        case "LOGIN_SUCCESS":
            return{
                user:action.payload,
                isFetching:false,
                error:false
            };

        case "LOGIN_ERROR":
            return{
                user:null,
                isFetching:false,
                error:action.payload
            };

        case "FOLLOW":
            return{
                ...state,
                user: {
                    ...state.user,
                    following: [...state.user.following, action.payload],
                },
            };
        case "UNFOLLOW":
            return{
                ...state,
                user: {
                    ...state.user,
                    following: state.user.following.filter((following) => following !== action.payload ),
                },
            };
        case "LOGOUT":
            return {
                user:localStorage.setItem("user", null),
                isFetching:false,
                error:false
            };
        default:
            return state;
    }
}

export default Reducer;