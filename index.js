document.getElementById("btnResult").onclick =function() {
  var score = document.getElementById("inputScore1").value * 1;
  var sel = document.getElementById("selLocation").value * 1;
  var user = document.getElementById("selUser").value * 1;
  var score2 = document.getElementById("inputScore2").value * 1;
  var score3 = document.getElementById("inputScore3").value * 1;
  var score4 = document.getElementById("inputScore4").value * 1;
  var total =  ""; 

  if ((score && score2 && score3 && score4)) {
     total = score2 + score3 + score4 + (sel + user);    
    total = total >= score ? "Bạn đã đậu. Tổng điểm: " + total : "Bạn đã rớt. Tổng điểm: " + total;}

    else{
     total = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  
}
document.getElementById("txtResult").innerHTML = total;
};
        

document.getElementById("btnElecBill").onclick = function(){
  var name = document.getElementById("Name").value ;
  var kw = document.getElementById("KW").value * 1;

  total = "";

  if(kw > 0 && kw <= 50 ){
    total = kw * 500;
  }else if(kw > 50 && kw <= 100){
    total = 50 * 500 + (kw -50) * 650;
 }
 else if (kw > 100 && kw <= 200){
  total = 50 * 500 + 50 * 650 + (kw - 100) * 850;
 }else if ( kw > 200 && kw <=  350){
  total = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
  
 }
 else if (kw > 350){
  total = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350 ) * 1300;
}

  else{alert("Số kw không hợp lệ! Vui lòng nhập lại");
  return;
}


(total = new Intl.NumberFormat("vn-VN").format(total)),
 total = "Họ tên: " + name + "; Tiền điện: " + total;



 document.getElementById("txtElecBill").innerHTML = total;
}




     

