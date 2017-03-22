<template>
  <div>
    <!-- Navigation -->
    <page-navigation></page-navigation>
    <!-- Heading/Breadcrumbs -->
    <page-breadcrumbs :title="title" :description="description"></page-breadcrumbs>
    <!-- Page Content -->
    <div v-if="getShowPage" class="container">
      <div class="row">
        <div class="col-lg-12" >
          <div class="jumbotron text-center " >
            <div id="feathers-logo" class="exotic"><i class="fa fa-envira" aria-hidden="true"></i> Feathers</div>
            <br />
            <br />
            <p>An open source REST and realtime API layer for modern applications.</p>
            <br />
            <p><a class="btn btn-primary btn-lg" href="http://docs.feathersjs.com" role="button" >Learn more...</a> </p>
            <p>In this example you go from nothing to a real-time <b>chat app</b> complete with signup, login, token based authentication, authorization, with a RESTful API and a working front-end based on <a href="https://nuxtjs.org/guide" target="_blank" >Nuxt.js</a> and <a href="https://vuejs.org/" target="_blank" >Vue.js</a>.</p>
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-md-offset-3 text-center">
            <h1>See what makes Feathers so special</h1>
            <br />
            <div class="section-feathers">
              <h3>Modern, solid, and 100% JavaScript</h3>
              <p>
                  Built using promises and ES6 features, Feathers is a tiny, fully compatible wrapper over 
                  <a href="http://expressjs.com" class="" target="_blank" title="Feathers extends Express">Express</a> and 
                  <a href="http://socket.io" class="" target="_blank" title="Feathers wraps socket.io">Socket.io</a>, 
                  both of which have been used in production by thousands of companies.
              </p>
            </div>
            <div class="section-feathers">
              <h3>Universal</h3>
              <p>
                Feathers can be used in the browser, React Native and server side with Node.js. Using the 
                <a href="http://docs.feathersjs.com/clients/feathers.html" class="" target="_blank" title="Using Feathers on the client">Feathers client</a> 
                you can quickly add authentication, share code between your server and client, and easily make your apps real-time.
              </p>
            </div>
            <div class="section-feathers">
              <h3>Framework Friendly</h3>
              <p>
                Feathers easily integrates with any client side framework. Whether it be Angular, 
                React, or VueJS it doesn't matter! It plays especially well with React and React Native. They’re practically BFFs.
              </p>
            </div>
            <div class="section-feathers">
              <h3>Service Oriented</h3>
              <p>
                Feathers gives you the structure to build service oriented apps from day one. 
                When you eventually need to split up your app into microservices it’s an easy transition and your Feathers apps can scale painlessly.
              </p>
            </div>
            <div class="section-feathers">
              <h3>Instant Real-time REST APIs</h3>
              <p>
                Feathers provides instant CRUD functionality via 
                <a href="http://docs.feathersjs.com/services/readme.html" class="" target="_blank" title="Learn more about Feathers services">Services</a>, 
                exposing both a RESTful API and real-time backend automatically through Socket.io or Primus.
              </p>
            </div>
            <div class="section-feathers">
              <h3>Datastore Agnostic</h3>
              <p>
                Feathers is a <span class="italic">“batteries included but easily swappable framework”</span>. 
                We have entirely optional plugins that allow you to implement 300+ Passport authentication providers, 
                <a href="https://github.com/feathersjs/feathers-authentication" target="_blank" title="Authentication with Feathers">Passport authentication providers</a>, 
                <a href="https://github.com/feathersjs/feathers-permissions" target="_blank" title="How to implement user access permissions with Feathers">flexible authorization permissions</a> and things like 
                <a href="https://github.com/feathersjs/feathers-twilio" target="_blank" title="Feathers text messaging plugin">SMS</a> or 
                <a href="https://github.com/feathersjs/feathers-mailer" target="_blank" title="Feathers email messaging plugin">email</a> 
                messaging out of the box. Include exactly what you need. No more, no less.
              </p>
            </div>
            <div class="section-feathers">
              <h3>Flexible Plugins</h3>
              <p>
                Feathers is a <span class="italic">“batteries included but easily swappable framework”</span>. 
                We have entirely optional plugins that allow you to implement 300+ Passport authentication providers, 
                <a href="https://github.com/feathersjs/feathers-authentication" target="_blank" title="Authentication with Feathers">Passport authentication providers</a>, 
                <a href="https://github.com/feathersjs/feathers-permissions" target="_blank" title="How to implement user access permissions with Feathers">flexible authorization permissions</a> and things like 
                <a href="https://github.com/feathersjs/feathers-twilio" target="_blank" title="Feathers text messaging plugin">SMS</a> or 
                <a href="https://github.com/feathersjs/feathers-mailer" target="_blank" title="Feathers email messaging plugin">email</a> 
                messaging out of the box. Include exactly what you need. No more, no less.
              </p>
            </div>
          </div>
        </div>
    </div>
    <!-- Footer -->
    <page-footer></page-footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import PageNavigation from '~components/layout/header/navigation.vue'
  import PageBreadcrumbs from '~components/layout/header/breadcrumbs.vue'
  import PageFooter from '~components/layout/footer/footer.vue'
  
  export default {
    components: {
      PageNavigation,
      PageBreadcrumbs,
      PageFooter
    },
    data() {
      return {
        title: 'Hello Feathers',
        description: 'A minimalist real-time framework'
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
    computed: mapGetters([
      'getShowPage',
    ]),
  }
</script>