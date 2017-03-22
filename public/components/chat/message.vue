<template>
    <div>
        <h4 class="list-group-item-heading">
            <img :src="message.sentBy.avatar || placeholder" v-bind:alt="message.sentBy.email" class="avatar">
            <span class="">{{ message.sentBy.email }}</span>
            <span class=""> ( {{ message.createdAt | moment }} )</span>
        </h4>
        <p class="list-group-item-text">{{ message.text }}</p>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        props: ['message', 'index'],
        filters: {
            moment: date => {
                return moment(date).format('MMM Do, hh:mm:ss')
            }
        }
    }
</script>