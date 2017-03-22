<template>
  <div>
    <app-header/>
    <nuxt/>
    <app-footer/>
  </div>
</template>

<script>
  import AppHeader from '~components/layout/AppHeader.vue'
  import AppFooter from '~components/layout/AppFooter.vue'

  export default {
    components: {
      AppHeader,
      AppFooter
    },
    mounted: function () {
      this.$store.commit('delayHeader')
      this.$store.commit('delayPage')
    },
  }
</script>