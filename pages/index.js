import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');

  const goToCounselling = () => {
    // 這裡設定你的自定義內容
    const opening = encodeURIComponent("知你最近壓力爆煲，想搵人傾下計，真係好正常！");
    const intro = encodeURIComponent("見到你因為工作壓力好辛苦，我好明白。我會陪你一齊搵出舒緩壓力嘅方法。");
    const reassurance = encodeURIComponent("放心，所有傾訴都會絕對保密，我會用最專業嘅態度支持你。");
    const methods = encodeURIComponent("認知行為療法 (CBT), 壓力管理, 情緒聚焦治療");
    
    // 跳轉到 start 頁面並帶上參數
    window.location.href = `/start?name=${encodeURIComponent(name)}&opening=${opening}&intro=${intro}&reassurance=${reassurance}&methods=${methods}&emoji=🫂`;
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>輔導連結產生器</h1>
      <input 
        type="text" 
        placeholder="輸入名字 (例如: 明仔)" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <br /><br />
      <button 
        onClick={goToCounselling}
        style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        生成並前往對話頁面
      </button>
    </div>
  );
}
