<template>
    <div class="footer-widget contact-widget">
        <h4>Contact Us<span class="head-line"></span></h4>
        <ul>
            <li><span><i class="fa fa-map-marker"></i> Location:</span> {{ personal_data.contact.location }} </li>
            <li><span><i class="fa fa-phone"></i> Phone Number:</span> {{ personal_data.contact.phone }}</li>
            <li><span><i class="fa fa-envelope-o"></i> Email:</span> {{ personal_data.contact.email }}</li>
            <li><span><i class="fa fa-globe"></i> Website:</span> {{ personal_data.contact.website }}</li>
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