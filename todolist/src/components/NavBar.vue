<template>
  <div class="NavBar">
    <ul>
    	<router-link v-for="(item,index) in items" :key="index" :to="item.to" tag="li">
    		{{item.text}}
    	</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
  	return{
  		items:[
  			{
  			 text:'添加用户',
  			 to:'/'
  			},
  			{
  			 text:'计划清单',
  			 to:'/PlanList'
  			},
  			{
  			 text:'商城首页',
  			 to:'/Shop'
  			}
  		]
  	}
  }
}
</script>

<style scoped lang="less">
.NavBar{
	width:100%;
	background:#46b899;
	color:#fff;
	ul{
		display:flex;
		li{
			flex:1;
			padding:14px 0;
			text-align:center;
			cursor:pointer;
      &:hover{
        background:#900000;
      }
       &.router-link-exact-active{
          background:#900000;
      }
		}
	}
}
</style>
