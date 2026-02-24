import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');

  const goToCounselling = () => {
    // 雖然圖片沒有輸入框，但為了維持功能，我們保留 name 逻辑
    // 如果你想完全跟隨圖片去掉輸入框，可以直接把 name 設為固定值
    const currentName = name || "朋友";
    
    const opening = encodeURIComponent("知你最近壓力爆煲，想搵人傾下計，真係好正常！");
    const intro = encodeURIComponent("見到你因為工作壓力好辛苦，我好明白。我會陪你一齊搵出舒緩壓力嘅方法。");
    const reassurance = encodeURIComponent("放心，所有傾訴都會絕對保密，我會用最專業嘅態度支持你。");
    const methods = encodeURIComponent("認知行為療法 (CBT), 壓力管理, 情緒聚焦治療");
    
    window.location.href = `/start?name=${encodeURIComponent(currentName)}&opening=${opening}&intro=${intro}&reassurance=${reassurance}&methods=${methods}&emoji=🫂`;
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#E6EBE6', // 圖片背景那種淡雅的灰綠色
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      fontFamily: '"PingFang HK", "Helvetica Neue", sans-serif',
      color: '#4A4A4A'
    }}>
      
      {/* 頂部文字區 */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <p style={{ 
          fontSize: '14px', 
          letterSpacing: '4px', 
          color: '#8A9A8A', 
          marginBottom: '30px',
          fontWeight: '300'
        }}>CLEARSTEP</p>
        
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: '500', 
          marginBottom: '25px',
          letterSpacing: '1px'
        }}>有啲嘢，講出嚟會容易啲。</h1>
        
        <p style={{ fontSize: '16px', color: '#6A7A6A', margin: '5px 0' }}>你朋友認識一班受過訓練嘅輔導員。</p>
        <p style={{ fontSize: '16px', color: '#6A7A6A', margin: '5px 0' }}>佢信任佢地，想介紹你地認識。</p>
      </div>

      {/* 中間白色卡片 */}
      <div style={{
        backgroundColor: '#ffffff',
        maxWidth: '420px',
        width: '100%',
        borderRadius: '35px',
        aspectRatio: '1 / 1.1', // 讓它接近正方形
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
        marginBottom: '80px'
      }}>
        {/* 頂部小 Icon 裝飾 */}
        <div style={{ opacity: 0.3, marginBottom: '20px' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8A9A8A" strokeWidth="1">
            <path d="M12 2L12 6M12 18L12 22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12L6 12M18 12L22 12M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" />
          </svg>
        </div>

        <div style={{ 
          width: '40px', 
          height: '1px', 
          backgroundColor: '#D1DBD1', 
          marginBottom: '30px' 
        }}></div>

        <p style={{ 
          fontSize: '20px', 
          lineHeight: '1.6', 
          textAlign: 'center', 
          fontWeight: '400',
          padding: '0 10px'
        }}>
          改變唔一定要好大。有時一步已經好多。
        </p>

        <div style={{ 
          marginTop: '30px',
          opacity: 0.2 
        }}>
          {/* 底部 Icon 裝飾 */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8A9A8A" strokeWidth="1">
            <circle cx="12" cy="12" r="5" />
          </svg>
        </div>
      </div>

      {/* 底部按鈕區 */}
      <div style={{ width: '100%', maxWidth: '420px', textAlign: 'center' }}>
        {/* 如果需要保留輸入名字功能，可以取消註解下面這段 */}
        {/* <input 
          type="text" 
          placeholder="點樣稱呼你？" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', padding: '15px', marginBottom: '20px', borderRadius: '15px', border: 'none', textAlign: 'center' }}
        /> 
        */}
        
        <button 
          onClick={goToCounselling}
          style={{ 
            width: '100%',
            padding: '20px', 
            backgroundColor: '#8A9A8A', // 圖片中那種莫蘭迪綠色
            color: 'white', 
            border: 'none', 
            borderRadius: '18px', 
            fontSize: '18px', 
            fontWeight: '400',
            cursor: 'pointer',
            marginBottom: '30px',
            transition: 'opacity 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
        >
          我想繼續
        </button>

        <p style={{ 
          fontSize: '13px', 
          color: '#6A7A6A', 
          letterSpacing: '0.5px'
        }}>
          對話保密。第一次免費。隨時可以唔繼續。
        </p>
      </div>
    </div>
  );
}
