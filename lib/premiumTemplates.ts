'use client';

export function PremiumTemplates() {
  const templates = [
    {
      id: 'health-product',
      name: 'Producto Salud/Bienestar',
      category: 'health',
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tu Producto Premium</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; }
    
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 80px 20px;
      text-align: center;
    }
    .hero h1 { font-size: 3.5rem; margin-bottom: 20px; font-weight: bold; }
    .hero p { font-size: 1.3rem; margin-bottom: 30px; max-width: 600px; margin-left: auto; margin-right: auto; }
    .cta-btn {
      background: #ff6b6b;
      color: white;
      padding: 15px 40px;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: bold;
    }
    .cta-btn:hover { background: #ff5252; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
    
    .benefits {
      padding: 80px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .benefits h2 { font-size: 2.5rem; text-align: center; margin-bottom: 50px; }
    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    }
    .benefit-card {
      background: #f8f9fa;
      padding: 30px;
      border-radius: 10px;
      text-align: center;
      border-top: 4px solid #667eea;
    }
    .benefit-card h3 { font-size: 1.5rem; margin-bottom: 15px; }
    .benefit-card p { color: #666; line-height: 1.6; }
    
    .specs {
      background: #f0f2f5;
      padding: 80px 20px;
    }
    .specs h2 { font-size: 2.5rem; text-align: center; margin-bottom: 50px; }
    .specs-table {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    .specs-table tr { border-bottom: 1px solid #eee; }
    .specs-table td { padding: 20px; }
    .specs-table td:first-child { background: #f8f9fa; font-weight: bold; width: 40%; }
    
    .testimonials {
      padding: 80px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .testimonials h2 { font-size: 2.5rem; text-align: center; margin-bottom: 50px; }
    .testimonial-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
    }
    .testimonial-card {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    .stars { color: #ffc107; font-size: 1.2rem; margin-bottom: 10px; }
    .testimonial-text { font-style: italic; color: #666; margin-bottom: 15px; line-height: 1.6; }
    .testimonial-author { font-weight: bold; }
    
    .faq {
      background: #f0f2f5;
      padding: 80px 20px;
    }
    .faq h2 { font-size: 2.5rem; text-align: center; margin-bottom: 50px; }
    .faq-container { max-width: 800px; margin: 0 auto; }
    .faq-item { background: white; margin-bottom: 20px; border-radius: 10px; overflow: hidden; }
    .faq-question { padding: 20px; cursor: pointer; font-weight: bold; background: #f8f9fa; }
    .faq-question:hover { background: #eee; }
    .faq-answer { padding: 20px; color: #666; line-height: 1.6; }
    
    .footer {
      background: #333;
      color: white;
      padding: 40px 20px;
      text-align: center;
    }
    
    .container { max-width: 1200px; margin: 0 auto; }
  </style>
</head>
<body>
  <!-- HERO -->
  <div class="hero">
    <div class="container">
      <h1>Tu Producto Revolucionario</h1>
      <p>Descubre cómo este producto premium puede transformar tu vida y salud</p>
      <button class="cta-btn">Comprar Ahora - 50% Descuento</button>
    </div>
  </div>

  <!-- BENEFICIOS -->
  <div class="benefits">
    <h2>Beneficios Principales</h2>
    <div class="benefits-grid">
      <div class="benefit-card">
        <h3>✨ Beneficio 1</h3>
        <p>Descripción clara del primer beneficio principal que ofrece tu producto</p>
      </div>
      <div class="benefit-card">
        <h3>🚀 Beneficio 2</h3>
        <p>Explica el segundo beneficio destacado de tu solución</p>
      </div>
      <div class="benefit-card">
        <h3>💪 Beneficio 3</h3>
        <p>Describe el tercer beneficio clave que diferencia tu producto</p>
      </div>
    </div>
  </div>

  <!-- ESPECIFICACIONES -->
  <div class="specs">
    <h2>Especificaciones Técnicas</h2>
    <table class="specs-table">
      <tr>
        <td>Ingredientes</td>
        <td>Lista de ingredientes premium de alta calidad</td>
      </tr>
      <tr>
        <td>Presentación</td>
        <td>Frasco de 500ml / 100 cápsulas</td>
      </tr>
      <tr>
        <td>Dosis Recomendada</td>
        <td>2 veces al día con las comidas</td>
      </tr>
      <tr>
        <td>Certificaciones</td>
        <td>Certificado Orgánico, Garantía 30 días</td>
      </tr>
    </table>
  </div>

  <!-- TESTIMONIOS -->
  <div class="testimonials">
    <h2>Lo Que Dicen Nuestros Clientes</h2>
    <div class="testimonial-grid">
      <div class="testimonial-card">
        <div class="stars">⭐⭐⭐⭐⭐</div>
        <div class="testimonial-text">"Producto excelente, he visto resultados en solo 2 semanas. Lo recomiendo altamente."</div>
        <div class="testimonial-author">- Juan García</div>
      </div>
      <div class="testimonial-card">
        <div class="stars">⭐⭐⭐⭐⭐</div>
        <div class="testimonial-text">"Mejor inversión en mi salud. La calidad es increíble y el envío fue rápido."</div>
        <div class="testimonial-author">- María Rodríguez</div>
      </div>
      <div class="testimonial-card">
        <div class="stars">⭐⭐⭐⭐⭐</div>
        <div class="testimonial-text">"Notables cambios en mi energía y bienestar general. 100% recomendado."</div>
        <div class="testimonial-author">- Carlos López</div>
      </div>
    </div>
  </div>

  <!-- FAQ -->
  <div class="faq">
    <h2>Preguntas Frecuentes</h2>
    <div class="faq-container">
      <div class="faq-item">
        <div class="faq-question">¿Es seguro para toda la familia?</div>
        <div class="faq-answer">Sí, nuestro producto está formulado con ingredientes naturales y es seguro para adultos y adolescentes. Consulte con su médico si tiene condiciones especiales.</div>
      </div>
      <div class="faq-item">
        <div class="faq-question">¿Cuándo vería los resultados?</div>
        <div class="faq-answer">La mayoría de clientes reportan cambios notables entre 2-4 semanas de uso consistente.</div>
      </div>
      <div class="faq-item">
        <div class="faq-question">¿Hay garantía de satisfacción?</div>
        <div class="faq-answer">Sí, ofrecemos garantía de 30 días 100% sin riesgos. Si no está satisfecho, devolvemos su dinero.</div>
      </div>
    </div>
  </div>

  <!-- CTA FINAL -->
  <div class="hero" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 60px 20px;">
    <div class="container">
      <h2 style="font-size: 2.5rem; margin-bottom: 20px;">¡Aprovecha la Oferta Limitada!</h2>
      <p style="font-size: 1.2rem; margin-bottom: 30px;">50% de descuento solo hoy. Stock limitado.</p>
      <button class="cta-btn">Ordenar Ahora</button>
    </div>
  </div>

  <!-- FOOTER -->
  <div class="footer">
    <div class="container">
      <p>&copy; 2024 Tu Marca Premium. Todos los derechos reservados.</p>
      <p style="margin-top: 10px; font-size: 0.9rem;">Política de privacidad | Términos de servicio | Contacto</p>
    </div>
  </div>
</body>
</html>`
    }
  ];

  return templates;
}
