<template>
  <div id="user-profile">
    <div class="user-avatar">
      <img src="/src/assets/w450h4001385925286User.png">
    </div>
    <div class="user-info">
      <p class="nickname">{{ userName }}</p>
      <p class="age">{{ userAge }} y.o</p>
      <p class="desc">{{ userText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: 'USER_O1',
      userAge: 19,
      userText: 'Long text long text long text long text long text ...'
    }
  },
}
</script>

<style scoped>

#user-profile {
  padding: 15px 0;
  background: white;
  border-radius: 10px;
  box-shadow: 4px 4px 10px #00000030;
}

.user-avatar {
  text-align: center;
  border-radius: 100%;
  margin-bottom: 15px;
}

.user-avatar img {
  height: 150px;
}

.nickname {
  color: #3c4043;
  padding: 0 15px;
  font-size: 24px;
  text-align: center;
}

.age, .desc {
  color: #3c4043;
  font-size: 14px;
  text-align: center;
}

p {
  padding: 0 40px;
  letter-spacing: 1px;
  line-height: 1.5;
}

</style>
