<template>
  <div class="container-flux">
    <div class="container col-lg-8 main-card text-center">
      <h1>Success!</h1>
      <b-btn @click="logout()" class="ml-3" variant="danger">
        Logout
      </b-btn>
    </div>
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
