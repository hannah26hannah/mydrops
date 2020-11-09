<template>
  <div id="app">
    <div id="nav">
      <Header></Header>

    </div>
    <router-view />
  </div>
</template>
<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
/* 전역 클래스  */
*,
*:before,
*:after {
  box-sizing: border-box; }

/* buttons */
button {
  cursor: pointer;
  text-transform: lowercase;
  margin: 0.5rem;
  padding: 0.5em 1.25em;
  letter-spacing: 0.15em;
  font-size: 14px;
  font-weight: bold;
  border: 2px solid #333;
  border-radius: 11px; }
  
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
