<template>
  <div id="app">
		<div class="nav-box">
			<ul class="nav">
				<router-link :to="idx" tag="li" event="mouseover">
					<i class="fa fa-home"></i>
					<span>home</span>
				</router-link>

				<li>
					<router-link :to="{path:'/about'}" event="mouseover">about</router-link>
				</li>
				<li>
					<router-link to="/document" event="mouseover">document</router-link>
				</li>
				<li>
					<router-link to="/user" event="mouseover">user</router-link>
				</li>
			</ul>
		</div>
		<router-view name="slider" class="" />
    <router-view class="center" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return{
  		idx:'/home'
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
