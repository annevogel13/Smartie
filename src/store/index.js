import { createStore } from 'vuex'

export default createStore({
    state: {
        user : {
            UID : '',
            loggedIn : false, 
            username : '', 
            role : '',
            hasProfile: false,  
        }
    },
    // only synchronous code 
    // change the state 
    mutations:{
        setUID(state, _UID){
            state.user.UID = _UID 
            state.user.loggedIn = true 
            console.log("USER LOGGED IN ", state.user.UID, state.user.loggedIn)
        }, 
        setUser(state, _username){
            state.user.username = _username 
        },
        setRole(state, _role){
            state.user.role = _role 
        },
        loggingOut(state){
            state.user.loggedIn = false 
        },
        setHasProfile(state, _hasProfile){
            state.user.hasProfile = _hasProfile
        },
        fill_state(state, data){
            state.user.UID = data.UID; 
            state.user.role = data.role; 
            state.user.hasProfile = data.hasProfile; 
            state.user.username = data.username; 
            console.log("state is updated")
        }
    },
    // can't change data in the state 
    // can havae asynchronous code  
    // dispatch actions 
    actions:{

    },
    // change or filter ou data before we use it in our components 
    getters:{

    },
    // break up our store in smallers modules 
    modules:{

    }
})