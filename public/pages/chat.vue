<template>
  <div id="app">
    <!-- Navigation -->
    <page-navigation groupMenu = 'chat'></page-navigation>
    <!-- Breadcrumbs -->
    <page-breadcrumbs :title="title" :description="description"></page-breadcrumbs>
    <!-- Page Content -->
    <page-chat v-if="user.authenticated"></page-chat>
    <!-- Footer -->
    <page-footer></page-footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import PageNavigation from '~components/layout/header/navigation.vue'
  import PageBreadcrumbs from '~components/layout/header/breadcrumbs.vue'
  import PageChat from '~/components/chat/app-chat.vue'
  import PageFooter from '~components/layout/footer/footer.vue'

  export default {
    components: {
      PageNavigation,
      PageBreadcrumbs,
      PageChat,
      PageFooter
    },
    computed: mapGetters({
      user: 'getUser',
    }),
    created() {
      //--- User Authenticate ---//
      this.$store.dispatch('userAuthenticate');
    },
    data() {
      return {
        title: 'Chat',
        description: 'Real-time chat app'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: this.description }
        ]
      }
    },
  }
</script>