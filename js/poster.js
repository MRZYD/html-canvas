
window.onload = function () {
    new Vue({
        el: "#app",//将vue挂载到html中你创建的那个带id="app"上
        data: {
            loading: true,
            swiperIndex: 0,
            userImg: 'https://fimage.268xue.com/admin/v3/img/default/admin_userpace.jpg?v=1598341671573',
            userName: '清羽',
            articleTitle: '文章标题文章标题文章标题文章标题文章标题文章标题',
            articleImg: 'https://p.ssl.qhimg.com/t0169dc991681fe4989.jpg',
            ewmImg: '../imgs/ewm-img.png',
            zwmImg: '../imgs/zwm-icon.png',
            eduText: '来自“268教育软件”',
            compangLogo: '../imgs/company_logo.png',
            companyText: '268教育软件提供技术支持',
            posterImg: [{
                bg: '../imgs/poster_bg1.png',
                src: '',
                isPoster: false,
                isSecShow: true,
            }, {
                bg: '../imgs/poster_bg2.png',
                src: '',
                isPoster: false,
                isSecShow: true,
            }, {
                bg: '../imgs/poster_bg3.png',
                src: '',
                isPoster: false,
                isSecShow: true,
            }, {
                bg: '../imgs/poster_bg4.png',
                src: '',
                isPoster: false,
                isSecShow: true,
            }, {
                bg: '../imgs/poster_bg5.png',
                src: '',
                isPoster: false,
                isSecShow: true,
            }, {
                bg: '../imgs/poster_bg6.png',
                src: '',
                isPoster: false,
                isSecShow: true,
            }, {
                bg: '../imgs/poster_bg7.png',
                src: '',
                isPoster: false,
                isSecShow: true,
            }, {
                bg: '../imgs/poster_bg8.png',
                src: '',
                isPoster: false,
                isSecShow: true,
            }, {
                bg: '../imgs/poster_bg9.png',
                src: '',
                isPoster: false,
                isSecShow: true,
            }],
            typeImgList:[
                {src: '../imgs/p_type_1.jpg'},
                {src: '../imgs/p_type_2.jpg'},
                {src: '../imgs/p_type_3.jpg'},
                {src: '../imgs/p_type_4.jpg'},
                {src: '../imgs/p_type_5.jpg'},
                {src: '../imgs/p_type_6.jpg'},
                {src: '../imgs/p_type_7.jpg'},
                {src: '../imgs/p_type_8.jpg'},
                {src: '../imgs/p_type_9.jpg'},
            ]
            
        },
        mounted() {
            posterCanvas1(this);
            this.posterTemp();
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
                            that.swiperIndex = index;
                            switch (index) {
                                case 0:
                                    posterCanvas1(that);
                                    break;
                                case 1:
                                    posterCanvas2(that);
                                    break;
                                case 2:
                                    posterCanvas3(that);
                                    break;
                                case 3:
                                    posterCanvas4(that);
                                    break;
                                case 4:
                                    posterCanvas5(that);
                                    break;
                                case 5:
                                    posterCanvas6(that);
                                    break;
                                case 6:
                                    posterCanvas7(that);
                                    break;
                                case 7:
                                    posterCanvas8(that);
                                    break;
                                case 8:
                                    posterCanvas9(that);
                                    break;
                                default:
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
                    thumbs: {
                        swiper: posterTemp
                    },
                });
            },
        }
    });
};

function posterCanvas1(that) {
    if (that.posterImg[0].isPoster) { that.loading = false; return }
    baseImg(that, 0);
    let targetDom = document.getElementById('bs-poster-0');
    let posterParams = ImgParams(0);
    setTimeout(() => {
        html2canvas(targetDom, posterParams).then(canvas => {
            that.posterImg[0].src = canvas.toDataURL("image/png", 1);  // 导出图片
            that.posterImg[0].isSecShow = false;
            that.posterImg[0].isPoster = true;
            that.loading = false;
        }).catch((error) => {
            console.log(error)
            that.loading = false;
        })
    }, 2000)
}

function posterCanvas2(that) {
    if (that.posterImg[1].isPoster) { that.loading = false; return }
    baseImg(that, 1);
    let targetDom = document.getElementById('bs-poster-1');
    let posterParams = ImgParams(1);
    setTimeout(() => {
        html2canvas(targetDom, posterParams).then(canvas => {
            // canvas为转换后的Canvas对象
            that.posterImg[1].src = canvas.toDataURL("image/png", 1);  // 导出图片
            // that.posterImg[1].isSecShow = false;
            // that.posterImg[1].isPoster = true;
            that.loading = false;
        }).catch((error) => {
            console.log(error)
            that.loading = false;
        })
    }, 500)
}

function posterCanvas3(that) {
    if (that.posterImg[2].isPoster) { that.loading = false; return }
    baseImg(that, 2);
    let targetDom = document.getElementById('bs-poster-2');
    let posterParams = ImgParams(2);
    setTimeout(() => {
        html2canvas(targetDom, posterParams).then(canvas => {
            // canvas为转换后的Canvas对象
            that.posterImg[2].src = canvas.toDataURL("image/png", 1);  // 导出图片
            that.posterImg[2].isSecShow = false;
            that.posterImg[2].isPoster = true;
            that.loading = false;
        }).catch((error) => {
            console.log(error)
            that.loading = false;
        })
    }, 500)
}

function posterCanvas4(that) {
    if (that.posterImg[3].isPoster) { that.loading = false; return }
    baseImg(that, 3);
    let targetDom = document.getElementById('bs-poster-3');
    let posterParams = ImgParams(3);
    setTimeout(() => {
        html2canvas(targetDom, posterParams).then(canvas => {
            // canvas为转换后的Canvas对象
            that.posterImg[3].src = canvas.toDataURL("image/png", 1);  // 导出图片
            that.posterImg[3].isSecShow = false;
            that.posterImg[3].isPoster = true;
            that.loading = false;
        }).catch((error) => {
            console.log(error)
            that.loading = false;
        })
    }, 500)
}

