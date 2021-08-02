// -- cursor move

// let cursor = document.getElementById("cursor");
// let cursorfollow = document.getElementById("cursorfollow");

// window.addEventListener("mousemove", function(e) {
//     let x = e.clientX; // lấy giá trị tọa độ x
//     let y = e.clientY; // lấy giá trị tọa độ Y
//     console.log(e);
//     cursor.style.left = x + "px"; // gán x cho cursor
//     cursor.style.top = y + "px"; // gán y cho cursor
// });

// -- Parallax__Marketing Page
function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function(e) {
    parallax(".parallax", window.scrollY, -0.7);
    parallax(".title", window.scrollY, -0.5);
    parallax(".contain", window.scrollY, -0.5);
    parallax(".background__slowgan-title", window.scrollY, -0.1);
    parallax(".register__btn", window.scrollY, -0.2);
});

// -- Play music__Home Page