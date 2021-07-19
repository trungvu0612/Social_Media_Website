let cursor = document.getElementById("cursor");
let cursorfollow = document.getElementById("cursorfollow");

window.addEventListener("mousemove", function(e) {
    let x = e.clientX; // lấy giá trị tọa độ x
    let y = e.clientY; // lấy giá trị tọa độ Y

    cursor.style.left = x + "px"; // gán x cho cursor
    cursor.style.top = y + "px"; // gán y cho cursor
});