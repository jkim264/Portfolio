<template>
  <div id="app">
  <router-view />
    <div>
    <Footer />
    </div>
    <div>
    <Nav />
    </div>
  </div>
  
</template>

<script>
  import Nav from './views/nav';
  import Footer from './components/Footer';

  export default {
    name: "App",
    components: {
      Nav,
      Footer
    }
  }
</script>

<style>
#app {
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
  padding-top: 71px;
  border-left:1px #D8D8D8 solid;
  border-right:1px #D8D8D8 solid;
  positon:relative;
  text-align:center; 
}
body {
  padding:0;
  margin:0; 
  -ms-user-select: none; 
  -moz-user-select: none; 
  -khtml-user-select: none; 
  -webkit-user-select: none; 
  user-select: none;
  overflow: auto;
} 

@media(max-width:750px){ 
  #app{ width:100%; border-left:0; border-right:0; }
}

</style>
