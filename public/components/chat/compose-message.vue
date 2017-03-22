<template>
    <form id="send-message" class="form-inline" v-on:submit.prevent>
        <div class="control-group form-group">
            <div class="controls">
                <div class="col-lg-10">
                    <input type="text" name="text" class="form-control" placeholder="New Message" v-model="newMessage">
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary" @click="addMessage">Send</button>
    </form>
</template>

<script>
    import types from '~/store/mutation-types.js'
    import { mapActions } from 'vuex'

    export default {
        computed: {
            newMessage: {
                get() {
                    return this.$store.state.messages.newMessage
                },
                set(value) {
                    this.$store.commit(types.UPDATE_MESSAGE, value)
                }
            }
        },
        methods: {
            addMessage() {
                // Create a new message 
                this.$store.dispatch('addMessage', this.newMessage);
            }
        }
    }
</script>