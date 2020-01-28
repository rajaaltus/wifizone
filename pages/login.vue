<template>
  <b-container>
    <client-only>
      <FireStoreTest />
      <firebase-ui />
    </client-only>
  </b-container>
</template>
<style>
li {
  list-style-type: none;
}
</style>
<script>
import FirebaseUi from '~/components/FirebaseUi'
import FireStoreTest from '~/components/FireStoreTest'
export default {
  name: 'Login',
  components: {
    FireStoreTest,
    FirebaseUi
  }
}
</script>
