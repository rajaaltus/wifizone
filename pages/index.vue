<template>
  <div>
    <b-jumbotron class="text-center">
      <h3>Welcome to nuxt-firebaseui-starter</h3>
      <div class="mt-1">
        <template v-if="$store.state.user">
          <b-btn class="ml-3" variant="info" to="/app">Open App</b-btn>
          <b-btn @click="logout()" class="ml-3" variant="danger">
            Logout
          </b-btn>
        </template>
        <b-btn v-else variant="success" to="/login">Login</b-btn>
      </div>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('signOut').then(() => {
        this.$router.replace({ path: '/' })
      })
    }
  }
}
</script>
