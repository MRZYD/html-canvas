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
        }, {
            bg: 'https://static.268xue.com/upload/zaieh0ueuio/0/yzl/common/2020092815/fe7dc2dfc0a70c84b9934ff664a511a8.png',
            src: '',
            isPoster: false,
            isSecShow: true,
        }, {
            bg: 'https://static.268xue.com/upload/zaieh0ueuio/0/yzl/common/2020092815/75d7d6f7f7187d1a56f2f57966752271.png',
            src: '',
            isPoster: false,
            isSecShow: true,
        }],
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
        }]
    };
var typeImgListType1 = [
    {src: staticPath + '/front/mobile/v3/img/share2.0/p_type_2.jpg'},
    {src: staticPath + '/front/mobile/v3/img/share2.0/p_type_3.jpg'},
    {src: staticPath + '/front/mobile/v3/img/share2.0/p_type_4.jpg'},
    {src: staticPath + '/front/mobile/v3/img/share2.0/p_type_1.jpg'},
    {src: staticPath + '/front/mobile/v3/img/share2.0/p_type_5.jpg'},
    {src: staticPath + '/front/mobile/v3/img/share2.0/p_type_6.jpg'},
    {src: staticPath + '/front/mobile/v3/img/share2.0/p_type_7.jpg'},
    {src: staticPath + '/front/mobile/v3/img/share2.0/p_type_8.jpg'},
    {src: staticPath + '/front/mobile/v3/img/share2.0/p_type_9.jpg'},
];
var typeImgListType2 = [
    {src: staticPath + '/front/mobile/v3/img/share2.0/p_type_6.jpg'},
    {src: staticPath + '/front/mobile/v3/img/share2.0/p_type_7.jpg'},
    {src: staticPath + '/front/mobile/v3/img/share2.0/p_type_8.jpg'},
    {src: staticPath + '/front/mobile/v3/img/share2.0/p_type_9.jpg'},
];
var posterImg = [];
var typeImgList = [];
var ewmImg;
var shareText;
var articleImg;
var type;
var shareUrl;
$(function () {
    var noMobile = getCookie("noMobile");
    if (noMobile != null) {
        type = $("#type").val();
        shareTitle = $("#shareTitle").val();
        shareText = $("#shareText").val();
        articleImg = $("#articleImg").val();
        shareUrl = $("#shareUrl").val();
    }else{
        type = _getSessionStorage('type');
        shareTitle = _getSessionStorage('shareTitle');
        shareText = _getSessionStorage('shareText');
        articleImg = _getSessionStorage('courseImage');
        shareUrl = window.location.protocol + "//" + window.location.host + "/admin/shortLink/" + _getSessionStorage('oldUrl');
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
        title : Zepto('#courseName').text(),
        lookNum : Zepto('#lookNum').val(),
        url : window.location.href,
        reset:true,
        desc : desc,
        img:''
    }
    var vcodeEle = $(qrcodeEle).find('img');
    if (!$("vcodeEle").attr("src")) {
        var canvas = $(qrcodeEle).find("canvas")[0];
        ewmImg = canvas.toDataURL("image/png");
    }

    onload();
    $('body').on('click', '#copyUrl', function () {
        copyText(shareUrl);
        Zepto.toast('���Ƴɹ�');
    }).on('click', '#btn', function () {
        if(isWeiXin()){
            t.opWx(t.args);
            Zepto('#prompt').css("display","block").click(function () {
                Zepto(this).css("display","none");
                Zepto('body').css('overflow', 'inherit')
            });
            Zepto('body').css('overflow', 'hidden')
        }else{
            Zepto('#prompt1').css("display","block").click(function () {
                Zepto(this).css("display","none");
                Zepto('body').css('overflow', 'inherit')
            });
            Zepto('body').css('overflow', 'hidden')
        }

    });
})

