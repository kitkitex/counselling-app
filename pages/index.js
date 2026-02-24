import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');

  const goToCounselling = () => {
    if (!name.trim()) {
      alert("請輸入你的名字");
      return;
    }

    // 這裡保留你原本設定好的動態內容，傳遞給 start 頁面
    const opening = encodeURIComponent("知你最近壓力爆煲，想搵人傾下計，真係好正常！");
    const intro = encodeURIComponent("見到你因為工作壓力好辛苦，我好明白。我會陪你一齊搵出舒緩壓力嘅方法。");
    const reassurance = encodeURIComponent("放心，所有傾訴都會絕對保密，我會用最專業嘅態度支持你。");
    const methods = encodeURIComponent("認知行為療法 (CBT), 壓力管理, 情緒聚焦治療");
    
    window.location.href = `/start?name=${encodeURIComponent(name)}&opening=${opening}&intro=${intro}&reassurance=${reassurance}&methods=${methods}&emoji=🫂`;
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f7fa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        maxWidth: '500px',
        width: '100%',
        borderRadius: '28px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
        padding: '50px 40px',
        textAlign: 'center'
      }}>
        {/* 標題與文字區塊 */}
        <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#0984e3', letterSpacing: '2px', margin: '0 0 20px 0' }}>
          CLEARSTEP
        </h2>
        
        <div style={{ fontSize: '17px', color: '#2d3436', lineHeight: '1.8', marginBottom: '30px' }}>
          <p style={{ margin: '8px 0', fontWeight: '500' }}>有啲嘢，講出嚟會容易啲。</p>
          <p style={{ margin: '8px 0' }}>你朋友認識一班受過訓練嘅輔導員。</p>
          <p style={{ margin: '8px 0' }}>佢信任佢地，想介紹你地認識。</p>
          
          <div style={{ margin: '25px 0', padding: '15px', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
            <p style={{ margin: '8px 0', color: '#0984e3', fontWeight: '600' }}>改變唔一定要好大。有時一步已經好多。</p>
            <p style={{ margin: '8px 0', fontSize: '15px' }}>知你最近壓力爆煲，想搵人傾下計，真係好正常！</p>
            <p style={{ margin: '8px 0', fontSize: '15px' }}>見到你因為工作壓力好辛苦，我好明白。我會陪你一齊搵出舒緩壓力嘅方法。</p>
          </div>
        </div>

        {/* 輸入與互動區 */}
        <div style={{ marginTop: '30px' }}>
          <p style={{ fontSize: '14px', color: '#636e72', marginBottom: '15px' }}>你想我點樣稱呼你？</p>
          <input 
            type="text" 
            placeholder="輸入名字" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ 
              width: '100%',
              padding: '15px', 
              fontSize: '16px', 
              borderRadius: '12px', 
              border: '2px solid #edf2f7',
              marginBottom: '20px',
              boxSizing: 'border-box',
              outline: 'none',
              textAlign: 'center'
            }}
          />
          <button 
            onClick={goToCounselling}
            style={{ 
              width: '100%',
              padding: '16px', 
              backgroundColor: '#0984e3', 
              color: 'white', 
              border: 'none', 
              borderRadius: '12px', 
              fontSize: '16px', 
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s shadow'
            }}
          >
            開始傾訴
          </button>
        </div>
      </div>
    </div>
  );
}
