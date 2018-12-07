<template>
  <div class="about">
  	<ul>
  		<router-link :to="{name:'Work'}" exact tag="li">
  			<a>work</a>
  		</router-link>
  		<router-link :to="{name:'Study'}" tag="li">
  			<a>study</a>
  		</router-link>
  		<router-link :to="{name:'Hobby'}" tag="li">
  			<a>hobby</a>
  		</router-link>
  	</ul>
  	<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: '关于我'
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

</style>
