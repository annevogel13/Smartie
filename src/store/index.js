import { createStore } from 'vuex'

export default createStore({
    state: {
        user : {
            UID : '',
            role : '',
            profile: false, 
            questionnaireCompleted : false,
            username : '', 
            swipe : {
                approved_matches : [], 
                index : 0 , 
            },
            prediction : 0 , 
            loggedIn : false, 
            questionnaire_state : {}, 
            swipeChoice : {
                dislikes : [],
                likes : [], 
            }, 
            UID_to_be_displayed : '',
            data_to_be_displayed : {},   
            feedback : [], 
        }
    },
    // only synchronous code 
    // change the state 
    mutations:{
        setApprovedMatchs(state, _array){
            state.user.swipe.approved_matches = _array 
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
        augmentIndex(state){
            state.user.swipe.index = state.user.swipe.index+1 
        },
        setProfile(state, _profile){
            state.user.profile = _profile
        },
        setQuestionnaire(state, _questionnaire){
            state.user.questionnaireCompleted = _questionnaire
        },
        giveFeedback(state, feedback){
            state.user.data_to_be_displayed.feedback.push(feedback) 
        }
        ,
        fillStateVuex(state, data){
            // User data 
            console.log("fillState" , data)
            state.user.UID                      = data.UID
            state.user.role                     = data.role
            state.user.profile                  = data.profile
            state.user.questionnaireCompleted   = data.questionnaireCompleted
            state.user.username                 = data.username
            state.user.loggedIn                 = true
            state.user.prediction               = data.prediction
            // Swipe history 
            console.log(data.likes)
            if( typeof(data.dislikes) == 'undefined' || typeof(data.likes) == 'undefined' ){
                state.user.swipeChoice.dislikes     = []
                state.user.swipeChoice.likes        = []
            }else {
                state.user.swipeChoice.dislikes     = data.dislikes
                state.user.swipeChoice.likes        = data.likes
            }

            // Matches
            state.user.swipe.approved_matches    = data.approved_matches
            // Questionnaire 
            state.user.questionnaire_state      = data.questionnaire
            // feedback
            state.user.feedback                 = data.feedback 

            console.log("state is updated")
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
    getters : {}, 
    // break up our store in smallers modules 
    modules:{}
})