
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const countText = document.getElementById("count");

let count = 1;

plusBtn.addEventListener("click", function () {
    count++;
    countText.textContent = count;
});

minusBtn.addEventListener("click", function () {
    if (count > 1) {
        count--;
        countText.textContent = count;
    }
});


const favoriteBtn = document.getElementById("favorite");

let isFavorite = localStorage.getItem("favorite") === "true";

function updateFavorite() {
    if (isFavorite) {
        favoriteBtn.textContent = "♥ Favorited";
    } else {
        favoriteBtn.textContent = "♡ Favorite";
    }
}

updateFavorite();

favoriteBtn.addEventListener("click", function () {
    isFavorite = !isFavorite;

    localStorage.setItem("favorite", isFavorite);

    updateFavorite();
});

const cartBtn = document.getElementById("add-to-card");

const price = 99.99;

cartBtn.addEventListener("click", function () {
    const total = price * count;

    alert(
        `${count} product(s) added to cart!\nTotal: $${total.toFixed(2)}`
    );
});
