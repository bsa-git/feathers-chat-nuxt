<template>
  <div>
    <!-- Navigation -->
    <page-navigation groupMenu = 'chat'></page-navigation>
    <!-- Breadcrumbs -->
    <page-breadcrumbs :title="title" :description="description"></page-breadcrumbs>
    <!-- Page Content -->
    <div v-if="getShowPage" class="section-form">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <h2 class="page-header">Add user</h2>
            <form name="signupUser" id="signupForm" novalidate="novalidate" method="post" action="/signup">
              <div class="control-group form-group">
                <div class="controls">
                  <label>Email Address:</label>
                  <input type="email" id="email" name="email" required="required" data-validation-required-message="Please enter your email address."
                    class="form-control" placeholder="Email">
                  <div class="help-block"></div>
                </div>
              </div>
              <div class="control-group form-group">
                <div class="controls">
                  <label>Password:</label>
                  <input type="password" id="password" name="password" required="required" data-validation-required-message="Please enter your password."
                    class="form-control" placeholder="Password">
                  <p class="help-block"></p>
                </div>
              </div>
              <div id="success"></div>
              <button type="submit" class="btn btn-primary">Signup</button>
            </form>
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
  import signup_me from '~plugins/validation/signup_me.js';

  export default {
    components: {
      PageNavigation,
      PageBreadcrumbs
    },
    mounted: function () {
      signup_me();
    },
    data() {
      return {
        title: 'Signup',
        description: 'Add user to chat'
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