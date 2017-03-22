<template>
  <section class="container">
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Homepage
    </nuxt-link>
  </section>
</template>
<script>
  //const winston = require('winston');
  export default {
    props: ['error'],
    created: function () {

      const isServer = this.$isServer;
      if (isServer) {
        const message = 'ErrorCode: ' + `${this.error.statusCode ? `(${this.error.statusCode}) ` : ''} ErrorMessage: ${this.error.message}`;
        console.log(message);
      }
    }
  }
</script>

<style scoped>
.title
{
  margin-top: 150px;
  font-size: 5em;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button
{
  margin-top: 50px;
}
</style>