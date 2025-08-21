function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = 'zh-TW';
  window.speechSynthesis.speak(msg);
}

function showAdvice() {
  const q1 = document.querySelector('input[name="q1"]').checked;
  const q2 = document.querySelector('input[name="q2"]').checked;
  const q3 = document.querySelector('input[name="q3"]').checked;
  const q4 = document.querySelector('input[name="q4"]').checked;
  let result = '';
  if (q1) result += '🪳 建議：加強廚房清潔並密封地漏<br>';
  if (q2) result += '👕 建議：小蘇打吸濕除臭<br>';
  if (q3) result += '🦟 建議：使用蚊帳或檸檬驅蚊<br>';
  if (q4) result += '⛅ 建議：避開空污高峰時段晾衣<br>';
  document.getElementById('advice').innerHTML = result || '👍 目前狀況良好，繼續保持！';
}