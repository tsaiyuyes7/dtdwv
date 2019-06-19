<template>
    <div class="container-fluid article">
      <div class="nav">
            <div class="nav_1_Home"><router-link to="/home" ><img src="../assets/img_Landing_icon-10-10.png" alt=""></router-link></div>
                <div class="nav_2_About"><router-link to="/about" >About</router-link></div>
                <div class="nav_3_News"><router-link to="/news" >News</router-link></div>
                <div class="nav_4_Members"><router-link to="/member" >Member</router-link></div>
               <div class="nav_5_signin"><button @click="logout" class="signoutbtn">Signout</button></div>
      </div>
        <div class="row mainarea">
            <div class="row col-md-2 col-sm-2"></div>
            <div class="row col-md-8 col-sm-8 start">
                <div class="row topicbody"> 
                  <h1 class="maintopic">世代的交替</h1>
                  <div class="time">出版時間 : 2019/6/11 18:22</div>   
                </div>
                 
               <div class="row contentbody"> 
                   <div class="row bearimg"><h2 class="smalltopic">大黑鬼教練即將退位 聘請新任教練竟然是非人類?!</h2></div>  
                           
                <p class="text">    <span class="first">世</span>代的交替，擔任數位系女排教練兩年多的大黑鬼教練學期末即將退位，聘請的新任教練竟然是非人類。

                    由黑鬼教練帶領2年多的數位系女排，在進年來持續成長茁壯，取得多次好成績，但由於黑鬼教練個人因素決定在學期末退位，並且球隊聘請新任教練，陳姓非人類教練，對於新教練一事球隊隊員表示：希望教練不要偷懶可以認真帶我們喔。<br><br>

                對於即將退休，大黑鬼教練表示：帶了球隊2年多，有點捨不得，說不敢商是假的啦，但是我終於可以好好地跟我家恐龍相處了，平常碩班忙都忙死了還要乎時間在女排上面，害我都不能睡搞搞，開玩笑的啦，看到他們持續成長我覺得非常欣慰，希望新教練可以讓他們繼續進步，取得更好的成績。<br><br>

                    新教練陳姓非人類教練表示：其實已經跟他們有了非人類的接觸，還需要再培養彼此的默契，我是一個會偷懶的教練，如果下雨的話就會停練喔～那在開練之前可以先幫我辦個歡迎會，這樣我就可以吃吃到飽了，好想吃吃到飽喔。(小編葉司淇/國北報導)
                </p>
               
                <div class="row countarea">
                    
                </div>
                </div>
                <div class="row line"></div>
                <div class="row messagearea"> 
                    <ul class="messageList">
                       
                        <li class="usermessage" v-for="(message,index) in messages" :key="index" >
                        {{message.name}}
                             <button class="deletebtn" @click="deleteMessage(message)">
                                <img src="../assets/clear.png">                       
                            </button>
                            <br>
                         {{ message.content }} 
                            
                        </li>
                    </ul>
                     <div>
                         <input type="text" class="" v-model="newMessage" @keyup.enter="addMessage" placeholder="留言...">
                     </div>
                </div>
               
            </div>
            <div class="row col-md-2 col-sm-2"></div>
        </div>
        <!--footer_start-->
        <div class="footer">
          <div>©2019 DTDWV</div>
        </div>
         <!--footer_end-->
    </div>
</template>

<script>
  import { db } from '../firebase';
  import firebase from 'firebase';

  export default {
    name: 'app',
    data() {
      return {
        messages: [],
        newMessage: '',
        count:0,
      
      }
    },
    firestore() {
      return {
        messages: db.collection('messages'),
      }
    },
    methods: {
     
      addMessage: function() {
        var user=firebase.auth().currentUser;
        this.$firestore.messages.add(
          {
            name:user.displayName,
            content: this.newMessage,
            uid:user.uid
          }
        );
        this.newMessage = '';
      },
      deleteMessage: function(message) {
        this.$firestore.messages.doc(message['.key']).delete();
    
    },
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


<!--var user=firebase.auth().currentUser;
        var docmes = this.$firestore.messages.doc(message);
        var messageruid = '';
        docmes.get().then(function(querySnapshot){
          querySnapshot.forEach(function(doc) {
            messageruid=doc.uid;
          })
        });
        /* eslint-disable no-console */
        console.log(messageruid);
        if(messageruid==user.uid){
        this.$firestore.messages.doc(message['.key']).delete();
        }-->



<style scoped>

    @import url(https://fonts.googleapis.com/earlyaccess/cwtexyen.css);
    @import '../css/bootstrap.css';
  
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
  .article{
    padding: 0;
  }
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
  .mainarea{
    margin-top:15vh ;
    margin-left:0;
    margin-right: 0; 
  }

  .start{
    margin-top: 5vh;
  }

    .topicbody{
        padding-left: 5vw;
    }
    .contentbody{
          
        padding: 1vh 5vw;
        border-right:#66ccb0 5px solid;
        border-bottom:#66ccb0 5px solid;
    }
    .maintopic{
        font-size: 3.5vw;
        letter-spacing: 5px;
         font-family: 'cwTeXYen', sans-serif;
    }
    .time{
      font-family: 'cwTeXYen', sans-serif;
    }
    .bearimg{
        background-image: url('../assets/bear.jpg');
        background-size: 100%;
        height: 60vh;
        background-repeat: no-repeat;
        position: relative;
    }
    .smalltopic{
        font-family: 'cwTeXYen', sans-serif;
        margin: 0;
        width: 100%;
        position: absolute;
        bottom: 0;
        text-align: center;
        padding: 2vh 2vw;
        font-size: 2vw;
        letter-spacing: 3px;
        background-color: rgba(255,255,255,0.8);
    }
    
    .first{
        font-size: 3vw;
    }
    .text{
        font-family: 'cwTeXYen', sans-serif;
        line-height: 6vh;
        font-size: 1.8vw;
        padding-top: 3vh;
        letter-spacing: 3px;

    }
    .line{
        height: 3vh;
        border-bottom: #66ccb0 5px solid;
    }
    .messagearea{
        padding: 3vh 0 ;
      
    }
    .messageList {
    list-style: none;
    padding-left: 0;
    
  }

  .usermessage{
      margin-top: 2vh;
      padding-top: 2vh;
    font-size:2vw;
    padding-left: 5vw;
    padding-bottom: 2vh;
    letter-spacing: 3px;
    border-right: #EFc0aa 5px solid;
     border-bottom: #EFc0aa 5px solid;
     line-height: 5vh;
      font-family: 'cwTeXYen', sans-serif;
  }
  .deletebtn{
    opacity: 0;
    position: absolute;
      right: 1vw;
      text-decoration: none;
      border: none;
      background-color: rgba(255,255,255,1);
  }
  .deletebtn:hover{
    opacity: 1;
  }
   input{
    font-family: 'cwTeXYen', sans-serif;
    width: 100%;
    outline: none;
    border: #EFc0aa 1px solid;
    border-radius: 40px;
    color: #54494b;
     font-size: 1.8vw;
    letter-spacing: 3px;
    background-color: #EFc0aa;
    margin-top: 2vh;
    padding: 2vh 2vw;
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
