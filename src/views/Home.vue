<template>
  <div class="home">
    <section class="section-1">
      <p class="title">iPhone 13 Pro</p>
      <p class="subtitle">就。很。破。</p>
      <div class="link-box">
        <a href="">進一步了解 <i class="fa-solid fa-arrow-right"></i></a>
        <a href="">購買 <i class="fa-solid fa-arrow-right"></i></a>
      </div>
      <img src='https://www.apple.com/v/home/ak/images/heroes/iphone-13-pro/hero_iphone_13pro__dhnsegysa42u_mediumtall.jpg'>
    </section>
    <section class="section-2">
      <p class="title">iPhone 13</p>
      <p class="subtitle">沒。很。破。</p>
      <div class="link-box">
        <a href="">進一步了解 <i class="fa-solid fa-arrow-right"></i></a>
        <a href="">購買 <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.section-1{
  background:#fbfbfd;
}
.section-2{
  padding-top: 420px!important;
  padding-bottom: 400px;
  background:#34283c;
  background-position:center;
  background-repeat:no-repeat;
  background-image: url("https://www.apple.com/v/home/ak/images/heroes/iphone-13/hero_iphone_13__f194u1rdooeq_small_2x.jpg");
  color: #fff;
  .subtitle{
    color: rgb(241, 133, 214);
  }
}
.home{
  section{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top:5rem;
    .title{
      font-size:10vw;
      font-weight: bold;
      z-index: 5;
    }
    .subtitle{
      font-size:8vw;
      z-index: 5;
    }
    .link-box{
      display:flex;
      width: 50%;
      padding-top:1vw;
      z-index: 5;
      justify-content: space-around;
      a{
        font-size:4vw;
        font-weight: normal;
        text-decoration: none;
        color:rgb(104, 119, 207);
      }
    }
    img{
      position:relative;
      bottom: 18vw;
      width: 100%;
    }
    @media screen and (min-width:1000px){
      .title{
        font-size:5rem;
      }
      .subtitle{
        font-size:3rem;
      }
      .link-box{
        a{
          font-size:2rem;
        }
      }
      img{
        position:relative;
        bottom: 23vw;
        width: 100%;
      }
    }
  }
}
</style>

<script>
  export default {
    name: 'Home',
    data(){
      return {

      }
    },
    mounted(){

    },
    methods:{

    },
    computed:{
      
    }
  }
</script>


