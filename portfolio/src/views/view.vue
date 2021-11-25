<template>
  <div id="view">
   <div id="view-head">
      Contact Details
    </div>
    <div class="AddWrap">
			<form>
				<table class="tbAdd">
					<colgroup>
						<col width="15%" />
						<col width="*" />
					</colgroup>
					<tr>
						<th>제목</th>
						<td>{{title}}</td>
					</tr>
					<tr>
						<th>내용</th>
						<td class="txt_cont" v-html="contents"></td>
					</tr>
				</table>
			</form>
		</div>

		<div class="btnWrap">
			<a href="javascript:;" @click="fnList" class="btn">목록</a>
		</div>	
  </div>
</template>

<script>
  import $ from 'jquery';
  export default {
    name: "view",
    data() {
		return {
			body:this.$route.query
			,title:''
			,contents:''
			,view:''
			,num:this.$route.query.num
		}
	},
    mounted(){
      $(".nav-box-circle").removeClass("nav-box-selected");
      for(var x=0;x<$(".nav-box-circle").length;x++){
        if(!$(".nav-box-circle").eq(x).hasClass("nav-box-default")){
          $(".nav-box-circle").eq(x).addClass("nav-box-default")
        }
      }
      $(".nav-box-circle").eq(4).removeClass("nav-box-default");
      $(".nav-box-circle").eq(4).addClass("nav-box-selected");
      this.fnGetView();
    },
    methods:{
		fnGetView() {
			this.$axios.get('http://localhost:8080/contact/'+this.body.num,{params:this.body})
			.then((res)=>{
				this.view = res.data.view[0];
				this.title = this.view.title;
				this.contents = this.view.contents.replace(/(\n)/g,'<br/>');
			})
			.catch((err)=>{
				console.log(err);
			})
		}
		,fnList(){
			delete this.body.num;
			this.$router.push({path:'./list',query:this.body});
		}
	}
  }
</script>

<style scoped>
  #view{ width: inherit; height:1400px; position:relative; background-image:url('../assets/background.jpg'); background-repeat:no-repeat;  background-size:100%;  opacity:0.6; }
  #view-head{ width:inherit; border-bottom:1px #D8D8D8 solid; height:70px; position:fixed; z-index:10; top:0; left:50%; transform: translateX(-50%); background-color:white; color:black; text-align:center; line-height:70px; font-size:30px; font-weight:bold; opacity:0.8;}
  .tbAdd{border-top:1px solid #888;}
	.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0; }
	.tbAdd td{padding:10px 10px; box-sizing:border-box; text-align:left;}
	.tbAdd td.txt_cont{height:300px; vertical-align:top;}
	.btnWrap{text-align:center; margin:20px 0 0 0;}
	.btnWrap a{margin:0 10px;}
	.btnAdd {background:#43b984}
	.btnDelete{background:#f00;}
</style>