<!-- 问题一：全选、单选  价格数量改变
问题二：单选时有选中效果 取消选中消失 -->
<template>
	<div class="Cart">
		<!-- <h1>购物车</h1> -->
		<table id="cartTable" v-show="message.length!==0">
	        <thead>
	            <tr>
	                <th width="60"><label><input class="check-all check" type="checkbox" v-model="allData.parCheck" @change="allSelect()">&nbsp;全选</label></th>
	                <th width="200">商品</th>
	                <th width="100">单价</th>
	                <th width="90">数量</th>
	                <th width="80">小计</th>
	                <th width="100">操作</th>
	            </tr>
	        </thead>
	        <tbody>
	            <tr v-for="(item,index) in message">
	                <td class="checkbox"><input class="check-one check" type="checkbox" @change="singleSelect(index)" v-model="item.checked"/></td>
	                <td class="goods"><img src="https://img.alicdn.com//img.alicdn.com/imgextra/i4/1883687207/TB2KaDam21TBuNjy0FjXXajyXXa_!!1883687207-0-item_pic.jpg_60x60q90.jpg" alt=""/><span>{{item.name}}</span></td>
	                <td class="price">{{item.price}}</td>
	                <td class="count">
	                    <span class="reduce" @click="minus(index)">-</span><input class="count-input" type="text" v-model="item.number"/>
	                    <span class="add" @click="add(index)">+</span></td>
	                <td class="subtotal">{{item.number*item.price}}</td>
	                <td class="operation"><span class="delete" @click="del(index)">删除</span></td>
	            </tr>
	        </tbody>
	    </table>
	    <div class="foot" id="foot" v-show="message.length!==0">
	        <label class="fl select-all"><input type="checkbox" class="check-all check" v-model="allData.parCheck" @change="allSelect()"/>&nbsp;全选</label>
	        <a class="fl delete" href="javascript:;" @click="AllDel">删除</a>
	        <router-link :to="'Buy'" class="fr closing" tag="div">结 算</router-link>
	        <div class="fr total">合计：￥<span id="priceTotal">{{getTotalMount()}}.00</span></div>
	        <div class="fr selected" id="selected">已选商品<span id="selectedTotal">{{num}}</span>件</div>
	    </div>
	    <div class="empty" v-show="message.length==0">
	    	<p>购物车为空，快去添加商品吧......</p>
	    	<router-link :to="'ShopMall'" tag="button">点击返回首页</router-link>
	    </div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				num:0,
				allData: {
                       parCheck: false,
                   },
		        message:[
		            {
			        	name: 'Casio/卡西欧 EX-TR350',
			            number: 5,
			            price: 1000,
			            checked: false
		            },{
		            	name: 'Sony/索尼 DSC-WX300',
			            number: 10,
			            price: 1200,
			            checked: false
		            }
		        ]
			}
		},
		 methods:{
    	// 减去函数
    	minus: function(index){
    		const vm = this
    		console.log(vm.message[index].number)
    		if (vm.message[index].number>1) {
    			vm.message[index].number--;
    		}
    		else{
    			return
    		}
    	},
    	// 添加函数
    	add: function(index){
    		const vm = this
    		vm.message[index].number++;
    	},
    	// 删除函数
    	del: function(index){
		   const vm = this;
    		if (confirm("您确定要删除商品吗？")) {
    			vm.message.splice(index,1)
    		}
    	},
    	// 全选函数
       allSelect:function() {
		   const vm = this;
		   vm.message.forEach(item => {
		       item.checked = vm.allData.parCheck
		   // console.log(vm.message);
		   })
		},
		// 单选函数
		singleSelect:function(index) {
		   const vm = this;
		   this.num = vm.message[index].number;
    		console.log(vm.message[index].number)
		   // console.log(vm.message[0].number);
		   var selectData = vm.message.filter(item => {
		       return item.checked == true;
		   })
			selectData.length == vm.message.length ? vm.allData.parCheck = true : vm.allData.parCheck = false;
		},
		// 全部删除
		AllDel(){
			this.message=[]
		},
		getTotalMount(){
			var sum = 0;
	        this.message.forEach(function (value, index) {
	          sum += value.number * value.price;
	        });
	        return sum;
		}
    }
	}
