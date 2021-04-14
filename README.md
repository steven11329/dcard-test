# Start Application Steps
1. `npm install`
2. `npm start`

## Structure
用 create-react-app 建制。

CORS 部份則純用 create-react-app proxy 來解決。

自製 useInfiniteScroll 的 customhook 偵測 scroll bar 是否觸發底部。
如其他頁面有需要可重用。

頁面部份為 Container 以及每篇文章 Post 組成。

有稍微做一點點 RWD 讓手機頁面全版顯示。