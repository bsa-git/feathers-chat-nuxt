<template>
      <nav v-if="getShowPage" role="navigation" class="navbar navbar-inverse osahan-header" >
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <nuxt-link class="exotic navbar-brand flipInY animated" to="/" data-wow-duration="7s" style="visibility: visible; animation-duration: 7s; animation-name: flipInY;">
              <i class="fa fa-cog" aria-hidden="true"></i> FeathersNuxt
            </nuxt-link>
          </div>
          <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li data-wow-duration="1s" class="flipInY animated" style="visibility: visible; animation-duration: 1s; animation-name: flipInY;">
                <nuxt-link :class="{ 'active': $route.name == 'index' }" to="/"><i class="fa fa-home"></i> Home</nuxt-link>
              </li>
              <li data-wow-duration="5s" style="visibility: visible; animation-duration: 5s; animation-name: flipInY;" class="dropdown flipInY animated">
                <a href="#" :class="[ 'dropdown-toggle', { 'active': groupMenu == 'chat' } ]" data-toggle="dropdown">Chat <b class="caret"></b></a>
                <ul data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: flipInY;" class="dropdown-menu flipInY animated">
                  <li data-wow-duration="2s" v-if="user.authenticated" class="flipInY animated" style="visibility: visible; animation-duration: 2s; animation-name: flipInY;">
                    <nuxt-link  v-if="$route.name !== 'chat'" to="/chat">Open</nuxt-link>
                    <a href="#" v-if="$route.name == 'chat'" @click="logout">Sign Out</a>
                  </li>
                  <li data-wow-duration="2s" v-if="!user.authenticated" class="flipInY animated" style="visibility: visible; animation-duration: 2s; animation-name: flipInY;">
                    <nuxt-link to="/login">Login</nuxt-link>
                  </li>
                  <li data-wow-duration="2s" v-if="!user.authenticated" class="flipInY animated" style="visibility: visible; animation-duration: 2s; animation-name: flipInY;">
                    <nuxt-link to="/registration">SignUp</nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    props: ['groupMenu'],
    computed: mapGetters({
      user: 'getUser',
      getShowPage: 'getShowPage'
    }),
    methods: {
      ...mapActions([
        'logout'
      ]),

    }
  }
</script>