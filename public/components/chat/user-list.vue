<template>
    <div>
        <h4 class="text-center"><span class="" v-cloak>{{ users.length }}</span> users</h4>
        <ul class="list-group">
            <li v-for="(user, index) in users" class="list-group-item" v-cloak>
                <img :src="user.avatar || dummyUser.avatar" alt="" class="avatar">
                <span class="absolute username">{{ user.email || dummyUser.email }}</span>
            </li>
        </ul>
        <br />
        <div class="text-center">
            <a href="#" class="btn btn-primary" @click="logout">Sign Out</a>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: mapGetters({
            users: 'getUsers',
            dummyUser: 'getDummyUser',
        }),
        mounted() {
            // Find all users
            this.$store.dispatch('receiveUsers');

            // We will also see when new users get created in real-time
            this.$store.dispatch('onCreatedNewUser');
        },
        methods: {
            ...mapActions([
                'logout'
            ]),

        }
    }
</script>