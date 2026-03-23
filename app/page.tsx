'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)',
      padding: '5rem 2rem',
    },
    contentWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '3rem',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold' as const,
      color: '#111827',
      marginBottom: '1rem',
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#4b5563',
      marginBottom: '2rem',
    },
    grid: {
      display: 'grid' as const,
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      padding: '2rem',
      textAlign: 'center' as const,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    emoji: {
      fontSize: '2.25rem',
      marginBottom: '1rem',
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold' as const,
      marginBottom: '0.5rem',
      color: '#111827',
    },
    cardText: {
      color: '#4b5563',
    },
    centerSection: {
      textAlign: 'center' as const,
    },
    centerTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold' as const,
      color: '#111827',
      marginBottom: '1rem',
    },
    buttonContainer: {
      display: 'flex' as const,
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap' as const,
    },
    button: {
      padding: '0.75rem 2rem',
      fontWeight: 'bold' as const,
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1rem',
    },
    primaryButton: {
      backgroundColor: '#2563eb',
      color: 'white',
    },
    secondaryButton: {
      backgroundColor: 'white',
      color: '#2563eb',
      border: '2px solid #2563eb',
    },
  };

  return (
    <main style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.header}>
          <h1 style={styles.title}>Generador de Landing Pages</h1>
          <p style={styles.subtitle}>
            Crea landing pages profesionales sin escribir código
          </p>
        </div>

        <div style={styles.grid}>
          <div
            style={{ ...styles.card }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                '0 20px 40px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                '0 10px 25px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={styles.emoji}>✨</div>
            <h3 style={styles.cardTitle}>Editor Visual</h3>
            <p style={styles.cardText}>
              Arrastra y suelta componentes para diseñar tu página
            </p>
          </div>

          <div
            style={{ ...styles.card }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                '0 20px 40px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                '0 10px 25px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={styles.emoji}>🎨</div>
            <h3 style={styles.cardTitle}>Templates Profesionales</h3>
            <p style={styles.cardText}>
              Comienza con templates diseñados por expertos
            </p>
          </div>

          <div
            style={{ ...styles.card }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                '0 20px 40px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                '0 10px 25px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={styles.emoji}>📊</div>
            <h3 style={styles.cardTitle}>Exporta tu Proyecto</h3>
            <p style={styles.cardText}>
              Descarga tu landing page en HTML y CSS
            </p>
          </div>
        </div>

        <div style={styles.centerSection}>
          <div style={styles.buttonContainer}>
            <button
              onClick={() => router.push('/editor')}
              style={{
                ...styles.button,
                ...styles.primaryButton,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1d4ed8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2563eb';
              }}
            >
              Crear Nuevo Proyecto
            </button>
            <button
              onClick={() => router.push('/templates')}
              style={{
                ...styles.button,
                ...styles.secondaryButton,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
              }}
            >
              Ver Templates
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
