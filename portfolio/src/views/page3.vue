<template>
  <div id="page3">
   <div id="page3-head">
      SKILLS
    </div>
    <br>
    <br>
    my experiences
    <bar-chart></bar-chart>
  </div>
</template>

<script>
  import $ from 'jquery';
  import BarChart from '../components/BarChart';

  export default {
    name: "page3",
    components: {
      BarChart
    },
    mounted(){
      $(".nav-box-circle").removeClass("nav-box-selected");
      for(var x=0;x<$(".nav-box-circle").length;x++){
        if(!$(".nav-box-circle").eq(x).hasClass("nav-box-default")){
          $(".nav-box-circle").eq(x).addClass("nav-box-default")
        }
      }
      $(".nav-box-circle").eq(2).removeClass("nav-box-default");
      $(".nav-box-circle").eq(2).addClass("nav-box-selected");
    }
  }
  
</script>

<style scoped>
  #page3{ width: inherit; height:1024px; position:relative; background-color: #89b2ce;}
  #page3-head{ width:inherit; border-bottom:1px #D8D8D8 solid; height:70px; position:fixed; z-index:10; top:0; left:50%; transform: translateX(-50%); background-color:white; color:black; text-align:center; line-height:70px; font-size:30px; font-weight:bold; opacity:0.8; }
</style>