import { useRouter } from 'next/router';

export default function Start() {
  const router = useRouter();
  const { name, opening, intro, reassurance, methods, emoji } = router.query;

  if (!router.isReady) return null;

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f0f2f5', // 淺灰色底色，讓卡片更突出
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
        borderRadius: '24px', // 圓潤的邊角
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)', // 柔和的陰影
        padding: '40px',
        textAlign: 'center'
      }}>
        {/* 頂部 Emoji */}
        <div style={{ fontSize: '64px', marginBottom: '20px' }}>
          {emoji || '🫂'}
        </div>

        {/* 標題 */}
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: '700', 
          color: '#1a1a1a',
          marginBottom: '16px' 
        }}>
          {name}，你好
        </h1>

        {/* 開場白 */}
        <p style={{ 
          fontSize: '17px', 
          lineHeight: '1.6', 
          color: '#4a4a4a',
          marginBottom: '24px' 
        }}>
          {opening}
        </p>

        {/* 介紹區塊 - 帶背景的卡片 */}
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '16px',
          textAlign: 'left',
          marginBottom: '24px'
        }}>
          <p style={{ margin: 0, color: '#555', lineHeight: '1.7' }}>{intro}</p>
        </div>

        {/* 保密承諾 */}
        <p style={{ 
          fontSize: '14px', 
          color: '#888', 
          marginBottom: '32px',
          fontStyle: 'italic'
        }}>
          {reassurance}
        </p>

        {/* 標籤區塊 */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '8px' 
        }}>
          {methods?.split(',').map((item, index) => (
            <span key={index} style={{
              backgroundColor: '#e7f3ff',
              color: '#007bff',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: '600'
            }}>
              {item.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
