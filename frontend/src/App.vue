<template>
  <div>{{ info }}</div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      info: null
    }
  },
  name: 'App',
  mounted() {
    axios
        .get('/api/hello')
        .then(response => this.info = response.data)
        .catch(error => {
          console.log('response = ', error.response)
          if (error.response.status === 401) {
            window.location.replace('/oauth2/authorization/keycloak');
          }
        })
  }
}
</script>

<style>
</style>
