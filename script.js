//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400) //清除畫布上的軌跡
  
  
//地面上的線
  ctx.beginPath() //清掉先前路徑
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.lineWidth = 2
  ctx.strokeStyle="black"
  ctx.stroke()
  ctx.closePath()
  
  //城門
  ctx.beginPath()
  ctx.moveTo(75,350)
  ctx.lineTo(75,175)
  ctx.lineTo(325,175)
  ctx.lineTo(325,350)
  ctx.lineTo(250,350)
  ctx.lineTo(250,250)
  //圓弧拱門
  ctx.arc(200,250,50,Math.PI*2,Math.PI,true)
  ctx.lineTo(150,250)
  ctx.lineTo(150,350)
  ctx.closePath()
  ctx.fillStyle="#A37F60"
  ctx.fill()
  ctx.closePath()

  
  //城門線
  ctx.beginPath()
  ctx.moveTo(75,250)
  ctx.lineTo(150,250)
  ctx.moveTo(250,250)
  ctx.lineTo(325,250)
  ctx.closePath()
  ctx.lineWidth = 5
  ctx.strokeStyle="#C54F1F"
  ctx.stroke()
  ctx.closePath()
  
  //斜框
  ctx.beginPath()
  ctx.moveTo(75,175)
  ctx.lineTo(50,150)
  ctx.lineTo(350,150)
  ctx.lineTo(325,175)
  ctx.closePath()
  ctx.fillStyle="#C54F1F"
  ctx.fill()
  ctx.closePath()
  
  //直框
  ctx.beginPath()
  ctx.fillStyle = "#CA9D41"
  ctx.fillRect(50,140,300,10)
  ctx.closePath()
  
  //屋頂（厚）
  ctx.beginPath()
  ctx.fillStyle = "#C54F1F"
  ctx.fillRect(75,100,250,40)
  ctx.closePath()
  
  //屋頂（薄）
  ctx.beginPath()
  ctx.fillStyle = "#CA9D41"
  ctx.fillRect(75,90,250,10)
  ctx.closePath()
  
   //小方塊
  ctx.beginPath()
  ctx.fillStyle = "#E4DDD4"
  ctx.strokeStyle="#9C9B99"
  ctx.lineWidth = 1.5
  ctx.fillRect(75,65,25,25)
  ctx.fillRect((100+75+125-12.5)/2-12.5,65,25,25)
  ctx.fillRect(75+125-12.5,65,25,25)
  ctx.fillRect(((75+125+12.5+300)/2)-12.5,65,25,25)
  ctx.fillRect(300,65,25,25)
  ctx.closePath()
  
  //窗戶
  ctx.beginPath()
  ctx.fillStyle = "#E4DDD4"
  ctx.strokeStyle="#CA9D41"
  ctx.lineWidth = 2
  ctx.fillRect(100,200,25,47)
  ctx.strokeRect(100,200,25,47)
  ctx.fillRect(275,200,25,47)
  ctx.strokeRect(275,200,25,47)
  ctx.closePath()
  
  //裝飾方塊
  ctx.beginPath()
  ctx.fillStyle = "#E4B165"
  ctx.fillRect(75,120,25,20)
  ctx.fillRect(100,130,25,10)
  ctx.fillRect(125,120,25,20)
  ctx.fillRect(150,130,25,10)
  ctx.fillRect(175,120,25,20)
  ctx.fillRect(200,130,25,10)
  ctx.fillRect(225,120,25,20)
  ctx.fillRect(250,130,25,10)
  ctx.fillRect(275,120,25,20)
  ctx.fillRect(300,130,25,10)
  ctx.closePath()
  
  //車車
  ctx.beginPath()
  let carx = 400-time%475
  ctx.moveTo(carx,350)
  ctx.lineTo(carx+25,350)
  ctx.lineTo(carx+25,325)
  ctx.lineTo(carx+75,325)
  ctx.lineTo(carx+75,365)
  ctx.lineTo(carx+25,365)
  ctx.lineTo(carx,365)
  ctx.closePath()
  ctx.fillStyle = "white"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  ctx.closePath()
  
  ctx.beginPath()
  ctx.arc(carx+25,365,7,0,Math.PI*2)
  ctx.arc(carx+60,365,7,0,Math.PI*2)
  
  ctx.fillStyle = "black"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  ctx.closePath()
  
  //太陽
  ctx.globalCompositeOperation="destination-over";
  ctx.beginPath()
  ctx.arc(125,mouse.y,30,0,Math.PI*2)
  ctx.fillStyle = "#C13B37"
  ctx.fill()
  ctx.closePath()
  
  ctx.beginPath()
  ctx.moveTo(125,mouse.y)
  ctx.lineTo(125,mouse.y-50)
  ctx.strokeStyle="#ECB950"
  ctx.lineWidth = 7
  ctx.stroke()
  ctx.closePath()
  ctx.beginPath()
  ctx.moveTo(125,mouse.y)
  ctx.lineTo(125,mouse.y+50)
  ctx.strokeStyle="#ECB950"
  ctx.lineWidth = 7
  ctx.stroke()
  ctx.closePath()
  ctx.beginPath()
  ctx.moveTo(125,mouse.y)
  ctx.lineTo(175,mouse.y)
  ctx.strokeStyle="#ECB950"
  ctx.lineWidth = 7
  ctx.stroke()
  ctx.closePath()
  ctx.beginPath()
  ctx.moveTo(125,mouse.y)
  ctx.lineTo(75,mouse.y)
  ctx.strokeStyle="#ECB950"
  ctx.lineWidth = 7
  ctx.stroke()
  ctx.closePath()
  
  ctx.beginPath()
  ctx.moveTo(125,mouse.y)
  ctx.lineTo(85,mouse.y-35)
  ctx.strokeStyle="#ECB950"
  ctx.lineWidth = 7
  ctx.stroke()
  ctx.closePath()
  ctx.beginPath()
  ctx.moveTo(125,mouse.y)
  ctx.lineTo(165,mouse.y-35)
  ctx.strokeStyle="#ECB950"
  ctx.lineWidth = 7
  ctx.stroke()
  ctx.closePath()
  ctx.beginPath()
  ctx.moveTo(125,mouse.y)
  ctx.lineTo(85,mouse.y+35)
  ctx.strokeStyle="#ECB950"
  ctx.lineWidth = 7
  ctx.stroke()
  ctx.closePath()
  ctx.beginPath()
  ctx.moveTo(125,mouse.y)
  ctx.lineTo(165,mouse.y+35)
  ctx.strokeStyle="#ECB950"
  ctx.lineWidth = 7
  ctx.stroke()
  ctx.closePath()

  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.lineWidth=1
    ctx.fillStyle = "black"
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點 
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  ctx.closePath()
  ctx.globalCompositeOperation="source-over";
  
  //確認滑鼠事件有抓取到
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,3,0,Math.PI*2)
    ctx.fillStyle="black"
    ctx.fill()
  
}
// draw()

//設定連續繪製
setInterval(draw,30) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})


