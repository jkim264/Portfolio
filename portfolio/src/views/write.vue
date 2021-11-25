<template>
  <div id="write">
  <div id="write-head">
      CONTACT
  </div>
  <br><br>
  <div id="write-container">
    <div id="contact-logo">
      <img name="logo" src="../assets/smile.png" width="5%" align="left" style="margin-left: 200px; margin-top: 20px;"/>
      <br><p>궁금한점이 있으면 연락부탁드립니다.</p>
    </div>
    <div id="contact-form">
    <form>
      <div id="form-input">
			  <label for="name">Name</label>
			  <input v-model="name" type="text" name="your-name">
		  </div>
      <div id="form-input">
			  <label for="email">Email</label>
			  <input v-model="email" type="email" name="your-email">
		  </div>
      <div id="form-input">
			  <label for="title">Title</label>
			  <input v-model="title" type="text" name="your-title">
      </div>
      <div id="form-input">
			  <label for="contents">Contents</label>
			  <textarea v-model="contents" name="your-message"></textarea>
      </div>
		  <div id="form-input">
        <span class="ajax-loader"></span><a href="javascript:;" @click="fnAddProc" class="btn">보내기</a>
        <span class="ajax-loader"></span><a href="javascript:;" @click="fnList" class="btn">목록</a>
      </div>
    </form>
    </div>
  </div>
  </div>
</template>

<script>
  import $ from 'jquery';

  export default {
    name: "write",
    data() { //변수 생성
		return{
			board_code:'news'
            ,name: ''
            ,email:''
			,title:''
			,contents:''
			,form:'' //form 전송 데이터
		}
	},
	methods:{
		fnList(){ //리스트 화면으로 이동 함수
			this.$router.push({path:'./list',query:this.body});
			
		}
		,fnAddProc() { //등록 프로세스
			if(!this.title) { //제목이 없다면 값을 입력하라고 알려준다.
				alert("제목을 입력해 주세요");
				this.$refs.subject.focus(); //방식으로 선택자를 찾는다.
				return;
			}

			this.form = { //backend로 전송될 POST 데이터
				board_code:this.board_code
                ,name:this.name
                ,email:this.email
				,title:this.title
				,contents:this.contents
			} 
			
			this.$axios.post('http://localhost:3000/contact',this.form)
			.then((res)=>{
				if(res.data.success) {
					alert('등록되었습니다.');
					this.fnList();
				} else {
					alert("실행중 실패했습니다.\n다시 이용해 주세요");
				}
			})
			.catch((err)=>{
				console.log(err);
			})
			
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
    }
  }
</script>

<style scoped>
  #write{ width: inherit; height:1024px; position:relative; background-color: #89b2ce; }
  #write-head{ width:inherit; border-bottom:1px #D8D8D8 solid; height:70px; position:fixed; z-index:10; top:0; left:50%; transform: translateX(-50%); background-color:white; color:black; text-align:center; line-height:70px; font-size:30px; font-weight:bold; opacity:0.8;}
  #write-container{ width: 1170px; box-sizing:border-box; position: relative; justify-content: space-between; margin: 0 auto; float:left;}
  #contact-logo{ width: 1170px; margin: 0 auto; box-sizing: border-box; float:left; display: flex;}
  #contact-form{ width: 513px; display: flex; justify-content: space-between; flex-direction: column; float:right; }
  textarea{  padding-left: 20px; border: 1px #c77966; border-radius: 25px; width: 362px; height: 330px; box-sizing: border-box;}
  input { padding-left: 20px; border: 1px #c77966; border-radius: 25px; width: 362px; height: 40px; box-sizing: border-box;}
  label { color: #c77966; font-familly: 'S-CoreDream-1Thin'; font-size: 20px; }
  input.btn { padding: 0; align-self: flex-end; }
  input.btn, .btn{ display: inline-block; border: none; background: #c77966; border-radius: 30px; color: #fff; font-size: 20px; font-familly: 'S-CoreDream-1Thin'; line-height: 40px; text-align:center; width: 362px; height: 40px; position: relative; overflow:hidden; z-index: 1;}
  #form-input { margin-bottom: 20px; display: flex; justify-content: space-between;}
</style>