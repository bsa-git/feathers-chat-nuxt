import types from '~/store/mutation-types.js'

import { app, userService, messageService } from '~/store/lib/app-feathers.js'

//--- Users ---// 
const userAuthenticate = function (store) {
    if (app) {
        app.authenticate().then(() => {
            console.log('Authenticated!', 'User:', app.get('user'));
            store.commit(types.USER_AUTHENTICATE, true);
        })
            // On errors we just redirect back to the login page
            .catch(error => {
                console.error('Error authenticating!', error);
                if (error.code === 401) window.location.href = '/login'
            })
    }
};

const receiveUsers = function (store) {
    if (userService) {
        // Find all users
        userService.find().then(page => {
            store.commit(types.RECEIVE_USERS, page.data);
        })
    }
};

const onCreatedNewUser = function (store) {
    if (userService) {
        // We will also see when new users get created in real-time
        userService.on('created', user => {
            store.commit(types.CREATE_NEW_USER, user);
        })
    }
};

const logout = function (store) {
    if (app) {
        app.logout().then(() => {
            store.commit(types.USER_AUTHENTICATE, false);
            window.location.href = '/'
        })
    }
};

//--- Messages ---//

const receiveMessages = function (store, { cb, vm }) {
    if (messageService) {
        // Find all users
        messageService.find({
            query: {
                $sort: { createdAt: -1 },
                $limit: 25
            }
        }).then(page => {
            page.data.reverse()
            store.commit(types.RECEIVE_MESSAGES, page.data);
            cb(vm);// Call the function "scrollToBottom()""
        })
    }
};

const addMessage = function (store, msg) {
    if (messageService) {
        // Create a new message
        messageService.create({
            text: msg
        });
    }
};

const onCreatedMessage = function (store, { cb, vm }) {
    if (messageService) {
        // Listen to created events and add the new message in real-time
        messageService.on('created', message => {
            store.commit(types.ADD_MESSAGE, message);
            cb(vm);// Call the function "scrollToBottom()""
        })
    }
};


export default {
    //--- Users ---//
    userAuthenticate,
    receiveUsers,
    onCreatedNewUser,
    logout,
    //--- Messages ---//
    receiveMessages,
    addMessage,
    onCreatedMessage
}