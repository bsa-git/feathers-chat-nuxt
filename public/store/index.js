// Vue
import Vue from 'vue'
// Vuex
import Vuex from 'vuex'
// Actions
import actions from '~/store/actions';
// Getters
import getters from '~/store/getters';
// Modules
import common from '~/store/modules/common';
import users from '~/store/modules/users';
import messages from '~/store/modules/messages';


Vue.use(Vuex)

// A Vuex instance is created by combining the modules, getters, actions
var store = new Vuex.Store({
    //strict: true,
    actions: actions,
    getters,
    modules: {
        common,
        users,
        messages: messages
    }
});

export default store
