import { useRouter } from 'next/router';

export default function Start() {
  const router = useRouter();
  // 獲取網址參數
  const { name, opening, intro, reassurance, methods, emoji } = router.query;

  return (
    <div style={{ 
      fontFamily: 'sans-serif', padding: '40px 20px', maxWidth: '600px', 
      margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '15px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginTop: '50px'
    }}>
      <h1 style={{ fontSize: '2rem' }}>{emoji || '👋'} 你好，{name}！</h1>
      <hr />
      <p style={{ fontSize: '1.2rem', color: '#333' }}>{opening}</p>
      
      <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
        <p><strong>關於這次對話：</strong></p>
        <p>{intro}</p>
      </div>

      <div style={{ borderLeft: '4px solid #4A90E2', paddingLeft: '15px', color: '#666' }}>
        <p><em>{reassurance}</em></p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <p><strong>建議方法：</strong> {methods}</p>
      </div>
      
      <button onClick={() => window.print()} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
        保存對話紀錄
      </button>
    </div>
  );
}
