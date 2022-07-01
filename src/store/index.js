import { createStore } from 'vuex'

export default createStore({
    state: {
        user : {
            UID : '',
            role : '',
            profile: false, 
            questionnaire : false,
            username : '', 
            approved_matches : [], 
            loggedIn : false, 
            questionnaire_state : {}, 
            swipeChoice : {
                dislikes : [],
                likes : [], 
            }, 
            UID_to_be_displayed : '',
            data_to_be_displayed : {},   
        }
    },
    // only synchronous code 
    // change the state 
    mutations:{
        setApprovedMatchs(state, _array){
            state.user.approved_matches = _array 
        },
        setUID(state, _UID){
            state.user.UID = _UID 
            state.user.loggedIn = true 
            console.log("USER LOGGED IN ", state.user.UID)
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
        setProfile(state, _profile){
            state.user.profile = _profile
        },
        setFilledInQuestionnaire(state, _filledInQuestionnaire){
            state.user.questionnaire = _filledInQuestionnaire
        },
        fillStateVuex(state, data){
            // User data 
            console.log("fillState" , data)
            state.user.UID              = data.UID
            state.user.role             = data.role
            state.user.profile          = data.profile
            state.user.questionnaire    = data.questionnaire
            state.user.username         = data.username
            state.user.loggedIn         = true
            // Swipe history 
            state.user.swipeChoice.dislikes = data.dislikes
            state.user.swipeChoice.likes = data.likes

            // matches
            state.user.approved_matches = data.approved_matches

            // questionnaire 
            state.user.questionnaire_state = data.questionnaire

            console.log("state is updated")
        },
        set_kernwoorden(state, data){
            state.user.kernwoorden = data; 
        },
        set_data_to_be_displayed(state, data){
            console.log("set_data_to_be_displayed")
            console.log(data)
            state.user.data_to_be_displayed = data ; 
        }


    },
    // can't change data in the state 
    // can havae asynchronous code  
    // dispatch actions 
    actions:{
        fill_state({ commit }, data){
            commit('fill_state', data)
        }
    },
    // change or filter ou data before we use it in our components 
    getters:{
        getIndexApprovedMatches: state => index => {
            return state.user.approved_matches[index]
        }

    },
    // break up our store in smallers modules 
    modules:{

    }
})