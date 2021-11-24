<template>
  <div id="page2">
   <div id="page2-head">
      ABOUT
    </div>
    <br>
    <br>
  <img name="ig" src="../img/profile1.jpg" width="30%" align="left" style="margin-left: 200px; margin-top: 20px," >
  <br><br><br><h2>김지안 / Jian Kim </h2>
  <h3>"한번 물면 끝까지 놓지 않는 개발자"</h3>
  >1999.11.11(23세)<br>
  >한국산업기술대학교 (2022졸업예정)<br> 컴퓨터공학부 컴퓨터공학전공
  <br>
  >jian02@kpu.ac.kr<br>
  >서울특별시 중구
  </div>
</template>

<script>
  import $ from 'jquery';
  export default {
    name: "page2",
    mounted(){
      $(".nav-box-circle").removeClass("nav-box-selected");
      for(var x=0;x<$(".nav-box-circle").length;x++){
        if(!$(".nav-box-circle").eq(x).hasClass("nav-box-default")){
          $(".nav-box-circle").eq(x).addClass("nav-box-default")
        }
      }
      $(".nav-box-circle").eq(1).removeClass("nav-box-default");
      $(".nav-box-circle").eq(1).addClass("nav-box-selected");
    }
  }
</script>

<style scoped>
  #page2{ width: inherit; height:3000px; position:relative; background-color: #89b2ce; }
  #page2-head{ width:inherit; border-bottom:1px #D8D8D8 solid; height:70px; position:fixed; z-index:10; top:0; left:50%; transform: translateX(-50%); background-color:white; color:black; text-align:center; line-height:70px; font-size:30px; font-weight:bold; opacity:0.8;}
</style>