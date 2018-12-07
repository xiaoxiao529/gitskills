<template>
	<div class="user">
		<div class="user-list">
			<router-link style="padding: 0 20px;" :to="'/user/'+item.id" :key="index" v-for="item,index in userList">{{item.userName}}</router-link>
		</div>
		<div class="user-list" style="font-size: 20px;">
			<p>姓名：{{userInfo.userName}}</p>
			<p>性别：{{userInfo.sex}}</p>
			<p>爱好：{{userInfo.hobby}}</p>
		</div>
	</div>
</template>
<script>
	let data = [
        {
            id:1,
            userName:"leo1",
            sex:'男',
            hobby:'写代码'
        },
        {
            id:2,
            userName:"leo2",
            sex:'男',
            hobby:'唱歌'
        },
        {
            id:3,
            userName:"leo3",
            sex:'男',
            hobby:'读书'
        }
    ]
	export default{
		name:"User",
		data(){
			return {
				userList:data,
				userInfo:{}
			}
		},
		watch:{  //监测Vue实例上的数据变动，这里是监听$route
			$route(){
				this.getData();
			}
		},
		created(){  //ajax提交信息也放在这里面
			this.getData();
		},
		methods:{
			getData(){
				let id = this.$route.params.userId;
				this.userInfo = this.userList.filter((item)=>{  //this.userList是数组，现在需要返回的是一个对象，所以取数组的第一项
					return item.id == id;
				})[0]
			}
		}
	}
</script>

<style>
</style>