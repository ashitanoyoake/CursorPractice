// 「サービスを見る」ボタンを取得
const serviceButton = document.getElementById("service-button");

// サービスセクションを取得
const servicesSection = document.getElementById("services");

// ボタンがクリックされたときの処理
serviceButton.addEventListener("click", function () {
  // サービスセクションまでスクロールする
  servicesSection.scrollIntoView({ behavior: "smooth" });
});
