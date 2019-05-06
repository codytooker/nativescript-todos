<template web>
  <div class="pt-16 w-full h-full bg-grey-lightest">
    <div class="w-1/2 mx-auto">
      <router-view />
    </div>
  </div>
</template>

<template native>
  <home />
</template>
<script>
import Home from '~/views/Home'
const { VUE_APP_MODE } = process.env

export default {
  components: {
    Home,
  },
  data() {
    return {
      navbarTitle: `App.vue`,
    }
  },
  created() {
    if (VUE_APP_MODE === 'web') return
    console.log(this.$$navigator)
    this.$navigator.navigate('home')
  },
}
</script>

<style>
html,
body {
  height: 100%;
}
@import 'styles/main.css';
</style>

<style native>
@import 'styles/main.css';
</style>
