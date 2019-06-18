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
            <div class="header_title">Members</div>
        </div>
        <!--header_end-->

        <!--main_start-->
        <div class="main">
            <div class="main_frame">
            
                    <div class="main_LL"></div>
                    <div class="main_RL"></div>
                    <div class="main_title" id="outsidespicker">大砲</div>
                    <div class="main_BG"></div>
                    <div class="main_1_photo main_photo main_18"></div>
                    <div class="main_1_intro main_intro "><div class="main_name">詹育瑄</div><br>"都已經站在場上了，我好想大便"</div>
                    <div class="main_2_photo main_photo main_14"></div> 
                    <div class="main_2_intro main_intro"><div class="main_name">葉司淇</div><br>"努力不一定會成功，但不努力可以很輕鬆"</div>
           
            </div>

            <div class="main_frame">
                    <div class="main_LL"></div>
                    <div class="main_RL"></div>
                    <div class="main_title" id="middleblocker">攔中</div>
                    <div class="main_BG"></div>
                    <div class="main_1_photo main_photo main_2"></div>
                    <div class="main_1_intro main_intro"><div class="main_name">林巧華</div><br>"我不要打攔中，我想吃雞蛋糕"</div>
                    <div class="main_2_photo main_photo main_20"></div> 
                    <div class="main_2_intro main_intro"><div class="main_name">張家瑜</div><br>"啊啊啊啊啊啊啊啊"</div>
            </div>
          
            <div class="main_frame">
                    <div class="main_LL"></div>
                    <div class="main_RL"></div>
                    <div class="main_title">副攻</div>
                    <div class="main_BG"></div>
                    <div class="main_1_photo main_photo main_17"></div>
                    <div class="main_1_intro main_intro"><div class="main_name">劉葳</div><br>"教練只是去黑暗中撿球怎麼不見了?"</div>
                    <div class="main_2_photo main_photo main_19"></div> 
                    <div class="main_2_intro main_intro"><div class="main_name">洪欣儀</div><br>"來點猛男吧"</div>
            </div>
            <div class="main_frame">
                    <div class="main_LL"></div>
                    <div class="main_RL"></div>
                    <div class="main_title">舉球</div>
                    <div class="main_BG"></div>
                    <div class="main_1_photo main_photo main_8"></div>
                    <div class="main_1_intro main_intro"><div class="main_name">鄭仴筑</div><br>"看看我的仴筑手!"</div>
            </div>
            <div class="main_frame">
                    <div class="main_LL"></div>
                    <div class="main_RL"></div>
                    <div class="main_title">自由</div>
                    <div class="main_BG"></div>
                    <div class="main_1_photo main_photo main_13"></div>
                    <div class="main_1_intro main_intro"><div class="main_name">蔡瑀</div><br>"穿上我的阿呆勝利襪，想不贏球都難"</div>
            </div>
            <div class="main_frame">
                    <div class="main_LL"></div>
                    <div class="main_RL"></div>
                    <div class="main_title">教練</div>
                    <div class="main_BG"></div>
                    <div class="main_1_photo main_photo main_black"></div>
                    <div class="main_1_intro main_intro"><div class="main_name">大黑</div><br>"我的球會飄"</div>
                    <div class="main_2_photo main_photo main_bear"></div> 
                    <div class="main_2_intro main_intro"><div class="main_name">棕熊</div><br>"我的蜂蜜呢?"</div>
            </div>
        </div>
        <!--main_end-->


        <!--footer_start-->
        <div class="footer">
            <div>©2019 DTDWV</div>
        </div>
    </div>
        <!--footer_end-->
</template>

 <script>
import firebase from 'firebase';
// @ is an alias to /src
export default {
  name: 'member',
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
/***********************************/

*{
    margin:0;
}
.grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: "nav"
                        "header"
                        "main"
                         "footer ";
    grid-column-gap: 0;
    grid-row-gap: 0;
  }
  .header{
    grid-area: header;
    background-repeat: no-repeat;
    background-size:100% auto;
    background-image: url(../assets/img_Member_header.png);
    height:100vh;
    display:grid;
    grid-template-columns: 0.1fr 0.9fr;
    grid-template-rows: 0.8fr 0.2fr;
    grid-template-areas:". ."
                        ". header_title ";
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
    height:auto;
  }
  .main_frame{
    font-family: '華康中圓體';
    color:#484041;
    display: grid;
    grid-template-columns:[line1]0.2fr[line2]0.2fr[line3]0.2fr[line4]0.2fr[line5]0.2fr[end];
    grid-template-rows:[line1]10vh[line2]20vh[line3]20vh[line4]10vh[end];
  }
  .main_LL{
    margin-top:4vh;
    margin-bottom:4vh;
    background-color: #FEC0AA;
    grid-column: line1/line3;
    grid-row:line1/line2;
  }
  .main_RL{
    margin-top:4vh;
    margin-bottom:4vh;
    background-color: #FEC0AA;
    grid-column: line4/end;
    grid-row:line1/line2;
  }
  .main_name{
      font-size: 2vw;
  }
  .main_title{
    margin:auto auto;
    font-size: 2vw;
    grid-column: line3/line4;
    grid-row:line1/line2;
  }
  .main_intro{
    margin:auto 0;
    font-size: 1.5vw;
  }
  .main_BG{
    z-index: -1;
    background-color: #66CCB0;
    grid-column: line1/end;
    grid-row:line2/line4;
  }
  .main_photo{
    margin:auto auto;
    width: 8vw;
    height:8vw;
    border-radius: 99em;
    background-color: #484041;
    background-position: center;
  }
  .main_1_photo{
    grid-column: line2/line3;
    grid-row:line2/line3;
  }
  .main_1_intro{

    grid-column: line3/line5;
    grid-row:line2/line3;
  }
  .main_2_photo{
    background-color: #484041;
    grid-column: line2/line3;
    grid-row:line3/line4;
  }
  .main_2_intro{
    grid-column: line3/line5;
    grid-row:line3/line4;
  }
  .main_18{
      background-image: url(../assets/img_Member_18.jpg);
  }

  .main_14{
    background-image: url(../assets/img_Member_14.jpg);
}

.main_2{
    background-image: url(../assets/img_Member_2.jpg);
}

.main_20{
    background-image: url(../assets/img_Member_20.jpg);
}

.main_17{
    background-image: url(../assets/img_Member_17.jpg);
}

.main_19{
    background-image: url(../assets/img_Member_19.jpg);
}

.main_8{
    background-image: url(../assets/img_Member_8.jpg);
}

.main_13{
    background-image: url(../assets/img_Member_13.jpg);
}
.main_black{
    background-image: url(../assets/img_Member_black.png);
    background-size: 20em;
    background-position: -4vw -3vw;
}
.main_bear{
    background-image: url(../assets/img_Member_bear.jpg);
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
