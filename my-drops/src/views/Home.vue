<template>
  <div class="home">
    <main>
      <section>
        <h2>
        A cup of coffee makes your day, doesn’t it? 
        </h2>  
        <router-link to="/myJournal">Track Your Drops</router-link>
      </section>
      <section class="coffee" style="background-image : url('https://source.unsplash.com/collection/1215/')">
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from 'axios';

export default {
  name: "Home",
  components: {
   
  },
  data() {
    return {
      
    }
  },
}
</script>
<style scoped lang="scss">
.home {
  background: lightblue;
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  main {
    width:100%;
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    section {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      a { // <router-link> tag is converted to <a> tag automatically
        text-decoration: none;

        cursor: pointer;
        text-transform: lowercase;
        margin: 0.5rem;
        padding: 0.5em 1.25em;
        letter-spacing: 0.15em;
        font-size: 14px;
        font-weight: bold;
        border: 2px solid #333;
        border-radius: 11px; 
        color: #2c3e50;
      }
    }
    .coffee {
      opacity: 0.8;
      background-size: cover;
      background-repeat: no-repeat;
    }

  }

}
</style>