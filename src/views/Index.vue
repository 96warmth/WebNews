<template>
    <div class="box">
    	<div class="box-top">
				  <el-col :span="5"><div class="grid-content bg-purple"><h2>今日爬取新闻数：{{count}}</h2></div></el-col>
				  <el-col :span="2" :offset="6"><div class="grid-content bg-purple"><el-button type="primary" round>立即爬取</el-button></div></el-col>
    	</div> 	
    	<div>
    	<div>
    			<div >
	    			<h2>媒体列表：</h2>
	    		</div>
	    		<div class="list">
		    		<div >
		    			<span >凤凰网：</span><el-button type="primary" round>爬取</el-button>
		    		</div>
		    		<div >
		    			<span >凤凰网：</span><el-button type="primary" round>爬取</el-button>
		    		</div>
		    		<div >
		    			<span >凤凰网：</span><el-button type="primary" round>爬取</el-button>
		    		</div>
		    		<div >
		    			<span >凤凰网：</span><el-button type="primary" round>爬取</el-button>
		    		</div>
	    		</div>
	    </div>
    	</div> 	
    	<div class="box-foot">
	    		<h2>新闻列表：</h2>
		<div class="tm-sou">
        	<div class="time">
					<span>日期：</span>
						  <el-date-picker
						      v-model="value1"
						      type="date"
						      placeholder="选择日期">
						   </el-date-picker>
			</div>
		
			<div class="source">	
					<span>来源：</span>
					    <el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
			</div>	
		
		</div>
		<div class="table">
			<el-table
			    :data="tableData"
			    style="width: 100%"
			    :row-class-name="tableRowClassName">
			<el-table-column
			      prop="date"
			      label="标题"
			      width="300">
			</el-table-column>
			<el-table-column
			      prop="name"
			      label="来源"
			      width="200">
			</el-table-column>
			<el-table-column
			      prop="address"
			      label="操作"
			      width="150">
			</el-table-column>
			</el-table>		
		</div>
			</div>
	</div>
</template>

<style scoped>
	.box{
		padding: 40px;
		border-bottom: #DCDCDC solid 1px;
		
	}
	.box-top{
		height:100px;
		border-bottom: #DCDCDC solid 2px;
		margin-bottom:40px ;
		
	}
	.bg-purple{
		line-height: 10px;
	}
	.list div{
		padding-bottom:20px ;
		padding-left: 110px;
	}
	.tm-sou{
		height:70px;
		display: flex;
		padding-left: 110px;
	}
	.time,.source{
		width:35%;
		line-height: 70px;
	}
	.table{
		padding-left: 100px;
		padding-top: 20px;
		}
</style>


<script>
  export default {
  	name:'Index',
  	data() {
      return {
      	count:0,
      	value:'',
      	value1:'',
      	options:[],
      	data:[],
      	tableData:[]
      	

      }
    },
   	mounted(){
			this.navFlag=this.$route.name;
			this.$axios.post('/today_count').then(res=>{
				if(res.data.status=='success'){
					this.count = res.data.data.count
				}else{
					this.$message(res.data.data.msg)
				}
				console.log(res);
			}).catch(err=>{
				
			})
		},
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    }

  }
</script>