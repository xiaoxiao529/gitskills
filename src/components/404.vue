<template>
  <div class="about">
  	{{msg}}
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: '404，您要访问的页面不存在！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
