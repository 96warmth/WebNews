<template>
	<el-container>
    <el-aside width="200px" class="leftbox">
		    <el-menu
		      :default-active="navFlag" class="el-menu-vertical-demo"  >
		     
		      <el-menu-item index="index" @click="go('index')"><!--//实现点击跳转-->
		        <i class="el-icon-menu"></i>
		        <span slot="title" >新闻</span>
		      </el-menu-item>
		      <el-menu-item index="setup" @click="go('setup')">
		        <i class="el-icon-document"></i>
		        <span slot="title">设置</span>
		      </el-menu-item>
		      <el-menu-item index="account" @click="go('account')">
		        <i class="el-icon-setting"></i>
		        <span slot="title">账号</span>
		      </el-menu-item>
		    </el-menu>
</el-aside>
   
<el-main class="bigbox">
<router-view />
</el-main>

</el-container>
</template>
<style scoped>
	.bigbox,.leftbox{
		 border: solid 1px lightgrey;
	}
</style>
<script>

export default {
	name: 'Home',
	data(){
		return {
		      navFlag:"index",
    		  isCollapse:false
		    }
	},
	mounted(){
		this.navFlag=this.$route.name;
	},
	methods:{
		go(name){
			console.log(name)
			this.$router.push({name})
		}.catch(()=>{})
	}
}

</script>