function onload() {
    new Vue({
        el: "#app",
        data: {
            loading: true,
            swiperIndex: 0,
            avatar: $("#avatar").val(),
            userName: $("#userName").val(),
            shareTitle: shareTitle,
            articleImg: articleImg,
            shareText: shareText,
            ewmImg: ewmImg,
            zwmImg: 'https://static.268xue.com/upload/zaieh0ueuio/0/yzl/common/2020092816/592412d2749eb908b3736d93f412965f.png',
            eduText: $("#eduText").val(),
            compangLogo: $("#compangLogo").val(),
            companyText: $("#companyText").val(),
            posterImg: posterImgType1,
            typeImgList1: typeImgListType1,
            typeImgList2: typeImgListType2,
            type: type || 1,
            shareUrl: shareUrl,
            args: args
        },
        created() {
            let that = this;
        },
        mounted() {
            let that = this;
            that.posterTemp();
            posterCanvas(this, 0);
            // posterCanvas1(this);
        },
        methods: {
            posterTemp() {
                let that = this;
                let posterTemp = new Swiper('.poster-temp', {
                    spaceBetween: 5,
                    slidesPerView: 4.2,
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
                //�ֲ�ͼ�л�
                let posterPic = new Swiper('.poster-pic', {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    centeredSlides: true,
                    thumbs: {
                        swiper: posterTemp
                    },
                });
            },

            //��������
            copyPath(){
                let that = this;
                copyText(that.shareUrl);
                Zepto.toast('���Ƴɹ�');
            },

            //����΢��
            shareWxPath(){
                let that = this;
                that.opWx(that.args);
                addShareTips();
                Zepto('#prompt').css("display","block").click(function () {
                    Zepto(this).css("display","none");
                    Zepto('body').css('overflow', 'inherit')
                });
                Zepto('body').css('overflow', 'hidden')
            },

            //QQ����
            shareQQPath(){
                let that = this;
                opQQ(that);
            },

            opWx: function (obj) {    //ѡ��wx
                //�ж��Ƿ���Ҫ���³�ʼ��΢�ŷ���
                if(obj.reset!=undefined&&obj.reset!=null&&obj.reset!=""&&obj.reset){
                    wxShare(obj);
                }
            },
        }
    });
};

function posterCanvas(that, index) {
    if (that.type == 1 ? (index < 5 ? that.posterImg.list_pic[index].isPoster : that.posterImg.list_npic[index-5].isPoster) : that.posterImg.list_npic[index].isPoster) {
        that.loading = false;return
    }
    baseImg(that, index);
    let targetDom = that.type == 1 ? document.getElementById('bs-poster-'+ index ) : document.getElementById('bs-poster-'+ index + 'A');
    let posterParams = ImgParams(index, that);
    setTimeout(() => {
        html2canvas(targetDom, posterParams).then(canvas => {
            if(that.type == 1 ){
                if(index < 5){
                    that.posterImg.list_pic[index].src = canvas.toDataURL("image/png", 1);  // ����ͼƬ
                    that.posterImg.list_pic[index].isSecShow = false;
                    that.posterImg.list_pic[index].isPoster = true;
                }else{
                    that.posterImg.list_npic[index-5].src = canvas.toDataURL("image/png", 1);  // ����ͼƬ
                    that.posterImg.list_npic[index-5].isSecShow = false;
                    that.posterImg.list_npic[index-5].isPoster = true;
                }
            }else {
                that.posterImg.list_npic[index].src = canvas.toDataURL("image/png", 1);  // ����ͼƬ
                that.posterImg.list_npic[index].isSecShow = false;
                that.posterImg.list_npic[index].isPoster = true;
            }
            that.loading = false;
        }).catch((error) => {
            console.log(error)
            that.loading = false;
        })
    }, 500)
}

// ��ȡid canvas����
function ImgParams(index, that) {
    let targetDom = that.type == 1 ? document.getElementById('bs-poster-'+ index ) : document.getElementById('bs-poster-'+ index + 'A');
    console.log(targetDom)
    // ����һ���µ�canvas
    const Canvas = document.createElement('canvas');
    const width = targetDom.offsetWidth;  //����canvas�ߴ�������ͼ�ߴ���ͬ����ֹ�ױ�
    const height = targetDom.offsetHeight;  //����canvas�ߴ�������ͼ�ߴ���ͬ����ֹ�ױ�
    const scale = 4;  // �Ŵ���
    // ��Canvas�����Ŵ�scale����Ȼ�����С����Ļ����ģ������
    Canvas.width = width * scale;
    Canvas.height = height * scale;
    Canvas.getContext('2d').scale(scale, scale);
    //����contextλ�ã�ֵΪ������Ӵ���ƫ������ֵ����ͼƬ��λ(���ƫ�Ƶ��ص�)
    var rect = document.getElementById('posterPic').getBoundingClientRect();//��ȡԪ��������Ӳ��ƫ����
    Canvas.getContext('2d').translate(-rect.left, -rect.top);
    let posterParams = {
        canvas: Canvas,
        scale,
        width: width, //����canvas�ߴ�������ͼ�ߴ���ͬ����ֹ�ױ�
        height: height, //����canvas�ߴ�������ͼ�ߴ���ͬ����ֹ�ױ�
        useCORS: true, // ����Ҫ��������������
    }
    return posterParams;
}

//��ͼƬת��Ϊbase64
function baseImg(that, index) {
    //��ֹ��ĻС��ɹ�����������������
    window.pageYOffset = 0;
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    //������⣬���������е�ʱ�򣬱�Ϊ..
    let titleArray = that.shareTitle.split("");
    if (titleArray.length >= 21) {
        that.shareTitle = that.shareTitle.slice(0, 19) + '...';
    }
}

//ʵ�ֽ���Ŀ��ͼƬת����base64
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

/**�����ı� */
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
    // �Ƴ���ʱ�ı���
    document.body.removeChild(tempTextarea);
    return result;
}

//΢�ŷ���
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
                    // ����
                    wx.config({
                        debug: false,   // ���Խ׶Σ�����дΪtrue����Ҫ��Ϊ�˲����Ƿ����óɹ�
                        appId: entity.appId,
                        timestamp: entity.timestamp,
                        nonceStr: entity.nonceStr,
                        signature: entity.signature,
                        //onMenuShareTimeline ��������Ȧ
                        //onMenuShareAppMessage ���������
                        jsApiList: ['updateAppMessageShareData','updateTimelineShareData']
                    });
                    wx.ready(function() {
                        //����������ѡ���ť�ķ�������
                        wx.updateAppMessageShareData({
                            title: shareData.title, // �������
                            desc: shareData.desc, // ��������
                            link: shareData.url, // �������ӣ�������������·�������뵱ǰҳ���Ӧ�Ĺ��ں�JS��ȫ����һ��
                            imgUrl: shareData.img, // ����ͼ��
                            success: function () {

                            },
                            fail:function (res) {
                                console.dir(res);
                            }
                        });
                        //����������Ȧ����ť�ķ�������
                        wx.updateTimelineShareData({
                            title: shareData.title, // �������
                            link: shareData.url, // �������ӣ�������������·�������뵱ǰҳ���Ӧ�Ĺ��ں�JS��ȫ����һ��
                            imgUrl: shareData.img, // ����ͼ��
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
                    console.log('΢����ʱ�޷����з���');
                }

            }else{
                console.log('΢����ʱ�޷����з���');
            }

        },
        error:function (error) {
        }
    });
}

function opQQ(that) {    //ѡ��qq

    var p = {
        url: this.url,
        showcount: '0', /*�Ƿ���ʾ��������,��ʾ��'1'������ʾ��'0' */
        desc: this.desc, /*Ĭ�Ϸ�������(��ѡ)*/
        title: that.args.title, /*�������(��ѡ)*/
        pics: this.img, /*����ͼƬ��·��(��ѡ)*/
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
            '        <p>������Ͻǣ����������/Ⱥ��</p>' +
            '    </div>' +
            '</section>' +
            '' +
            '<section id="prompt1" style="display: none;">' +
            '    <div class="prompt_bg"></div>' +
            '    <div class="sharePrompt">' +
            '        <p>������ݲ�֧�֣��뵽΢���з���</p>' +
            '    </div>' +
            '</section>';
        Zepto('body').append(html);
    }
}


