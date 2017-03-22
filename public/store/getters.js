//--- Users ---//

var getUsers = function (state) {
    return state.users.users;
};

var getUser = function (state) {
    return state.users.user;
};

var getDummyUser = function (state) {
    return state.users.dummyUser;
};

var getPlaceholder = function (state) {
    return state.users.placeholder;
};

//--- Messages ---//

var getMessages = function (state) {
    return state.messages.messages;
};

var getNewMessage = function (state) {
    return state.messages.newMessage;
};

//--- Common ---//

var getShowPage = function (state) {
    return state.common.showPage;
};

var getPersonalData = function (state) {
    return state.common.personal_data;
};


export default {
    //--- Users ---//
    getUsers,
    getUser,
    getDummyUser,
    getPlaceholder,
    //--- Messages ---//
    getMessages,
    getNewMessage,
    //--- Common ---//
    getShowPage,
    getPersonalData
}