<template>
  <div class="top-navbar">
    <ul>
      <li>關於品牌</li>
      <li>聯絡我們</li>|
      <li>登入</li>
    </ul>
  </div>
  <nav>
    <div class="navbar" :class="{'collapse':navbar.collapse}">
      <div class="nav-collapse-btn">
        <div @click="navbar.collapse=!navbar.collapse" :class="{'collapse':!navbar.collapse}">
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="band-logo-box">
        <router-link to="/" class="band-logo"><i class="fa-brands fa-apple"></i></router-link>
      </div>
      <ul>
        <li>
          <router-link to="shop">商店</router-link>
        </li>
        <li>
          <a @click="navbar.product_submenu=true;navbar.collapse=true;">產品</a>
        </li>
        <li>
          <router-link to="support">支援服務</router-link>
        </li>
      </ul>
      <div class="flex nav-last-box">
        <div class="search-box">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="搜尋">
        </div>
        <span class="cart"><i class="fa-solid fa-cart-shopping"></i></span>
      </div>
    </div>
    <div class="submenu-products" :class="{'active':navbar.product_submenu}">
      <ul>
        <li><div class="iPhone"></div><p>iPhone</p></li>
        <li><div class="iPad"></div><p>iPad</p></li>
        <li><div class="Mac"></div><p>Mac</p></li>
        <li><div class="Watch"></div><p>Watch</p></li>
        <li><div class="AirPods"></div><p>AirPods</p></li>
        <li><div class="TV"></div><p>TV和家庭</p></li>
        <li><div class="Apple"></div><p>Apple獨家</p></li>
        <li><div class="ass"></div><p>配件</p></li>
      </ul>
      <span @click="navbar.product_submenu=false">關閉</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data(){
    return {
      navbar:{
        collapse:true,
        product_submenu:false,
      }
    }
  }
}
</script>

