<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="content">
    	<router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/navbar'

export default {
  name: 'App',
  components:{
    NavBar
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
a{
	text-decoration: none;
}
body{
	background: #f5f5f5;
}
ul{
	list-style-type: none;
}
.content{
	width: 800px;
    margin: 40px auto;

}
h1{
	margin:30px 0;
	text-align:center;
	color: rgba(176, 23, 31, 0.6);
    font-size: 60px;
    font-weight: 100;
  }
 .fr{float:right}
.fl{float:left}
.ov{overflow:hidden;}
</style>
