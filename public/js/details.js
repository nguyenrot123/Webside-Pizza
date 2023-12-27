document.addEventListener('DOMContentLoaded', function () {
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    function fetchProductDetails(productId) {
        // Replace this with your logic to fetch product details
        var productDetails = {
            id: productId,
            name: "Product Name",
            description: "Product Description",
            price: "$50",
            image: "path/to/product-image.jpg"
        };

        document.getElementById('product-title').innerText = productDetails.name;
        document.getElementById('product-description').innerText = productDetails.description;
        document.getElementById('product-price').innerText = productDetails.price;
        document.getElementById('product-image').src = productDetails.image;
    }

    var productId = getParameterByName('id');

    if (productId) {
        fetchProductDetails(productId);
    } else {
        console.error("Product ID not found in URL");
    }
});

function addToCart() {
    // Add your logic to handle adding the product to the cart
    console.log("Product added to cart");
}
