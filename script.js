function calculateScore() {
  const checked = document.querySelectorAll("input:checked").length;

  let score = 100 - checked * 25;
  let message = "";

  if (score >= 75) {
    message = "✅ 非常健康！";
  } else if (score >= 50) {
    message = "⚠️ 稍微注意";
  } else {
    message = "🚨 建議立即改善";
  }

  document.getElementById("result").innerHTML = `
    <p>你的家庭健康指數：${score} 分</p>
    <p>${message}</p>
    <button onclick="goToApp()">交給 AI 幫你管理</button>
  `;
}


function goToApp() {
  window.open("https://YOUR_AI_APP_LINK", "_blank");
}
``
