// script.js
const form = document.getElementById('shopping-form');
const productSelect = document.getElementById('product');
const quantityInput = document.getElementById('quantity');
const paymentModeSelect = document.getElementById('payment-mode');
const bagTotalInput = document.getElementById('bag-total');
const couponCodeInput = document.getElementById('coupon-code');
const deliveryModeSelect = document.getElementById('delivery-mode');
const termsAndConditionsCheckbox = document.getElementById('terms-and-conditions');
const submitBtn = document.getElementById('submit-btn');

let products = [
    { id: 1, name: 'Product 1', price: 1000 },
    { id: 2, name: 'Product 2', price: 2000 },
    { id: 3, name: 'Product 3', price: 3000 },
    // ...
];

productSelect.addEventListener('change', calculateBagTotal);
quantityInput.addEventListener('input', calculateBagTotal);
paymentModeSelect.addEventListener('change', calculateBagTotal);
deliveryModeSelect.addEventListener('change', calculateBagTotal);

termsAndConditionsCheckbox.addEventListener('change', toggleSubmitBtn);

form.addEventListener('submit', handleSubmit);

function calculateBagTotal() {
    const productId = productSelect.value;
    const quantity = quantityInput.value;
    const paymentMode = paymentModeSelect.value;
    const deliveryMode = deliveryModeSelect.value }