'use client';

import { useState } from 'react';

export default function EditableLandingPage() {
  const [content, setContent] = useState({
    title: 'Aguaje Premium - Potencia Natural',
    subtitle: 'Aumenta tu energía y vitalidad de forma natural',
    ctaText: 'Comprar Ahora - 50% Descuento',
    benefits: [
      { title: '💪 Energía Pura', description: 'Aumenta tu energía de forma natural sin estimulantes' },
      { title: '🚀 Vitalidad', description: 'Recupera la vitalidad y el vigor que mereces' },
      { title: '🌿 100% Natural', description: 'Ingredientes orgánicos certificados sin químicos' }
    ],
    specs: [
      { label: 'Ingredientes', value: 'Aguaje Premium, Vitamina C, Zinc' },
      { label: 'Presentación', value: 'Frasco de 500ml' },
      { label: 'Dosis', value: '2 cucharadas diarias' },
      { label: 'Garantía', value: '30 días 100% satisfacción' }
    ],
    testimonials: [
      { stars: 5, text: 'Excelente producto, resultados en 2 semanas', author: 'Juan García' },
      { stars: 5, text: 'Recuperé mi energía, lo recomiendo', author: 'María López' },
      { stars: 5, text: 'Mejor inversión en mi salud', author: 'Carlos Rodríguez' }
    ],
    color1: '#667eea',
    color2: '#764ba2',
    price: '99.99'
  });

  const [editMode, setEditMode] = useState(false);
  const [previewMode, setPreviewMode] = useState(true);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent({ ...content, title: e.target.value });
  };

  const handleSubtitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent({ ...content, subtitle: e.target.value });
  };

  const handleCtaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent({ ...content, ctaText: e.target.value });
  };

  const handleBenefitChange = (index: number, field: string, value: string) => {
    const newBenefits = [...content.benefits];
    newBenefits[index] = { ...newBenefits[index], [field]: value };
    setContent({ ...content, benefits: newBenefits });
  };

  const handleTestimonialChange = (index: number, field: string, value: string) => {
    const newTestimonials = [...content.testimonials];
    newTestimonials[index] = { ...newTestimonials[index], [field]: value };
    setContent({ ...content, testimonials: newTestimonials });
  };

  const handleColor1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent({ ...content, color1: e.target.value });
  };

  const handleColor2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent({ ...content, color2: e.target.value });
  };

  const downloadHTML = () => {
    const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${content.title}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; line-height: 1.6; }
    
    .hero {
      background: linear-gradient(135deg, ${content.color1} 0%, ${content.color2} 100%);
      color: white;
      padding: 100px 20px;
      text-align: center;
      min-height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .hero-content h1 { font-size: 3.5rem; margin-bottom: 20px; font-weight: 800; }
    .hero-content p { font-size: 1.3rem; margin-bottom: 30px; max-width: 600px; opacity: 0.95; }
    
    .cta-btn {
      background: #ff6b6b;
      color: white;
      padding: 18px 50px;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: bold;
    }
    
    .cta-btn:hover { background: #ff5252; transform: translateY(-3px); }
    
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    section { padding: 80px 20px; }
    section h2 { font-size: 2.8rem; text-align: center; margin-bottom: 60px; }
    
    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 40px;
    }
    
    .benefit-card {
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      padding: 40px 30px;
      border-radius: 15px;
      text-align: center;
      border-left: 5px solid ${content.color1};
    }
    
    .benefit-card h3 { font-size: 1.8rem; margin-bottom: 15px; color: ${content.color1}; }
    
    .specs { background: #f8f9fa; }
    .specs-table {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0,0,0,0.1);
      border-collapse: collapse;
      width: 100%;
    }
    
    .specs-table tr { border-bottom: 2px solid #eee; }
    .specs-table td { padding: 25px; font-size: 1.05rem; }
    .specs-table td:first-child { 
      background: linear-gradient(135deg, ${content.color1} 0%, ${content.color2} 100%);
      color: white;
      font-weight: bold;
      width: 35%;
    }
    
    .testimonial-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }
    
    .testimonial-card {
      background: white;
      padding: 35px;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.08);
      border-top: 4px solid #ffc107;
    }
    
    .stars { color: #ffc107; font-size: 1.4rem; margin-bottom: 15px; }
    .testimonial-text { font-style: italic; color: #555; margin-bottom: 20px; }
    .testimonial-author { font-weight: bold; color: #333; }
    
    .cta-final { 
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); 
      color: white;
      text-align: center;
    }
    
    .footer {
      background: #1a1a1a;
      color: white;
      padding: 50px 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="hero">
    <div class="hero-content">
      <h1>${content.title}</h1>
      <p>${content.subtitle}</p>
      <button class="cta-btn">${content.ctaText}</button>
    </div>
  </div>

  <section>
    <div class="container">
      <h2>Por Qué Elegir Nuestro Producto</h2>
      <div class="benefits-grid">
        ${content.benefits.map(b => `
        <div class="benefit-card">
          <h3>${b.title}</h3>
          <p>${b.description}</p>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="specs">
    <div class="container">
      <h2>Especificaciones del Producto</h2>
      <table class="specs-table">
        ${content.specs.map(s => `
        <tr>
          <td>${s.label}</td>
          <td>${s.value}</td>
        </tr>
        `).join('')}
      </table>
    </div>
  </section>

  <section>
    <div class="container">
      <h2>Testimonios de Nuestros Clientes</h2>
      <div class="testimonial-grid">
        ${content.testimonials.map(t => `
        <div class="testimonial-card">
          <div class="stars">${'⭐'.repeat(t.stars)}</div>
          <p class="testimonial-text">"${t.text}"</p>
          <p class="testimonial-author">— ${t.author}</p>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="cta-final">
    <div class="container">
      <h2>¡No Esperes Más!</h2>
      <p>Oferta especial: 50% de descuento HOY SOLAMENTE</p>
      <button class="cta-btn" style="margin-top: 30px;">${content.ctaText}</button>
    </div>
  </section>

  <div class="footer">
    <div class="container">
      <p style="font-size: 1.1rem; font-weight: bold;">© 2024 Tu Marca Premium. Todos los derechos reservados.</p>
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'landing-page.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Barra de herramientas */}
      <div style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Editor de Landing Page</h1>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setEditMode(!editMode)}
            style={{
              padding: '10px 20px',
              backgroundColor: editMode ? '#667eea' : '#555',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {editMode ? '✏️ Editando' : '📖 Ver Editor'}
          </button>
          <button
            onClick={() => setPreviewMode(!previewMode)}
            style={{
              padding: '10px 20px',
              backgroundColor: previewMode ? '#667eea' : '#555',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {previewMode ? '👁️ Vista Previa' : '📦 Ver Editor'}
          </button>
          <button
            onClick={downloadHTML}
            style={{
              padding: '10px 20px',
              backgroundColor: '#2ecc71',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            📥 Descargar HTML
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        {/* Panel de edición */}
        {editMode && (
          <div style={{
            flex: '0 0 400px',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            overflowY: 'auto',
            maxHeight: '90vh'
          }}>
            <h2 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Editar Contenido</h2>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Título</label>
              <input
                type="text"
                value={content.title}
                onChange={handleTitleChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontFamily: 'monospace'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Subtítulo</label>
              <input
                type="text"
                value={content.subtitle}
                onChange={handleSubtitleChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontFamily: 'monospace'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Texto del Botón</label>
              <input
                type="text"
                value={content.ctaText}
                onChange={handleCtaChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontFamily: 'monospace'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Color Principal 1</label>
              <input
                type="color"
                value={content.color1}
                onChange={handleColor1Change}
                style={{ width: '100%', height: '40px', border: '1px solid #ddd', borderRadius: '5px', cursor: 'pointer' }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Color Principal 2</label>
              <input
                type="color"
                value={content.color2}
                onChange={handleColor2Change}
                style={{ width: '100%', height: '40px', border: '1px solid #ddd', borderRadius: '5px', cursor: 'pointer' }}
              />
            </div>

            <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>Beneficios</h3>
            {content.benefits.map((benefit, idx) => (
              <div key={idx} style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
                <input
                  type="text"
                  value={benefit.title}
                  onChange={(e) => handleBenefitChange(idx, 'title', e.target.value)}
                  placeholder="Título"
                  style={{
                    width: '100%',
                    padding: '8px',
                    marginBottom: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '3px',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem'
                  }}
                />
                <textarea
                  value={benefit.description}
                  onChange={(e) => handleBenefitChange(idx, 'description', e.target.value)}
                  placeholder="Descripción"
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '3px',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    resize: 'vertical'
                  }}
                  rows={2}
                />
              </div>
            ))}

            <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>Testimonios</h3>
            {content.testimonials.map((testimonial, idx) => (
              <div key={idx} style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
                <textarea
                  value={testimonial.text}
                  onChange={(e) => handleTestimonialChange(idx, 'text', e.target.value)}
                  placeholder="Texto del testimonio"
                  style={{
                    width: '100%',
                    padding: '8px',
                    marginBottom: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '3px',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    resize: 'vertical'
                  }}
                  rows={2}
                />
                <input
                  type="text"
                  value={testimonial.author}
                  onChange={(e) => handleTestimonialChange(idx, 'author', e.target.value)}
                  placeholder="Autor"
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '3px',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Vista previa */}
        {previewMode && (
          <div style={{ flex: 1 }}>
            {/* Hero */}
            <div style={{
              background: `linear-gradient(135deg, ${content.color1} 0%, ${content.color2} 100%)`,
              color: 'white',
              padding: '80px 20px',
              textAlign: 'center',
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{content.title}</h1>
              <p style={{ fontSize: '1.2rem', marginBottom: '25px' }}>{content.subtitle}</p>
              <button style={{
                background: '#ff6b6b',
                color: 'white',
                padding: '15px 40px',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                {content.ctaText}
              </button>
            </div>

            {/* Beneficios */}
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Por Qué Elegir Nuestro Producto</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px'
              }}>
                {content.benefits.map((benefit, idx) => (
                  <div key={idx} style={{
                    background: '#f5f7fa',
                    padding: '30px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    borderLeft: `5px solid ${content.color1}`
                  }}>
                    <h3 style={{ marginBottom: '10px', color: content.color1 }}>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonios */}
            <div style={{
              background: '#f8f9fa',
              padding: '40px 20px',
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Testimonios de Clientes</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px'
              }}>
                {content.testimonials.map((testimonial, idx) => (
                  <div key={idx} style={{
                    background: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    borderTop: '4px solid #ffc107'
                  }}>
                    <div style={{ color: '#ffc107', marginBottom: '10px' }}>
                      {'⭐'.repeat(testimonial.stars)}
                    </div>
                    <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>"{testimonial.text}"</p>
                    <p style={{ fontWeight: 'bold' }}>— {testimonial.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
