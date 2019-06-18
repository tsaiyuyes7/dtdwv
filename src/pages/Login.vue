<template>

    <div class="container-fluid body">
      <div class="col-lg-12 col-md-12 col-xs-12 login">
        <div class="row loginarea"> <!--margin-top要調-->
        <div class="row mainbox"> <!--白底登入框-->
           <div class="col-lg-3 col-md-3 col-sm-2 col-xs-2 b1"></div>
           <div class="col-lg-6 col-md-6 col-sm-8 col-xs-8 mainarea">
             <div class="col-lg-7 col-md-7 col-sm-7 col-xs-6 pink">
               <div class="row pinkarea">
                 <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                    <img class="imgball" src="../assets/volleyball.png" >
                 </div>
                 <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7"> <p class="volleyballtitle">DTD Volleyball</p></div>
               </div>
               <div class="row trianglearea">
                 <img class="imgtriangle" src="../assets/triangle-11.png">
               </div>
             </div>
             <div class="col-lg-5 col-md-5 col-sm-5 col-xs-6 white">
               <div class="row toparea">
                 <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 toptitle"><p class="title">Sign in</p></div>
                 <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><p><router-link to="/sign-up" class="signupbtn">Sign up</router-link></p></div>
               </div>
               <div class="row emailinput"><input type="text" v-model="email" placeholder="Email" class="ei"></div>
               <div class="row passwordinput"><input type="password" v-model="password" placeholder="Password"></div>
               <div class="row blank"></div>
               <div class="row connection"><button @click="login"  @keyup.enter="login">Sign in</button></div>

             </div>
           </div>
           <div class="col-lg-3 col-md-3 col-sm-2 col-xs-2 b2"></div>
        </div>
      </div>
      </div>
      
      
    </div>
    

</template>

<script>
  import firebase from 'firebase';
  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('home')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  @import url(http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css);
  input{
    width: 15vw;
    outline: none;
    border: none;
    border-bottom: #66ccb0 1px solid;
    color: #66ccb0;
     font-size: 1.3vw;
    letter-spacing: 3px;
  }
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #66ccb0;

  }

  .body{
    padding: 0;
    box-sizing: border-box;
  }
  .login{
     background-color: #66ccb0;
    height: 100vh;
    padding: 0;
  }
  
  .loginarea{
    margin-top:18vh;
  
  }
  .mainbox {
   
    height: 65vh;  
    margin: 0;
  }


  .mainarea{

    height: 65vh;
    background-color: #fff;
    padding: 0;
  }
  .pink{
   
    background-color: #FEC0AA;
    height: 65vh;
    padding: 0;
    padding-top: 15vh;
  }

  .pinkarea{
    width: 29vw;
    height: 35vh;
    margin: 0;
  }
  .imgball{
    width: 5vw;
    margin-left: 5vw;
  }
  .volleyballtitle{
    width: 8vh;
    font-family:serif;
    letter-spacing: 1px;
    margin-bottom: 4vh;
    color: #fff;
    font-size: 2vw; 
    
  }
  .imgtriangle{
   width: 100%;
  }

  .white{
    height: 65vh;
    padding: 0;
  }
  .toparea{
  
    height: 13vh;
    padding-top: 5vh;
    margin: 0
    
  }
  .toptitle{
    padding-right: 0;
  }
  
  .title{
    color: #66ccb0;
    font-size: 1.5vw;
    padding-left: 1.5vw;
     letter-spacing: 3px;
     

  }

  .signupbtn{
    font-size: 1vw;
    margin-left: 2.5vw;
    border: #66ccb0 1px solid;
    padding: 6px;
    border-radius: 15px;
    text-decoration: none;
    color: #66ccb0;
  }
  .signupbtn:hover{
    background-color: #66ccb0;
    color: #fff;
  }
  
    .emailinput {

    margin: 0;
    height: 10vh;
    padding-top: 4vh;
    padding-left: 2.6vw;
   
  }

  .passwordinput{
   
    margin: 0;
    height: 10vh;
    padding-top: 4vh;
     padding-left: 2.6vw;
  }
  .blank{
     margin: 0;
    height: 10vh;
  }
  .connection{
    
    margin: 0;
    margin-top: 2vh;
    height: 12vh;
    padding-left: 2.6vw;
    color: #fff;
   
  }
  button{
    background-color: #FEC0AA;
      padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    border: none;
    width: 15vw;   
    letter-spacing: 3px;
  }

  @media screen and (max-width: 991px){

    .loginarea{
      margin: 0;
    }
  
  .mainbox {
   
    height: 65vh;  
    margin-top: 18vh;
  }


  .mainarea{

    height: 65vh;
    background-color: #fff;
    padding: 0;
  }
 


  .imgball{
    width: 5vw;
    margin-left: 5vw;
  }
  .volleyballtitle{
    
    width: 8vh;
    font-family:serif;
    letter-spacing: 1px;
    margin-bottom: 6vh;
   
    
  }


  .toparea{
  
    height: 13vh;
    padding-top: 5vh;
    margin: 0
    
  }
  
  .title{
    color: #66ccb0;
    font-size: 2vw;
    padding-left: 1.5vw;
     letter-spacing: 3px;

  }

  .signupbtn{
    font-size: 1vw;
    margin-left: 2.5vw;
    border: #66ccb0 1px solid;
    padding: 6px;
    border-radius: 15px;
    text-decoration: none;
    color: #66ccb0;
  }
  
  .emailinput {
    padding-left: 4vw;
   
  }

.passwordinput{

     padding-left: 4vw;
  }
  
  button{
    padding: 2vh 3vw;
    font-size: 1.5vw;
    width: 16vw;  
    margin-left: 1.5vw; 
  }


  }
  
  

  
</style>
