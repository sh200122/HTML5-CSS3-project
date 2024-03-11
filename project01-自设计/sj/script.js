document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');
  let activeItem = null;

  navItems.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (activeItem) {
        activeItem.classList.remove('active');
      }
      item.classList.add('active');
      activeItem = item;
    });
  });
});

// 商品栏
document.addEventListener('DOMContentLoaded', function () {
  const products = document.querySelectorAll('.product');
  const detailBox = document.getElementById('product-detail-box');
  const closeDetailBtn = document.getElementById('close-detail');

  products.forEach(product => {
    product.addEventListener('click', function () {
      // 显示商品详情的逻辑
      detailBox.classList.add('show');
      // 可以在这里根据商品信息动态更新详情盒子中的内容
    });
  });

  closeDetailBtn.addEventListener('click', function () {
    detailBox.classList.remove('show');
  });
});
// 底部
document.addEventListener('DOMContentLoaded', function () {
  const footerItems = document.querySelectorAll('.footer-item');

  footerItems.forEach(item => {
    item.addEventListener('click', function () {
      // 移除之前任何已经被添加的'active'类
      footerItems.forEach(subItem => {
        subItem.classList.remove('active');
      });

      // 为被点击的项目添加'active'类
      item.classList.add('active');
    });
  });
});

