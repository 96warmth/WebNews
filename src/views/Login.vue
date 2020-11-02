<template>
	<div>
		<el-form   label-width="80px" class="box">
			<el-form-item label="账号">
				<el-input v-model="username"></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input type="password" v-model="pw"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default{
		name:'Login',
		data(){
			return{
					username:'',
					pw:''
			}
		},
		methods:{
			onSubmit(){
				this.$axios.post('/login',{
					username:this.username,
					pw:this.pw
				}).then(res=>{
//					console.log(res)
					if(res.data.status=='success'){
						localStorage.setItem('token',res.data.data.token);
//						console.log(res.data.data.token);
//						console.log(localStorage.setItem('token',res.data.data.token));
						localStorage.setItem('user',JSON.stringify(res.data.data.user));
						this.$router.replace({name:'index'})
					}else{
						console.log(res.data.msg)
					}
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
	.box{
		width: 600px;
		height:300px;
		margin: 0 auto;
		margin-top: 50px;
		border: #DCDCDC solid 2px;
		padding-top: 50px;
	}
	
	input{
		width:300px;
		height: 30px;
		line-height: 20px;
		margin-bottom: 30px;
	}
</style>