import { useRouter } from 'next/router';

export default function Bio() {
  const router = useRouter();
  const { message } = router.query; // 接收來自上一頁的留言

  const whatsappNumber = "85298844925"; // 👈 請改成輔導員真正的 WhatsApp 號碼
  
  const goToWhatsApp = () => {
    // 將留言編碼並帶入 WhatsApp 連結
    const encodedMsg = encodeURIComponent(`你好，我想預約諮詢。\n\n我的留言：\n${message || '（無留言）'}`);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f7fa', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: '-apple-system, sans-serif' }}>
      <div style={{ backgroundColor: '#ffffff', maxWidth: '500px', width: '100%', borderRadius: '28px', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', padding: '40px', textAlign: 'center' }}>
        
        {/* 輔導員照片 (可用 Emoji 或圖片連結代替) */}
        <div style={{ fontSize: '80px', marginBottom: '10px' }}>👤</div>
        
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#2d3436', marginBottom: '5px' }}>輔導員名稱</h2>
        <p style={{ color: '#0984e3', fontWeight: '600', marginBottom: '20px' }}>專業心理輔導員 (MSocSc)</p>

        <div style={{ textAlign: 'left', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '16px', fontSize: '15px', color: '#636e72', lineHeight: '1.7', marginBottom: '30px' }}>
          <p style={{ margin: '0 0 10px 0' }}>**背景與專長：**</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>深造於香港大學社會科學碩士（輔導學）</li>
            <li>超過 500 小時臨床輔導經驗</li>
            <li>專注處理情緒、壓力和人際關係問題</li>
          </ul>
          <p style={{ margin: '15px 0 0 0' }}>「我相信每個人都有內在的力量去面對挑戰，我希望能陪伴你走過這段路。」</p>
        </div>

        <button onClick={goToWhatsApp} style={{ width: '100%', padding: '16px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <span>💬</span> 透過 WhatsApp 預約初次對話
        </button>
        
        <button onClick={() => router.back()} style={{ marginTop: '15px', background: 'none', border: 'none', color: '#b2bec3', cursor: 'pointer', fontSize: '14px' }}>
          返回修改留言
        </button>
      </div>
    </div>
  );
}
