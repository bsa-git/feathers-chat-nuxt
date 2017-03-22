<template>
    <div class="footer-widget social-widget">
        <h4>Follow Us<span class="head-line"></span></h4>
        <ul class="social-icons">
            <li v-for="(val, key) in personal_data.socials">
                <a :href="val.url" :class="key"><i :class="['fa', val.icon]"></i></a>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: mapGetters({
            personal_data: 'getPersonalData'
        }),
    }
</script>