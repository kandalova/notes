<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/git">Git</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #0d1815;
}
#nav {
  padding: 30px;
  text-align: center;
}

#nav a{
  font-weight: bold;
  color: #2d5c4a;
}

#nav a.router-link-exact-active {
  color: #52b88d;
}

h1{
  text-align: center;
  color: #52b88d;
}
</style>
