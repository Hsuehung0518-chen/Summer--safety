function calculateScore() {
  const checked = document.querySelectorAll("input[type=checkbox]:checked").length;

  let score = 100 - checked * 25;
  let msg = "";

  if (score >= 75) msg = "✅ 很健康";
  else if (score >= 50) msg = "⚠️ 注意環境";
  else msg = "🚨 需要改善";

  document.getElementById("result").innerHTML = `
    <p>健康指數：${score}</p>
    <p>${msg}</p>
    <button onclick="goToApp()">交給 AI 管理</button>
  `;
}

function goToApp() {
  window.open("https://你的AI_APP網址", "_blank");
}
