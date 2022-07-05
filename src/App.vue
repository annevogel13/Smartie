<template>
  <header>

  </header>
  <div class='navbar'>
    <ul>
      <li>
        <router-link to="/">
          <img alt="Logo" class="logo" src="./assets/logo2.png" width="125" height="125" />
        </router-link>
      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <br>
      <li>
        <router-link to="/About">About</router-link>
      </li>
      <li>
        <router-link to="/Presentatie">Presentatie</router-link>
      </li>
      <li>
        <router-link to="/StageRapport">Stage rapport</router-link>
      </li>
      <br>
      <li v-if="this.$store.state.user.loggedIn && !this.$store.state.user.profile">
        <router-link to="/ProfileUser"> Profile page</router-link>
      </li>
      <li v-if="this.$store.state.user.loggedIn">
        <router-link to="/DashboardUser"> Dashboard</router-link>
      </li>
      <li v-if="this.$store.state.user.loggedIn">
        <router-link to="/Swipe"> Swipe page</router-link>
      </li>
      <br>
      <li v-if="!this.$store.state.user.loggedIn">
        <router-link to="/RegisterUser"><img src="/point.png" class="pointer"></router-link>
        <button id="pointer" class="logout">
          <router-link to="/RegisterUser">Log in</router-link>
        </button>

      </li>
      <li v-if="this.$store.state.user.loggedIn">
        <button class="logout" @click="log_out()">
          <router-link to="/">Log uit</router-link>
        </button>
      </li>
      <li>

      </li>

    </ul>
  </div>

  <div class="format">
    <router-view></router-view>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {

  methods: {
    log_out() {

      const auth = getAuth();
      signOut(auth).then(() => {
        this.$store.commit('loggingOut')
        console.log("Sign-out successful")
        this.$router.push('/')
      }).catch((error) => {
        console.log("An error happened", error.message)
      })
    },
  }
}

</script>
<style  >
.pointer {
  width: 90px;
  display: inline-block;
  margin: 0px;
  vertical-align: top;
}

.logout {
  display: inline-block;
}

.format {
  width: 75%;
  min-height: 100%;
  float: right;
  margin: 30px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

body {
  /* background-image: linear-gradient(#dbede3, #d8d2e6); #D81159, #8F2D56
  background-image: linear-gradient(#00A9A5, #0B5351); 
  
  https://coolors.co/235789-f1d302-9bb1ff-bfd7ff-ff7d00
*/
  background-image: linear-gradient(#BFD7FF, #9BB1FF);
  background-color: #BFD7FF;

  background-repeat: no-repeat;
  background-size: cover;
  min-height: 900px;
}

.navbar {
  overflow: hidden;
  position: fixed;
  background-color: #F1D302;
  /*#FF7D00 ; 
  https://coolors.co/235789-f1d302-9bb1ff-bfd7ff-ff7d00
    #270043
  */
  margin-left: 10px;
  top: 0;
  width: 15%;
  height: 100%;
  text-align: center;
  padding: 10px;
}

ul {
  list-style-type: none;
}

a {
  margin: 15px;
  text-decoration: none;
  color: black;
}

a:hover {
  color: white;
}

.logo {
  border-radius: 50%;
  margin: 10px;
  padding-bottom: 10px;
}

button {
  background-color: #F1D302;
  border-color: #270043;

}

button:hover {
  color: white;
  background-color: #270043;
  border-color: #270043;
}
</style>