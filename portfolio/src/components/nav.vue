<template>
    <div id="nav" class="nav-show">
        <div class="nav-box">
            <router-link to="/page1"><div class="nav-box-circle nav-box-default">HOME</div></router-link>
        </div>
        <div class="nav-box">
            <router-link to="/page2"><div class="nav-box-circle nav-box-default">ABOUT</div></router-link>
        </div>
        <div class="nav-box">
            <router-link to="/page3"><div class="nav-box-circle nav-box-default">SKILLS</div></router-link>
        </div>
        <div class="nav-box">
            <router-link to="/page4"><div class="nav-box-circle nav-box-default">WORK</div></router-link>
        </div>
        <div class="nav-box">
            <router-link to="/contact/write"><div class="nav-box-circle nav-box-default">CONTACT</div></router-link>
        </div>
    </div>
</template>

<style scoped>
    #nav{ transition:all .3s linear; width:100%; height:60px; position:fixed; border-top:1px #D8D8D8 solid; margin:0 auto; z-index:50; text-align:center; background-color:#BDBDBD; opacity:0.5; }
    .nav-show{ bottom:0; transition:all .3s linear; } 
    .nav-hide{ bottom:-70px; transition:all .3s linear; } 
    .nav-box{ width:20%; float:left; } 
    .nav-box div{ width:40px; height:40px; margin:10px; display: inline-block; line-height:40px; border-radius:50%; cursor:pointer; } 
    .nav-box div a{ text-decoration:none; } .nav-box-default{ transition:all .1s linear; background-color:black; }
    .nav-box-selected{ transition:all .1s linear; background-color:blue; } 
    .nav-box-circle{ color:white; font-weight:bold; } 
    @media(max-width: 750px)  { 
        #nav{ width:100%; }
    }
</style>