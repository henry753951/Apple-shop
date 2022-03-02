<template>
  <div class="Shop">
    <div class="category">
      <div class="row" v-for="(category,index) in products" :key="index">
        <p>{{category.type}}</p>
        <button class="left" @click="scroll_left(category.type+'-items')"><i class="fa-solid fa-chevron-left"></i></button>
        <div :id="category.type+'-items'" class="items">
          <div class="card" v-for="(item,index) in category.list" :key="index">
            <p class="card-title">{{item.name}}</p>
            <img :src="item.image">
            <div class="card-footer">
              <p>NT${{getSmallestPrice(item.type)}} 起</p>
              <button>購買</button>
            </div>
          </div>
        </div>
        <button class="right" @click="scroll_right(category.type+'-items')"><i class="fa-solid fa-chevron-right"></i></button>
        <hr>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
hr{
  border: 0.01rem solid #e2e2e2;
  border-radius: 1px;
}
.Shop{
  background:#f5f5f7;
  .category .row {
    position: relative;
    p{
      font-size: 1.8rem;
      padding: 10px 10px 10px;
    }
    button.left{
      top: 0;
      bottom: 0;
      position: absolute;
      height: 60px;
      width: 60px;
      border-radius:50% ;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12);
      margin: auto;
      z-index: 30;
      background:white;
      border: none;
    }
    button.right{
      top: 0;
      bottom: 0;
      position: absolute;
      right: 0;
      height: 60px;
      width: 60px;
      border-radius:50% ;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12);
      margin: auto;
      z-index: 30;
      background:white;
      border: none;
    }
    .items::-webkit-scrollbar{
      display: none;
    }
    .items{
      overflow-x: scroll;
      padding-bottom:0.8rem;
      position: relative;
      display:flex;
      gap:20px;
      .card {
        margin: 10px;
        .card-title{
          z-index: 5;
          font-size: 1.2rem;
          font-weight: bold;
        }
        background:#fff;
        display:flex;
        flex-direction: column;
        min-width: 280px;
        width:280px;
        border-radius: 25px;
        padding:20px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12);
        img{
          transition: all 0.2s;
          margin-top:auto ;
          width: 100%;
        }
        img:hover{
          transform:scale(1.1);
        }
        .card-footer{
          z-index: 10;
          padding:15px;
          display:flex;
          justify-content: space-between;
          p{
            font-size: xx-small;
          }
          button{
            background:#0071e3;
            color: #fff;
            border:none;
            border-radius:50px;
            padding:0px 20px 0px;
          }
        }
      }
    }
  }


}
</style>

