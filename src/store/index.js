import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stories: [{
      name: 'Cho-A',
      img: 'https://em.wattpad.com/a0c460d97f83f733b838d9d222665c831f1ee7a5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f49674f656b33385164776c784f513d3d2d3733373635353437392e313561326136393039383230363662353935393734363437383239352e6a7067?s=fit&w=720&h=720'
    }, {
      name: 'Ari',
      img: 'https://lh3.googleusercontent.com/proxy/lW5CNsLJWVAeGmkn0fBJ9xiX72uz7X3VJJWzVHpisy2uaLFTWkIbJCI5vmh5y2O5pv2nwxYVfJ8FeN6_yb_JhMF5vq-A1cQ02-YmBCFHkhOdAz0WpF_Dqtt2ThTWQr_BCFsxiqdZ9Swudiz04lQgjnLjoNlYv1G1Zxg46ZPMBldpLp8kETz0A5IRlMBNuHxrhRwvvXkLKiUNs13Xwq-Lc-d9Rc8RnUWOU90iU7AF_EXnptMNqYoRPqiwZbrDxO9nbuy1O8LwGZija3ZsQeurnb3FdIXAnkoJlCkEjxq_vu7TnXvw9hhoIo5CsH3bwnDB_1yQExe1zEOB31NUA-tIAw'
    }, {
      name: 'miHoYo',
      img: 'https://iplaygame91.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/file_9_4.jpg'
    }, {
      name: '순당무',
      img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/d77e18a3-ef4e-4e78-8d75-be296ff2c315-profile_image-300x300.png'
    }, {
      name: 'Twitch',
      img: 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c540.png'
    }, {
      name: 'IU',
      img: 'https://pm1.narvii.com/7088/34b1923db166f299125da1444c80378fe993f542r1-1448-957v2_uhq.jpg'
    }]
  },
  mutations: {},
  actions: {},
  modules: {}
});