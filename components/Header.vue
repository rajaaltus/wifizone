<template> 
<div></div>
</template>

<script>
export default {
  computed: {
    activeUser() {
      return this.$store.state.user
    },
    picture() {
      return (
        dotProp(this.activeUser, 'photoURL') ||
        dotProp(this.activeUser, 'picture') || // OpenID
        dotProp(this.activeUser, 'picture.data.url') || // Facebook graph API
        dotProp(this.activeUser, 'avatar_url') // GitHub
      )
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('signOut').then(() => {
        this.$router.replace({ path: '/' })
      })
    }
  }
}
</script>
