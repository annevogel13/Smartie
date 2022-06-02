<template>
  <header>

  </header>
  <div class='navbar'>
    <ul>
      <li>
        <router-link to="/">
          <img alt="Logo Code Gorilla" class="logo" src="./assets/logo.png" width="125" height="125" />
        </router-link>
      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/About">About</router-link>
      </li>
      <li v-if="!this.$store.state.user.hasProfile">
        <router-link to="/ProfileUser"> Profile page</router-link>
      </li>
      <li v-if="this.$store.state.user.loggedIn">
        <router-link to="/DashboardUser"> Dashboard</router-link>
      </li>
      <li>
        <router-link to="/Swipe"> Swipe page</router-link>
      </li>
      <li v-if="!this.$store.state.user.loggedIn">
        <button class="logout">
          <router-link to="/RegisterUser">Log in</router-link>
        </button>
      </li>
      <li v-if="this.$store.state.user.loggedIn">
        <button class="logout" @click="log_out()">
          <router-link to="/">Log uit</router-link>
        </button>
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
      });
    },
  }
}

</script>
<style  >
.format {
  width: 75%;
  min-height : 100%;
  float: right;
  margin: 30px;
  background: white; 
  padding: 20px;
  border-radius: 10px;
  text-align : center; 
}

body {
  background-image: linear-gradient(#dbede3, #d8d2e6);
  background-repeat: no-repeat;
  background-size: cover;
  min-height : 800px ; 
}

.navbar {
  overflow: hidden;
  background-color: #F29292;
  position: fixed;
  margin-left: 10px;
  top: 0;
  width: 15%;
  height: 100%;
  text-align: center;
  padding : 5px; 
}

ul {
  list-style-type: none;
}

a,
button {
  text-decoration: none;
  color: inherit;
  padding: 5px;
  border-color: #dbede3;
  margin: 15px;
  border-radius: 10px;
}
</style>