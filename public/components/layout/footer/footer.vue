<template>
  <footer v-if="getShowPage" class="bounceInUp animated" data-wow-duration="2s" style="visibility: visible; animation-duration: 2s; animation-name: bounceInUp;">
    <div class="container">
        <div class="row footer-widgets">
            <!-- Subscribe Widget -->
            <div class="col-md-3 col-xs-12">
                <footer-subscribe></footer-subscribe>
            </div>
            <!-- Study Feathers Widget -->
            <div class="col-md-3 col-xs-12">
                <footer-study-feathers></footer-study-feathers>
            </div>
            <!-- Study Nuxt Widget -->
            <div class="col-md-3 col-xs-12">
                <footer-study-nuxt></footer-study-nuxt>
            </div>
            <!-- Contact/Social Widget -->
            <div class="col-md-3 col-xs-12">
                <footer-contact></footer-contact>
                <footer-social></footer-social>
            </div>
        </div>
        <!-- Copyright -->
        <footer-copyright></footer-copyright>
    </div>
  </footer>
</template>

<script>
  import { mapGetters } from 'vuex'
  import FooterCopyright from '~components/layout/footer/copyright.vue'
  import FooterContact from '~components/layout/footer/contact.vue'
  import FooterSocial from '~components/layout/footer/social.vue'
  import FooterSubscribe from '~components/layout/footer/subscribe.vue'
  import FooterStudyFeathers from '~components/layout/footer/study-feathers.vue'
  import FooterStudyNuxt from '~components/layout/footer/study-nuxt.vue'

  export default {
    components: {
      FooterCopyright,
      FooterContact,
      FooterSocial,
      FooterSubscribe,
      FooterStudyFeathers,
      FooterStudyNuxt
    },
    computed: mapGetters([
      'getShowPage',
    ]),
  }
</script>