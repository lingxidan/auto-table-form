<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style lang="less">
@import url("./assets/css/cssreset.css");
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-upload {
  width: 100%;
  height: 100%;
  .el-upload-dragger {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    i {
      font-size: 10vh;
      transition: 0.3s;
    }
    &:hover {
      i {
        color: #409eff;
      }
    }
  }
}
.el-button {
  height: 4vh;
  padding: 0.5vh 1.5vw !important;
  font-size: 1.6vh !important;
}
</style>
