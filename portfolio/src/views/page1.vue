<template>
  <div id="page1">
   <div id="page1-head">
      HOME
    </div>
    <div>
    <br>
    <br>
    <h1>
    JIAN KIM</h1><br>
    <h2>Engineer</h2>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  export default {
    name: "page1",
    mounted(){
      $(".nav-box-circle").removeClass("nav-box-selected");
      for(var x=0;x<$(".nav-box-circle").length;x++){
        if(!$(".nav-box-circle").eq(x).hasClass("nav-box-default")){
          $(".nav-box-circle").eq(x).addClass("nav-box-default")
        }
      }
      $(".nav-box-circle").eq(0).removeClass("nav-box-default");
      $(".nav-box-circle").eq(0).addClass("nav-box-selected");
    }
  }
</script>

<style scoped>
  #page1{ width: inherit; height:1400px; position:relative; background-image:url('../assets/background.jpg'); background-repeat:no-repeat;  background-size:100%;  opacity:0.6; }
  #page1-head{ width:inherit; border-bottom:1px #D8D8D8 solid; height:70px; position:fixed; z-index:10; top:0; left:50%; transform: translateX(-50%); background-color:white; color:black; text-align:center; line-height:70px; font-size:30px; font-weight:bold; opacity:0.8;}
</style>