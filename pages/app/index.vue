<template>
  <div class="container-flux">
    <div class="container col-lg-8 main-card text-center">
      <div class="main-card text-left">
        <h2>Welcome to DD Mall,</h2>
        <b-form ref="form" @submit.prevent="onSubmit">
          <label> Enter your Name here...</label>
          <b-form-input
            v-model="form.name"
            type="text"
            class="my-4"
          ></b-form-input>

          <b-form-input
            v-model="form.dob"
            type="date"
            class="my-4"
          ></b-form-input>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button @click="reset" variant="danger">Reset</b-button>
        </b-form>
        <!-- <FireStoreTest></FireStoreTest> -->
      </div>
    </div>
  </div>
</template>

<script>
// import FireStoreTest from '@/components/FireStoreTest'
import { fireDb } from '~/plugins/firebase.js'
export default {
  data() {
    return {
      form: {
        name: '',
        dob: '',
        mobile: ''
      }
    }
  },
  methods: {
    reset() {
      this.$refs.form.reset()
    },
    async onSubmit() {
      const ref = fireDb.collection('users')
      const document = {
        name: this.form.name,
        dob: this.form.dob,
        mobile: this.$store.state.user.phoneNumber
      }
      try {
        await ref.add(document)
        this.reset()
        this.$router.push('/app/success')
      } catch (error) {
        // console.log(error)
      }
      this.writeSuccessful = true
    }
  }
}
</script>
