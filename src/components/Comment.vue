<template>
  <div class="comment">
    <div class="col-md-3">
      <p class="nickname">{{ userName }}</p>
    </div>
    <div class="col-md-8">
      <p class="text">{{ commentText }}</p>
    </div>
    <div class="col-md-1">
      <button @click="removeComment(id)">
        <img src="src/assets/delete_4219.png">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'id', 'userName', 'commentText'
  ],
  methods: {
    removeComment(id){
      this.$emit('removeComment', id)
    }
  }
}
</script>

<style scoped>

.nickname {
  margin: 0;
  color: #3c4043;
  line-height: 1;
  padding: 0 15px;
  font-size: 20px;
  text-align: center;
}

.comment {
  color: #3c4043;
  font-size: 14px;
  padding: 15px 0;
  line-height: 1.5;
  overflow: hidden;
  text-align: left;
  border-radius: 10px;
  letter-spacing: 1px;
  margin: 0 15px 10px 15px;
  border: 1px solid #f0f0f0;
  box-shadow: 4px 4px 10px #00000030;
}

.text{
  margin-bottom: 0;
  text-align: left;
}

button
{
  border: none;
  background: white;
  outline: none !important;
}

button img
{
  width: 20px;
}

</style>
