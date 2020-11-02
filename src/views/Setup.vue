<template>
  <div class="news">
  	
<el-container>

<el-container>

    <el-main>
    	<div class="mains">
    			<div class="tmgap">爬取时间间隔<input type='text' value='10' class="time">小时</div>	   
	    </div>
	       		<div class='crawl2'>
    			<div class="crawl22">
    				<div>
    						<div class='q2'>
	    							<span id='q1'>媒体列表：</span>
	    					</div>
	    					
	    					 <!--<el-checkbox-group v-model="checkList">
							    <el-checkbox label="凤凰网"></el-checkbox>
							    <el-checkbox label="凤凰网"></el-checkbox>
							    <el-checkbox label="凤凰网"></el-checkbox>
							    <el-checkbox label="凤凰网"></el-checkbox>
							    <el-checkbox label="凤凰网"></el-checkbox>
							  </el-checkbox-group>-->
								    					
	    					<div class='q3'>
	    							 <el-checkbox v-model="checked">凤凰网</el-checkbox>
	    					</div>
	    					<div class='q3'>
	    							 <el-checkbox v-model="checked">凤凰网</el-checkbox>
	    					</div>
	    					<div class='q3'>
	    							 <el-checkbox v-model="checked">凤凰网</el-checkbox>
	    					</div>
	    					<div class='q3'>
	    							 <el-checkbox v-model="checked">凤凰网</el-checkbox>
	    					</div>
	    					<div class='q3'>
	    							 <el-checkbox v-model="checked">凤凰网</el-checkbox>
	    					</div>
	    					<div class='q3'>
	    							 <el-checkbox v-model="checked">凤凰网</el-checkbox>
	    					</div>
	    			</div>
    			</div>
    		</div> 	
	    
    </el-main>
  </el-container>
</el-container>
		 
  </div>
</template>

<style>
	.mains{
			display: flex;
			justify-content:left;
	}
	.crawl1{
		height:100px;
		line-height: 90px;
		border-bottom:gainsboro solid 1px ;
		
}
	.crawl11{
			height:30px;
			line-height: 90px;
			display: flex;
			justify-content:space-between;
	}
	.crawl2{
		height: 300px;
		padding-left: 70px;
		padding-top: 30px;
	}
	.crawl22{
			display: flex;
			justify-content:left;
	}
	.crawl3{
		 	padding-top:30px ;
			height: 50px;
			display: flex;
/*			flex-direction: column;*/
			justify-content:left;
	}
	.crawl4{
		height: 50px;
		display: flex;
/*			flex-direction: column;*/
		justify-content:left;
	}
	.crawl4 span{
			line-height: 40px;
	}
	.block{
		padding-right: 50px;
	}
	#q1{
    font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC';
    font-weight: 650;
    font-style: normal;
    font-size: x-large;
    }
  .q2{
    	padding-top:20px ;
    }
  .q3{
    	padding-top:20px ;
    	padding-left: 30px;
    }
  .tmgap{
  	font-size:medium;
  	font-weight:bold ;
  	padding-left: 70px;
  }
  .time{
	width:50px;
  }
</style>


