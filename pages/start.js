import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Start() {
  const router = useRouter();
  // 增加一個 state 來管理名字，並預設嘗試從網址獲取
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const maxLength = 1000;

  // 當網址參數準備好時，更新名字
  useEffect(() => {
    if (router.query.name) {
      setName(router.query.name);
    }
  }, [router.query.name]);

  if (!router.isReady) return null;

  const handleSend = () => {
    if (!name.trim()) {
      alert("請輸入你嘅稱呼。");
      return;
    }
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
      backgroundColor: '#F0F4F8',
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
        boxShadow: '0 15px 35px rgba(16, 42, 67, 0.08)',
        padding: '40px',
        textAlign: 'left'
      }}>
        
        <h2 style={{ fontSize: '22px', fontWeight: '600', color: '#102A43', marginBottom: '15px' }}>
          第一次傾偈係點嘅
        </h2>
        
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

        <div style={{ fontSize: '16px', color: '#486581', lineHeight: '1.8', marginBottom: '30px' }}>
          <p style={{ margin: '8px 0' }}>佢會問你最近點，唔需要解釋好多背景。</p>
          <p style={{ margin: '8px 0' }}>傾完之後你先決定想唔想繼續。</p>
        </div>

        {/* 新增：稱呼與名字輸入欄 */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '15px', fontWeight: '500', color: '#102A43', marginBottom: '10px' }}>你想我點樣稱呼你？</p>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="輸入名字"
            style={{
              width: '100%',
              padding: '15px',
              borderRadius: '12px',
              border: '2px solid #D1DBD1',
              backgroundColor: '#F8FAFC',
              fontSize: '16px',
              outline: 'none',
              transition: 'all 0.2s',
              color: '#334E68',
              boxSizing: 'border-box'
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
        </div>

        {/* 留言內容 */}
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <p style={{ fontSize: '15px', fontWeight: '500', color: '#102A43', marginBottom: '10px' }}>如果你想，可以先講少少——</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, maxLength))}
            placeholder="喺度寫低你想講嘅嘢..."
            style={{
              width: '100%',
              height: '150px',
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
          <div style={{
            textAlign: 'right',
            fontSize: '12px',
            color: message.length >= maxLength ? '#D63031' : '#94A3B8',
            marginTop: '5px'
          }}>
            {message.length} / {maxLength} 字
          </div>
        </div>

        <button 
          onClick={handleSend}
          style={{ 
            width: '100%',
            padding: '18px', 
            backgroundColor: '#486581', 
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
