<template>
    <div class="copyright-section">
        <div class="row">
            <div class="col-md-6">
                <p>{{ personal_data.copyright }} &nbsp;&nbsp; | &nbsp;&nbsp; Designed With <i class="fa fa-heart red"></i> By
                    <a target="_blank" :href="personal_data.designed_with_url"> {{ personal_data.designed_with }}</a>
                </p>
            </div>
            <!-- .col-md-6 -->
            <div class="col-md-6">
                <ul class="footer-nav">
                    <li>
                        <a href="/#/home"><i class="fa fa-home"></i></a>
                    </li>
                    <li v-if="user.authenticated">
                        <nuxt-link  v-if="$route.name !== 'chat'" to="/chat">Open</nuxt-link>
                        <a href="#" v-if="$route.name == 'chat'" @click="logout">Sign Out</a>
                    </li>
                    <li v-if="!user.authenticated">
                        <nuxt-link to="/login">Login</nuxt-link>
                    </li>
                    <li v-if="!user.authenticated">
                        <nuxt-link to="/registration">SignUp</nuxt-link>
                    </li>
                </ul>
            </div>
            <!-- .col-md-6 -->
        </div>
        <!-- .row -->
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        computed: mapGetters({
            user: 'getUser',
            personal_data: 'getPersonalData'
        }),
    methods: {
      ...mapActions([
        'logout'
      ]),

    }
    }
</script>