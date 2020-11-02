<template>
<div class="account">
    	<div class="acc-pw">
    			<div class="acc"><h4>账号：admin</h4></div>
    			<div><span><el-button type="primary" round>修改密码</el-button>	</span></div> 
    	</div>
	    <div class="pw">
	    		<div >旧密码：<input type="text" /></div>
	    		<div >新密码：<input type="text" /></div>
	    		<div>确认新密码：<input type="text" /></div>
	 
			    <div class="out">
			    	 <el-button type="primary">退出登录</el-button>
			    </div>
	    </div>
  </div>
</template>

<style scoped>
.account{
	padding-top: 30px;
	padding-left: 50px;
}
.acc-pw{
	display: flex;
	min-height: 50px;
}
.acc-pw div{
	width: 25%;
}
.acc{
	line-height: 0px;
}
.pw{
	padding-top: 30px;
	height:250px;
}
.pw div{
	padding-bottom: 30px;
}
.out{
	padding-top: 30px;
	padding-left:100px ;
}
</style>


