<template>
  <div id="comment-block">

    <div class="comment-show">
      <div v-if="comments.length">
        <Comment
          v-for="comment in allComments"
          :id="comment.id"
          :userName="comment.user"
          :commentText="comment.text"
          @removeComment="deleteComment">
        </Comment>
      </div>
      <p v-else class="no-comments">
        No comments
      </p>
    </div>

    <TextInput @commentSubmit="addComment">
    </TextInput>

  </div>
</template>

<script>

import {mapGetters} from 'vuex'

import Comment from "./Comment";
import TextInput from "./TextInput";

export default {
  data() {
    return {
      comments: [],
    }
  },
  computed: mapGetters(['allComments']),
  components: {
    'Comment': Comment,
    'TextInput': TextInput
  },
  mounted() {
    this.$store.dispatch('commentsStore')
  },
  methods: {
    addComment(comment) {
      this.comments.unshift(comment)
      this.saveComments()
    },
    deleteComment(id) {
      this.comments = this.comments.filter(t => t.id !== id)
      this.saveComments()
    },
    saveComments() {
      localStorage.setItem('comments', JSON.stringify(this.comments))
    },
  }
}
</script>

<style>

.comment-show {
  height: 260px;
  padding: 15px 0;
  overflow: hidden;
  background: white;
  overflow-y: scroll;
  border-radius: 10px;
  box-shadow: 4px 4px 10px #00000030;
}

.no-comments {
  text-align: center;
}

</style>
