// script.js

// 画面が読み込まれたときに実行されるコード
window.onload = function() {
    alert("ページが読み込まれました！楽しんでください！");
};

// ボタンのクリックイベントを設定
document.getElementById('clickMeButton').addEventListener('click', function() {
    alert("ボタンがクリックされました！");
})
