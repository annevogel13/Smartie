<template>
  <header>
    <img alt="Logo Code Gorilla" class="logo" src="./assets/logo.png" width="125" height="125" />
  </header>
  <div id = 'nav'>
    <router-link to ="/">Home</router-link>
    <router-link to ="/Profile"> Profile page</router-link>
    <router-link to ="/About">About</router-link>
  </div>
  
  <div class="container">
      <router-view></router-view>
  </div>
</template>

<script>

</script>