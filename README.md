# 夏季居家安衛攻略｜穩定版

## 檔案結構

請將以下 3 個檔案放在 GitHub repo 根目錄：

- index.html
- style.css
- script.js

## 上傳方式

1. 打開 GitHub repo：Summer--safety
2. 點 Add file → Upload files
3. 拖入 index.html、style.css、script.js
4. Commit message 填：fix stable version
5. 點 Commit changes
6. 等 GitHub Pages 更新後打開網站

## 本版特色

- 不依賴 Font Awesome CDN，避免外部資源失敗
- 不依賴 qr.png，避免圖片缺失造成畫面錯亂
- 使用 defer 載入 script.js
- JavaScript 皆在 DOMContentLoaded 後執行
- 有深色模式、翻卡、朗讀、家庭健康檢測
