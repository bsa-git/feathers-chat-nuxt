const state = {
    newMessage: '',
    messages: []
}

const mutations = {

    RECEIVE_MESSAGES: function (state, messages) {
        state.messages = messages;
    },

    ADD_MESSAGE: function (state, message) {
        if(message){
            state.messages.push(message);
        }
        
        state.newMessage = '';
    },

    UPDATE_MESSAGE: function (state, value) {
        state.newMessage = value;
    },
}

export default {
    state,
    mutations
}