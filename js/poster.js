setTimeout(() => {
    posterCanvas1();
    posterCanvas2();
    posterCanvas3();
    posterCanvas4();
    posterCanvas5();
    posterCanvas6();
    posterCanvas7();
    posterCanvas8();
    posterCanvas9();
    cavImgLoadingNone();
}, 3000)

//轮播图切换
let posterTemp = new Swiper('.poster-temp', {
    spaceBetween: 15,
    slidesPerView: 4.2,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    on: {
        click: function () {
            cavImgLoading();
            let index = this.clickedIndex;
            console.log(index)
            switch (index) {
                case 0:
                    posterCanvas1();
                    break;
                case 1:
                    posterCanvas2();
                    break;
                case 2:
                    posterCanvas3();
                    break;
                case 3:
                    posterCanvas4();
                    break;
                case 4:
                    posterCanvas5();
                    break;
                case 5:
                    posterCanvas6();
                    break;
                case 6:
                    posterCanvas7();
                    break;
                case 7:
                    posterCanvas8();
                    break;
                case 8:
                    posterCanvas9();
                    break;
                default:
                    cavImgLoadingNone();
            }
        }
    }
});

let posterPic = new Swiper('.poster-pic', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    thumbs: {
        swiper: posterTemp
    },
});

//海报生成loading打开
function cavImgLoading() {
    let cavImgLoading = document.getElementById('cavImgLoading');
    cavImgLoading.style.display = "block";

}

//海报生成loading关闭
function cavImgLoadingNone() {
    let cavImgLoading = document.getElementById('cavImgLoading');
    // setTimeout(() => {
        cavImgLoading.style.display = "none";
    // }, 1500)
}

function posterCanvas1() {
    let targetDom = document.getElementById('bs-poster-0');
    let posterParams = ImgParams(0);
    let posterName = document.getElementsByName("posterPic1");
    if(posterName.length != 0){ cavImgLoadingNone(); return};
    new html2canvas(targetDom, posterParams).then(canvas => {
        // canvas为转换后的Canvas对象
        noneSecBox(0);
        let oImg = new Image();
        oImg.src = canvas.toDataURL();  // 导出图片
        oImg.name = 'posterPic1';
        let posterImg = document.getElementById("bs-poster-0").appendChild(oImg);  // 将生成的图片
        posterStyle(posterImg);
    })
}

function posterCanvas2() {
    let targetDom = document.getElementById('bs-poster-1');
    let posterParams = ImgParams(1);
    let posterName = document.getElementsByName("posterPic2");
    if(posterName.length != 0){ cavImgLoadingNone(); return};
    new html2canvas(targetDom, posterParams).then(canvas => {
        // canvas为转换后的Canvas对象
        noneSecBox(1);
        let oImg = new Image();
        oImg.src = canvas.toDataURL();  // 导出图片
        oImg.name = 'posterPic2';
        let posterImg = document.getElementById("bs-poster-1").appendChild(oImg);  // 将生成的图片
        posterStyle(posterImg);
    });
}

function posterCanvas3() {
    let targetDom = document.getElementById('bs-poster-2');
    let posterParams = ImgParams(2);
    let posterName = document.getElementsByName("posterPic3");
    if(posterName.length != 0){ cavImgLoadingNone(); return};
    new html2canvas(targetDom, posterParams).then(canvas => {
        // canvas为转换后的Canvas对象
        noneSecBox(2);
        let oImg = new Image();
        oImg.src = canvas.toDataURL();  // 导出图片
        oImg.name = 'posterPic3';
        let posterImg = document.getElementById("bs-poster-2").appendChild(oImg);  // 将生成的图片
        posterStyle(posterImg);
    });
}

function posterCanvas4() {
    let targetDom = document.getElementById('bs-poster-3');
    let posterParams = ImgParams(3);
    let posterName = document.getElementsByName("posterPic4");
    if(posterName.length != 0){ cavImgLoadingNone(); return};
    new html2canvas(targetDom, posterParams).then(canvas => {
        // canvas为转换后的Canvas对象
        noneSecBox(3);
        let oImg = new Image();
        oImg.src = canvas.toDataURL();  // 导出图片
        oImg.name = 'posterPic4';
        let posterImg = document.getElementById("bs-poster-3").appendChild(oImg);  // 将生成的图片
        posterStyle(posterImg);
    });
}

