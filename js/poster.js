let targetDom = document.getElementById('bs-poster-0');
let posterParams = {
    allowTaint: false,
    useCORS: true,
    logging: false,
    height: targetDom.offsetHeight, //设置canvas尺寸与所截图尺寸相同，防止白边
    width: targetDom.offsetWidth, //设置canvas尺寸与所截图尺寸相同，防止白边
    windowWidth: document.body.scrollWidth,
    windowHeight: document.body.scrollHeight,
    dpi: window.devicePixelRatio * 2,
    scale: 2
}

new html2canvas(document.getElementById('bs-poster-0'), posterParams).then(canvas => {
    // canvas为转换后的Canvas对象
    noneSecBox(0);
    let oImg = new Image();
    oImg.src = canvas.toDataURL();  // 导出图片
    oImg.name = 'posterPic';
    let posterImg = document.getElementById("bs-poster-0").appendChild(oImg);  // 将生成的图片
    posterStyle(posterImg);
})

new html2canvas(document.getElementById('bs-poster-1'), posterParams).then(canvas => {
    // canvas为转换后的Canvas对象
    noneSecBox(1);
    let oImg = new Image();
    oImg.src = canvas.toDataURL();  // 导出图片
    let posterImg = document.getElementById("bs-poster-1").appendChild(oImg);  // 将生成的图片
    posterStyle(posterImg);
});

new html2canvas(document.getElementById('bs-poster-2'), posterParams).then(canvas => {
    // canvas为转换后的Canvas对象
    noneSecBox(2);
    let oImg = new Image();
    oImg.src = canvas.toDataURL();  // 导出图片
    let posterImg = document.getElementById("bs-poster-2").appendChild(oImg);  // 将生成的图片
    posterStyle(posterImg);
});

new html2canvas(document.getElementById('bs-poster-3'), posterParams).then(canvas => {
    // canvas为转换后的Canvas对象
    noneSecBox(3);
    let oImg = new Image();
    oImg.src = canvas.toDataURL();  // 导出图片
    let posterImg = document.getElementById("bs-poster-3").appendChild(oImg);  // 将生成的图片
    posterStyle(posterImg);
});

new html2canvas(document.getElementById('bs-poster-4'), posterParams).then(canvas => {
    // canvas为转换后的Canvas对象
    noneSecBox(4);
    let oImg = new Image();
    oImg.src = canvas.toDataURL();  // 导出图片
    let posterImg = document.getElementById("bs-poster-4").appendChild(oImg);  // 将生成的图片
    posterStyle(posterImg);
});

new html2canvas(document.getElementById('bs-poster-5'), posterParams).then(canvas => {
    // canvas为转换后的Canvas对象
    noneSecBox(5);
    let oImg = new Image();
    oImg.src = canvas.toDataURL();  // 导出图片
    let posterImg = document.getElementById("bs-poster-5").appendChild(oImg);  // 将生成的图片
    posterStyle(posterImg);
});

new html2canvas(document.getElementById('bs-poster-6'), posterParams).then(canvas => {
    // canvas为转换后的Canvas对象
    noneSecBox(6);
    let oImg = new Image();
    oImg.src = canvas.toDataURL();  // 导出图片
    let posterImg = document.getElementById("bs-poster-6").appendChild(oImg);  // 将生成的图片
    posterStyle(posterImg);
});

new html2canvas(document.getElementById('bs-poster-7'), posterParams).then(canvas => {
    // canvas为转换后的Canvas对象
    noneSecBox(7);
    let oImg = new Image();
    oImg.src = canvas.toDataURL();  // 导出图片
    let posterImg = document.getElementById("bs-poster-7").appendChild(oImg);  // 将生成的图片
    posterStyle(posterImg);
});

new html2canvas(document.getElementById('bs-poster-8'), posterParams).then(canvas => {
    // canvas为转换后的Canvas对象
    noneSecBox(8);
    let oImg = new Image();
    oImg.src = canvas.toDataURL();  // 导出图片
    let posterImg = document.getElementById("bs-poster-8").appendChild(oImg);  // 将生成的图片
    posterStyle(posterImg);
});

//隐藏HTML内容
function noneSecBox(index) {
    let posterBg = document.querySelector('#bs-poster-' + index + '>img');
    let posterSec = document.querySelector('#bs-poster-' + index + '>div');
    posterBg.style.display = "none";
    posterSec.style.display = "none";
}

// 添加海报样式
function posterStyle(posterImg) {
    posterImg.style.position = "absolute";
    posterImg.style.top = 0;
    posterImg.style.left = 0;
}

