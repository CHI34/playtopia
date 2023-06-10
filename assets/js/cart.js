// 取得所有的 "x" 按鈕元素
const removeBtns = document.querySelectorAll('.remove');
                
// 為每個按鈕設置點擊事件處理程序
removeBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    // 移除該項目
    const goodItem = this.closest('.good');
    goodItem.remove();
  });
});



const priceElements = document.querySelectorAll('.price');
    let totalPrice = 0;

    priceElements.forEach(function(priceElement) {
      const priceString = priceElement.textContent;
      const price = parseInt(priceString.replace(/[^0-9]/g, ''));
      totalPrice += price;
    });

    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = '總價格：' + totalPrice + '元';

//加入購物車
document.addEventListener('DOMContentLoaded', function () {
  fetch('/api/cart')
    .then(response => response.json())
    .then(data => {
      const cartItemsList = document.getElementById('cart-items');
      cartItemsList.innerHTML = '';

      data.forEach(item => {
        const cartItem = document.createElement('li');

        const productImage = document.createElement('img');
        productImage.src = item.imageUrl;
        productImage.alt = item.productName;
        cartItem.appendChild(productImage);

        const productInfo = document.createElement('div');
        productInfo.innerHTML = `<h4>${item.productName}</h4><p>Price: $${item.price.toFixed(
          2
        )}</p>`;
        cartItem.appendChild(productInfo);

        cartItemsList.appendChild(cartItem);
      });
    })
    .catch(error => {
      console.error('Error:', error);
      // 處理錯誤情況
    });
});