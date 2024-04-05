const products = [{
        image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
        name: 'Chaussettes athlétiques en coton noires et grises - 6 paires',
        rating: {
            stars: 4.5,
            count: 87,
        },
        priceCents: 1090
}, {
    image: 'images/products/intermediate-composite-basketball.jpg',
    name: 'Ballon de basket de taille intermédiaire',
    rating: {
        stars: 4,
        count: 127,
    },
    priceCents: 2095
}, {
    image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'T-shirt uni en coton pour adultes - Lot de 2',
    rating: {
        stars: 4.5,
        count: 56,
    },
    priceCents: 799
}];

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="product-container">
       <div class="product-image-container">
        <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
        ${product.name}
        </div>

        <div class="product-rating-container">
        <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
            ${product.rating.count}
        </div>
        </div>

        <div class="product-price">
        ${(product.priceCents / 100).toFixed(2)}€ 
        </div>

        <div class="product-quantity-container">
        <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Ajouter
        </div>

        <button class="add-to-cart-button button-primary">
        Ajouter au panier
        </button>
    </div>
    `;
});

console.log(productsHTML);

document.querySelector('.js-products-grid').
innerHTML = productsHTML;