<template>
  <div class="container-flux">
    <div class="container col-lg-8 main-card text-center">
      <div class="row">
        <div class="mx-auto align-middle">
          <img src="/artwork.png" alt="logo" />
        </div>
      </div>
      <h3>Welcome to DB Mall</h3>
      <h6>Free Wifi Zone</h6>
      <div class="mt-1">
        <div v-if="$store.state.user">
          <b-btn class="ml-3" variant="success" to="/app"
            >Continue using Free-Wifi</b-btn
          >
          <b-btn @click="logout()" class="ml-3" variant="danger">
            Logout
          </b-btn>
        </div>
        <div v-else>
          <firebase-ui />
          <div class="mx-auto text-center my-4">
            <h6>Powered by <span>&copy; StreetWall India Pvt.Ltd</span></h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FirebaseUi from '~/components/FirebaseUi'
export default {
  components: {
    FirebaseUi
  },
  data() {
    return {
      form: {
        name: '',
        dob: '',
        mobile: ''
      },
      show: true
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('signOut').then(() => {
        this.$router.replace({ path: '/' })
      })
    },
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.name = ''
      this.form.dob = ''
      this.form.mobile = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style>
.main-card {
  width: 100%;
  height: 100vh;
  background-color: white;
}
</style>
