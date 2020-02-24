<template>
  <div class="mainbody">
    <Header class="no-flex-grow"></Header>
    <b-container fluid class="flex-grow  mt-4">
      <nuxt></nuxt>
    </b-container>
  </div>
</template>
<style scoped>
.mainbody {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.no-flex-grow {
  flex-grow: 0;
}
.flex-grow {
  flex: 1;
}
</style>
<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  }
}
</script>
