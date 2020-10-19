import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myProfile: [{
      name: 'thkim4729',
      img: 'https://wallpapercave.com/wp/wp4288432.jpg'
    }],
    stories: [{
      name: 'Instagram',
      img: 'https://i.pinimg.com/originals/e8/8b/a5/e88ba54a1be984fc2eb030b6b602ed27.png'
    }, {
      name: 'JavaScript',
      img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/events/600px-JavaScript-logo_QH9t5tv.png'
    }, {
      name: 'Vue.js',
      img: 'https://lessipe.com/file/course/15447829952341.png'
    }, {
      name: 'HTML5',
      img: 'https://cdn.worldvectorlogo.com/logos/html5.svg'
    }, {
      name: 'CSS3',
      img: 'https://cdn.worldvectorlogo.com/logos/css3.svg'
    }, {
      name: 'Cho-A',
      img: 'https://em.wattpad.com/a0c460d97f83f733b838d9d222665c831f1ee7a5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f49674f656b33385164776c784f513d3d2d3733373635353437392e313561326136393039383230363662353935393734363437383239352e6a7067?s=fit&w=720&h=720'
    }, {
      name: 'RAZER',
      img: 'https://cdn.worldvectorlogo.com/logos/razer.svg'
    }, {
      name: 'miHoYo',
      img: 'https://iplaygame91.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/file_9_4.jpg'
    }, {
      name: '순당무',
      img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/d77e18a3-ef4e-4e78-8d75-be296ff2c315-profile_image-300x300.png'
    }, {
      name: 'Twitch',
      img: 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c540.png'
    }, ],
    posts: [{
        userProfile: {
          name: 'IU',
          img: 'https://akns-images.eonline.com/eol_images/Entire_Site/2019630/rs_600x600-190730011745-e-asia-IU-youtube-million-thumbnails.jpg?fit=around|1080:1080&output-quality=90&crop=1080:1080;center,top',
          describe: '가수 아이유 입니다.'
        },
        content: {
          img: 'https://pbs.twimg.com/media/DnW2ri7U8AAjdu5.jpg',
          text: '아이유 10주년 콘서트 합니다. 많이 보러와 주세요 열심히 준비 했으니 아주 멋진 공연이 될것이라 예상합니다. #아이유 #10주년 #콘서트'
        },
        like: ['sldjf', 'iulove', 'myboo', 'gogoiu', 'hahaha'],
        comments: [{
            name: '270mm',
            text: '아이유 사랑해요'
          },
          {
            name: '이지금',
            text: '너무 기대돼'
          },
          {
            name: '유애나1기',
            text: '좋아요 아주'
          },
          {
            name: '아이유1호팬',
            text: '콘서트 표 예매 실패 했어요 슬퍼'
          }
        ]
      },
      {
        userProfile: {
          name: 'shiba',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQoAuI2RODBbm-RpVEquiug-h2Mte8Mcg6kw&usqp=CAU',
          describe: '댕청 댕청 시바견'
        },
        content: {
          img: 'https://images-na.ssl-images-amazon.com/images/I/A19KXPdHSJL._SL1500_.jpg',
          text: '나는 시바견이 에요'
        },
        like: ['shibaba', 'shibalove', 'myshibababa', 'fububu', 'hahaha'],
        comments: [{
            name: '90mm',
            text: '시바 사랑해요'
          },
          {
            name: '시바사랑',
            text: '시바 너무 기대되'
          },
          {
            name: '시바주인',
            text: '좋아요 아주 시바'
          },
          {
            name: '시바견주',
            text: '시바견 너무 귀여워 시바'
          }
        ]
      }

    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});