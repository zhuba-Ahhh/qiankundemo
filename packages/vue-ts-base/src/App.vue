<template>
  <nav>
    <!-- <router-link to="/vue">vue</router-link> |
    <router-link to="/vue-tsx">vue-tsx</router-link> |
    <router-link to="/vue-vite">vue-vite</router-link> |
    <router-link to="/react">react</router-link> |
    <router-link to="/react-vite">react-vite</router-link> |
    <router-link to="/html-music">html-music</router-link> |
    <router-link to="/html-study">html-study</router-link> -->
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="/vue" name="vue" />
      <el-tab-pane label="/vue-tsx" name="vue-tsx" />
      <el-tab-pane label="/vue-vite" name="vue-vite" />
      <el-tab-pane label="/react" name="react" />
      <el-tab-pane label="/react-vite" name="react-vite" />
      <el-tab-pane label="/html-music" name="html-music" />
      <el-tab-pane label="/html-study" name="html-study" />
    </el-tabs>
  </nav>
  <div id="container" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import type { TabsPaneContext } from "element-plus";

const router = useRouter();
const activeName = ref("first");

const handleClick = (tab: TabsPaneContext) => {
  router.push(tab.props.label);
};
</script>

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
