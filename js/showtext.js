document.querySelector(".show-more-btn").addEventListener("click", function () {
  document.querySelector(".content").classList.add("expanded");
  this.style.display = "none";
  document.querySelector(".show-less-btn").style.display = "block";
});

document.querySelector(".show-less-btn").addEventListener("click", function () {
  document.querySelector(".content").classList.remove("expanded");
  document.querySelector(".show-more-btn").style.display = "block"; // Hiển thị lại nút "Show more"
  this.style.display = "none";
});
