<template>
  <header>

  </header>
  <div class='navbar'>
    <ul>
      <li><img alt="Logo Code Gorilla" class="logo" src="./assets/logo.png" width="125" height="125" /></li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/About">About</router-link>
      </li>
      <li>
        <router-link to="/ProfileUser"> Profile page</router-link>
      </li>
      <li>
        <router-link to="/DashboardUser"> Dashboard</router-link>
      </li>
      <li>
        <router-link to="/Swipe"> Swipe page</router-link>
      </li>
      <li>
        <router-link to="/RegisterUser">Register</router-link>
      </li>
      <li><button class="logout" @click="log_out()">Uitloggen</button></li>
    </ul>
  </div>

  <div class="format">
    <router-view></router-view>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  data() {
    return {

    }
  },
  methods: {
    log_out() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$store.sate.UID = ''
        console.log("Sign-out successful")
      }).catch((error) => {
        console.log("An error happened", error.message)
      });
    }
  }
}

</script>
<style  >
.format {
  max-width: 70%;
  float: right;
  margin-top: 30px;
  margin-bottom: 30px;
  background: white;
  text-align: left;
  padding: 40px;
  margin-right: 5%;
  border-radius: 10px;
}

body {
  background-image: linear-gradient(#dbede3, #d8d2e6);
  /* ipv van de background image uit het handleidingsboek */
  background-repeat: no-repeat;
  background-size: cover;
}

.navbar {
  overflow: hidden;
  background-color: #F29292;
  position: fixed;
  margin-left: 10px;
  top: 0;
  width: 15%;
  height: 100%;
}

ul {
  list-style-type: none;
  margin: 10;
  padding: 10;
  justify-content: space-around;
}

.logout {
  background-color: #dbede3;
  border-color: #dbede3;
  margin: 10px;
  border-radius: 10px;
  padding: 10px 15px;
}
</style>