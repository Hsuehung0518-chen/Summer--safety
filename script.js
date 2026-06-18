document.addEventListener("DOMContentLoaded", () => {
  const darkModeBtn = document.getElementById("darkModeBtn");
  const quizForm = document.getElementById("quizForm");
  const result = document.getElementById("result");
  const appBtn = document.getElementById("appBtn");

  const savedTheme = localStorage.getItem("summerSafetyTheme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-scroll-target");
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll(".flip-card__inner").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".flip-card").classList.toggle("is-flipped");
    });
  });

  document.querySelectorAll(".speak-btn").forEach((button) => {
    button.addEventListener("click", () => {
      speak(button.dataset.speak || "請留意夏季居家環境安全。");
    });
  });

  darkModeBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "summerSafetyTheme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });

  quizForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const checked = [...quizForm.querySelectorAll("input[type='checkbox']:checked")];
    const score = Math.max(0, 100 - checked.length * 25);

    let level = "🟢 居家狀況良好";
    let summary = "目前風險較低，請保持清潔、通風與固定整理。";

    if (score <= 50 && score > 25) {
      level = "🟡 有些地方需要注意";
      summary = "建議今天先處理最容易改善的項目，例如廚房清潔、倒積水或除濕。";
    }

    if (score <= 25) {
      level = "🔴 建議今天就整理";
      summary = "目前勾選項目較多，建議分成三步：先清垃圾，再除濕，最後檢查積水與晾衣環境。";
    }

    const suggestions = getSuggestions(checked.map((item) => item.name));

    result.innerHTML = `
      <strong>健康指數：${score}</strong>
      <p>${level}</p>
      <p>${summary}</p>
      ${suggestions.length ? `<ul>${suggestions.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
    `;
  });

  appBtn?.addEventListener("click", () => {
    alert("AI App 連結尚未設定。之後可把這裡改成 Firebase / GitHub Pages / Vercel 網址。");
  });
});

function getSuggestions(names) {
  const map = {
    roach: "蟑螂：垃圾不隔夜，檯面擦乾，地漏與縫隙加強清潔。",
    mold: "防霉：衣櫥保持通風，角落放除濕用品，潮濕處定期擦拭。",
    mosquito: "蚊蟲：倒掉積水，檢查花盆底盤、桶子與浴室角落。",
    air: "晾衣：避開空污與潮濕時段，選通風處，收衣前確認乾爽。"
  };

  return names.map((name) => map[name]).filter(Boolean);
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    alert("此瀏覽器不支援語音朗讀。");
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-TW";
  utterance.rate = 0.92;
  utterance.pitch = 1;

  window.speechSynthesis.speak(utterance);
}
