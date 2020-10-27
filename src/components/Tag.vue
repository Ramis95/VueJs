<template>
  <div id="tag-block">
    <div v-for="tag in tags" class="one-tag">
      <label>
        <input data-value="tag.name" type="radio" name="tag">
        <h4>{{ tag.name }}</h4>
      </label>
    </div>
  </div>
</template>

<script>
export default ({
  data() {
    return {
      tags: [
        {id: 0, name: 'All tags'},
        {id: 1, name: 'red'},
        {id: 2, name: 'yellow'},
        {id: 3, name: 'green'},
      ]
    }
  }
})
</script>

<style scoped>

h4 {
  margin-left: 5px;
  display: inline-block;
}

#tag-block {
  height: 260px;
  overflow: hidden;
  background: white;
  padding: 15px 15px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 4px 4px 10px #00000030;
}

</style>
