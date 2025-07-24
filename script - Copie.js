
document.addEventListener("DOMContentLoaded", () => {
    const topBtn = document.getElementById("topBtn");
    window.onscroll = () => {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    };
    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    let cartCount = 0;
    window.clearCart = function () {
        cartCount = 0;
        document.getElementById("cart-count").textContent = cartCount;
    };
});
