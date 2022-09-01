let canvas = document.getElementById('canvas001');
let ctx = canvas.getContext('2d');


$(function(){ //jqueryのお約束

// CANVASを定義
let canvas = document.getElementById('canvas001');
let ctx = canvas.getContext('2d');

// 変数と定数を事前に宣言
const cnvWidth = 500;   //canvasの幅
const cnvHeight = 400;  // canvasの高さ
let cnvColor="black";     //デフォルトの線の色
let cnvLineWeight = 5;   //デフォルトの線の太さ
let clickFlag = 0;      //クリックしたかどうかのフラグ
let bgColor = "white";  //背景色
//背景を白にする関数定義
function setBgColor(){
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, cnvWidth, cnvHeight);
}
// 背景を塗りつぶす
setBgColor();

// //canvaでマウス操作があった時のイベント
// $("#canvas001").mousedown(function(){ //マウスを押下した時
//     clickFlag = 1;
//   }).mouseup(function(){ //マウスを離した時
//       clickFlag = 0;
//   }).mousemove(function(e){ //マウスを動かした時
//         if(!clickFlag) return false;
//         draw(e.offsetX,e.offsetY);
//   });    


// //CANVASに描画する関数
// function draw(x,y){
//     // ctx.lineWidth = cnvLineWeight;
//     ctx.strokeStyle = cnvColor;
//     if (clickFlag == "1"){ //クリックした時
//         clickFlag = "2"; //フラグを2にする
//         ctx.beginPath(); //パスを開始//パスのリセット
//         ctx.lineCap = "round"; // 線の角を丸くする
//         ctx.moveTo(x,y); // パスの始点を指定
//     }else{
//         ctx.lineTo(x,y)//パスに点を追加
//     }
//     ctx.stroke();//パスを描画
// }

//選んだ色に変更
$(".color a").on("click",function(){
    cnvColor = $(this).data("color");
    return false;
})


//選んだ太さに変更
$(".weight a").on("click",function(){
    cnvLineWeight = $(this).data("weight");
    return false;
})

//ぜんぶ消す
$("#clear").on("click",function(){
    ctx.clearRect(0,0,cnvWidth,cnvHeight);
    setBgColor();
})

//ダウンロード
$("#download").on("click",function(){
    const base64 = canvas.toDataURL();
    $("#download").attr("href",base64);
});






//canvaでマウス操作があった時のイベント
$("#canvas001").on("touchstart",function(e){ //マウスを押下した時
    e.preventDefault();
    clickFlag = 1;
  }).on("touchend",function(e){ //マウスを離した時
    e.preventDefault();
    clickFlag = 0;
  }).on("touchmove",function(e){ //マウスを動かした時
    e.preventDefault();
    if(!clickFlag) return false;
        draw(changedTouches[0].pageX,e.changedTouches[0].pageY);
  });    


//CANVASに描画する関数
function draw(x,y){
    // ctx.lineWidth = cnvLineWeight;
    ctx.strokeStyle = cnvColor;
    if (clickFlag == "1"){ //クリックした時
        clickFlag = "2"; //フラグを2にする
        ctx.beginPath(); //パスを開始//パスのリセット
        ctx.lineCap = "round"; // 線の角を丸くする
        ctx.moveTo(x,y); // パスの始点を指定
    }else{
        ctx.lineTo(x,y)//パスに点を追加
    }
    ctx.stroke();//パスを描画
}











});//jqueryのお約束




function twitText() {
    var s, url;
    s = "お絵描きアプリをつくったよ!みんなで遊んでね！ %23sunabaco %23ステップアップ_復習講座 %23canvas講座 ";
    const base64 = canvas.toDataURL();

    url = document.location.href;
    
    if (s != "") {
        if (s.length > 140) {
            //文字数制限
            alert("テキストが140字を超えています");
        } else {
            //投稿画面を開く
            url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s+base64;
            window.open(url,"_blank","width=600,height=300");
        }
    }
}