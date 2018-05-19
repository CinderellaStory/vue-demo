<template>
	<div class="nav">
		<div class="nav-item" v-for="(item,index) in items" :key="index" @mouseenter="mouseEnter(index)" @mouseleave="mouseLeave" :class="{active:index==isActive}">
			<span class="fl">{{index+1}}、</span>
			<span>{{item.text}}</span>
			<em @click="del">X</em>
		</div>
	</div>
</template>
<script>
export default {
  data(){
	  return{
		  isActive:false,
		  items:[
			  {
				  text:'吃饭',
			  },
			  {
				  text:'睡觉'
			  },
			  {
				  text:'上网'
			  },
			  {
				  text:'跑步'
			  },
			  {
				  text:'爬山'
			  }
		  ]
	  }
  },
  methods:{
	//   鼠标移入
	  mouseEnter(index){
		this.isActive = index;
	  },
	//   鼠标移除
	  mouseLeave(){
		  this.isActive=null;
	  },
	// 删除列表某一项
	del(index){
		this.items.splice(index,1);
	}
  }
}
</script>
<style scoped lang="less">
.nav{
	width: 200px;
	.nav-item{
		width: 100%;
		height: 40px;
		padding-left: 10px;
		line-height: 40px;
		cursor:pointer;
		background-color: #f1f1f1;
		color: #333;
		&.active{
			background: #0190fe;
			color: #fff;  // 选中字体背景跟着改变
		}
		em{
			font-style: normal;
			float: right;
			padding-right: 10px;
			display: none;  //默认删除图标隐藏
		}
		&.active em{
			display: block;   // 鼠标放上去删除图标显示
		}
	}
}
</style>
