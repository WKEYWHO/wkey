  //计时器
  var t
  function timedCount()
  {
    var moveBoxNum = $(".dmbox");
    for(var i = 0;i<moveBoxNum.length;i++){
      var windowWitdh = parseInt($(window).width());
      var moveWidth = parseInt(moveBoxNum.eq(i).css("right"))
      if(windowWitdh == moveWidth){
        moveBoxNum.eq(i).remove()
      }
    }
    t=setTimeout("timedCount()",1000)
  }
  timedCount();
$(document).ready(function(){

  //添加方法
  var idNum = 0;
  var arryText = ["11111","222","33333"];
  var imgArry = ["../saw.png"];
    $("#upText").click(function(){
      idNum++;
      var domName = 'DM'+ idNum;
      var strTxt = $("#txtBox").val();
      var Strs = "<div class='dmbox' id='"+ domName +"'>"+strTxt +"</div>";
      $("body").append(Strs);
      RndNum(domName);
    });


  //产生高度随机数函数
  function RndNum(n){
    var IdName = n; 
    var W = $(window).width();
    var H = $(window).height();
    var rnd="";
    rnd+=Math.floor(Math.random()*H);
    $("#"+IdName).css("top",rnd+"px");
    $("#"+IdName).css("right","0px");
    $("#"+IdName).animate({right:"100%"},10000);
  }
  //弹幕清空方法
  $("#clearDm").click(function(){
    $(".dmbox").remove();
  })

  //头像放大方法，添加
  var txNum = 0;
  $("#addTx").click(function(){
    var txD = "<div class= 'tx' id='txId"+ txNum +"'>1111</div>";
    $("#main").append(txD);
    $("#txId"+txNum).animate({"width":"130px","height":"130px"},1500)
    $("#txId"+txNum).animate({"width":"100px","height":"100px"},1500)
  })
});

// function stopCount()
// {
// c=0;
// setTimeout("document.getElementById('txt').value=0",0);
// clearTimeout(t);
// }