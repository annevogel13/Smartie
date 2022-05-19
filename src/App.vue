<template>
  <header>
    <img alt="Logo Code Gorilla" class="logo" src="./assets/logo.png" width="125" height="125" />
  </header>
  <div id = 'nav'>
    <router-link to ="/">Home</router-link>
    <router-link to ="/About">About</router-link>
    <router-link to ="/Profile"> Profile page</router-link>
    
  </div>
  
  <div class="container">
      <router-view></router-view>
  </div>
</template>

<script>


</script>
<style>
  body {
    background-image : linear-gradient(#dbede3, #d8d2e6); /* ipv van de background image uit het handleidingsboek */ 
  }
</style>