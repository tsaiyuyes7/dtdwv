<template>
    <div class="grid-container">
         <!--nav_start-->
         <div class="nav">
                <div class="nav_1_Home"><router-link to="/home" ><img src="../assets/img_Landing_icon-10-10.png" alt=""></router-link></div>
                <div class="nav_2_About"><router-link to="/about" >About</router-link></div>
                <div class="nav_3_News"><router-link to="/news" >News</router-link></div>
                <div class="nav_4_Members"><router-link to="/member" >Member</router-link></div>
                <div class="nav_5_signin"><button @click="logout" class="signoutbtn">Signout</button></div>
        </div>
        <!--nav_end-->

        <!--header_start-->
        <div class="header">
            <div class="header_title">About   us</div>
        </div>
        <!--header_end-->

        <!--main_start-->
        <div class="main">
            <div class="main_intro">態度，決定一切<br>
                    努力，才有機會<br>
                    <br>
                    國北數位女排練習時間:<br>
                    <br>
                    星期三晚上8:00~10:30<br>
                    星期五晚上6:00~8:30</div>
            <div class="main_RL"></div>
            <div class="main_LL"></div>
            <div class="main_Tvideo">宣傳影片</div>
            <div class="main_video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qWOLO0ex-Tw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <!--main_end-->

         <!--footer_start-->
         <div class="footer">
            <div>©2019 DTDWV</div>
        </div>
        <!--footer_end-->
    </div>
</template>

 <script>
 import firebase from 'firebase';

 export default {
    name:'about',
    methods: {
        logout: function(){
            firebase.auth().signOut().then(()=>{
                this.$router.replace('login')
            })
        }
    } 
    
    
}
 </script>


<style scoped>

/*nav*/

.nav{
    z-index: 20;
    width: 100vw;
    height:15vh;
    background-color: rgba(102, 204, 177);
    grid-area: nav;
    position: fixed;
    color: #484041;
    display: grid;
    grid-template-columns:[line1]10vw[line2]20vw[line3]10vw[line4]10vw[line5]40vw[line6]10vw[end]; 
    grid-template-rows:15vh;
    box-shadow:3px 3px 20px #48404163;
  }
  .nav:hover{
    background-color: rgba(102, 204, 177, 0.95);
  }
  .nav a{
    text-decoration: none;
    color:#484041;

  }
   .nav a:hover{
    color:#fff;
  } 
  .nav_1_Home{
    font-size: 2vw;
    margin:auto 0; 
    grid-column: line2/line3;
  }
  .nav_2_About{
    font-size: 2vw;
    margin:auto 0; 
    grid-column: line3/line4;
  }
  .nav_3_News{
    font-size: 2vw;
    margin:auto 0; 
    grid-column: line4/line5;
  }
  .nav_4_Members{
    font-size: 2vw;
    margin:auto 0; 
    grid-column: line5/line6;
  }
  .nav_5_signin{
    font-size: 1.5vw;
    margin:auto auto; 
    grid-column: line6/end;
  }
 .signoutbtn{
    font-size: 1vw;
    border:1.5px solid #484041;
    padding:0.7vw;
    border-radius: 10px;
    background-color: rgba(0, 0, 0,0)
  }
  .signoutbtn:hover{
    border:1.5px solid #fff;
    color: #fff;
  }
  .footer {
    padding-bottom: 1vh;
    align-items:flex-end;
    justify-content:center;;
    display: flex;
    color:#FEC0AA;
    font-size: 1vw;

    height:10vh;
    background-color: #484041;
    grid-area: footer;
  }
    /*about*/
*{
    margin:0;
}
.grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: "nav"
                        "header"
                         "main "
                         "footer ";
    grid-column-gap: 0;
    grid-row-gap: 0;
  }
  .header{
    grid-area: header;
    background-repeat: no-repeat;
    background-size:100% auto;
    background-image: url(../assets/img_About_header.jpg);
    height:100vh;
    display:grid;
    grid-template-columns: 0.6fr 0.4fr;
    grid-template-rows: 0.8fr 0.2fr;
    grid-template-areas:". ."
                        ". header_title";
  }
  .header_title{
    grid-area: header_title;
    font-family: "serif";
    font-size: 4vw;
    font-weight: 5px;
    color:#fff;
  }
  .main{
    display: grid;
    grid-template-columns:[line1]0.2fr[line2]0.2fr[line3]0.2fr[line4]0.2fr[line5]0.2fr[end];
    grid-template-rows:[line1]50vh[line2]10vh[line3]60vh[end];
    grid-area: main;
    height:120vh;
  }
  .main_intro{
    line-height: 1.5em;
    font-family: '華康中圓體';
    color:#484041;
    font-size:1.5vw;
    margin:5%;
    grid-column: line2/line5;
    grid-row:line1/line2;
  }
  .main_RL{
    margin-top:3.5vh;
    margin-bottom:3.5vh;
    background-color: #FEC0AA;
    grid-column: line1/line3;
    grid-row:line2/line3;
  }
  .main_LL{
    margin-top:3.5vh;
    margin-bottom:3.5vh;
    background-color: #FEC0AA;
    grid-column: line4/end;
    grid-row:line2/line3;
  }
  .main_Tvideo{
    font-family: '華康中圓體';
    color:#484041;
    font-size:2vw;
    margin:auto auto;
    grid-column: line3/line4;
    grid-row:line2/line3;
  }
  .main_video{
    margin:auto auto;
    grid-column: line2/line5;
    grid-row:line3/end;
  }

   @media (max-width: 992px) {
    .nav{
      height:10vh;
      grid-template-rows:10vh;
    }
  }
  @media (max-width: 768px){
    .nav{
      height:10vh;
      grid-template-rows:10vh;
    }
    .nav_1_Home img{
      width:100%;
    }
    .nav_2_About{
      margin-left:5vw;
    }
    .nav_3_News{
      margin-left:5vw;
    }
    .nav_4_Members{
      margin-left:5vw;
    }
  }
  @media (max-width: 576px) {
    .nav{
      height:7vh;
      grid-template-rows:7vh;
    }
    .nav_1_Home img{
      width:100%;
    }
    .nav_2_About{
      margin-left:5vw;
    }
    .nav_3_News{
      margin-left:5vw;
    }
    .nav_4_Members{
      margin-left:5vw;
    }
  }
</style>