<style scoped lang="scss">
.flex{
  display: flex;
}
.submenu-products::-webkit-scrollbar  {
    display: none;
}
.submenu-products.active{
  height: 8rem;
}
.submenu-products.active span{
  opacity: 1;
  display:block;
}
.submenu-products{
  span{
    display:none;
    position:absolute;
    transition-delay: 0.2s;
    transition-duration: 0.3s;
    width: 100vw;
    text-align: center;
    opacity: 0;
    font-size:smaller;
    cursor: pointer;
    color: rgba(31, 31, 31, 0.7);
  }
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  box-shadow: 0 1px 8px -2px rgba(128, 128, 128, 0.2);
  background-color:#e8e8e9b6;
  transition:0.5s all;
  overflow-x: scroll;
  height: 0;
  z-index: -2;
  ul{
    padding:15px;
    display:flex;
    list-style: none;
    min-width: 900px;
    justify-content:space-around;
    align-items: center;
    color:rgb(66, 66, 66);
    text-align:center;
    li{
      display:flex;
      flex-direction:column;
      div.iPhone{
        margin:0px auto 0px;
        background-size: initial;
        background-repeat: no-repeat;
        height:54px;
        width:38px;
        background: url('https://www.apple.com/v/iphone/home/bd/images/chapternav/iphone_13_pro_light__ds4kck27sw02_large.svg');
      }
      div.iPad{
        margin:0px auto 0px;
        background-size: 38px 54px;
        height:50px;
        width:38px;
        background-repeat: no-repeat;
        background: url('https://www.apple.com/v/ipad/home/bs/images/chapternav/ipadpro_light__eksnhatoqzu6_large.svg');
      }
      div.Mac{
        margin:0px auto 0px;
        background-size: 84px 54px;
        height:54px;
        width:84px;
        background-repeat: no-repeat;
        background: url('https://www.apple.com/v/mac/home/bk/images/familybrowser/macbook_pro__b9krsy4o6z5y_large.svg');
      }
      div.Watch{
        margin:0px auto 0px;
        background-size: 25px 54px;
        height:54px;
        width:25px;
        background-repeat: no-repeat;
        background: url('https://www.apple.com/v/watch/as/images/overview/icons/watch_nav_series_7_light__dv9ck4f6pyi6_large.svg');
      }
      div.AirPods{
        margin:0px auto 0px;
        background-size: initial;
        background-repeat: no-repeat;
        height:54px;
        width:34px;
        background: url('https://www.apple.com/v/airpods/q/images/chapternav/airpods_3gen_light__6r7zooyk4lua_large.svg');
      }
      div.TV{
        margin:0px auto 0px;
        background-size: initial;
        background-repeat: no-repeat;
        height:54px;
        width:34px;
        background: url('https://www.apple.com/v/tv-home/b/images/chapternav/light/apple_tv_fill_light__dnmd2pmoeviq_large.svg');
      }
      div.Apple{
        margin:0px auto 0px;
        background-size: 40x 54px;
        height:54px;
        width:40px;
        background-repeat: no-repeat;
        background: url('https://www.apple.com/v/services/b/images/services/chapternav/light/icloud_light__dyqbid0zktsi_large.svg');
      }
      div.ass{
        margin:0px auto 0px;
        background-size: 75x 75px;
        height:54px;
        width:54px;
        background-repeat: no-repeat;
        background: url('https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/icon-category-cases-protection?wid=75&hei=75&fmt=png-alpha&.v=1523297977190');
      }
    }
  }
}
.top-navbar{
  z-index: 500;
  transition: 0.3s all;
  background: rgb(240, 240, 240);
  padding:8px 50px 8px;
  ul{
    display: flex;
    list-style: none;
    justify-content: center;
    gap:15px;
    font-size: small;
    li:nth-child(1){
      margin-right: auto;
    }
  }
}
nav{
  z-index: 1000;
	position: sticky;
  top: 0;
}
.navbar {
  transition: 0.3s all;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background:rgba(255, 255, 255, 0.76);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  gap:10px;
  padding:8px 50px 8px;
  box-shadow: 0 1px 8px -2px rgba(128, 128, 128, 0.2);
  .band-logo{
    margin: auto 0px auto;
    font-size:2rem;
    text-decoration: none;
    color:rgb(55, 55, 55);
  }
  .search-box{
    display: flex;
    position: relative;
    i{
      color: rgb(51, 51, 51);
      top: 28%;
      position:absolute;
      margin-left:20px
    }
    input{
      height: 40px;
      border-radius:25px;
      border:none;
      background-color:#f5f5f5;
      padding:0px 40px 0px;
      transition:0.2s;
    }
    input:focus{
    box-shadow: 0px 0px 3px rgba(34, 34, 34, 0.2);
    background-color:#eeeeee;
    outline: none;
    }
  }
  .cart{
    margin: auto 15px auto;
    color: rgb(55, 55, 55);
  }
  ul{
    margin: auto 0px auto;
    width: 60%;
    justify-content:space-around;
    display:flex;
    list-style:none;
    li a{
      text-decoration: none;
      color: rgb(150, 150, 150);
      transition:0.5s all;
    }
    li a.active{
      color: black;
    }
  }
}
.nav-collapse-btn{
  position: absolute;
  height: 2rem;
  display: none;
  div{  
    position: relative;
    margin:auto 0px auto;
    display: flex;
    justify-content:center;
    align-items: center;
    height: 1rem;
    width: 1rem;
    cursor: pointer;
    overflow: hidden;
    span{
        position: absolute;
        transition: 0.5s all;
        height: 2px;
        width: 1rem;
        background:rgb(55, 55, 55);
        border-radius: 1px;
    }
  }
  div:not(.collapse){
    span:nth-child(1){
      transform: translateY(-5px);
    }
    span:nth-child(2){
      transform: translateY(5px);
    }
  }
  div.collapse{
    span:nth-child(1){
      transform: rotate(45deg);

    }
    span:nth-child(2){
      transform: rotate(-45deg);
    }
  }
}
@media screen and (max-width:1000px){
  .nav-collapse-btn{
    display: flex;
  }
  .top-navbar{
    padding:8px 10px 8px;
  }
  .navbar.collapse{
    height: 2.2rem;
  }
  .navbar{
    transition:0.5s all;
    height: 12rem;
    overflow: hidden;
    padding:8px 10px 8px;
    .band-logo-box{
      display:flex;
      margin-bottom: 10px;
      .band-logo{
        margin: auto auto auto;
      }
    }
    display:block;
    ul{
      li{
        margin-left:20px;
        margin-bottom: 10px;
      }
      display:inline-block;
    }
    .nav-last-box{
      .search-box{
        width: 100%;
        input{
          width: 100%;
        }
      }
      justify-content: center;
    }
  }
}
</style>
