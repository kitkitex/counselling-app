import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');

  const goToCounselling = () => {
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
      backgroundColor: '#F0F4F8', // 輕盈的灰藍色背景
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      fontFamily: '"PingFang HK", "Helvetica Neue", sans-serif',
      color: '#334E68' // 深灰藍文字
    }}>
      
      {/* 頂部文字區 */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <p style={{ 
          fontSize: '14px', 
          letterSpacing: '4px', 
          color: '#627D98', // 中灰藍標籤色
          marginBottom: '30px',
          fontWeight: '300'
        }}>CLEARSTEP</p>
        
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: '500', 
          marginBottom: '25px',
          letterSpacing: '1px',
          color: '#102A43' // 最深色標題
        }}>有啲嘢，講出嚟會容易啲。</h1>
        
        <p style={{ fontSize: '16px', color: '#486581', margin: '5px 0' }}>你朋友認識一班受過訓練嘅輔導員。</p>
        <p style={{ fontSize: '16px', color: '#486581', margin: '5px 0' }}>佢信任佢地，想介紹你地認識。</p>
      </div>

      {/* 中間白色卡片 */}
      <div style={{
        backgroundColor: '#ffffff',
        maxWidth: '420px',
        width: '100%',
        borderRadius: '35px',
        aspectRatio: '1 / 1.1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(16, 42, 67, 0.06)', // 帶有深藍基調的柔和陰影
        marginBottom: '80px'
      }}>
        {/* 頂部小 Icon 裝飾 - 改為灰藍色 */}
        <div style={{ opacity: 0.4, marginBottom: '20px' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#627D98" strokeWidth="1">
            <path d="M12 2L12 6M12 18L12 22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12L6 12M18 12L22 12M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" />
          </svg>
        </div>

        <div style={{ 
          width: '40px', 
          height: '1px', 
          backgroundColor: '#BCCCDC', 
          marginBottom: '30px' 
        }}></div>

        <p style={{ 
          fontSize: '20px', 
          lineHeight: '1.6', 
          textAlign: 'center', 
          fontWeight: '400',
          padding: '0 10px',
          color: '#243B53'
        }}>
          改變唔一定要好大。有時一步已經好多。
        </p>

        <div style={{ 
          marginTop: '30px',
          opacity: 0.3 
        }}>
          {/* 底部 Icon 裝飾 - 改為盾牌形狀象徵安全 */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#627D98" strokeWidth="1">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
      </div>

      {/* 底部按鈕區 */}
      <div style={{ width: '100%', maxWidth: '420px', textAlign: 'center' }}>
        
        <button 
          onClick={goToCounselling}
          style={{ 
            width: '100%',
            padding: '20px', 
            backgroundColor: '#486581', // 沉穩的灰藍色按鈕
            color: 'white', 
            border: 'none', 
            borderRadius: '18px', 
            fontSize: '18px', 
            fontWeight: '400',
            cursor: 'pointer',
            marginBottom: '30px',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#334E68'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#486581'}
        >
          我想繼續
        </button>

        <p style={{ 
          fontSize: '13px', 
          color: '#627D98', 
          letterSpacing: '0.5px'
        }}>
          對話保密。第一次免費。隨時可以唔繼續。
        </p>
      </div>
    </div>
  );
}
