<template>
  <div class="container content">
    <h1>添加用户信息</h1>
    <form action="">
      <div class="list">
        <label>姓名：</label>
        <input type="text" v-model="FormData.name" placeholder="请输入姓名">
      </div>
      <div class="list">
        <label>年龄：</label>
        <input type="text" v-model="FormData.age" placeholder="请输入年龄">
      </div>
      <div class="list">
        <label>性别：</label>
        <input type="text" v-model="FormData.sex" placeholder="请输入性别">
      </div>
      <div class="btn">
        <button class="ErorBtn" @click="Add">添加</button>
        <button class="ResetBtn" type="reset">重置</button>
      </div>
    </form>
    <h2>用户信息表</h2>
    <table>
      <tr>
        <th width="100">序列</th>
        <th width="100">姓名</th>
        <th width="100">年纪</th>
        <th width="100">性别</th>
        <th width="240">操作</th>
      </tr>
      <tr v-for="(item,index) in items" :key="index">
        <td>{{index+1}}</td>
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>{{item.sex}}</td>
        <td>
          <div class="btn">
            <button class="EditBtn" @click="isShow = !isShow,Edit(index)">编辑</button>
            <button class="ResetBtn" @click="Delete(index)">删除</button>
          </div>
        </td>
      </tr>
      <tr v-show="items.length==0">
          <td colspan="5" class="text-center text-muted">
              <p>暂无数据……</p>
          </td>
      </tr>
      <tr>
        <td>
          <div class="btn" v-show="items.length!==0">
            <button class="PrimayBtn" @click="AllDel">全部删除</button>
          </div>
        </td>
        <td colspan="5">
        </td>
      </tr>
    </table>

    <div class="message" v-show="isMessage">
        <div class="bg">
          <p>输入内容不能为空</p>
        </div>
    </div>
    <div class="modal" v-show="isShow">
      <div class="dialog_bg"></div>
      <div class="dialog">
        <h1>编辑用户信息</h1>
        <form action="">
      <div class="group">
        <label>姓名：</label>
        <input type="text" v-model="ModalData.name" placeholder="请输入姓名">
      </div>
      <div class="group">
        <label>年龄：</label>
        <input type="text" v-model="ModalData.age" placeholder="请输入年龄">
      </div>
      <div class="group">
        <label>性别：</label>
        <input type="text" v-model="ModalData.sex" placeholder="请输入性别">
      </div>
      <div class="btn">
        <button class="ErorBtn" @click="Ok">添加</button>
        <button class="ResetBtn" @click="Cancel">取消</button>
      </div>
    </form>
      </div>
    </div>
  </div>
</template>

<script>
import Store from '../store'

export default {
  name: 'HelloWorld',
  data () {
    return {
      isShow:false,
      isMessage:false,
      // 定义表单初始值为空
      FormData:{
        name:'',
        age:'',
        sex:''
      },
      // 定义表格默认数据
      items: Store.fetch(),
      // 定义弹窗初始值
      ModalData:{
        name:'',
        age:'',
        sex:'',
      }
    }
  },
  watch:{
    items:{
      handler:function(items){
        Store.save(items)
      },
      deep:true
    }
  },
  methods:{
    // 添加
    Add(){
      // 判断输入值是否为空
      if (this.FormData.name===''||this.FormData.age===''||this.FormData.sex==='') {
          this.isMessage = true;
          setTimeout(()=>{
          this.isMessage = false;
        },1000)
          return
      }
      else{
      this.items.push(this.FormData);
      this.FormData = {
        name:"",
        age:"",
        sex:""
      }
      }
    },
    // 编辑
    Edit(index){
      this.index = index,
      this.isShow=true,
      this.ModalData = {
        name : this.items[index].name,
        age : this.items[index].age,
        sex : this.items[index].sex
      }
    },
    // 全部删除
    AllDel(){
      this.items = [];
    },
    // 删除
    Delete(index){
        this.items.splice(index,1)
    },
    // 弹框取消
    Cancel(){
      this.isShow=false
    },
    // 弹框确定
    Ok(){
      this.items[this.index] = {
        name : this.ModalData.name,
        age : this.ModalData.age,
        sex : this.ModalData.sex
      }
      this.isShow = false
      this.ModalData = {
        name:"",
        age:"",
        sex:""
      }
    }
  }
}
</script>

<style scoped lang="less">
  .btn{
    button{
      padding:8px 20px;
      border-radius:5px;
      color:#fff;
      border:none;
      outline:none;
      cursor:pointer;
      font-size:14px;
    &.ErorBtn{
        background-color:#900000;
        margin:0 20px 0 54px;
      }
    &.ResetBtn{
        background-color:#17AA52;
      }
    &.EditBtn{
      background-color:#ea6f5a;
      margin-right:20px;
    }
    &.PrimayBtn{
      background-color:#0084ff;
    }
    }
  }
.container{
  color:#111;
  font-size:14px;
  @ct:center;
  @br:1px solid #333399;
  .list{
    margin-bottom:30px;
    label{

    }
    input{
      width: 700px;
      padding-left:8px;
      border-radius:4px;
      border: 1px solid #ccc;
      height:36px;
    }
  }
  h2{
    text-align:@ct;
    margin:50px 0 20px;
  }
  table{
    border-collapse:collapse;
    text-aligh:@ct;
    margin-bottom:20px;
    tr{
      th{
        text-align:@ct;
        border-top:@br;
        padding:10px;
      }
      td{
        text-align:@ct;
         padding:10px;
         border-top:@br;
         font-siez:14px;
         p{
          color:red;
         }
      }
    }
  }
  .message{
    background:#000;
      opacity:0.6;
      position:absolute;
      top:0;
      height:100%;
      left:0;
      width:100%;
      .bg{
        position: fixed;
        top:30%;
        z-index:11111;
        background:#fff;
        left:42%;
        padding:30px;
        p{
        color:red;
      }
      }
  }
  .modal{
    .dialog_bg{
      background:#666;
      opacity:0.6;
      position:absolute;
      top:0;
      height:100%;
      left:0;
      width:100%;
    }
    .dialog{
      position: fixed;
      top:25%;
      z-index:1;
      left:25%;
      background:#fff;
      padding:30px 50px;
      h1{
        text-align:@ct;
        margin-bottom:20px;
      }
      .group{
        margin-bottom:20px;
        input{
          height:32px;
          width:400px;
          padding-left:8px;
        }
      }
    }
  }
}
</style>
