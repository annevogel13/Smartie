<template>
  <header>
    
  </header>
  <div class  = 'navbar'>
    <ul>
      <li><img alt="Logo Code Gorilla" class="logo" src="./assets/logo.png" width="125" height="125" /></li>
    <li><router-link to ="/">Home</router-link></li>
    <li><router-link to ="/About">About</router-link></li>
    <li><router-link to ="/Profile"> Profile page</router-link></li>
    </ul>
  </div>
  
  <div class="format">
      <router-view></router-view>
  </div>
</template>

<script>


</script>
<style>

  .format {
      max-width: 600px;
      margin: 30px auto;
      background: white;
      text-align: left;
      padding: 40px;
      border-radius: 10px;
  }

  body {
    background-image : linear-gradient(#dbede3, #d8d2e6); /* ipv van de background image uit het handleidingsboek */ 
    background-repeat: no-repeat;
    background-size: cover ;
  }

  .navbar {
    overflow : hidden ;
    background-color: #F29292; 
    position : fixed ; 
    top : 0 ; 
    width : 15%; 
    height : 100%;
  }

  ul {
    list-style-type:  none ;
    margin : 10; 
    padding : 10 ; 
    justify-content: space-around;
    
  }
</style>