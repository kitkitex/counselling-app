import { useRouter } from 'next/router';

export default function Start() {
  const router = useRouter();
  const { name, opening, intro, reassurance, methods, emoji } = router.query;

  if (!router.isReady) return null;

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f7fa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        maxWidth: '500px',
        width: '100%',
        borderRadius: '28px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
        padding: '40px',
        textAlign: 'center'
      }}>
        {/* 頂部 Emoji */}
        <div style={{ fontSize: '60px', marginBottom: '20px' }}>
          {emoji || '🫂'}
        </div>

        {/* 標題與新增的 Clearstep 文字區塊 */}
        <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#2d3436', marginBottom: '8px' }}>
          {name}，你好
        </h1>
        
        <div style={{ marginBottom: '30px' }}>
          <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#0984e3', letterSpacing: '1px', margin: '0 0 10px 0' }}>CLEARSTEP</p>
          <div style={{ fontSize: '16px', color: '#636e72', lineHeight: '1.8' }}>
            <p style={{ margin: '4px 0' }}>有啲嘢，講出嚟會容易啲。</p>
            <p style={{ margin: '4px 0' }}>你朋友認識一班受過訓練嘅輔導員。</p>
            <p style={{ margin: '4px 0' }}>佢信任佢地，想介紹你地認識。</p>
            <p style={{ margin: '15px 0 5px 0', fontWeight: '500', color: '#2d3436' }}>
              改變唔一定要好大。有時一步已經好多。
            </p>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '25px 0' }} />

        {/* 動態開場白 */}
        <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#2d3436', marginBottom: '24px', fontWeight: '500' }}>
          {opening}
        </p>

        {/* 詳細介紹區塊 */}
        <div style={{ 
          backgroundColor: '#f1f2f6', 
          padding: '25px', 
          borderRadius: '20px',
          textAlign: 'left',
          marginBottom: '24px',
          borderLeft: '4px solid #0984e3'
        }}>
          <p style={{ margin: 0, color: '#2d3436', lineHeight: '1.8', fontSize: '15px' }}>{intro}</p>
        </div>

        {/* 保密承諾 */}
        <p style={{ fontSize: '13px', color: '#b2bec3', marginBottom: '32px' }}>
          {reassurance}
        </p>

        {/* 建議方法標籤 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
          {methods?.split(',').map((item, index) => (
            <span key={index} style={{
              backgroundColor: '#e1f5fe',
              color: '#0288d1',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '700'
            }}>
              {item.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
