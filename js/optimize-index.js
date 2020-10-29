var posterImgType1 = {
    list_pic: [{
        bg: 'https://static.268xue.com/upload/zaieh0ueuio/0/yzl/common/2020092815/994aadf3ebd92f6fcbb05cbf7d5676c1.png',
        src: '',
        isPoster: false,
        isSecShow: true,
    }, {
        bg: 'https://static.268xue.com/upload/zaieh0ueuio/0/yzl/common/2020092815/00d07ad674c041560dc63262755f99cb.png',
        src: '',
        isPoster: false,
        isSecShow: true,
    }, {
        bg: 'https://static.268xue.com/upload/zaieh0ueuio/0/yzl/common/2020092815/5440dc0d2220981e79ddf395b84fa1ea.png',
        src: '',
        isPoster: false,
        isSecShow: true,
    },
        // {
        // bg: 'https://static.268xue.com/upload/zaieh0ueuio/0/yzl/common/2020092815/fe7dc2dfc0a70c84b9934ff664a511a8.png',
        // src: '',
        // isPoster: false,
        // isSecShow: true,
        // },
        {
        bg: 'https://static.268xue.com/upload/zaieh0ueuio/0/yzl/common/2020092815/75d7d6f7f7187d1a56f2f57966752271.png',
        src: '',
        isPoster: false,
        isSecShow: true,
        },
    ],
    list_npic:[{
        bg: 'https://static.268xue.com/upload/zaieh0ueuio/0/yzl/common/2020092815/ea15c387243a73d50293e8033f56aa80.png',
        src: '',
        isPoster: false,
        isSecShow: true,
    }, {
        bg: 'https://static.268xue.com/upload/zaieh0ueuio/0/yzl/common/2020092815/8d2c28159c1e46d26ab7b5efd3fbaf9a.png',
        src: '',
        isPoster: false,
        isSecShow: true,
    }, {
        bg: 'https://static.268xue.com/upload/zaieh0ueuio/0/yzl/common/2020092815/f9a7e960aaba9a79bd893fb7e6f5c01c.png',
        src: '',
        isPoster: false,
        isSecShow: true,
    }, {
        bg: 'https://static.268xue.com/upload/zaieh0ueuio/0/yzl/common/2020092815/dfea46a62ea015d7aa809ff0e5e21fe9.png',
        src: '',
        isPoster: false,
        isSecShow: true,
    },{
        bg: 'https://static.268xue.com/upload/zaieh0ueuio/0/yzl/common/2020101509/f4375cb2792424825f1d33b07f23866e.jpg',
        src: '',
        isPoster: false,
        isSecShow: true,
    },{
        bg: 'https://static.268xue.com/upload/zaieh0ueuio/0/yzl/common/2020101509/69e29e15c225462ff10d697d9f8629b7.jpg',
        src: '',
        isPoster: false,
        isSecShow: true,
    },{
        bg: 'https://static.268xue.com/upload/zaieh0ueuio/0/yzl/common/2020101509/1b213d45787ecd9cd0eb6b61d13d4d7e.jpg',
        src: '',
        isPoster: false,
        isSecShow: true,
    },{
        bg: 'https://static.268xue.com/upload/zaieh0ueuio/0/yzl/common/2020101509/36b69aa3e998085bd779b3b52e34a33f.jpg',
        src: '',
        isPoster: false,
        isSecShow: true,
    },{
        bg: 'https://static.268xue.com/upload/zaieh0ueuio/0/yzl/common/2020101509/37524a41c2a2003e0d066cc3a10fa280.jpg',
        src: '',
        isPoster: false,
        isSecShow: true,
    }]
};
var typeImgListType1 = [
{src: './imgs/p_type_2.jpg'},
{src: './imgs/p_type_3.jpg'},
{src: './imgs/p_type_4.jpg'},
// {src: './imgs/p_type_1.jpg'},
{src: './imgs/p_type_5.jpg'},
{src: './imgs/p_type_6.jpg'},
{src: './imgs/p_type_7.jpg'},
{src: './imgs/p_type_8.jpg'},
{src: './imgs/p_type_9.jpg'},
{src: './imgs/p_type_10.jpg'},
{src: './imgs/p_type_11.jpg'},
{src: './imgs/p_type_12.jpg'},
{src: './imgs/p_type_13.jpg'},
{src: './imgs/p_type_14.jpg'},
];
var typeImgListType2 = [
{src: './imgs/p_type_6.jpg'},
{src: './imgs/p_type_7.jpg'},
{src: './imgs/p_type_8.jpg'},
{src: './imgs/p_type_9.jpg'},
{src: './imgs/p_type_10.jpg'},
{src: './imgs/p_type_11.jpg'},
{src: './imgs/p_type_12.jpg'},
{src: './imgs/p_type_13.jpg'},
{src: './imgs/p_type_14.jpg'},
];
var ewmImg;
var shareText;
var courseImage;
var type;
var shareUrl;
var liveTime;
$(function () {
    liveTime = '2020年10月29日16:48:05';
    type = 1;
    shareTitle = '海报H5标题';
    shareText = '海报页面内容，H5页面内容，展示内容';
    courseImage = 'https://static.268xue.com/upload/zne4wgao6bk/0/yzl/common/2020090415/373581f31aed8ae1c502e0aaba47a5c2_png/pc/large.png';
    shareUrl = 'www.baidu.com';
if(type == null || type == undefined){
    type = 1;
}
if(liveTime == null || liveTime == 'undefined'){
    liveTime = '';
}
var qrcodeEle = document.querySelector('#qrcode__wrap');
var qrcode = new QRCode(qrcodeEle, {
    text: shareUrl,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
args = {
    ele: '.Share',
    opt: '2 3 4',
    title : shareTitle,
    url : shareUrl,
    reset:true,
    desc : shareText,
    img: courseImage
}
var vcodeEle = $(qrcodeEle).find('img');
if (!$("vcodeEle").attr("src")) {
    var canvas = $(qrcodeEle).find("canvas")[0];
    ewmImg = canvas.toDataURL("image/png");
}

onload();
})
function onload() {
new Vue({
    el: "#app",
    data: {
        loading: true,
        swiperIndex: 0,
        avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1741476901,4013212021&fm=11&gp=0.jpg',
        userName: '清羽',
        liveTime: liveTime,
        shareTitle: shareTitle,
        courseImage: courseImage,
        shareText: shareText,
        ewmImg: ewmImg,
        zwmImg: 'https://static.268xue.com/upload/zaieh0ueuio/0/yzl/common/2020092816/592412d2749eb908b3736d93f412965f.png',
        eduText: '跟我一起学习吧',
        compangLogo: 'https://fimage.268xue.com/upload/0/yzl/common/2020092313/021cd9fb4df5b25f0f2ecfd0ee7df0e9.png',
        companyText: '来自268教育',
        posterImg: posterImgType1,
        typeImgList1: typeImgListType1,
        typeImgList2: typeImgListType2,
        type: type,
        shareUrl: shareUrl,
        args: args,
        smallSec: false,
    },
    created() {
        let that = this;
        let widthPhone = document.documentElement.clientWidth;
        let heightPhone = document.documentElement.clientHeight;
        // alert(heightPhone)
        if(parseFloat(widthPhone/heightPhone) > 0.6 && parseInt(heightPhone) > 600){
            that.smallSec = true;
        }
        console.log(that.smallSec)
    },
    mounted() {
        let that = this;
        that.posterTemp();
        posterCanvas(this, 0);

    },
    methods: {
        posterTemp() {
            let that = this;
            let posterTemp = new Swiper('.poster-temp', {
                spaceBetween: 5,
                slidesPerView: 5.5,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                on: {
                    click: function () {
                        that.loading = true;
                        let index = this.clickedIndex;
                        if(index){
                            posterCanvas(that, index);
                        }else{
                            that.loading = false;
                        }
                    }
                }
            });
            //轮播图切换
            let posterPic = new Swiper('.poster-pic', {
                slidesPerView: 'auto',
                spaceBetween: 30,
                centeredSlides: true,
                speed: 1,
                thumbs: {
                    swiper: posterTemp
                },
            });
        },

        //复制链接
        copyPath(){
            var noMobile = getCookie("noMobile");
            if (noMobile != null) {
                if(noMobile == "1"){
                    android.copyPath(shareUrl);
                }else{
                    window.webkit.messageHandlers.copyPath.postMessage(JSON.stringify({shareUrl:shareUrl}));
                }
                return
            }
            let that = this;
            copyText(that.shareUrl);
            alert('复制成功，快去分享吧');
        },

        //分享微信
        shareWxPath(){
            var noMobile = getCookie("noMobile");
            if (noMobile != null) {
                if(noMobile == "1"){
                    android.shareWxPath();
                }else{
                    window.webkit.messageHandlers.shareWxPath.postMessage("");
                }
                return
            }
            let that = this;
            addShareTips();
            that.opWx(that.args);
            let viewer = window.navigator.userAgent.toLowerCase();
            if(viewer.match(/MicroMessenger/i) == 'micromessenger'){
                Zepto('#prompt').css("display","block").click(function () {
                    Zepto(this).css("display","none");
                    Zepto('body').css('overflow', 'inherit')
                });
            }else{
                Zepto('#prompt1').css("display","block").click(function () {
                    Zepto(this).css("display","none");
                    Zepto('body').css('overflow', 'inherit')
                });
            }
            Zepto('body').css('overflow', 'hidden')
        },

        //QQ分享
        shareQQPath(){
            var noMobile = getCookie("noMobile");
            if (noMobile != null) {
                if(noMobile == "1"){
                    android.shareQQPath();
                }else{
                    window.webkit.messageHandlers.shareQQPath.postMessage("");
                }
                return
            }
            let that = this;
            opQQ(that);
        },
        opWx: function (obj) {    //选择wx
            //判断是否需要从新初始化微信分享
            if(obj.reset!=undefined&&obj.reset!=null&&obj.reset!=""&&obj.reset){
                wxShare(obj);
            }
        },
    }
});
};

function posterCanvas(that, index) {
console.log(index)
if (that.type == 1 ? (index < that.posterImg.list_pic.length ? that.posterImg.list_pic[index].isPoster : that.posterImg.list_npic[index-(that.posterImg.list_pic.length)].isPoster) : that.posterImg.list_npic[index].isPoster) {
    that.loading = false;return
}
baseImg(that, index);
let targetDom = that.type == 1 ? document.querySelector('#bs-poster-'+ index ) : document.querySelector('.bs-poster-'+ index + 'A');
let posterParams = ImgParams(index, that);
setTimeout(() => {
    html2canvas(targetDom, posterParams).then(canvas => {
        if(that.type == 1 ){
            if(index < (that.posterImg.list_pic.length)){
                that.posterImg.list_pic[index].src = canvas.toDataURL("image/png", 1);  // 导出图片
                that.posterImg.list_pic[index].isPoster = true;
                setTimeout(()=>{that.posterImg.list_pic[index].isSecShow = false;},300)
            }else{
                that.posterImg.list_npic[index-(that.posterImg.list_pic.length)].src = canvas.toDataURL("image/png", 1);  // 导出图片
                that.posterImg.list_npic[index-(that.posterImg.list_pic.length)].isPoster = true;
                setTimeout(()=>{that.posterImg.list_npic[index-(that.posterImg.list_pic.length)].isSecShow = false;},500)
            }
        }else {
            that.posterImg.list_npic[index].src = canvas.toDataURL("image/png", 1);  // 导出图片
            that.posterImg.list_npic[index].isPoster = true;
            setTimeout(()=>{that.posterImg.list_npic[index].isSecShow = false;},300)
        }
        setTimeout(()=>{that.loading = false;},300)
        if(index < that.posterImg.length){
            posterCanvas(this, index + 1);
        }

    }).catch((error) => {
        console.log(error)
        that.loading = false;
    })
}, 500)
}

// 获取id canvas参数
function ImgParams(index, that) {
let targetDom = that.type == 1 ? document.querySelector('#bs-poster-'+ index ) : document.querySelector('.bs-poster-'+ index + 'A');
console.log(targetDom)
// 创建一个新的canvas
const Canvas = document.createElement('canvas');
const width = targetDom.offsetWidth;  //设置canvas尺寸与所截图尺寸相同，防止白边
const height = targetDom.offsetHeight;  //设置canvas尺寸与所截图尺寸相同，防止白边
const scale = 4;  // 放大倍数
// 将Canvas画布放大scale倍，然后放在小的屏幕里，解决模糊问题
Canvas.width = width * scale;
Canvas.height = height * scale;
Canvas.getContext('2d').scale(scale, scale);
//设置context位置，值为相对于视窗的偏移量负值，让图片复位(解决偏移的重点)
var rect = document.getElementById('posterPic').getBoundingClientRect();//获取元素相对于视察的偏移量
Canvas.getContext('2d').translate(-rect.left, -rect.top);
let posterParams = {
    canvas: Canvas,
    scale,
    width: width, //设置canvas尺寸与所截图尺寸相同，防止白边
    height: height, //设置canvas尺寸与所截图尺寸相同，防止白边
    useCORS: true, // 【重要】开启跨域配置
    allowTaint: false,
}
return posterParams;
}

//将图片转换为base64
function baseImg(that, index) {
//防止屏幕小造成滚动，海报产生白屏
window.pageYOffset = 0;
document.documentElement.scrollTop = 0
document.body.scrollTop = 0

//处理标题，当大于三行的时候，变为..
let titleArray = that.shareTitle.split("");
if (titleArray.length >= 21) {
    that.shareTitle = that.shareTitle.slice(0, 19) + '...';
}
}

//实现将项目的图片转化成base64
function base64TransformByURL(url) {
function getBase64Image(img) {
    var canvas = document.createElement('CANVAS');
    var ctx = canvas.getContext('2d');
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0);
    let base64 = canvas.toDataURL('image/png');
    return base64;
}

return new Promise(function (resolve, reject) {
    const image = new Image;
    image.crossOrigin = 'Anonymous';
    image.onload = function () {
        resolve(getBase64Image(image));
    };
    image.src = url;
})
}

/**复制文本 */
function copyText(node) {
if (!node) {
    return;
}
var result;
var tempTextarea = document.createElement('textarea');
document.body.appendChild(tempTextarea);
if (typeof(node) == 'object') {
    if (node.value) {
        tempTextarea.value = node.value;
    } else {
        tempTextarea.value = node.innerHTML;
    }
} else {
    tempTextarea.value = node;
}
var u = navigator.userAgent;
if (u.match(/(iPhone|iPod|iPad);?/i)) {
    window.getSelection().removeAllRanges();
    var range = document.createRange();
    range.selectNode(tempTextarea);
    window.getSelection().addRange(range);
    result = document.execCommand('copy');
    window.getSelection().removeAllRanges();
} else {
    tempTextarea.select();
    result = document.execCommand('Copy');
}
// 移除临时文本域
document.body.removeChild(tempTextarea);
return result;
}

//微信分享
function wxShare(shareData){
$.ajax({
    url: baseloaction +'/mobile/share/WeChatSignature',
    type:'post',
    dataType:'json',
    data:{
        "url":location.href
    },
    success:function (result) {
        if(result.success){
            var entity = result.entity;
            if (entity.signature != null) {
                // 配置
                wx.config({
                    debug: false,   // 测试阶段，可以写为true，主要是为了测试是否配置成功
                    appId: entity.appId,
                    timestamp: entity.timestamp,
                    nonceStr: entity.nonceStr,
                    signature: entity.signature,
                    //onMenuShareTimeline 分享到朋友圈
                    //onMenuShareAppMessage 分享给朋友
                    jsApiList: ['updateAppMessageShareData','updateTimelineShareData']
                });
                wx.ready(function() {
                    //“分享给朋友”按钮的分享内容
                    wx.updateAppMessageShareData({
                        title: shareData.title, // 分享标题
                        desc: shareData.desc, // 分享描述
                        link: shareData.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl: shareData.img, // 分享图标
                        success: function () {

                        },
                        fail:function (res) {
                            console.dir(res);
                        }
                    });
                    //“分享到朋友圈”按钮的分享内容
                    wx.updateTimelineShareData({
                        title: shareData.title, // 分享标题
                        link: shareData.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl: shareData.img, // 分享图标
                        success: function () {

                        },
                        fail:function (res) {
                            console.dir(res);
                        }
                    });
                    wx.error(function(res) {
                        console.dir(res);
                        console.log(res.errMsg);
                    });
                });
            }else{
                console.log('微信暂时无法进行分享');
            }
        }else{
            console.log('微信暂时无法进行分享');
        }
    },
    error:function (error) {
    }
});
}

function opQQ(that) {    //选择qq
var p = {
    url: this.url,
    showcount: '0', /*是否显示分享总数,显示：'1'，不显示：'0' */
    desc: this.desc, /*默认分享理由(可选)*/
    title: that.args.title, /*分享标题(可选)*/
    pics: this.img, /*分享图片的路径(可选)*/
    style: '203',
    width: 98,
    height: 22
};
var s = [];
for (var i in p) {
    s.push(i + '=' + encodeURIComponent(p[i] || ''));
}
window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?' + s.join('&'));
}

function addShareTips(){
var prompt = Zepto("#prompt");
if(prompt==null||prompt==undefined||prompt.length==0){
    var html = '<section id="prompt" style="display: none;">' +
        '    <div class="prompt_bg"></div>' +
        '    <div class="shareArrow"><em class="arrow-right-top"></em></div>' +
        '    <div class="sharePrompt">' +
        '        <p>点击右上角，分享给朋友/群聊</p>' +
        '    </div>' +
        '</section>' +
        '' +
        '<section id="prompt1" style="display: none;">' +
        '    <div class="prompt_bg"></div>' +
        '    <div class="sharePrompt">' +
        '        <p>浏览器暂不支持，请到微信中分享</p>' +
        '    </div>' +
        '</section>';
    Zepto('body').append(html);
}
}

function goBack(){
var  noMobile  = getCookie("noMobile");
if(noMobile!=null){
    if (noMobile == "1" ){
        android.goBack();
    }
    if( noMobile == "2") {
        window.webkit.messageHandlers.goBack.postMessage("");
    }
    return true;
}
window.history.go(-1);
}


