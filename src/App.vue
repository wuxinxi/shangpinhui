<template>
  <div id="app">
    <TopView />
    <router-view></router-view>
    <BottomView v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import TopView from './components/top/TopView'
import BottomView from './components/bottom/BottomView'


export default {
  name: 'App',
  components: {
    TopView,
    BottomView,

  }
}
</script>

<style></style>
