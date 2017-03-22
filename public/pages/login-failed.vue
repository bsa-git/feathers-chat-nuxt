<template>
  <div>
    <!-- Navigation -->
    <page-navigation groupMenu = 'chat'></page-navigation>
    <!-- Breadcrumbs -->
    <page-breadcrumbs :title="title" :description="description"></page-breadcrumbs>
    <!-- Page Content -->
    <div v-if="getShowPage">
      <div class="container">
        <div class="row">
          <div class="jumbotron">
            <div>
              <h1 class="center-text">Login Failed</h1>
              <br />
              <br />
              <h3 class="center-text">Something went wrong and we weren't able to log you in.
                <nuxt-link to="/login">Please try again</nuxt-link>.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import PageNavigation from '~components/layout/header/navigation.vue'
  import PageBreadcrumbs from '~components/layout/header/breadcrumbs.vue'

  export default {
    components: {
      PageNavigation,
      PageBreadcrumbs
    },
    data() {
      return {
        title: 'Login failed',
        description: 'Login failed page description'
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

<style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body {
      font-family: 'Helvetica Neue', 'Helevetica', 'Arial', 'sans-serif';
      font-weight: 400;
      font-size: 16px;
    }

    main {
      padding: 100px 20px;
    }

    img.logo {
      position: absolute;
      top: 80px;
      left: 20px;
      display: block;
      width: 180px;
    }

    h1 {
      font-weight: 100;
      font-size: 4em;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 1.4em;
      font-weight: 300;
      margin: 20px 0;
    }

    pre {
      min-height: 100px;
      border: 1px solid #EEE;
      border-radius: 5px;
      color: #555;
      background: #f5f5f5;
      padding: 10px;
      overflow: hidden;
      overflow-wrap: break-word;
      word-wrap: break-word;
    }

    .center-text {
      text-align: center;
    }

    .italic {
      font-style: italic;
    }
  </style>