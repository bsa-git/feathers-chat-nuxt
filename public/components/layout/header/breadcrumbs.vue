<template>
    <div v-if="getShowPage" class="section sub-header" >
        <div data-wow-duration="4s" style="visibility: visible; animation-duration: 4s; animation-name: bounceInRight;" class="container bounceInRight animated">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">{{ title }}
                        <small>{{ description }}</small>
                    </h1>
                    <ol class="breadcrumb">
                        <li>
                            <nuxt-link class="" to="/"><i class="fa fa-home"></i> Home</nuxt-link>
                        </li>
                        <li class="active">{{ title }}</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        props: ['title', 'description'],
        computed: mapGetters([
            //'getShowHeader',
            'getShowPage'
        ]),
    }
</script>