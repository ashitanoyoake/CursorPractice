// 「自己紹介を見る」ボタンを取得
const aboutButton = document.getElementById("about-button");

// 自己紹介セクションを取得
const aboutSection = document.getElementById("about");

// ボタンがクリックされたときの処理
aboutButton.addEventListener("click", function () {
  // 自己紹介セクションまでスクロールする
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
