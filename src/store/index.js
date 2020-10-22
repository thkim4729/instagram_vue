import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        myProfile: [
            {
                name: 'thkim4729',
                img: 'https://wallpapercave.com/wp/wp4288432.jpg',
            },
        ],
        stories: [
            { name: 'Instagram', img: 'https://i.pinimg.com/originals/e8/8b/a5/e88ba54a1be984fc2eb030b6b602ed27.png' },
            {
                name: 'JavaScript',
                img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/events/600px-JavaScript-logo_QH9t5tv.png',
            },
            { name: 'Vue.js', img: 'https://lessipe.com/file/course/15447829952341.png' },
            { name: 'HTML5', img: 'https://cdn.worldvectorlogo.com/logos/html5.svg' },
            { name: 'CSS3', img: 'https://cdn.worldvectorlogo.com/logos/css3.svg' },
            {
                name: 'queenchoa_',
                img:
                    'https://em.wattpad.com/a0c460d97f83f733b838d9d222665c831f1ee7a5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f49674f656b33385164776c784f513d3d2d3733373635353437392e313561326136393039383230363662353935393734363437383239352e6a7067?s=fit&w=720&h=720',
            },
            { name: 'hk_leee', img: 'https://image.ajunews.com/content/image/2020/05/28/20200528164228601365.png' },
            { name: 'miHoYo', img: 'https://iplaygame91.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/file_9_4.jpg' },
            { name: '순당무', img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/d77e18a3-ef4e-4e78-8d75-be296ff2c315-profile_image-300x300.png' },
            { name: 'Twitch', img: 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c540.png' },
        ],
        posts: [
            {
                userProfile: {
                    name: 'hk_leee',
                    img: 'https://image.ajunews.com/content/image/2020/05/28/20200528164228601365.png',
                    describe: '이현경',
                },
                content: {
                    img:
                        'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/95552912_919772521790833_7609195544096366837_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=UCX5DyXHKM0AX-DiZrJ&tp=19&oh=7401e1185c881ed28d7aa0fd6c2e8105&oe=5FBAA420',
                    text: '진짜 오랜만에 찍는 프로필📸📸📸 넘모 마음에 드니까 조금 많이 올려야지😜 #아나운서프로필 #프로필 #프로필사진 #스튜디오추천 @fame_us_studio',
                },
                like: ['jeonghyun_ta', 'queenchoa_', 'mc_rena', 'forest.y_u', 'hyojjang2ya'],
                comments: [
                    { name: '90mm', text: '이현경 사랑해요' },
                    { name: '이현경사랑', text: '이현경 너무 기대돼' },
                    { name: '행갱', text: '좋아요 아주 행갱' },
                    { name: '갓현경', text: '이현경 너무 귀여워' },
                    { name: '행갱좌', text: '이현경 최고' },
                ],
            },
            {
                userProfile: {
                    name: 'hk_leee',
                    img: 'https://image.ajunews.com/content/image/2020/05/28/20200528164228601365.png',
                    describe: '이현경',
                },
                content: {
                    img:
                        'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/97210274_692439364928521_3773159702827469917_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=Sc2auoL9ZZMAX-uPvQv&_nc_tp=24&oh=1265671aa7357c0dc70fa2fe5b8aecd5&oe=5FB9392C',
                    text: '편안한 분위기에서 즐겁게 찍었습니다!💟💟 #아나운서프로필 #프로필촬영 #스튜디오추천 #프로필사진',
                },
                like: ['queenchoa_', 'mc_rena', 'forest.y_u', 'hyojjang2ya', 'jeonghyun_ta'],
                comments: [
                    { name: '90mm', text: '이현경 사랑해요' },
                    { name: '이현경사랑', text: '이현경 너무 기대돼' },
                    { name: '행갱', text: '좋아요 아주 행갱' },
                    { name: '갓현경', text: '이현경 너무 귀여워' },
                    { name: '행갱좌', text: '이현경 최고' },
                ],
            },
            {
                userProfile: {
                    name: 'hk_leee',
                    img: 'https://image.ajunews.com/content/image/2020/05/28/20200528164228601365.png',
                    describe: '이현경',
                },
                content: {
                    img:
                        'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/119887229_183763306524494_2448627449684601655_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=YUplujEhQcMAX_GJPcI&tp=19&oh=df5876a77a5612703e05990b11614330&oe=5FB916B2',
                    text: '스카프의 계절인데...어디 못가고 일단 대기실👀 #협찬 #매드고트 #스카프 #스카프코디 #가을스카프',
                },
                like: ['mc_rena', 'forest.y_u', 'hyojjang2ya', 'jeonghyun_ta', 'queenchoa_'],
                comments: [
                    { name: '90mm', text: '이현경 사랑해요' },
                    { name: '이현경사랑', text: '이현경 너무 기대돼' },
                    { name: '행갱', text: '좋아요 아주 행갱' },
                    { name: '갓현경', text: '이현경 너무 귀여워' },
                    { name: '행갱좌', text: '이현경 최고' },
                ],
            },
            {
                userProfile: {
                    name: 'hk_leee',
                    img: 'https://image.ajunews.com/content/image/2020/05/28/20200528164228601365.png',
                    describe: '이현경',
                },
                content: {
                    img:
                        'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/67890364_2554111171278073_859873754563669593_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=K1lDaL5tp4QAX8S7o3y&tp=19&oh=b560e968a856986d8bb5aaccaa702c6c&oe=5FBAE01F',
                    text: 'ASL 시즌8 결승전도 끝이 났네요🙏🏻이번 시즌도 넘치게 행복했습니다💜 함께 하는 현장이 언제나 애틋합니다🙇🏻‍♀️ 모두 감사해요!',
                },
                like: ['forest.y_u', 'hyojjang2ya', 'jeonghyun_ta', 'queenchoa_', 'mc_rena'],
                comments: [
                    { name: '90mm', text: '이현경 사랑해요' },
                    { name: '이현경사랑', text: '이현경 너무 기대돼' },
                    { name: '행갱', text: '좋아요 아주 행갱' },
                    { name: '갓현경', text: '이현경 너무 귀여워' },
                    { name: '행갱좌', text: '이현경 최고' },
                ],
            },
            {
                userProfile: {
                    name: 'hk_leee',
                    img: 'https://image.ajunews.com/content/image/2020/05/28/20200528164228601365.png',
                    describe: '이현경',
                },
                content: {
                    img:
                        'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/60818010_484304512338812_924587310958185906_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=pxgDmfkjNekAX8Hl_zx&tp=19&oh=4cf78312f57d3d7a654f181e5a5774e8&oe=5FB7A769',
                    text: '유주가 입혀줌🍋🍋',
                },
                like: ['hyojjang2ya', 'jeonghyun_ta', 'queenchoa_', 'mc_rena', 'forest.y_u'],
                comments: [
                    { name: '90mm', text: '이현경 사랑해요' },
                    { name: '이현경사랑', text: '이현경 너무 기대돼' },
                    { name: '행갱', text: '좋아요 아주 행갱' },
                    { name: '갓현경', text: '이현경 너무 귀여워' },
                    { name: '행갱좌', text: '이현경 최고' },
                ],
            },
        ],
    },
    mutations: {
        pushComment(state, payload) {
            state.posts[payload.index].comments.push({
                name: payload.name,
                text: payload.text,
            });
        },
    },
    actions: {},
    modules: {},
});
