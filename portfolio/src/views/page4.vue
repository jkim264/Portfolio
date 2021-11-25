<template>
  <div id="page4">
   <div id="page4-head">
      WORK
    </div>
    <br>
    <br>
    <div>
    <img name="ig" src="../assets/Hunminjeomum.jpg" width="30%" align="left" style="margin-left: 200px; margin-top: 20px;" >
    <br><br><br><h2>시각장애인을 위한 학습보조 및 점자 변환 시스템, 훈민점음 </h2>
    <br><br>>2020.12 ~ 2021.09
    <br>>하드웨어 제어 프로그래밍 및 디자인 담당
    <br>>점역되지 않은 책이나 인터넷 자료를 사진으로 찍거나 파일을 올리면, <br>글씨를 추출하여 글자와 점자로 읽어주는 시스템
    <br>>아두이노와 라즈베리를 사용한 하드웨어를 전체적으로 제어하는 프로그래밍을 담당
    <br>>앱 아이콘, 로고, 하드웨어 케이스 등 전체적인 디자인 담당
    <br><a href="http://github.com/KPU-HumMinJeomUm/HunMinJeomUm">>GitHub 링크</a><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
    <div>
    <img name="ig" src="../assets/Achro-em.png" width="30%" align="left" style="margin-left: 200px; margin-top: 20px," >
    <br><br><h2>유리멘탈 복치 </h2>
    <br><br>>2020.09 ~ 2020.11
    <br>>디버그 및 유지보수 담당
    <br>>Achro-em 보드를 활용하여 개복치 게임을 구현
    <br>>Achro-em 보드의 디바이스 드라이버를 직접 제어하여 디바이스 드라이버에 있는 문제를 분석
    <br><a href="http://github.com/jkim264/Glass-mentality-Sunfish">>GitHub 링크</a>
    </div>
    
  </div>
</template>

<script>
  import $ from 'jquery';
  export default {
    name: "page4",
    mounted(){
      $(".nav-box-circle").removeClass("nav-box-selected");
      for(var x=0;x<$(".nav-box-circle").length;x++){
        if(!$(".nav-box-circle").eq(x).hasClass("nav-box-default")){
          $(".nav-box-circle").eq(x).addClass("nav-box-default")
        }
      }
      $(".nav-box-circle").eq(3).removeClass("nav-box-default");
      $(".nav-box-circle").eq(3).addClass("nav-box-selected");
    }
  }
</script>

<style scoped>
  #page4{ width: inherit; height:1024px; position:relative; background-color: #89b2ce; }
  #page4-head{ width:inherit; border-bottom:1px #D8D8D8 solid; height:70px; position:fixed; z-index:10; top:0; left:50%; transform: translateX(-50%); background-color:white; color:black; text-align:center; line-height:70px; font-size:30px; font-weight:bold; opacity:0.8;}
</style>