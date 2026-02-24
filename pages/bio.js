import { useRouter } from 'next/router';

export default function Bio() {
  const router = useRouter();
  // 同時接收來自上一頁的留言 (message) 和稱呼 (name)
  const { message, name } = router.query; 

  const whatsappNumber = "85298844925"; 
  
  const goToWhatsApp = () => {
    // 構建包含稱呼的 WhatsApp 訊息
    const welcomeText = `你好，我是 ${name || '一位朋友'}。\n\n我想預約諮詢，以下是我的留言：\n${message || '（無留言）'}`;
    const encodedMsg = encodeURIComponent(welcomeText);
    
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#F0F4F8', // 統一灰藍背景
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '20px', 
      fontFamily: '"PingFang HK", "Helvetica Neue", sans-serif' 
    }}>
      <div style={{ 
        backgroundColor: '#ffffff', 
        maxWidth: '450px', 
        width: '100%', 
        borderRadius: '28px', 
        boxShadow: '0 15px 35px rgba(16, 42, 67, 0.08)', 
        padding: '40px', 
        textAlign: 'center' 
      }}>
        
        {/* 輔導員頭像 */}
        <div style={{ fontSize: '70px', marginBottom: '15px', opacity: 0.9 }}>👤</div>
        
        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#102A43', marginBottom: '5px' }}>
          輔導員名稱
        </h2>
        <p style={{ color: '#486581', fontWeight: '500', marginBottom: '25px', fontSize: '15px' }}>
          專業心理輔導員 (MSocSc)
        </p>

        {/* 簡介區塊 */}
        <div style={{ 
          textAlign: 'left', 
          backgroundColor: '#F8FAFC', 
          padding: '25px', 
          borderRadius: '20px', 
          fontSize: '15px', 
          color: '#334E68', 
          lineHeight: '1.7', 
          marginBottom: '30px',
          border: '1px solid #E2E8F0'
        }}>
          <p style={{ margin: '0 0 10px 0', fontWeight: '600', color: '#102A43' }}>背景與專長：</p>
          <ul style={{ paddingLeft: '20px', margin: 0 }}>
            <li>深造於香港大學社會科學碩士（輔導學）</li>
            <li>超過 500 小時臨床輔導經驗</li>
            <li>專注處理情緒、壓力和人際關係問題</li>
          </ul>
          <p style={{ margin: '15px 0 0 0', fontStyle: 'italic', color: '#627D98' }}>
            「我相信每個人都有內在的力量去面對挑戰，我希望能陪伴你走過這段路。」
          </p>
        </div>

        {/* WhatsApp 按鈕 */}
        <button 
          onClick={goToWhatsApp} 
          style={{ 
            width: '100%', 
            padding: '18px', 
            backgroundColor: '#25D366', 
            color: 'white', 
            border: 'none', 
            borderRadius: '16px', 
            fontSize: '17px', 
            fontWeight: '600', 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '12px',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.2)',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span style={{ fontSize: '20px' }}>💬</span> 透過 WhatsApp 預約傾偈
        </button>
        
        {/* 返回按鈕 */}
        <button 
          onClick={() => router.back()} 
          style={{ 
            marginTop: '20px', 
            background: 'none', 
            border: 'none', 
            color: '#94A3B8', 
            cursor: 'pointer', 
            fontSize: '14px',
            textDecoration: 'underline' 
          }}
        >
          返回修改留言
        </button>
      </div>
    </div>
  );
}
