import {cart} from '../data/cart.js';
import {products} from '../data/products.js';

let cartSummaryHTML = '';

cart.forEach((cartItem) => {

    const productId = cartItem.productId;

    let matchingProduct;

    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });

    
    cartSummaryHTML +=

    `
    <div class="cart-item-container">
            <div class="delivery-date">
                Date de livraison : mardi 21 juin
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                    ${matchingProduct.name}
                </div>
                <div class="product-price">
                  ${matchingProduct.priceCents / 100}€
                </div>
                <div class="product-quantity">
                  <span>
                    Quantité: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Modifier
                  </span>
                  <span class="delete-quantity-link link-primary">
                    Supprimer
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                    Choisissez une option de livraison :
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">
                      Jeudi 23 juin
                    </div>
                    <div class="delivery-option-price">
                      LIVRAISON gratuite
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">
                      Mercredi 15 juin
                    </div>
                    <div class="delivery-option-price">
                      4.99€ - Expédition
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">
                        Lundi 13 juin
                    </div>
                    <div class="delivery-option-price">
                      9.99€ - Expédition
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
});

document.querySelector('.js-order-summary')
.innerHTML = cartSummaryHTML;

console.log(cartSummaryHTML);