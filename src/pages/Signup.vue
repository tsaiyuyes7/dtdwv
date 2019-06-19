<template>

    <div class="container-fluid body">
      <div class="col-md-12 col-sm-12 signup">
        <div class="row signuparea"> <!--margin-top要調-->
        <div class="row mainbox"> <!--白底登入框-->
           <div class="col-md-3 col-sm-2 b1"></div>
           <div class="col-md-6 col-sm-8 mainarea">
             <div class="col-md-7 col-sm-7 pink">
               <div class="row pinkarea">
                 <div class="col-md-5 col-sm-5 ">
                    <img class="imgball" src="../assets/volleyball.png" >
                 </div>
                 <div class="col-md-7 col-sm-7 "> <p class="volleyballtitle">DTD Volleyball</p></div>
               </div>
               <div class="row ">
                 <img class="imgtriangle" src="../assets/triangle-11.png">
               </div>
             </div>
             <div class="col-md-5 col-sm-5 white">
               <div class="row toparea">
                 <div class="col-md-6 col-sm-6 toptitle"><p class="title">Sign up</p></div>
                 <div class="col-md-6 col-sm-6"><p><router-link to="/login" class="loginbtn">Login</router-link></p></div>
               </div>
               <div class="row Nameinput"><input type="text" v-model="name" placeholder="Username" class="uns"></div>
               <div class="row emailinput"><input type="text" v-model="email" placeholder="Email" class="ei"></div>
               <div class="row passwordinput"><input type="password" v-model="password" placeholder="Password"></div>
               <div class="row connection"><button @click="signUp"  @keyup.enter="signUp">Sign in</button></div>

             </div>
           </div>
           <div class="col-md-3 sol-cm-2 b2"></div>
        </div>
      </div>
      </div>
      
      
    </div>
    

</template>

 <script>
  import firebase from 'firebase';

  export default {
    name: 'signUp',
    data() {
      return {
        email: '',
        password: '',
        name:''
      }
    },
    methods: {
     signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            var CurrentUser = firebase.auth().currentUser;
            CurrentUser.updateProfile({
              displayName:this.name
            })
            /* eslint-disable no-console */
            console.log(CurrentUser);
            /* eslint-disable no-console */
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
  /* @import url(http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css); */
  @import '../css/bootstrap.css';
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
  .signup{
     background-color: #66ccb0;
    height: 100vh;
  }
  
  .signuparea{
    margin-top:18vh;
  
  }
  .mainbox {
   
    height: 65vh;  
    margin: 0;
  }


  .mainarea{
    outline: pink solid 1px;
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
    margin: 0;
    
  }
  .title{
    color: #66ccb0;
    font-size: 1.5vw;
    padding-left: 1.5vw;
     letter-spacing: 3px;
    
  }

  .toptitle{
    padding-right: 0px;
  }

  .loginbtn{
    font-size: 1vw;
    margin-left: 3vw;
    border: #66ccb0 1px solid;
    padding: 6px;
    border-radius: 15px;
    text-decoration: none;
    color: #66ccb0;
  }
  .loginbtn:hover{
    background-color: #66ccb0;
    color: #fff;
  }
   .Nameinput {
    margin: 0;
    height: 10vh;
    padding-top: 4vh;
    padding-left: 2.6vw;
   
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

  .Nameinput{
    padding-left: 4vw;
  }

  .passwordinput{

     padding-left: 4vw;
  }
  

  button{
    margin-left: 1.5vw;
    padding: 2vh 3vw;
    font-size: 1.5vw;
    width: 16vw;   
  }
   }
  
</style>


