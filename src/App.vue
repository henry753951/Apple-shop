<template>
  <div class="viewport">
      <navbar/>
      <router-view/>
      <footer_/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.viewport{
  display:flex;
  flex-direction: column;
  min-height: 100%;
}
</style>

<script>
import navbar from '@/components/navbar'
import footer_ from '@/components/footer'
export default {
  components:{
    navbar,footer_
  }
}
</script>