</script>
<style scoped lang="less">
.Cart{
	margin-top:50px;
    .empty{
	    text-align:center;
	    p{
	    	margin-bottom:20px;
	    }
	    button{
	    	cursor:pointer;
	    	background:#17AA52;
	    	color:#fff;
	    	padding:7px 12px;
	    	font-size:13px;
	    	border-radius:4px;
	    	border:0;
	    }

    }
}
	table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    text-align: center;
    padding: 10px 16px;
}
th {
    background: #e2f2ff;
    border-top: 3px solid #a7cbff;
    text-align: center;
}
td {
    border-bottom: 1px solid #a7cbff;
    color: #444;
}
tr{
    background: #fff;
}
tbody tr:hover {
    background: RGB(238,246,255);
}
.goods {
    width: 300px;
    user-select: none;
    -webkit-user-select: none;
}
.goods span {
    margin-top: 20px;
    text-align: left;
    float: left;
}
.count .add, .count input, .count .reduce {
    float: left;
    margin-right: -1px;
    position: relative;
    z-index: 0;
}
.count .add, .count .reduce {
    height: 23px;
    width: 17px;
    border: 1px solid #e5e5e5;
    background: #f0f0f0;
    text-align: center;
    line-height: 23px;
    color: #444;
}
.count .add:hover, .count .reduce:hover {
    color: #f50;
    z-index: 3;
    border-color: #f60;
    cursor: pointer;
}
.count input {
    width: 50px;
    height: 15px;
    line-height: 15px;
    border: 1px solid #aaa;
    color: #343434;
    text-align: center;
    padding: 4px 0;
    background-color: #fff;
    z-index: 2;
}
.subtotal {
    color: red;
    font-weight: bold;
}
.operation {
}
.operation span:hover, a:hover {
    cursor: pointer;
    color: red;
    text-decoration: underline;
}
img {
    width: 100px;
    height: 80px;
    border: 1px solid #ccc;
    margin-right: 10px;
    float: left;
}

.foot {
    margin-top: 20px;
    color: #666;
    height: 48px;
    border: 1px solid #c8c8c8;
    background-color: #eaeaea;
    background-image:linear-gradient(RGB(241,241,241),RGB(226,226,226));
    position: relative;
    z-index: 8;
}
.foot div, .foot a {
    line-height: 48px;
    height: 48px;
}
.foot .select-all {
    width: 100px;
    height: 48px;
    line-height: 48px;
    padding-left: 5px;
    color: #666;
}
.foot .closing {
    border-left: 1px solid #c8c8c8;
    width: 100px;
    text-align: center;
    color: #000;
    font-weight: bold;
    background: RGB(238,238,238);
    cursor: pointer;
}
.foot .total{
    margin: 0 20px;
    cursor: pointer;
}
.foot  #priceTotal, .foot #selectedTotal {
    color: red;
    font-family: "Microsoft Yahei";
    font-weight: bold;
}
.foot .selected {
    cursor: pointer;
}
.foot .selected .arrow {
    position: relative;
    top:-3px;
    margin-left: 3px;
}
.foot .selected .down {
    position: relative;
    top:3px;
    display: none;
}
 .show .selected .down {
    display: inline;
}
 .show .selected .up {
    display: none;
}
.foot .selected:hover .arrow {
    color: red;
}
.foot .selected-view {
    width: 935px;
    border: 1px solid #c8c8c8;
    position: absolute;
    height: auto;
    background: #ffffff;
    z-index: 9;
    bottom: 48px;
    left: -1px;
    display:none;
}
.show .selected-view {
    display: block;
}
.foot .selected-view div{
    height: auto;
}
.foot .selected-view .arrow {
    font-size: 16px;
    line-height: 100%;
    color:#c8c8c8;
    position: absolute;
    right: 330px;
    bottom: -9px;
}
.foot .selected-view .arrow span {
    color: #ffffff;
    position: absolute;
    left: 0px;
    bottom: 1px;
}
#selectedViewList {
    padding: 20px;
    margin-bottom: -20px;
}
#selectedViewList div{
    display: inline-block;
    position: relative;
    width: 100px;
    height: 80px;
    border: 1px solid #ccc;
    margin: 10px;
}
#selectedViewList div span {
    display: none;
    color: #ffffff;
    font-size: 12px;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 60px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    background: RGBA(0,0,0,.5);
    cursor: pointer;
}
#selectedViewList div:hover span {
    display: block;
}
.active {
    background-color: #f00 !important;
}
</style>