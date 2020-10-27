<template>
  <div id="main">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <CommentComponent></CommentComponent>
        </div>
        <div class="col-md-3">
<!--          <Tag></Tag>-->
          <Profile></Profile>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Tag from './components/Tag'
import Profile from './components/Profile'
import CommentComponent from "./components/CommentComponent";

export default {
  data() {
    return {}
  },
  components: {
    'Tag': Tag,
    'Profile': Profile,
    'CommentComponent': CommentComponent
  }
}
</script>

<style>

body {
  font-family: 'Libre Franklin', sans-serif;
}

#main {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  padding: 20px 0;
  background: #eeeeee;
  background-size: 100% 100%;
}
</style>
