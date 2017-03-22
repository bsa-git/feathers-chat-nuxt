<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <ul class="list-group chat">
                    <li v-for="(message, index) in messages" class="list-group-item" v-cloak>
                        <message :message="message"></message>
                    </li>
                </ul>
                <compose-message></compose-message>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { mapGetters } from 'vuex'
    import Message from '~/components/chat/message.vue'
    import ComposeMessage from '~/components/chat/compose-message.vue'

    export default {
        components: {
            Message,
            ComposeMessage
        },
        computed: mapGetters({
            placeholder: 'getPlaceholder',
            messages: 'getMessages'
        }),
        mounted() {
            // Find the latest 10 messages. They will come with the newest first
            // which is why we have to reverse before adding them
            this.$store.dispatch('receiveMessages', { cb: this.scrollToBottom, vm: this });

            // Listen to created events and add the new message in real-time
            this.$store.dispatch('onCreatedMessage', { cb: this.scrollToBottom, vm: this });
        },
        methods: {
            scrollToBottom: (vm) => {
                const el = vm.$parent.$el;// vm.$parent $root
                Vue.nextTick(() => {
                    const node = el.getElementsByClassName('chat')[0];
                    node.scrollTop = node.scrollHeight;
                })
            }
        }
    }
</script>