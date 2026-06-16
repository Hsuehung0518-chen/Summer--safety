function calculateScore() {
  const checked = document.querySelectorAll("input:checked").length;
  let score = 100 - checked * 25;

  let msg = "";

  if (score >= 75) msg = "✅ 很健康";
  else if (score >= 50) msg = "⚠️ 稍微注意";
  else msg = "🚨 建議改善";

  document.getElementById("result").innerHTML = `
    <h3>健康指數：${score}</h3>
    <p>${msg}</p>
    <button onclick="goToApp()">交給 AI 幫你管理</button>
  `;
}

function goToApp() {
  window.open("https://你的AI_APP網址", "_blank");
}
