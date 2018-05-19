<template>
  <div class="PlanList">
  <h1>计划清单</h1>
  <div class="wrap">
    <div class="group">
    	<input type="text" autofocus="autofocus" @keyup.enter="addTodo" placeholder="说说想干啥吧">
    </div>
    <div class="TodoList">
    	<ul>
    		<li v-for="(item,index) in filterTodos" :key="index" @mouseenter="mouseEnter(index)" @mouseleave="mouseLeave" :class="{active:index==isActive}">
    		    <div :class="['todo-item',item.completed ? 'completed':'']">
              <input class="fl" v-model="item.completed" type="checkbox">
              <span class="fl">{{index+1}}、</span>
              <label class="fl" title="item.text">{{item.text}}</label>
              <a class="fr" @click="Del">X</a>
            </div>
    		</li>
    	</ul>
    	<p v-show="items.length==0">暂无计划.....</p>
    </div>
    <div class="footer" v-show="items.length!==0">
      <span class="count"><strong>{{unFinished}}</strong> 项未完成</span>
    	<ul>
    		<li class="DefaultBtn"  @click="toggleFilter(obj)" v-for="obj in status" :key="obj" :class="[obj,filter ===obj?'SuccessBtn':'']">{{obj}}</li>
    	</ul>
      <span class="clearAll" @click="clearAll">清除完成</span>
    </div>
		<!-- <div class="page">
				<ul>
					<li class="firstpage">首页</li>
				</ul>
		</div> -->
  </div>
 </div>
</template>

<script>
import Plan from '../plan'

export default {
	data(){
		return{
			items:Plan.fetch(),
      filter:'all',
			status:['all','undone','completed'],
			isActive:false,
		}
	},
  computed:{
  unFinished(){
    return this.items.filter(item=>!item.completed).length
    },
    filterTodos(){
        if(this.filter ==='all'){
          return this.items
        }
        const completed = this.filter ==='undone'
        return this.items.filter(item=>completed === item.completed)
    }
  },
	 watch:{
	    items:{
	      handler:function(items){
	        Plan.save(items)
	      },
	      deep:true
	    }
	  },
	methods:{
		Del(i){
			this.items.splice(i,1)
		},
		addTodo(e){
			if(e.target.value===''){
				alert('输入内容不能为空');
				return
			}else{
				this.items.unshift({
		        text:e.target.value.trim(),
            completed:false
		      })
          e.target.value = ''
	      }
		},
    toggleFilter(obj){
      this.filter =obj
    },
    clearAll(){
      this.items = this.items.filter(item=>!item.completed)
		},
		mouseEnter(index){
		this.isActive = index;
	  },
	  mouseLeave(){
		  this.isActive=null;
	  }
	}
}
</script>

<style scoped lang="less">
input::-webkit-input-placeholder{
	color:#ccc;
  font-weight: 300;
}
@tc:center;
.PlanList{
	width: 580px;
	margin: 20px auto 50px;
	.wrap{
   font-weight: 300;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    .group{
			background:#fff;
    	input{
    		width:95%;
    		height:34px;
    		margin-right:10px;
    		outline:none;
    		border:none;
    	    border-top: 1px solid #ccc;
    	    padding:14px;
    	    font-size:20px;
    	}
    }
    .TodoList{
    	border-top: 1px solid #ccc;
    	background:#fff;
    	ul{
    		li{
				font-size: 20px;
				overflow:hidden;
				padding:0px 20px;
				height:60px;
				line-height:60px;
				border-bottom: 1px solid #ededed;
				cursor: pointer;
				&.active{
				cursor: pointer;
					background: peru;
				}
          .todo-item{
  			    input{
  			    	margin: 10px 14px 0 0;
  			        -webkit-appearance: none;
  			        outline: none;
							cursor: pointer;
  			    	&:after{
  			    	content:url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E);
              }
  			    	}
              label{
				cursor: pointer;
                  font-size: 20px;
  			    }
          }
          .completed{
           input{
            &:after{
              float:left;
              content:url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E)
            }
            }
            label{
                color:#d9d9d9;
                text-decoration:line-through;
            }
          }
				label{
					text-overflow: ellipsis;
				    white-space: nowrap;
				    overflow:hidden;
				    width: 80%;
				}
				a{
					color:red;
					font-size:20px;
					font-weight:bold;
					cursor:pointer;
					text-align:@tc;
					display: none;
				}
				&.active .todo-item{
					color: #fff;
				}
				&.active a{
					background: peru;
					display: block;
				}
    		}
    	}
    	p{
    		margin:20px 120px 0;
    		height: 50px;
    	}
    }
    .footer{
    	background:#fff;
    	padding:14px 20px;
    	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
      .count{
       display:inline-block;
       margin-right:30px ;
      color: #777;
      padding-top: 4px;
      float:left;
      strong{
      color:red;
      font-size:18px;
      }
      }
      ul{
      display: inline-block;
    	li{
    		display:inline-block;
		    padding: 4px 14px;
		    border-radius: 5px;
		    color: #fff;
		    outline: none;
		    cursor: pointer;
		    font-size: 13px;
		    margin-left:10px;
		    text-align:@tc;
		    &.DefaultBtn{
    			background-color: #fff;
    			color:#000;
    		}
    		&.SuccessBtn{
    			border:1px solid #0084ff;
    			color:#0084ff;
    		}
    	}
    }
    .clearAll{
      margin-left:60px;
      padding-top: 4px;
      font-size:13px;
      cursor:pointer;
      float:right;
      }
    }
   }
}
</style>