<script>
  export default {
    name: 'Shop',
    data(){
      return {
        products:[
          {
            type:'iPhone',
            list: [
              {
                name: 'iPhone 13',
                type: [
                  {
                    name:"64GB",
                    price:25900
                  },
                  {
                    name:"256GB",
                    price:29400
                  },
                  {
                    name:"512GB",
                    price:36400
                  }
                ],
                color:[
                  {
                    name:'粉紅色',
                    code:'#f7dcd5',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pink-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629842709000'
                  },
                  {
                    name:'午夜色',
                    code:'#43484e',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907844000'
                  },
                  {
                    name:'藍色',
                    code:'#447792',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-blue-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629842712000'
                  },
                  {
                    name:'星光色',
                    code:'#fbf7f4',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-starlight-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907845000'
                  },
                  {
                    name:'(PRODUCT)RED',
                    code:'#c72233',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-product-red-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907846000'
                  }
                ],
                image:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-compare-iphone-13-202109?wid=246&hei=256&fmt=jpeg&qlt=95&.v=1630380238000'
              },
              {
                name: 'iPhone 13 Pro',
                type: [
                  {
                    name:"128GB",
                    price:32900
                  },
                  {
                    name:"256GB",
                    price:36400
                  },
                  {
                    name:"512GB",
                    price:43400
                  },
                  {
                    name:"1TB",
                    price:50400
                  }
                ],
                color:[
                  {
                    name:'粉紅色',
                    code:'#f7dcd5',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pink-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629842709000'
                  },
                  {
                    name:'午夜色',
                    code:'#43484e',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907844000'
                  },
                  {
                    name:'藍色',
                    code:'#447792',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-blue-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629842712000'
                  },
                  {
                    name:'星光色',
                    code:'#fbf7f4',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-starlight-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907845000'
                  },
                  {
                    name:'(PRODUCT)RED',
                    code:'#c72233',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-product-red-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907846000'
                  }
                ],
                image:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone13problue-202109?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1629948813000'
              }
            ]
          },
          {
            type:'iPad',
            list: [
              {
                name: 'iPad Air',
                type: [
                  {
                    name:"64GB",
                    price:18900
                  },
                  {
                    name:"256GB",
                    price:23900
                  }
                ],
                color:[
                  {
                    name:'太空灰色',
                    code:'#b1b4b6',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-spacegray-202009?wid=470&hei=556&fmt=png-alpha&.v=1598650646000'
                  },
                  {
                    name:'銀色',
                    code:'#e0e1e1',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-silver-202009?wid=470&hei=556&fmt=png-alpha&.v=1598650645000'
                  },
                  {
                    name:'綠色',
                    code:'#cddecb',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-green-202009?wid=470&hei=556&fmt=png-alpha&.v=1598650644000'
                  },
                  {
                    name:'玫瑰金色',
                    code:'#ebcac3',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-gold-202009?wid=470&hei=556&fmt=png-alpha&.v=1598650644000'
                  },
                  {
                    name:'天藍色',
                    code:'#ccdae6',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-blue-202009?wid=470&hei=556&fmt=png-alpha&.v=1598650644000'
                  }
                ],
                image:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-air-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1627413381000'
              },
              {
                name: 'iPad Pro',
                type: [
                  {
                    name:"128GB",
                    price:24900
                  },
                  {
                    name:"256GB",
                    price:28000 
                  },
                  {
                    name:"512GB",
                    price:34200
                  },
                  {
                    name:"1TB",
                    price:46600 
                  },
                  {
                    name:"2TB",
                    price:59000
                  },
                ],
                color:[
                  {
                    name:'太空灰色',
                    code:'#aeb1b4',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-11-select-cell-spacegray-202104_GEO_TW?wid=470&hei=556&fmt=p-jpg&qlt=95&.v=1617925790000'
                  },
                  {
                    name:'銀色',
                    code:'#dddfde',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-11-select-cell-silver-202104_GEO_TW?wid=470&hei=556&fmt=p-jpg&qlt=95&.v=1617912663000'
                  },
                ],
                image:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-12-11-select-202104_GEO_TW?wid=545&hei=550&fmt=jpeg&qlt=95&.v=1617864731000'
              },
              {
                name: 'iPad mini',
                type: [
                  {
                    name:"64GB",
                    price:14900
                  },
                  {
                    name:"256GB",
                    price:19400
                  }
                ],
                color:[
                  {
                    name:'粉紅色',
                    code:'#e8d1cf',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-pink-202109?wid=470&hei=556&fmt=png-alpha&.v=1629840714000'
                  },
                  {
                    name:'太空灰色',
                    code:'#aeb1b4',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-space-gray-202109?wid=470&hei=556&fmt=png-alpha&.v=1629840743000'
                  },
                  {
                    name:'紫色',
                    code:'#bcbcd4',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-purple-202109?wid=470&hei=556&fmt=png-alpha&.v=1629840735000'
                  },
                  {
                    name:'星光色',
                    code:'#e4ded2',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-starlight-202109?wid=470&hei=556&fmt=png-alpha&.v=1629840745000'
                  }
                ],
                image:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-ipad-mini-202109?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1630457637000'
              },
              {
                name: 'iPad',
                type: [
                  {
                    name:"64GB",
                    price:25900
                  },
                ],
                color:[
                  {
                    name:'午夜色',
                    code:'#43484e',
                    img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907844000'
                  },
                ],
                image:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-ipad-202109?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1630640992000'
              },
              {
                name: 'iPad 相關配件',
                type: [],
                color:[],
                image:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-all-accessories-202109_GEO_TW?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1631315727000'
              }
            ]
          },
        ]
      }
    },
    mounted(){

    },
    methods:{
      scroll_left(i) {
        let content = document.getElementById(i);
        content.scrollBy({
          top: 0,
          left: -360,
          behavior: 'smooth'
        })
      },
      scroll_right(i) { 
        let content = document.getElementById(i);
        content.scrollBy({
          top: 0,
          left: +360,
          behavior: 'smooth'
        })
      },
      getSmallestPrice(array){
        var a = array.sort((a, b) => a.price - b.price)[0]
        var ob = {...a}
        return this.separator(ob.price)
      },
      separator(numb) {
        var str =(''+numb).split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
      }
    },
    computed:{

    }
  }
</script>


