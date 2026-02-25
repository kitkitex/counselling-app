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
      backgroundColor: '#F0F4F8',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      fontFamily: '"PingFang HK", "Helvetica Neue", sans-serif',
      color: '#334E68'
    }}>
      
      {/* 頂部文字區 */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <p style={{ 
          fontSize: '13px', 
          letterSpacing: '4px', 
          color: '#627D98', 
          marginBottom: '25px',
          fontWeight: '300'
        }}>CLEARSTEP</p>
        
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: '500', 
          marginBottom: '20px',
          letterSpacing: '1px',
          color: '#102A43'
        }}>有啲嘢，講出嚟會容易啲。</h1>
        
        <p style={{ fontSize: '15px', color: '#486581', margin: '4px 0' }}>你朋友認識一班受過訓練嘅輔導員。</p>
        <p style={{ fontSize: '15px', color: '#486581', margin: '4px 0' }}>佢信任佢地，想介紹你地認識。</p>
      </div>

      {/* 中間白色卡片 - 比例縮小 */}
      <div style={{
        backgroundColor: '#ffffff',
        maxWidth: '360px', // 從 420px 縮小到 360px
        width: '100%',
        borderRadius: '30px',
        aspectRatio: '1 / 1.05', // 稍微調整比例，不要太長
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px', // 減少內邊距讓內容更緊湊
        boxShadow: '0 20px 40px rgba(16, 42, 67, 0.06)',
        marginBottom: '60px'
      }}>
        <div style={{ opacity: 0.4, marginBottom: '15px' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#627D98" strokeWidth="1">
            <path d="M12 2L12 6M12 18L12 22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12L6 12M18 12L22 12M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" />
          </svg>
        </div>

        <div style={{ 
          width: '30px', 
          height: '1px', 
          backgroundColor: '#BCCCDC', 
          marginBottom: '25px' 
        }}></div>

        <p style={{ 
          fontSize: '18px', // 配合卡片縮小，字體也稍微調小
          lineHeight: '1.6', 
          textAlign: 'center', 
          fontWeight: '400',
          padding: '0 15px',
          color: '#243B53'
        }}>
          改變唔一定要好大。<br/>有時一步已經好多。
        </p>

        <div style={{ 
          marginTop: '25px',
          opacity: 0.3 
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#627D98" strokeWidth="1">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
      </div>

      {/* 底部按鈕區 */}
      <div style={{ width: '100%', maxWidth: '360px', textAlign: 'center' }}>
        <button 
          onClick={goToCounselling}
          style={{ 
            width: '100%',
            padding: '18px', 
            backgroundColor: '#486581', 
            color: 'white', 
            border: 'none', 
            borderRadius: '16px', 
            fontSize: '17px', 
            fontWeight: '400',
            cursor: 'pointer',
            marginBottom: '25px',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#334E68'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#486581'}
        >
          我想繼續
        </button>

        <p style={{ 
          fontSize: '12px', 
          color: '#627D98', 
          letterSpacing: '0.5px'
        }}>
          對話保密。第一次免費。隨時可以唔繼續。
        </p>
      </div>
    </div>
  );
}
