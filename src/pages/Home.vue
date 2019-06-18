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
            <div class="header_1_title">
                <div class="font_size_5">DTD</div><br>
                <div class="letter_spacing_3">Women's<br>Volleyball</div>
            </div>
            <div class="header_2_line"> </div>
            <div class="header_3_img"></div>
        </div>
        <!--header_end-->

        <!--main_start-->
        <div class= "main">
          <div class="main_1_RL"></div>
          <div class="main_1_LL"></div>
          <div class="main_1_title">最新消息</div>
          <div class="main_2_img"></div>
          <div class="main_2_art">
              <div class="big_text">全國大專院校設計盃</div>
              <div class="small_text">嘉義港坪風雨球場<br>與銘傳商設的拉鋸戰</div>
              <span class="readmore"><router-link to="/news" class="readmorebtn">read more</router-link></span>
          </div>
          <div class="main_3_img"></div>
          <div class="main_3_art">
            <div class="big_text"><router-link to="/article" class="link" >新世代的交替</router-link></div>
            <div class="small_text">非人類教練表示:我想吃蜂蜜</div>
          </div>
          <div class="main_4_img"></div>
          <div class="main_4_art">
              <div class="big_text">2019系際盃</div>
              <div class="small_text">決戰心諮!激戰3回合</div>
          </div>
          <div class="main_5_img"></div>
          <div class="main_5_art">
              <div class="big_text">開心吃隊聚</div>
              <div class="small_text">整場笑嗨嗨 與大四學姊的歡樂送舊</div>
          </div>
        </div>
        <!--main_end-->

        <!--member_start-->
        <div class="member">
            <div class="member_bgcolor"></div>
            <div class="member_LL"></div>
            <div class="member_RL"></div>
            <div class="member_title"><router-link to="/member" class="link">member</router-link></div>
            <div class="member_1 Brown">outside spiker</div>
            <div class="member_2 Pink">libero</div>
            <div class="member_3 Brown">opposite</div>
            <div class="member_4 Pink">setter</div>
            <div class="member_5 Brown">middle</div>
        </div>    
        <!--member_end-->

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
  name: 'home',
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
  a{
    text-decoration: none;
    color:#484041;
  }
  a:hover{
    color:#66CCB0;
  }
  .header {
    height:100vh;
    background-color: rgba(102, 204, 177, 0.8);
    grid-area: header;
    display:grid;
    grid-template-columns: [line1]0.1fr[line2]0.2fr[line3]0.2fr[line4]0.5fr[end];
    grid-template-rows:[row-1-start]20vh[row-2-start]40vh[row-3-start]35vh[row-4-start]5vh[row-end];
  }
  .header_1_title{
    z-index: 10;
    color:#484041;
    grid-column: line2/line4;
    grid-row:row-2-start/row-3-start;
    font-family: "serif";
    font-size: 4vw;
    font-weight: 5px;
    height:auto;
  }
  .font_size_5{
    font-size: 7vw;
  }
  .letter_spacing_3{
    letter-spacing:10px;

  }
  .header_2_line{
    z-index: 5;
    background-image: url(../assets/img_Landing_line.png);
    background-repeat: no-repeat;
    background-size:100% 80%;
    margin-top:15%;
    grid-column: line1/line4;
    grid-row:row-3-start/row-4-start;
  }
  .header_3_img{
    background-image: url(../assets/img_Landing_header.jpg);
    background-repeat: no-repeat;
    background-size:100% auto;
    width: 100%;
    height:100%;
    grid-column: line3/end;
    grid-row:row-2-start/row-4-start;
  }
  .main {
    font-family: '華康中圓體';
    color:#484041;
    height:125vh;
    grid-area: main;
    display:grid;
    grid-template-columns:[line1]0.2fr[line2]0.2fr[line3]0.2fr[line4]0.2fr[line5]0.2fr[end];
    grid-template-rows:[line1]0.1fr[line2]0.4fr[line3]0.3fr[line4]0.2fr[end];
  }
  .big_text{
    font-size:2vw;
    margin:5%;
  }
  .small_text{
    margin:5%;
    margin-top:2vh;
    font-size:1.2vw;
    line-height: 2vw;
  }
  .readmore{
    font-size:1.2vw;
    border-radius:10px;
    padding:0.7vw;
    background-color: #FEC0AA;
    margin:5%;
  }
  .readmore:hover{
    padding: 1vw;
 
  }
  .readmorebtn{
    text-decoration: none;
  }
  .readmorebtn:hover{
    color: #fff;
  }
  .main_1_RL{
    background-color: #FEC0AA;
    margin-top: 5vh;
    margin-bottom: 5vh;
    grid-column: line1/line3;
    grid-row:line1/line2;
  }
  .main_1_LL{
    margin-top: 5vh;
    margin-bottom: 5vh;
    background-color: #FEC0AA;
    grid-column: line4/end;
    grid-row:line1/line2;
  }
  .main_1_title{
    margin:auto auto;
    font-size:2vw;
    grid-column: line3/line4;
    grid-row:line1/line2;
  }
  .main_2_img{
    margin-top:1vw;
    margin-right:1vw;
    grid-column: line2/line4;
    grid-row:line2/line3;
    background-image: url(../assets/img_Landing_new1.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size:100% auto;
  }
  .main_2_art{
    grid-column: line4/line5;
    grid-row:line2/line3;
    
  }
 
  .main_3_img{
    margin-top:1vw;
    margin-right:1vw;
    background-image: url(../assets/img_Landing_new2.jpg);
    background-repeat: no-repeat;
    background-size:100% auto;
    grid-column: line2/line3;
    grid-row:line3/line4;
  }
  .main_3_art{
    grid-column: line2/line3;
    grid-row:line4/end;
  }
  .link{
    text-decoration: none;
  }
  .main_4_img{
    margin-top:1vw;
    margin-right:1vw;
    background-image: url(../assets/img_Landing_new3.jpg);
    background-repeat: no-repeat;
    background-size:100% auto;
    grid-column: line3/line4;
    grid-row:line3/line4;

  }
  .main_4_art{
    grid-column: line3/line4;
    grid-row:line4/end;
  }
  .main_5_img{
    margin-top:1vw;
    margin-right:1vw;
    grid-column: line4/line5;
    grid-row:line3/line4;
    background-image: url(../assets/img_Landing_new4.jpg);
    background-repeat: no-repeat;
    background-size:100% auto;
  }
  .main_5_art{
    grid-column: line4/line5;
    grid-row:line4/end;
  }
  .member{
    font-size:2vw;
    display: grid;
    height:75vh;
    grid-area: member;
    grid-template-columns:[line1]0.2fr[line2]0.2fr[line3]0.2fr[line4]0.2fr[line5]0.2fr[end];
    grid-template-rows:[line1]10vh[line2]50vh[end];
  }
  .Brown{
    color:#FEC0AA;
  }
  .Pink{
    color:#484041;
  }
  .member_bgcolor{
    grid-column: line1/end;
    grid-row:line2/end;
    background-color: #66CCB0;
  }
  .member_LL{
    background-color: #FEC0AA;
    margin-top: 4vh;
    margin-bottom: 4vh;
    grid-column: line1/line3;
    grid-row:line1/line2;
  }
  .member_RL{
    background-color: #FEC0AA;
    margin-top: 4vh;
    margin-bottom: 4vh;
    grid-column: line4/end;
    grid-row:line1/line2;
  }
  .member_title{
    align-items:center;
    justify-content:center;;
    display: flex;
    font-weight:bold;
    font-size:2vw;
    color:#484041;
    grid-column: line3/line4;
    grid-row:line1/line2;
  }
  .member_1{
    margin:auto auto;
    width: 12vw;
    height:12vw;
    border-radius: 99em;
    align-items:center;
    justify-content:center;
    text-align: center;
    display: flex;
    grid-column: line1/line2;
    grid-row:line2/end;
    background-color: #484041;
  }
  .member_2{
    margin:auto auto;
    width: 12vw;
    height:12vw;
    border-radius: 99em;
    background-color: #FEC0AA;
    align-items:center;
    justify-content:center;;
    display: flex;
    grid-column: line2/line3;
    grid-row:line2/end;

  }
  .member_3{
    margin:auto auto;
    width: 12vw;
    height:12vw;
    border-radius: 99em;
    align-items:center;
    justify-content:center;;
    display: flex;
    grid-column: line3/line4;
    grid-row:line2/end;
    background-color: #484041;
  }
  .member_4{
    margin:auto auto;
    width: 12vw;
    height:12vw;
    border-radius: 99em;
    background-color: #FEC0AA;
    align-items:center;
    justify-content:center;;
    display: flex;
    grid-column: line4/line5;
    grid-row:line2/end;

  }
  .member_5{
    margin:auto auto;
    width: 12vw;
    height:12vw;
    border-radius: 99em;
    align-items:center;
    justify-content:center;;
    display: flex;
    grid-column: line5/line6;
    grid-row:line2/end;
    background-color: #484041;
  }

  @media (max-width:1200px) {
    .header{
      height:100vh;
      grid-template-columns: [line1]0.1fr[line2]0.2fr[line3]0.2fr[line4]0.5fr[end];
      grid-template-rows:[row-1-start]20vh[row-2-start]50vh[row-3-start]20vh[row-4-start]5vh[row-end];
    }
    
    .header_2_line{
      margin-top: 5%;
    }
    .main{
      height:90vh;
      grid-template-columns:[line1]0.5fr[line2]30vh[line3]30vh[line4]30vh[line5]0.5fr[end];
      grid-template-rows:[line1]10vh[line2]35vh[line3]30vh[line4]15vh[end];
    }
    .main_1_RL{
      margin-top: 4vh;
      margin-bottom: 4vh;
    }
    .main_1_LL{
      margin-top: 4vh;
      margin-bottom: 4vh;
    }
  } 
  @media  (max-width:992px) { 
    .header{
      height:70vh;
      grid-template-columns: [line1]0.1fr[line2]0.2fr[line3]0.2fr[line4]0.5fr[end];
      grid-template-rows:[row-1-start]15vh[row-2-start]35vh[row-3-start]15vh[row-4-start]5vh[row-end];
    }
    
    .header_2_line{
      margin-top: 5%;
    }
    .main{
      height:100vh;
      grid-template-columns:[line1]0.5fr[line2]20vh[line3]20vh[line4]20vh[line5]20vh[line6]0.5fr[end];
      grid-template-rows:[line1]10vh[line2]30vh[line3]15vh[line4]30vh[line5]15vh[end];
    }
    .main_1_RL{
      margin-top: 4vh;
      margin-bottom: 4vh;
      grid-column: line1/line3;
      grid-row:line1/line2;
    }
    .main_1_LL{
      margin-top: 4vh;
      margin-bottom: 4vh;
      grid-column: line5/end;
      grid-row:line1/line2;
    }
    .main_1_title{
      grid-column: line3/line5;
      grid-row:line1/line2;
    }
    .main_2_img{
      background-position: static;
      grid-column: line2/line4;
      grid-row:line2/line3;
    }
    .main_2_art{
      grid-column: line2/line4;
      grid-row:line3/line4;    
    }
    .main_3_img{
      grid-column: line4/line6;
      grid-row:line2/line3;
    }
    .main_3_art{
      grid-column: line4/line6;
      grid-row:line3/line4;   
    }
    .main_4_img{
      grid-column: line2/line4;
      grid-row:line4/line5;
    }
    .main_4_art{
      grid-column: line2/line4;
      grid-row:line5/end;
      
    }
    .main_5_img{
      grid-column: line4/line6;
      grid-row:line4/line5;
    }
    .main_5_art{
      grid-column: line4/line6;
      grid-row:line5/end;
    }
    .member{
      grid-template-columns:[line1]0.05fr[line2]0.3fr[line3]0.3fr[line4]0.3fr[line5]0.05fr[end];
      grid-template-rows:[line1]10vh[line2]25vh[line3]25vh[end];
    }
    .member_bgcolor{
      grid-column: line1/end;
      grid-row:line2/end;
    }
    .member_title{
      grid-column: line3/line4;
      grid-row:line1/line2;
    }
    .member_RL{
      grid-column: line1/line3;
      grid-row:line1/line2;
    }
    .member_LL{
      grid-column:line4/end;
      grid-row:line1/line2;
    }
    .member_1{
      width: 16vw;
      height:16vw;
      grid-column: line2/line3;
      grid-row:line2/line3;
    }
    .member_2{
      width: 16vw;
      height:16vw;
      grid-column: line3/line4;
      grid-row:line2/line3;
    }
    .member_3{
      width: 16vw;
      height:16vw;
      grid-column:line4/line5;
      grid-row:line2/line3;
    }
    .member_4{
      width: 16vw;
      height:16vw;
      grid-column:line2/line3;
      grid-row:line3/end;
    }
    .member_5{
      width: 16vw;
      height:16vw;
      grid-column: line3/line4;
      grid-row:line3/end;
    }
  }
  @media  (max-width:768px) { 

    .big_text{
    font-size:3vw;
    margin:5%;
   }



    .small_text{
    margin:5%;
    margin-top:2vh;
    font-size:2vw;
    line-height: 2.5vw;
    }
    .header{
      height:65vh;
      grid-template-columns: [line1]0.1fr[line2]0.2fr[line3]0.2fr[line4]0.5fr[end];
      grid-template-rows:[row-1-start]15vh[row-2-start]30vh[row-3-start]15vh[row-4-start]5vh[row-end];
    }
    .header_2_line{
      margin-top: 5%;
    }
    .main{
      height:150vh;
      grid-template-columns:[line1]0.05fr[line2]0.45fr[line3]0.45fr[line4]0.05fr[end];
      grid-template-rows:[line1]10vh[line2]35vh[line3]35vh[line4]35vh[line5]35vh[end];
    }
    .main_1_RL{
      display: none;
    }
    .main_1_LL{
      display: none;
    }
    .main_1_title{
      grid-column: line2/line4;
      grid-row:line1/line2;
    }
    .main_2_img{
      background-position:top;
      grid-column: line2/line3;
      grid-row:line2/line3;
    }
    .main_2_art{
      grid-column: line3/line4;
      grid-row:line2/line3;    
    }
    .main_3_img{
      grid-column: line2/line3;
      grid-row:line3/line4;
    }
    .main_3_art{
      grid-column: line3/line4;
      grid-row:line3/line4;   
    }
    .main_4_img{
      grid-column: line2/line3;
      grid-row:line4/line5;
    }
    .main_4_art{
      grid-column: line3/line4;
      grid-row:line4/line5;
      
    }
    .main_5_img{
      grid-column: line2/line3;
      grid-row:line5/end;
    }
    .main_5_art{
      grid-column: line3/line4;
      grid-row:line5/end;
    }
    .member{
      height: 65vh;
      grid-template-columns:[line1]0.05fr[line2]0.3fr[line3]0.3fr[line4]0.3fr[line5]0.05fr[end];
      grid-template-rows:[line1]10vh[line2]25vh[line3]25vh[end];
    }
    .member_bgcolor{
      grid-column: line1/end;
      grid-row:line2/end;
    }
    .member_title{
      grid-column: line3/line4;
      grid-row:line1/line2;
    }
    .member_RL{
      grid-column: line1/line3;
      grid-row:line1/line2;
    }
    .member_LL{
      grid-column:line4/end;
      grid-row:line1/line2;
    }
    .member_1{
      width: 15vw;
      height:15vw;
    }
    .member_2{
      width: 15vw;
      height:15vw;

    }
    .member_3{
    width: 15vw;
      height:15vw;
    }
    .member_4{
      width: 15vw;
      height:15vw;
    }
    .member_5{
    width: 15vw;
      height:15vw;
    }
  }
  @media (max-width: 576px) {
    .header{
      height:65vh;
      grid-template-columns: [line1]0.1fr[line2]0.2fr[line3]0.2fr[line4]0.5fr[end];
      grid-template-rows:[row-1-start]10vh[row-2-start]20vh[row-3-start]15vh[row-4-start]5vh[row-end];
    }
    .header_2_line{
      margin-top: 5%;
    }
    .main{
      height:150vh;
      grid-template-columns:[line1]0.05fr[line2]0.45fr[line3]0.45fr[line4]0.05fr[end];
      grid-template-rows:[line1]10vh[line2]35vh[line3]35vh[line4]35vh[line5]35vh[end];
    }
    .main_1_RL{
      display: none;
    }
    .main_1_LL{
      display: none;
    }
    .main_1_title{
      grid-column: line2/line4;
      grid-row:line1/line2;
    }
    .main_2_img{
      background-position:top;
      grid-column: line2/line3;
      grid-row:line2/line3;
    }
    .main_2_art{
      grid-column: line3/line4;
      grid-row:line2/line3;    
    }
    .main_3_img{
      grid-column: line2/line3;
      grid-row:line3/line4;
    }
    .main_3_art{
      grid-column: line3/line4;
      grid-row:line3/line4;   
    }
    .main_4_img{
      grid-column: line2/line3;
      grid-row:line4/line5;
    }
    .main_4_art{
      grid-column: line3/line4;
      grid-row:line4/line5;
      
    }
    .main_5_img{
      grid-column: line2/line3;
      grid-row:line5/end;
    }
    .main_5_art{
      grid-column: line3/line4;
      grid-row:line5/end;
    }
    .member{
      height: 65vh;
      grid-template-columns:[line1]0.05fr[line2]0.3fr[line3]0.3fr[line4]0.3fr[line5]0.05fr[end];
      grid-template-rows:[line1]10vh[line2]25vh[line3]25vh[end];
    }
    .member_bgcolor{
      grid-column: line1/end;
      grid-row:line2/end;
    }
    .member_title{
      grid-column: line3/line4;
      grid-row:line1/line2;
    }
    .member_RL{
      grid-column: line1/line3;
      grid-row:line1/line2;
    }
    .member_LL{
      grid-column:line4/end;
      grid-row:line1/line2;
    }
    .member_1{
      width: 22vw;
      height:22vw;
      grid-column: line2/line3;
      grid-row:line2/line3;
    }
    .member_2{
      width: 22vw;
      height:22vw;
      grid-column: line3/line4;
      grid-row:line2/line3;
    }
    .member_3{
      width: 22vw;
      height:22vw;
      grid-column:line4/line5;
      grid-row:line2/line3;
    }
    .member_4{
      width: 22vw;
      height:22vw;
      grid-column:line2/line3;
      grid-row:line3/end;
    }
    .member_5{
      width: 22vw;
      height:22vw;
      grid-column: line3/line4;
      grid-row:line3/end;
    }
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
 