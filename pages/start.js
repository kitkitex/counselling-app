import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Start() {
  const router = useRouter();
  const { name } = router.query;
  const [message, setMessage] = useState('');
  const maxLength = 1000;

  if (!router.isReady) return null;

  // 定義發送邏輯：跳轉到 bio 頁面並傳遞留言
  const handleSend = () => {
    // 如果沒寫字，可以給個溫馨提示（可選）
    if (!message.trim()) {
      alert("可以先寫下你想講嘅嘢，等輔導員更容易了解你。");
      return;
    }

    router.push({
      pathname: '/bio',
      query: { message: message, name: name } // 把名字也傳過去，讓 bio 頁面更親切
    });
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
        padding: '40px',
        textAlign: 'left'
      }}>
        
        <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#2d3436', marginBottom: '15px' }}>
          第一次傾偈係點嘅
        </h2>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px', 
          fontSize: '14px', 
          color: '#0984e3', 
          fontWeight: '600',
          marginBottom: '25px' 
        }}>
          <span>15–20分鐘</span>
          <span>•</span>
          <span>WhatsApp 文字或通話</span>
          <span>•</span>
          <span>免費</span>
        </div>

        <div style={{ fontSize: '16px', color: '#636e72', lineHeight: '1.8', marginBottom: '30px' }}>
          <p>佢會問你最近點，唔需要解釋好多背景。</p>
          <p>傾完之後你先決定想唔想繼續。</p>
          <p style={{ marginTop: '20px', color: '#2d3436', fontWeight: '500' }}>
            如果你想，可以先講少少——
          </p>
        </div>

        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, maxLength))}
            placeholder={`你好 ${name || ''}，喺度寫低你想講嘅嘢...`}
            style={{
              width: '100%',
              height: '180px',
              padding: '15px',
              borderRadius: '16px',
              border: '2px solid #edf2f7',
              fontSize: '16px',
              fontFamily: 'inherit',
              lineHeight: '1.6',
              resize: 'none',
              boxSizing: 'border-box',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#0984e3'}
            onBlur={(e) => e.target.style.borderColor = '#edf2f7'}
          />
          <div style={{
            textAlign: 'right',
            fontSize: '12px',
            color: message.length >= maxLength ? '#d63031' : '#b2bec3',
            marginTop: '5px'
          }}>
            {message.length} / {maxLength} 字
          </div>
        </div>

        {/* 改後的按鈕 */}
        <button 
          onClick={handleSend}
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
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0769b5'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0984e3'}
        >
          確認並查看輔導員資料
        </button>

        <p style={{ textAlign: 'center', color: '#b2bec3', fontSize: '12px', marginTop: '20px' }}>
          你的留言將會保密處理
        </p>
      </div>
    </div>
  );
}
