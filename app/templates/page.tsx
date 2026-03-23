'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Templates() {
  const router = useRouter();
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const templates = [
    {
      id: 'saas-minimal',
      name: 'SaaS Minimalista',
      description: 'Plantilla moderna para productos SaaS',
      category: 'saas',
    },
    {
      id: 'portfolio-pro',
      name: 'Portfolio Profesional',
      description: 'Ideal para mostrar tu trabajo y habilidades',
      category: 'portfolio',
    },
    {
      id: 'agency-bold',
      name: 'Agency Bold',
      description: 'Diseño audaz para agencias creativas',
      category: 'agency',
    },
    {
      id: 'ecommerce-store',
      name: 'E-commerce Store',
      description: 'Optimizado para vender productos online',
      category: 'ecommerce',
    },
  ];

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplate(templateId);
    setTimeout(() => {
      router.push(`/editor?template=${templateId}`);
    }, 300);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      padding: '3rem 2rem',
    },
    contentWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    backButton: {
      color: '#2563eb',
      fontWeight: 'bold' as const,
      marginBottom: '1rem',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    header: {
      marginBottom: '3rem',
    },
    title: {
      fontSize: '2.25rem',
      fontWeight: 'bold' as const,
      color: '#111827',
      marginBottom: '1rem',
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#4b5563',
    },
    grid: {
      display: 'grid' as const,
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem',
    },
    templateCard: {
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    templateCardHover: {
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
      transform: 'translateY(-4px)',
    },
    thumbnail: {
      width: '100%',
      height: '200px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex' as const,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      fontSize: '3rem',
    },
    cardContent: {
      padding: '1.5rem',
    },
    templateTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold' as const,
      color: '#111827',
      marginBottom: '0.5rem',
    },
    templateDescription: {
      color: '#4b5563',
      marginBottom: '1rem',
    },
    cardFooter: {
      display: 'flex' as const,
      justifyContent: 'space-between' as const,
      alignItems: 'center' as const,
    },
    badge: {
      fontSize: '0.875rem',
      backgroundColor: '#dbeafe',
      color: '#1e40af',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
    },
    useButton: {
      backgroundColor: '#2563eb',
      color: 'white',
      fontWeight: 'bold' as const,
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    centerSection: {
      textAlign: 'center' as const,
      marginTop: '3rem',
      paddingTop: '2rem',
      borderTop: '1px solid #e5e7eb',
    },
    centerTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold' as const,
      color: '#111827',
      marginBottom: '1rem',
    },
    blankButton: {
      backgroundColor: '#2563eb',
      color: 'white',
      fontWeight: 'bold' as const,
      padding: '0.75rem 2rem',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1rem',
    },
  };

  return (
    <main style={styles.container}>
      <div style={styles.contentWrapper}>
        <button
          onClick={() => router.back()}
          style={styles.backButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#1d4ed8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#2563eb';
          }}
        >
          ← Volver
        </button>

        <div style={styles.header}>
          <h1 style={styles.title}>Plantillas Profesionales</h1>
          <p style={styles.subtitle}>
            Elige una plantilla para comenzar tu landing page
          </p>
        </div>

        <div style={styles.grid}>
          {templates.map((template) => (
            <div
              key={template.id}
              style={{
                ...styles.templateCard,
                border: selectedTemplate === template.id ? '2px solid #2563eb' : 'none',
              }}
              onClick={() => handleSelectTemplate(template.id)}
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
              <div style={styles.thumbnail}>📄</div>
              <div style={styles.cardContent}>
                <h3 style={styles.templateTitle}>{template.name}</h3>
                <p style={styles.templateDescription}>
                  {template.description}
                </p>
                <div style={styles.cardFooter}>
                  <span style={styles.badge}>{template.category}</span>
                  <button
                    style={styles.useButton}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1d4ed8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#2563eb';
                    }}
                  >
                    Usar plantilla
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.centerSection}>
          <h2 style={styles.centerTitle}>¿Prefiero empezar en blanco?</h2>
          <button
            onClick={() => router.push('/editor')}
            style={styles.blankButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1d4ed8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb';
            }}
          >
            Crear proyecto en blanco
          </button>
        </div>
      </div>
    </main>
  );
}
