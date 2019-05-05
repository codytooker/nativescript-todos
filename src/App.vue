<template web>
  <div class="pt-16 w-full h-full bg-grey-lightest">
    <div class="w-1/2 mx-auto">
      <router-view />
    </div>
  </div>
</template>

<template native>
  <Page>
    <ActionBar :title="navbarTitle" />
    <FlexboxLayout class="layout">
      <Button text="Home" @tap="goToHomePage" row="0" />
    </FlexboxLayout>
  </Page>
</template>
<script>
const { VUE_APP_MODE } = process.env

export default {
  data() {
    return {
      navbarTitle: `App.vue`,
    }
  },
  methods: {
    // goToHomePage() {
    //   this.goTo('home')
    // },
    // goToAboutPage() {
    //   this.goTo('about')
    // },
    // goTo(route) {
    //   VUE_APP_MODE === 'web' ? this.$router.push(route) : this.$navigator.navigate(route)
    // },
  },
}
</script>

<style>
html,
body {
  height: 100%;
}
@import 'https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css';
</style>
