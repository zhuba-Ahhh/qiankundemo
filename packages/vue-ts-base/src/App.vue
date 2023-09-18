<template>
  <nav>
    <router-link to="/vue">vue</router-link> |
    <router-link to="/vue-tsx">vue-tsx</router-link> |
    <router-link to="/vue-vite">vue-vite</router-link> |
    <router-link to="/react">react</router-link> |
    <router-link to="/react-vite">react-vite</router-link> |
    <router-link to="/html-music">html-music</router-link> |
    <router-link to="/html-study">html-study</router-link>
  </nav>
  <div id="container" />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#container {
  height: 100%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
