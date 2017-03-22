// A placeholder image if the user does not have one
const PLACEHOLDER = 'https://placeimg.com/60/60/people';

const state = {
    // A placeholder image if the user does not have one
    placeholder: PLACEHOLDER,
    // An anonymous user if the message does not have that information
    dummyUser: {
        avatar: PLACEHOLDER,
        email: 'Anonymous'
    },
    user: {
        authenticated: false
    },
    users: []
}

const mutations = {
    USER_AUTHENTICATE: function (state, authenticated) {
        state.user.authenticated = authenticated;
        console.info('User authenticated: ' + authenticated);
    },

     RECEIVE_USERS: function (state, users) {
        state.users = users;
    },
    
    CREATE_NEW_USER: function (state, user) {
        state.users.push(user);
    },
}

export default {
    state,
    mutations
}