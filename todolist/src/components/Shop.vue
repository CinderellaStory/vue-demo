<!-- 问题一：标题怎么从data（）里获取 -->
<!-- 问题二：默认选中 Shop -->
<template>
    <div class="Shop">
    	<h1>商城活动</h1>
        <div class="ShopNav">
        	<ul>
	            <router-link tag="li" v-for="(item,index) in items" :to="item.to" :key="index">
	                {{item.text}}
	            </router-link>
	        </ul>
        </div>
        <div>
			<router-view></router-view>
	    </div>
    </div>
</template>
<script>
import ShopMall from '../components/Shop/ShopMall'
import GoodsDetail from '../components/Shop/GoodsDetail'
import Cart from '../components/Shop/Cart'
import Buy from '../components/Shop/Buy'

export default {
        data(){
            return{
                // "title":{
                //     shop:'商城首页',
                //     cart:'购物车',
                //     details:'商品详情'
                // },
                items:[
                    {
                        text:'商城首页',
                        to:'/Shop/ShopMall'
                    },
                    {
                        text:'购物车',
                        to:'/Shop/Cart'
                    },
                    {
                        text:'购买',
                        to:'/Shop/Buy'
                    }
                ]
            }
        }
    }
</script>
<style scoped lang="less">
    .Shop{
    	width:940px;
    	margin:0 auto;
		.ShopNav{
			width:100%;
			height:40px;
			line-height:40px;
			background:#900000;
			ul{
				display:flex;
				li{
					flex:1;
					text-align:center;
					display:inline-block;
					color:#fff;
					cursor:pointer;
					&:hover{
						background:#17AA52;
					}
                    &.router-link-active{
                        background:#17AA52;
                    }
                    a.router-link-active {
                      background: yellow;
                    }
				}
			}
		}
	}
</style>
