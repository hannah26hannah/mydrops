<template>
  <header>
      <nav>
        <section class="links">
            <router-link class="menu logo" to="/"></router-link> |
            <router-link class="menu" to="/about">About</router-link> |
            <router-link class="menu" to="/howToUse">How To Use</router-link> |
            <router-link class="menu" to="/community">Community</router-link> |
            <router-link class="menu" to="/tryNewBag">Try New Bag</router-link> |
            <router-link class="menu" to="/myJournal">My Journal</router-link>
        </section>
        
        <!-- 지금 아래 두 버튼은 모두 다른 웹 페이지로 넘어가진 않고 JS action을 불러일으킬 용도로 사용됨.  -->
        <section class="btns">
            <button type="button" name="button" class="logInBtn">Log in</button>
            <button type="button" name="button" class="registerBtn">Register</button>
        </section>
      </nav>
  </header>
</template>

<script>

export default {

}
</script>

<style scoped lang="scss">
@charset "UTF-8";
@import url("https://fonts.googleapis.com/css?family=Montserrat:600&display=swap");

nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
}
a {
  text-decoration: none;
  font-family: "Montserrat", sans-serif; }

  .logo {
      display: inline-block;
        width: 152px;
        height: 35px;
        margin: 2px 0px 1px 10px; 
        background-image: url('../assets/img/logo.png');
        background-repeat: no-repeat;
        background-size: cover;
  

  }
</style>