<template>
	<div class="Home">
		<div class="top">
			<header>
				<div class="fl"><img src="http://www.gdwysb.com/images/index/index2_r2_c5.jpg" alt=""></div>
				<div class="fr"><img src="http://www.gdwysb.com/images/index/index2_r3_c23.jpg" alt=""></div>
			</header>
			<nav>
				<ul>
					<li v-for="(item,index) in items" :key="index">{{item.text}}</li>
				</ul>
			</nav>
		</div>
		<div class="container ov">
			<div class="product-sort fl">
				<div class="product-list">
					<h3>产品分类</h3>
					<ul>
						<li v-for="(sort,i) in sorts" :key="i">{{sort.message}}</li>
					</ul>
				</div>
				<div class="trade-news">
					<h3><span>行业动态</span><em>更多>></em></h3>
					<ul>
						<li v-for="(trade,n) in news" :key="n">{{trade.list}}</li>
					</ul>
				</div>
			</div>		
			<div class="center fl">
				<div class="lunbo">
					<img src="http://www.gdwysb.com/picmax/1.jpg" alt="">
				</div>
				<div class="Product-show">
					<h2>产品展示</h2>
					<ul>
						<li v-for="(list,s) in lists">
							<div class="pic">
								<img :src="list.pic" alt="">
							</div>
							<p>
								{{list.productname}}
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="product-info fr">
				<div class="product-buy">
					<h3><span>行业动态</span><em>更多>></em></h3>
					<ul>
						<li v-for="(trade,n) in news" :key="n">{{trade.list}}</li>
					</ul>
				</div>
				<div class="product-buy">
					<h3><span>行业动态</span><em>更多>></em></h3>
					<ul>
						<li v-for="(trade,n) in news" :key="n">{{trade.list}}</li>
					</ul>
				</div>
				<div class="product-buy">
					<h3><span>行业动态</span><em>更多>></em></h3>
					<ul>
						<li v-for="(trade,n) in news" :key="n">{{trade.list}}</li>
					</ul>
				</div>
				<div class="product-buy">
					<h3><span>行业动态</span><em>更多>></em></h3>
					<ul>
						<li v-for="(trade,n) in news" :key="n">{{trade.list}}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  data(){
	  return{
		  items:[
			  {
				  text:"首页"
			  },
			  {
				  text:"品牌之道"
			  },
			  {
				  text:"产品中心"
			  },
			  {
				  text:"成功案例"
			  },
			  {
				  text:"专家解答"
			  },
			  {
				  text:"资源下载"
			  },
			  {
				  text:"客户留言"
			  },
			  {
				  text:"行业动态"
			  },
			  {
				  text:"合作伙伴"
			  },
			  {
				  text:"联系我们"
			  }
		  ],
		  sorts:[
			  {
				  message:'FZB衬氟自吸泵'
			  },
			  {
				  message:'排污水泵'
			  },
			  {
				  message:'FZB衬氟自吸泵'
			  },
			  {
				  message:'潜水水泵'
			  },
			  {
				  message:'FZB衬氟自吸泵'
			  },
			  {
				  message:'排污水泵'
			  },
			  {
				  message:'潜水水泵'
			  },
			  {
				  message:'FZB衬氟自吸泵'
			  },
			  {
				  message:'排污水泵'
			  },
			  {
				  message:'排污水泵'
			  },
			  {
				  message:'FZB衬氟自吸泵'
			  },
			  {
				  message:'排污水泵'
			  },
			  {
				  message:'FZB衬氟自吸泵'
			  },
			  {
				  message:'潜水水泵'
			  },
			  {
				  message:'FZB衬氟自吸泵'
			  },
			  {
				  message:'排污水泵'
			  },
			  {
				  message:'潜水水泵'
			  },
			  {
				  message:'FZB衬氟自吸泵'
			  },
			  {
				  message:'排污水泵'
			  },
			  {
				  message:'排污水泵'
			  },
			  {
				  message:'FZB衬氟自吸泵'
			  },
			  {
				  message:'排污水泵'
			  },
			  {
				  message:'FZB衬氟自吸泵'
			  },
			  {
				  message:'潜水水泵'
			  },
			  {
				  message:'FZB衬氟自吸泵'
			  },
			  {
				  message:'排污水泵'
			  },
			  {
				  message:'潜水水泵'
			  },
			  {
				  message:'FZB衬氟自吸泵'
			  },
			  {
				  message:'排污水泵'
			  },
			  {
				  message:'排污水泵'
			  },
			  {
				  message:'潜水水泵'
			  },
			  {
				  message:'FZB衬氟自吸泵'
			  },
			  {
				  message:'排污水泵'
			  },
			  {
				  message:'潜水水泵'
			  }
		  ],
		  news:[
			{list:"专业销售不锈钢耐腐蚀…"},
			{list:"专业销售不锈钢耐腐蚀…"},
			{list:"专业销售不锈钢耐腐蚀…"},
			{list:"专业销售不锈钢耐腐蚀…"},
			{list:"专业销售不锈钢耐腐蚀…"},
			{list:"专业销售不锈钢耐腐蚀…"}
		  ],
		  lists:[
			  {
				  pic:"http://www.gdwysb.com/picmin/20160707_095602579_min.jpg",
				  productname:'SGR（W）立，卧式热水…'
			  },
			  {
				  pic:"http://www.gdwysb.com/picmin/20140729_104730766_min.jpg",
				  productname:'WQ无堵塞潜水排污泵'
			  },
			  {
				  pic:"http://www.gdwysb.com/picmin/20141212_095633998_min.jpg",
				  productname:'GDF立式不锈钢管道泵'
			  },
			  {
				  pic:"http://www.gdwysb.com/picmin/20130725_122205100_min.jpg",
				  productname:'防爆型不锈钢自吸泵'
			  },
			  {
				  pic:"http://www.gdwysb.com/picmin/20141212_095633998_min.jpg",
				  productname:'GDF立式不锈钢管道泵'
			  },
			  {
				  pic:"http://www.gdwysb.com/picmin/20130725_122205100_min.jpg",
				  productname:'防爆型不锈钢自吸泵'
			  },
			  {
				  pic:"http://www.gdwysb.com/picmin/20160707_095602579_min.jpg",
				  productname:'SGR（W）立，卧式热水…'
			  },
			  {
				  pic:"http://www.gdwysb.com/picmin/20140729_104730766_min.jpg",
				  productname:'WQ无堵塞潜水排污泵'
			  },
			   {
				  pic:"http://www.gdwysb.com/picmin/20160707_095602579_min.jpg",
				  productname:'SGR（W）立，卧式热水…'
			  },
			  {
				  pic:"http://www.gdwysb.com/picmin/20140729_104730766_min.jpg",
				  productname:'WQ无堵塞潜水排污泵'
			  },
			  {
				  pic:"http://www.gdwysb.com/picmin/20141212_095633998_min.jpg",
				  productname:'GDF立式不锈钢管道泵'
			  },
			  {
				  pic:"http://www.gdwysb.com/picmin/20130725_122205100_min.jpg",
				  productname:'防爆型不锈钢自吸泵'
			  },
			  {
				  pic:"http://www.gdwysb.com/picmin/20141212_095633998_min.jpg",
				  productname:'GDF立式不锈钢管道泵'
			  },
			  {
				  pic:"http://www.gdwysb.com/picmin/20130725_122205100_min.jpg",
				  productname:'防爆型不锈钢自吸泵'
			  },
			  {
				  pic:"http://www.gdwysb.com/picmin/20160707_095602579_min.jpg",
				  productname:'SGR（W）立，卧式热水…'
			  },
			  {
				  pic:"http://www.gdwysb.com/picmin/20140729_104730766_min.jpg",
				  productname:'WQ无堵塞潜水排污泵'
			  },
			  {
				  pic:"http://www.gdwysb.com/picmin/20141212_095633998_min.jpg",
				  productname:'GDF立式不锈钢管道泵'
			  },
			  {
				  pic:"http://www.gdwysb.com/picmin/20130725_122205100_min.jpg",
				  productname:'防爆型不锈钢自吸泵'
			  },
			  {
				  pic:"http://www.gdwysb.com/picmin/20160707_095602579_min.jpg",
				  productname:'SGR（W）立，卧式热水…'
			  },
			  {
				  pic:"http://www.gdwysb.com/picmin/20140729_104730766_min.jpg",
				  productname:'WQ无堵塞潜水排污泵'
			  }
		  ]
	  }
  }
}
</script>
<style scoped lang="less">

	.Home{
		.top{
			background: url(http://www.gdwysb.com/images/index/index2_r1_c1.jpg)repeat-x;
		header{
			height: 94px;
			width: 1200px;
			margin: 0 auto;
			padding: 10px 20px;
			.fr{
				margin-top: 50px;
			}
		}
		nav{
			width: 1200px;
			margin: 0 auto;
			ul{
				overflow: hidden;
				li{
					background: url(http://www.gdwysb.com/images/index/index2_r5_c9.jpg)repeat-x;
					float: left;
					width: 10%;
					padding: 10px 0;
					text-align: center;
					color: #fff;
					font-size: 12px;
					&::after{
						content: '';
						height: 37px;
						margin-top: -27px;
						width: 100%;
						display: block;
						background:url(http://www.gdwysb.com/images/index/index2_r5_c12.jpg) no-repeat;
					}
					&:hover{
						color: blue;
					}
				}
			}
		}
	}
}
	.container{
			width: 1200px;
			margin: 0 auto;
			.product-sort{
			width: 15%;
			.product-list{
			border:1px solid #900;
				h3{
					height: 30px;
					width: 84%;
					display: block;
					background-position: center top;
					color: #fff;
					font-size: 13px;
					padding-left: 30px;
					line-height: 30px;
					background: url(http://www.gdwysb.com/images/index/index2_r9_c3.jpg)repeat-x;
				}
				ul{
					// width: 100%;
					background: #f2f7fb;
					padding: 10px;
					li{
						margin: 4px 4px;
						// border: 1px solid #900;
						padding: 5px 0 5px 30px;
						text-align: left;
						color: #000;
						font-size: 12px;
						width: 80%;
						display: block;
						height: 18px;
						background: url(http://www.gdwysb.com/images/index/index2_r15_c7.jpg)no-repeat;
					}
				}
			}
			.trade-news{
			border:1px solid #900;
				margin-top: 10px;
				h3{
					height: 28px;
					background: #1074aa;
					width: 90%;
					line-height: 28px;
					font-size: 12px;
					padding: 0 10px;
					span{
						color: #fff;
					}
					em{
						font-style: normal;
						color: #AEDAEE;
						float: right;
					}
				}
				ul{
					li{
						background: url(http://www.gdwysb.com/images/index/index2_r16_c26.jpg)no-repeat center center;
						font-size: 12px;
						padding: 4px 15px;
						height: 20px;
						line-height: 20px;
					}
				}
			}
		}
		.center{
			width: 67.5%;
			margin-left:12px; 
			.Product-show{
				background: #f2f7fb;
			border: 1px solid red;
			margin-top: 10px;
				h2{
					font-size: 16px;
					padding: 14px;
				}
				ul{
					overflow: hidden;
					margin:20px 0;
					li{
						float: left;
						margin:0 10px 0px 10px;
						.pic{
						background: #fff;
						width: 170px;
						border: 1px solid #900;
							text-align: center;
							img{
								padding: 10px 0;
							}
						}
						p{
							font-size: 12px;
							text-align: center;
							margin: 8px 0;
						}
					}
				}
			}
		}
		.product-info{
			width: 16%;
			.product-buy{
			border:1px solid #900;
			margin-bottom: 16px;
				h3{
					height: 28px;
					background: #1074aa;
					width: 90%;
					line-height: 28px;
					font-size: 12px;
					padding: 0 10px;
					span{
						color: #fff;
					}
					em{
						font-style: normal;
						color: #AEDAEE;
						float: right;
					}
				}
				ul{
					li{
						background: url(http://www.gdwysb.com/images/index/index2_r16_c26.jpg)no-repeat center center;
						font-size: 12px;
						padding: 4px 10px 4px 20px;
						height: 20px;
						line-height: 20px;
					}
				}
			}
		}
	}
</style>
