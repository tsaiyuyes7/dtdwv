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
            <div class="header_title">News</div>
        </div>
        <!--header_end-->

        <!--news_start-->
        <div class="main">
            <div class="news_img_1 news_img"></div>
            <div class="news_intro_1 news_intro">
                <div class="news_font_big"><router-link to="article" class="linkarticle"> 世代的交替</router-link><br></div>
                <div class="news_font_mid">大黑鬼教練即將退位<br>聘請新任教練竟是非人類?!</div>
                <div class="news_font_sm"><br>2019/6/11 18:22<br>(小編葉司淇/國北報導)</div>
            </div>
            <div class="news_img_2 news_img"></div>
            <div class="news_intro_2 news_intro">
                <div class="news_font_big">數位VS心諮 激戰<br></div>
                <div class="news_font_mid">對面加油團素質低落?!<br> 數位女排火力全開</div>
                <div class="news_font_sm"><br>2019/6/5 20:50<br>(小編葉司淇/國北報導)</div>
            </div>
            <div class="news_img_3 news_img"></div>
            <div class="news_intro_3 news_intro">
                <div class="news_font_big">系際盃<br></div>
                <div class="news_font_mid">107學年度系際盃6/3即將開打<br> 數位女排出賽名單出爐</div>
                <div class="news_font_sm"><br>2019/5/23 12:31<br>(小編葉司淇/國北報導)</div>
            </div>
            <div class="news_line_1"></div>
            <div class="news_line_2"></div>
        </div>

        <!--news_end-->


        
        <!--footer_start-->
        <div class="footer">
            <div>©2019 DTDWV</div>
        </div>
        <!--footer_end-->
    </div>
</template>

 <script>
import firebase from 'firebase';
// @ is an alias to /src
export default {
  name: 'news',
  methods: {
    logout: function() {
      const currentUser = firebase.auth().currentUser;
      if(currentUser){ this.$router.replace('login')}
      if(!currentUser){
      firebase.auth().signOut();
      }
    }
  }
}
</script>

<style scoped>
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
                         "member "
                         "footer ";
    grid-column-gap: 0;
    grid-row-gap: 0;
  }
  .header{
    grid-area: header;
    background-repeat: no-repeat;
    background-size:100% auto;
    background-image: url(../assets/img_News_header.jpg);
    background-position: center;
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
    grid-area: main;
    display: grid;
    grid-template-columns:[line1]20vh[line2]30vh[line3]1fr[line4]20vh[end];
    grid-template-rows:[line1]10vh[line2]30vh[line3]30vh[line4]30vh[line5]10vh[end];
  }
  .news_img{
    background-position: center;
    background-repeat: no-repeat;
    background-size:contain;
    margin:10%;
  }
  .news_intro{
    font-family: '華康中圓體';
    color:#484041;
    margin:3%;
    line-height: 1.2;
  }
  .news_img_1{
    grid-column: line2/line3;
    grid-row:line2/line3;
    background-image: url(../assets/img_Landing_new2.jpg);
  
  }
  .news_img_2{
    grid-column: line2/line3;
    grid-row:line3/line4;
    background-image: url(../assets/img_News_new2.jpg);
  }
  .news_img_3{
    grid-column: line2/line3;
    grid-row:line4/line5;
    background-image: url(../assets/img_News_new3.jpg);
  }
  .news_intro_1{
    grid-column: line3/line4;
    grid-row:line2/line3;
  }
  .news_intro_2{
    grid-column: line3/line4;
    grid-row:line3/line4;
  }
  .news_intro_3{
    grid-column: line3/line4;
    grid-row:line4/line5;
  }
  .news_line_1{
    grid-column: line2/line4;
    grid-row:line2/line3;
    border-bottom: 2px solid #66CCB0;
  }
  .news_line_2{
    grid-column: line2/line4;
    grid-row:line3/line4;
    border-bottom: 2px solid #66CCB0;
  }
  .news_font_big{
      font-size: 2em;
      margin-bottom: 2vh;
  }


  .news_font_mid{
    font-size: 1.5em;
}
.linkarticle{
    text-decoration: none;
    color: #000;
}
.linkarticle:hover{
    color: #66ccb0;
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
