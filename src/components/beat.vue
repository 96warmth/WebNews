<template>
	 <el-aside width="200px">
		  	<el-row class="tac">
		  <!--<el-col :span="8">-->
		    <el-menu
		      default-active="2"
		      class="el-menu-vertical-demo"
		      @open="handleOpen"
		      @close="handleClose">
		       <!--<el-menu-item index="1">
		        <i class="el-icon-location"></i>
		        <span slot="title">login</span>
		      </el-menu-item>-->
		      <el-menu-item index="2">
		        <i class="el-icon-menu"></i>
		        <span slot="title">新闻</span>
		      </el-menu-item>
		      <el-menu-item index="3">
		        <i class="el-icon-document"></i>
		        <span slot="title">设置</span>
		      </el-menu-item>
		      <el-menu-item index="4">
		        <i class="el-icon-setting"></i>
		        <span slot="title">账号</span>
		      </el-menu-item>
		    </el-menu>
<!--		  </el-col>-->
		</el-row>
</el-aside>
</template>

<script>
</script>

<style>
	
</style>