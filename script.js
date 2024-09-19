function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openPopup(videoSrc) {
  var popup = document.getElementById("popup");
  var video = document.getElementById("popup-video");

  // Thêm tham số autoplay để video tự động phát
  videoSrc += "?autoplay=1&enablejsapi=1"; // Thêm enablejsapi để kiểm soát player

  video.src = videoSrc;
  popup.style.display = "flex";
}

// Close popup and stop video when clicking outside the video
window.onclick = function (event) {
  var popup = document.getElementById("popup");
  var video = document.getElementById("popup-video");
  if (event.target == popup) {
    popup.style.display = "none";
    video.src = ""; // Dừng video bằng cách xóa src
  }
};
