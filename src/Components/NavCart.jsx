import React, { useEffect, useState } from "react";

const ShoppingCart = () => {
  const [productsInCart, setProductsInCart] = useState([]);
  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('shoppingCart'));
    setProductsInCart(storedCart || []);
  }, []);
  
  const countTheSumPrice = () => {
    let sum = 0;
    productsInCart.forEach(item => {
      sum += item.price;
    });
    return sum;
  }
  
  const updateShoppingCartHTML = () => {
    localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
    if (productsInCart.length > 0) {
      return (
        <>
          {productsInCart.map(product => (
            <li className="buyItem" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <h5>{product.name}</h5>
                <h6>${product.price}</h6>
                <div>
                  <button className="button-minus" data-id={product.id}>-</button>
                  <span className="countOfProduct">{product.count}</span>
                  <button className="button-plus" data-id={product.id}>+</button>
                </div>
              </div>
            </li>
          ))}
          <div className="checkout">
            <h6 id="sum-prices">${countTheSumPrice()}</h6>
          </div>
        </>
      );
    } else {
      return (
        <h4 className="empty">Your shopping cart is empty</h4>
      );
    }
  }
  
  const updateProductsInCart = (product) => {
    const updatedCart = [...productsInCart];
    let productExists = false;
    
    updatedCart.forEach((item, index) => {
      if (item.id === product.id) {
        item.count += 1;
        item.price = item.basePrice * item.count;
        productExists = true;
      }
    });
    
    if (!productExists) {
      updatedCart.push(product);
    }
    
    setProductsInCart(updatedCart);
  }
  
  const handleProductClick = (e, item) => {
    if (e.target.classList.contains('addToCart')) {
      const product = {
        name: item.querySelector('.productName').innerHTML,
        image: item.querySelector('img').src,
        id: e.target.dataset.productId,
        count: 1,
        price: +item.querySelector('.priceValue').innerHTML,
        basePrice: +item.querySelector('.priceValue').innerHTML,
      }
      updateProductsInCart(product);
    }
  }
  
  const handleCountChange = (e) => {
    const productId = e.target.dataset.id;
    const isPlusButton = e.target.classList.contains('button-plus');
    const isMinusButton = e.target.classList.contains('button-minus');
    
    const updatedCart = productsInCart.map(item => {
      if (item.id === productId) {
        if (isPlusButton) {
          item.count += 1;
        } else if (isMinusButton) {
          item.count -= 1;
        }
        item.price = item.basePrice * item.count;
      }
      
      return item;
    });
    
    const filteredCart = updatedCart.filter(item => item.count > 0);
    
    setProductsInCart(filteredCart);
  }
  
  return (
    <ul id="buyItems" onClick={(e) => handleProductClick(e, products)}>
      {updateShoppingCartHTML()}
    </ul>
  );
}

export default ShoppingCart;
