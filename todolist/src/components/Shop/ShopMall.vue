<template>
  <div class="ShopMall">
    <div class="Shop">
    	<div class="Group" v-for="(items,i) in data" :key="i">
    		<h2>{{title[i]}}</h2>
	    	<ul>
	    		<router-link v-for="(item,index) in items" :key="index" :to="{name:'GoodsDetail',params:{id:item.id}}" tag="li">
	    			<div class="pic"><img :src="item.pic" alt=""></div>
	    			<div class="GoodDetail">
	    				<p class="GoodsPrice">￥<em>{{item.price}}</em>.00</p>
	    				<p class="GoodsTitle">{{item.title}}</p>
	    			</div>
	    		</router-link>
	    	</ul>
    	</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
	data(){
		return{
			title:{
				news:'新品上线',
				hots:'热门手机',
				digital:'智能数码'
			},
      data:{}
		}
	},
  created(){
      const _this = this;
      axios.get('http://localhost:9999/static/home.json').then(res =>{
      _this.data = res.data;
      })
  }
}
</script>

<style scoped lang="less">
.ShopMall{
    margin-bottom: 100px;
	.Shop{
		.Group{
			h2{
				color: rgba(72, 61, 139, 0.6);
			    font-size: 30px;
			    font-weight: 340;
			    margin:20px 20px;
			}
			ul{
				display:flex;
				li{
					flex:1;
					background:#fff;
					width: 240px;
					float:left;
					cursor:pointer;
					margin:0 10px;
					.pic{
						img{
							display: block;
							width:100%;
							height:100%;
						}
					}
					.GoodDetail{
						width:94%;
						padding:10px;
						.GoodsPrice{
							font-size:16px;
							color:red;
							em{
								font-size:24px;
								font-style:normal;
							}
						}
						.GoodsTitle{
							line-height: 30px;
						    height: 30px;
							font-size:14px;
						    overflow:hidden;
						}
					}
				}
			}
		}
	}
}
</style>
