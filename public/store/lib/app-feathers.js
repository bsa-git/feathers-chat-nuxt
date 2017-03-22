import feathers from 'feathers-client'

var isClient, isServer, socket, app, userService, messageService;

if (typeof exports === 'object' && typeof module === 'object') {
    isServer = true;
    isClient = false;
} else {
    isServer = false;
    isClient = true;
}

if (isClient) {

    // Establish a Socket.io connection
    socket = io();

    // Initialize our Feathers client application through Socket.io
    // with hooks and authentication.
    app = feathers()
        .configure(feathers.socketio(socket))
        .configure(feathers.hooks())
        // Use localStorage to store our login token
        .configure(feathers.authentication({
            storage: window.localStorage
        }));

    // Get the Feathers services we want to use
    userService = app.service('users');   
    messageService = app.service('messages') 
}

export {
    isServer,
    isClient,
    app,
    userService,
    messageService
};
