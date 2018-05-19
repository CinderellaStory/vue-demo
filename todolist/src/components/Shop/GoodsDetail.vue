<!-- 怎么传递数据 -->
<template>
 <div>
	  <div class="GoodDetail">
				<div class="DetailNav">
					<a href="">首页</a> /
					<a href="">{{list.title}}</a>
				</div>
			<div class="GoodsPic-Info ov">
				<div class="GoodsPic fl">
					<div class="pic">
						<img :src="list.img" alt="">
					</div>
					<div class="PicList">
						<ul>
							<!-- <li>
								<a href="javascript:(void)">
									<img :src="list.images.one" alt="">
								</a>
							</li>
							<li>
								<a href="javascript:(void)">
									<img :src="list.images.two" alt="">
								</a>
							</li>
							<li>
								<a href="javascript:(void)">
									<img :src="list.images.three" alt="">
								</a>
							</li>
							<li>
								<a href="javascript:(void)">
									<img :src="list.images.four" alt="">
								</a>
							</li>
							<li>
								<a href="javascript:(void)">
									<img :src="list.images.five" alt="">
								</a>
							</li> -->
						</ul>
					</div>
				</div>
			<div class="GoodsInfo fr">
				<h3>{{list.title}}</h3>
				<div class="PriceBg">
					<dl>
						<dt>价格</dt>
						<dd class="tp-price">￥<i>{{list.price}}.00</i></dd>
					</dl>
					<dl>
						<dt>促销价</dt>
						<dd class="price">￥<em>{{list.sale_price}}.00</em></dd>
					</dl>
				</div>
				<dl>
					<dt>尺码</dt>
					<dd>
						<ul>
						<!--	<li v-for="(size,s) in list">
								<a href="javascript:(void)" @click="Choose(s)" :class="{'current':s==ind}">
									<span>{{size[s]}}</span>
								</a>
							</li>
							-->
							<!-- <li>
								<a href="javascript:(void)"">
									<span>{{list.size[0]}}</span>
								</a>
							</li>
							<li>
								<a href="javascript:(void)"">
									<span>{{list.size[1]}}</span>
								</a>
							</li>
							<li>
								<a href="javascript:(void)"">
									<span>{{list.size[2]}}</span>
								</a>
							</li> -->
						</ul>
					</dd>
				</dl>
				<dl>
					<dt>颜色分类</dt>
					<dd>
						<ul>
							<li>
								<a href="javascript:(void)">
									<span>{{list.color[0]}}</span>
								</a>
							</li>
							<li>
								<a href="javascript:(void)">
									<span>{{list.color[1]}}</span>
								</a>
							</li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt>数量</dt>
					<dd class="amount">
						<input type="text" v-model="list.number">
						<span class="amount-btn">
							<span class="amount-increase" @click="add">▲</span>
							<span class="amount-decrease" @click="reduce">▼</span>
						</span>
						<span>件</span>
						<span>库存{{list.stock}}件</span>
					</dd>
				</dl>
				<div class="Group-Btn">
					<router-link tag="button" v-for="(btn,b) in btns" :to="btn.to" :key="b" :class="btn.class">{{btn.text}}</router-link>
				</div>
			</div>
			</div>
		</div>
		<div class="GoodsContainer">
			<h4>商品详情</h4>
			<div class="GoodsBox" v-html="list.container">
			</div>
		</div>
 </div>
</template>
<script>
import axios from 'axios'

