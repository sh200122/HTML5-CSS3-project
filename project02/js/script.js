//头部1
document.addEventListener('DOMContentLoaded', function () {
  var menuItems = document.querySelectorAll('.header span');

  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      // 移除其他元素的红色高亮
      menuItems.forEach(function (elem) {
        elem.classList.remove('clicked');
      });
      // 为点击的元素添加红色高亮
      this.classList.add('clicked');
    });
  });
});
//添加下拉菜单
document.addEventListener('DOMContentLoaded', function () {
  var menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
      // 阻止事件冒泡
      event.stopPropagation();
      // 关闭所有已打开的下拉菜单
      document.querySelectorAll('.dropdown-content').forEach(function (elem) {
        elem.style.display = 'none';
      });
      // 显示当前点击的菜单项的下拉内容
      this.querySelector('.dropdown-content').style.display = 'block';
    });
  });

  // 点击菜单外的地方关闭下拉菜单
  document.body.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-content').forEach(function (elem) {
      elem.style.display = 'none';
    });
  }, true);
});
//body栏
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.opacity = "1";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//秒杀模块
document.addEventListener("DOMContentLoaded", function () {
  // 倒计时
  function startCountdown(duration) {
    var timer = duration, hours, minutes, seconds;
    var countdownElement = document.querySelector('.left-module .timer');
    setInterval(function () {
      hours = parseInt(timer / 3600, 10);
      minutes = parseInt((timer % 3600) / 60, 10);
      seconds = parseInt(timer % 60, 10);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      countdownElement.textContent = hours + ":" + minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  // 初始化12小时倒计时
  startCountdown(12 * 60 * 60);

  // 切换li项
  var ul = document.querySelector('.middle-module ul');
  document.querySelector('.prev-btn').addEventListener('click', function () {
    ul.scrollLeft -= 345; // 325px + 20px 的边距
  });
  document.querySelector('.next-btn').addEventListener('click', function () {
    ul.scrollLeft += 345;
  });
});
//为你推荐字体变红 
(function () {
  //1.获取元素
  const as = document.querySelectorAll('.bottom a')
  for (let i = 0; i < as.length; i++) {

    as[i].addEventListener('mouseenter', function () {
      document.querySelector('.bottom .active').classList.remove('active')
      this.classList.add('active')
    })
  }
})()
