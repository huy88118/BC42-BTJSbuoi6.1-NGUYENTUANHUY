//bài 1
document.getElementById("check").onclick = function () {
    let i = 0;
    let sum = 0;
    while (sum < 10000) {
      sum = sum + i;
      i++;
    }
    document.getElementById("result1-wrapper").style.display = "block";
    document.getElementById("result1").innerHTML =
      "Số nguyên dương nhỏ nhất: " + i;
  };
  
  // bài 2 : S(n) = x + x^2 + x^3 + … + x^n
  document.getElementById("bai2").onclick = function () {
    let x = +document.getElementById("numberX").value;
    let n = +document.getElementById("numberN").value;
    let i = 1;
    let t = 1;
    let sum = 0;
    if (x > 0) {
      while (i <= n) {
        t = t * x;
        sum = sum + t;
        i++;
      }
      document.getElementById("result2-wrapper").style.display = "block";
      document.getElementById("result2").innerHTML = "Tổng: " + sum;
    } else {
      document.getElementById("result2-wrapper").style.display = "block";
      document.getElementById("result2").innerHTML = "x không thể là " + sum;
    }
  };
  
  // bài 3
  document.getElementById("bai3").onclick = function () {
    let n = +document.getElementById("number_N").value;
    let i = 1;
    let giaiThua = 1;
    while (i <= n) {
      giaiThua *= i;
      i++;
    }
    document.getElementById("result3-wrapper").style.display = "block";
    document.getElementById("result3").innerHTML = "Giai thừa: " + giaiThua;
  };
  
  // bài 4
  document.getElementById("bai4").onclick = function () {
    for (let i = 1; i <= 10; i++) {
      if (i % 2 == 0) {
        document.getElementById("result4-wrapper").style.display = "block";
        document.getElementById("result4").innerHTML +=
          '<div style="background-color : red ; color: white">Div chẵn</div>';
      } else {
        document.getElementById("result4-wrapper").style.display = "block";
        document.getElementById("result4").innerHTML +=
          '<div style="background-color : blue ; color : white">Div lẻ</div>';
      }
    }
  };
  