export default{
	data(){
		return{
			value:1,
			ind:0,
			btns:[
				{text:'立即购买',class:'GoBuy',to:'/Shop/Buy'},
				{text:'加入购物车',class:'AddCart',to:'/Shop/Cart'}
			],
			list:[]
		}
	},
	methods:{
		add(){
    console.log(this.list.number);
			if (this.list.number===10) {
				alert("最多只能选择10个")
			}
			else{
				this.list.number++
			}
		},
		reduce(){
			if (this.number==1) {
				alert("请至少选择一个")
				return
			}
			else{
				this.number--
			}
		},
		Choose(s){
			this.ind=s;
		}
	},
  created(){
    const _this = this;
    const id = this.$route.params.id;
    axios.get('http://localhost:9999/static/goods/'+id).then(res=>{
      _this.list = res.data;
    })
  }
}
</script>
<style scoped lang="less">
	.GoodDetail{
		background:#fff;
		.DetailNav{
			padding:15px;
			margin-bottom:10px;
			color:#666;
			a{
				color:#666;
				font-size:14px;
			}
		}
		.GoodsPic-Info{
			.GoodsPic{
				.pic{
					img{
            width:430px;
					}
				}
				.PicList{
					margin:20px 0;
					ul{
						display:flex;
						li{
							flex:1;
							display:inline-block;
							vertical-align: center;
							margin-left:10px;
							a{
							img{
								display:block;
								border:1px solid #fff;
								&:hover{
									border:1px solid red;
								       }
								}
							}
						}
					}
				}
			}
			.GoodsInfo{
				width:450px;
				padding:12px 20px 0 20px;
				h3{
				   font-size: 16px;
				   margin-bottom:16px;
				   font-weight: 700;
				}
				.PriceBg{
					    vertical-align: top;
					    background-color: #e9e9e9;
						padding-top:14px;
						margin-bottom:20px;
					dl{
					}
				}
				dl{
					padding-bottom:26px;
				    line-height: 20px;
					dt{
						display:inline-block;
						color: #838383;
						font-size:13px;
						width:60px;
						text-align:right;
					}
					dd{
						span{
							color: #838383;
							font-size:13px;
						}
						display:inline-block;
						margin-left:18px;
						i{
							text-decoration:line-through;
							font-style:normal;
						}
						&.tp-price{
							color:#333;
							font-family: Arial;
						    font-size: 14px;
						}
						&.price{
							color:red;
							em{
								font-style:normal;
								font-size:30px;
								font-weight: bolder;
							    font-family: Arial;
							}
						}
						a{
							border: 1px solid #b8b7bd;
							color: #000;
						    padding: 4px 14px;
						    font-size:12px;
						    &:hover{
						    	border-color:red;
						    }
						    &.current{
						    	border-color:red;
						    }
						 }
						ul{
							li{
								display:inline-block;
								margin-right:16px;
								a{

								}
							}
						}
						&.amount{
							input{
								width:50px;
								height:26px;
								border:1px solid #b8b7bd;
								text-align:center;
							}
							span{
								&.amount-btn{
								    vertical-align: top;
									height:26px;
									width:16px;
									display: inline-block;
									border:1px solid #b8b7bd;
									font-size:12px;
									text-align:center;
									border-left:none;
									margin-left:-5px;
									.amount-increase{
										cursor:pointer;
										display: block;
										height:13px;
										line-height:14px;
									}
									.amount-decrease{
										cursor:pointer;
										border-top:1px solid #b8b7bd;
										display: block;
										line-height:14px;
										height:13px;
									}
								}
							}
						}
					}
				}
				.Group-Btn{
					button{
						padding:8px 20px;
				        border-radius:5px;
				        color:#fff;
				        border:none;
				        outline:none;
				        cursor:pointer;
				        font-size:14px;
						&.GoBuy{
						background-color:#900000;
        				margin:20px 20px 0 80px;
						}
						&.AddCart{
   					     background-color:#17AA52;
						}
					}
				}
			}
		}
	}
	.GoodsContainer{
		width: 100%;
			background: #fff;
			border-top: 1px solid #eee;
			padding-top: 12px;
			margin-top: 20px;
		h4{
				font-size: 18px;
				color: red;
				padding-left: 20px;
				font-weight: 400;
			  padding-bottom: 12px;
		}
		.GoodsBox{
			border-top: 1px solid #eee;
		text-align: center;
		padding: 30px 0;
		p{
				img{
						display: block;
			}
		}
		}
	}
</style>
