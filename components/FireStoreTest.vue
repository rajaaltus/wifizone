<template>
  <section>
    <div>
      <h2>
        Write to Firestore.
      </h2>
      <div>
        <button :disabled="writeSuccessful" @click="writeToFirestore">
          <span v-if="!writeSuccessful">Write now</span>
          <span v-else>Successful!</span>
        </button>
      </div>
    </div>
    <div>
      <h2>
        Read from Firestore.
      </h2>
      <div>
        <button :disabled="readSuccessful" @click="readFromFirestore">
          <span v-if="!readSuccessful">Read now</span>
          <span v-else>Successful!</span>
        </button>
        <pre>{{ text }}</pre>
      </div>
    </div>
  </section>
</template>
<script>
import { fireDb } from '~/plugins/firebase.js'
export default {
  data() {
    return {
      writeSuccessful: false,
      readSuccessful: false,
      text: []
    }
  },
  methods: {
    async writeToFirestore() {
      const ref = fireDb.collection('users').doc('AwBWmUpPEq4Hizl8uUhG')
      const document = {
        text: {
          name: 'Jeremy',
          dob: 'May 01 2013'
        }
      }
      try {
        await ref.set(document)
      } catch (e) {
        // console.error(e)
      }
      this.writeSuccessful = true
    },
    async readFromFirestore() {
      const ref = fireDb.collection('users').doc('AwBWmUpPEq4Hizl8uUhG')
      let snap
      try {
        snap = await ref.get()
      } catch (e) {
        console.error(e)
      }
      this.text = snap.data().text
      this.readSuccessful = true
    }
  }
}
</script>
