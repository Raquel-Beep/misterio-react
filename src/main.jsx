import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import styles from './index.module.css'
 
function Root() {
  const [loading, setLoading] = useState(true)
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
 
  if (loading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.loadingCard}>
 
          <img src="/trem.png" alt="Logo Trem" className={styles.loadingLogo} />
 
          <h1 className={styles.loadingTitulo}>Vagão Secreto</h1>
          <p className={styles.loadingSubtitulo}>Preparando a partida...</p>
 
          <div className={styles.trilho}>
            <div className={styles.trem}></div>
          </div>
 
          <p className={styles.loadingDica}>
            🔒 Acesso restrito — somente passageiros autorizados
          </p>
        </div>
      </div>
    )
  }
 
  return <App />
}
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
)