function posterCanvas5() {
    let targetDom = document.getElementById('bs-poster-4');
    let posterParams = ImgParams(4);
    let posterName = document.getElementsByName("posterPic5");
    if(posterName.length != 0){ cavImgLoadingNone(); return};
    new html2canvas(targetDom, posterParams).then(canvas => {
        // canvas为转换后的Canvas对象
        noneSecBox(4);
        let oImg = new Image();
        oImg.src = canvas.toDataURL();  // 导出图片
        oImg.name = 'posterPic5';
        let posterImg = document.getElementById("bs-poster-4").appendChild(oImg);  // 将生成的图片
        posterStyle(posterImg);
    });
}

function posterCanvas6() {
    let targetDom = document.getElementById('bs-poster-5');
    let posterParams = ImgParams(5);
    let posterName = document.getElementsByName("posterPic6");
    if(posterName.length != 0){ cavImgLoadingNone(); return};
    new html2canvas(targetDom, posterParams).then(canvas => {
        // canvas为转换后的Canvas对象
        noneSecBox(5);
        let oImg = new Image();
        oImg.src = canvas.toDataURL();  // 导出图片
        oImg.name = 'posterPic6';
        let posterImg = document.getElementById("bs-poster-5").appendChild(oImg);  // 将生成的图片
        posterStyle(posterImg);
    });
}

function posterCanvas7() {
    let targetDom = document.getElementById('bs-poster-6');
    let posterParams = ImgParams(6);
    let posterName = document.getElementsByName("posterPic7");
    if(posterName.length != 0){ cavImgLoadingNone(); return};
    new html2canvas(targetDom, posterParams).then(canvas => {
        // canvas为转换后的Canvas对象
        noneSecBox(6);
        let oImg = new Image();
        oImg.src = canvas.toDataURL();  // 导出图片
        oImg.name = 'posterPic7';
        let posterImg = document.getElementById("bs-poster-6").appendChild(oImg);  // 将生成的图片
        posterStyle(posterImg);
    });
}

function posterCanvas8() {
    let targetDom = document.getElementById('bs-poster-7');
    let posterParams = ImgParams(7);
    let posterName = document.getElementsByName("posterPic8");
    if(posterName.length != 0){ cavImgLoadingNone(); return};
    new html2canvas(targetDom, posterParams).then(canvas => {
        // canvas为转换后的Canvas对象
        noneSecBox(7);
        let oImg = new Image();
        oImg.src = canvas.toDataURL();  // 导出图片
        oImg.name = 'posterPic8';
        let posterImg = document.getElementById("bs-poster-7").appendChild(oImg);  // 将生成的图片
        posterStyle(posterImg);
    });
}

function posterCanvas9() {
    let targetDom = document.getElementById('bs-poster-8');
    let posterParams = ImgParams(8);
    let posterName = document.getElementsByName("posterPic9");
    if(posterName.length != 0){ cavImgLoadingNone(); return};
    new html2canvas(targetDom, posterParams).then(canvas => {
        // canvas为转换后的Canvas对象
        noneSecBox(8);
        let oImg = new Image();
        oImg.src = canvas.toDataURL();  // 导出图片
        oImg.name = 'posterPic9';
        let posterImg = document.getElementById("bs-poster-8").appendChild(oImg);  // 将生成的图片
        posterStyle(posterImg);
    });
}

// 获取id
function ImgParams(index){
    let targetDom = document.getElementById('bs-poster-' + index);
    let posterParams = {
        height: targetDom.offsetHeight, //设置canvas尺寸与所截图尺寸相同，防止白边
        width: targetDom.offsetWidth, //设置canvas尺寸与所截图尺寸相同，防止白边
    }
    return posterParams;
}

//隐藏HTML内容
function noneSecBox(index) {
    // let posterBg = document.querySelector('#bs-poster-' + index + '>img');
    let posterSec = document.querySelector('#bs-poster-' + index + '>div');
    // posterBg.style.display = "none";
    posterSec.style.display = "none";
}

// 添加海报样式
function posterStyle(posterImg) {
    if(!posterImg){ return }
    cavImgLoadingNone();
    posterImg.style.position = "absolute";
    posterImg.style.top = 0;
    posterImg.style.left = 0;
}