function posterCanvas5(that) {
    if (that.posterImg[4].isPoster) { that.loading = false; return }
    baseImg(that, 4);
    let targetDom = document.getElementById('bs-poster-4');
    let posterParams = ImgParams(4);
    setTimeout(() => {
        html2canvas(targetDom, posterParams).then(canvas => {
            // canvas为转换后的Canvas对象
            that.posterImg[4].src = canvas.toDataURL("image/png", 1);  // 导出图片
            that.posterImg[4].isSecShow = false;
            that.posterImg[4].isPoster = true;
            that.loading = false;
        }).catch((error) => {
            console.log(error)
            that.loading = false;
        })
    }, 500)
}

function posterCanvas6(that) {
    if (that.posterImg[5].isPoster) { that.loading = false; return }
    baseImg(that, 5);
    let targetDom = document.getElementById('bs-poster-5');
    let posterParams = ImgParams(5);
    setTimeout(() => {
        html2canvas(targetDom, posterParams).then(canvas => {
            // canvas为转换后的Canvas对象
            that.posterImg[5].src = canvas.toDataURL("image/png", 1);  // 导出图片
            that.posterImg[5].isSecShow = false;
            that.posterImg[5].isPoster = true;
            that.loading = false;
        }).catch((error) => {
            console.log(error)
            that.loading = false;
        })
    }, 500)
}

function posterCanvas7(that) {
    if (that.posterImg[6].isPoster) { that.loading = false; return }
    baseImg(that, 6);
    let targetDom = document.getElementById('bs-poster-6');
    let posterParams = ImgParams(6);
    setTimeout(() => {
        html2canvas(targetDom, posterParams).then(canvas => {
            // canvas为转换后的Canvas对象
            that.posterImg[6].src = canvas.toDataURL("image/png", 1);  // 导出图片
            that.posterImg[6].isSecShow = false;
            that.posterImg[6].isPoster = true;
            that.loading = false;
        }).catch((error) => {
            console.log(error)
            that.loading = false;
        })
    }, 500)
}

function posterCanvas8(that) {
    if (that.posterImg[7].isPoster) { that.loading = false; return }
    baseImg(that, 7);
    let targetDom = document.getElementById('bs-poster-7');
    let posterParams = ImgParams(7);
    setTimeout(() => {
        html2canvas(targetDom, posterParams).then(canvas => {
            // canvas为转换后的Canvas对象
            that.posterImg[7].src = canvas.toDataURL("image/png", 1);  // 导出图片
            that.posterImg[7].isSecShow = false;
            that.posterImg[7].isPoster = true;
            that.loading = false;
        }).catch((error) => {
            console.log(error)
            that.loading = false;
        })
    }, 500)
}

function posterCanvas9(that) {
    if (that.posterImg[8].isPoster) { that.loading = false; return }
    baseImg(that, 8);
    let targetDom = document.getElementById('bs-poster-8');
    let posterParams = ImgParams(8);
    setTimeout(() => {
        html2canvas(targetDom, posterParams).then(canvas => {
            // canvas为转换后的Canvas对象
            that.posterImg[8].src = canvas.toDataURL("image/png", 1);  // 导出图片
            // that.posterImg[8].isSecShow = false;
            that.posterImg[8].isPoster = true;
            that.loading = false;
        }).catch((error) => {
            console.log(error)
            that.loading = false;
        })
    }, 500)
}

// 获取id canvas参数
function ImgParams(index) {
    let targetDom = document.getElementById('bs-poster-' + index);
    // 创建一个新的canvas
    const Canvas = document.createElement('canvas');
    const width = targetDom.offsetWidth * 2;  //设置canvas尺寸与所截图尺寸相同，防止白边
    const height = targetDom.offsetHeight * 2;  //设置canvas尺寸与所截图尺寸相同，防止白边
    const scale = 2;  // 放大倍数
    // 将Canvas画布放大scale倍，然后放在小的屏幕里，解决模糊问题
    Canvas.width = width * scale;
    Canvas.height = height * scale;
    Canvas.getContext('2d').scale(scale, scale);
    let posterParams = {
        canvas: Canvas,
        scale,
        width: width, //设置canvas尺寸与所截图尺寸相同，防止白边
        height: height, //设置canvas尺寸与所截图尺寸相同，防止白边
        useCORS: true,
        // logging: true,
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
    let titleArray = that.articleTitle.split("");   
    if(titleArray.length >= 24) {
        that.articleTitle = that.articleTitle.slice(0,22) + '...';
    }
    //处理图片为base64
    convertImgToBase64(that.userImg, function (base64Img) {
        that.userImg = base64Img;
    });
    convertImgToBase64(that.articleImg, function (base64Img) {
        that.articleImg = base64Img;
    });
    convertImgToBase64(that.ewmImg, function (base64Img) {
        that.ewmImg = base64Img;
    });

    convertImgToBase64(that.posterImg[index].bg, function (base64Img) {
        that.posterImg[index].bg = base64Img;
    });
    convertImgToBase64(that.zwmImg, function (base64Img) {
        that.zwmImg = base64Img;
    });
    convertImgToBase64(that.compangLogo, function (base64Img) {
        that.compangLogo = base64Img;
    });
}

//实现将项目的图片转化成base64
function convertImgToBase64(url, callback, outputFormat) {
    var canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'),
        img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL(outputFormat || 'image/png');
        callback.call(this, dataURL);
        canvas = null;
    };
    img.src = url;
}    