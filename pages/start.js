import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Start() {
  const router = useRouter();
  const { name } = router.query;
  const [message, setMessage] = useState('');
  const maxLength = 1000;

  if (!router.isReady) return null;

  const handleSend = () => {
    if (!message.trim()) {
      alert("可以先寫下你想講嘅嘢，等輔導員更容易了解你。");
      return;
    }

    router.push({
      pathname: '/bio',
      query: { message: message, name: name }
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F0F4F8', // 與首頁一致的輕盈灰藍背景
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '"PingFang HK", "Helvetica Neue", sans-serif',
      color: '#334E68'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        maxWidth: '500px',
        width: '100%',
        borderRadius: '28px',
        boxShadow: '0 15px 35px rgba(16, 42, 67, 0.08)', // 柔和的深藍基調陰影
        padding: '40px',
        textAlign: 'left'
      }}>
        
        {/* 標題 */}
        <h2 style={{ fontSize: '22px', fontWeight: '600', color: '#102A43', marginBottom: '15px' }}>
          第一次傾偈係點嘅
        </h2>
        
        {/* 資訊標籤區 */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px', 
          fontSize: '14px', 
          color: '#486581', 
          fontWeight: '500',
          marginBottom: '25px' 
        }}>
          <span>15–20分鐘</span>
          <span>•</span>
          <span>WhatsApp 文字或通話</span>
          <span>•</span>
          <span>免費</span>
        </div>

        {/* 說明文字 */}
        <div style={{ fontSize: '16px', color: '#486581', lineHeight: '1.8', marginBottom: '30px' }}>
          <p style={{ margin: '8px 0' }}>佢會問你最近點，唔需要解釋好多背景。</p>
          <p style={{ margin: '8px 0' }}>傾完之後你先決定想唔想繼續。</p>
          <p style={{ marginTop: '20px', color: '#102A43', fontWeight: '500' }}>
            如果你想，可以先講少少——
          </p>
        </div>

        {/* 留言輸入框 */}
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
              border: '2px solid #D1DBD1',
              backgroundColor: '#F8FAFC',
              fontSize: '16px',
              fontFamily: 'inherit',
              lineHeight: '1.6',
              resize: 'none',
              boxSizing: 'border-box',
              outline: 'none',
              transition: 'all 0.2s',
              color: '#334E68'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#486581';
              e.target.style.backgroundColor = '#ffffff';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#D1DBD1';
              e.target.style.backgroundColor = '#F8FAFC';
            }}
          />
          {/* 字數統計 */}
          <div style={{
            textAlign: 'right',
            fontSize: '12px',
            color: message.length >= maxLength ? '#D63031' : '#94A3B8',
            marginTop: '5px'
          }}>
            {message.length} / {maxLength} 字
          </div>
        </div>

        {/* 改後的深灰藍按鈕 */}
        <button 
          onClick={handleSend}
          style={{ 
            width: '100%',
            padding: '18px', 
            backgroundColor: '#486581', // 與首頁按鈕色一致
            color: 'white', 
            border: 'none', 
            borderRadius: '15px', 
            fontSize: '16px', 
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(72, 101, 129, 0.2)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#334E68';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#486581';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          確認並查看輔導員資料
        </button>

        <p style={{ textAlign: 'center', color: '#94A3B8', fontSize: '12px', marginTop: '20px' }}>
          你的留言將會保密處理
        </p>
      </div>
    </div>
  );
}
