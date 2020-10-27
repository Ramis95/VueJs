<template>
  <div class="text-input-block">
    <form @submit.prevent="commentSubmit">
      <textarea v-model="comment" @keyup.enter="commentSubmit">
      </textarea><button type="submit">
        <img src="src/assets/documentsend_104490.png">
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: ''
    }
  },
  methods: {
    commentSubmit() {
      if (this.comment.trim()) {
        let newComment = {
          'id': Date.now(),
          'user': 'USER_O1',
          'text': this.comment,
        }
        this.$emit('commentSubmit', newComment)
        this.comment = ''
      }
    }
  }
}
</script>

<style scoped>
textarea {
  margin: 0px;
  resize: none;
  height: 100px;
  outline: none;
  padding: 15px;
  width: calc(100% - 70px);
  border: 1px solid lightgrey;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

button {
  padding: 0;
  width: 70px;
  border: none;
  height: 100px;
  background: #41b882;
  vertical-align: top;
  outline: none !important;
  cursor: pointer;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

button img {
  height: auto;
  width: calc(100% - 28px);
}

.text-input-block {
  height: 100px;
  margin-top: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 4px 4px 10px #00000030;
}
</style>
