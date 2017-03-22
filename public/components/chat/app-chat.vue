<template>
  <div id="chat" v-if="getShowPage" class="container">
    <div class="row">
      <div class="col-md-6">
        <p id="chat-title" class="exotic">Chat for friends</p>
      </div>
      <div class="col-md-6">
        <img class="img-responsive" src="sidebar-page.jpg" alt="Chat for friends">
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <user-list></user-list>
      </div>
      <div class="col-md-8">
        <message-list></message-list>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import UserList from '~/components/chat/user-list.vue'
  import MessageList from '~/components/chat/message-list.vue'

  export default {
    components: {
      UserList,
      MessageList
    },
    computed: mapGetters([
      'getShowPage',
    ]),
  }
</script>