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
  <div class="hero">
    <div class="container">
      <h1>Tu Producto Revolucionario</h1>
      <p>Descubre cómo este producto premium puede transformar tu vida y salud</p>
      <button class="cta-btn">Comprar Ahora - 50% Descuento</button>
    </div>
  </div>

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

  <div class="hero" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 60px 20px;">
    <div class="container">
      <h2 style="font-size: 2.5rem; margin-bottom: 20px;">¡Aprovecha la Oferta Limitada!</h2>
      <p style="font-size: 1.2rem; margin-bottom: 30px;">50% de descuento solo hoy. Stock limitado.</p>
      <button class="cta-btn">Ordenar Ahora</button>
    </div>
  </div>

  <div class="footer">
    <div class="container">
      <p>&copy; 2024 Tu Marca Premium. Todos los derechos reservados.</p>
      <p style="margin-top: 10px; font-size: 0.9rem;">Política de privacidad | Términos de servicio | Contacto</p>
    </div>
  </div>
</body>
</html>`
    },
    {
      id: 'ecommerce-fashion',
      name: 'Tienda E-Commerce de Moda',
      category: 'ecommerce',
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tu Tienda de Moda Premium</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; }
    
    .hero {
      background: linear-gradient(135deg, #FF6B9D 0%, #C44569 100%);
      color: white;
      padding: 100px 20px;
      text-align: center;
    }
    .hero h1 { font-size: 3.5rem; margin-bottom: 20px; font-weight: bold; }
    .hero p { font-size: 1.3rem; margin-bottom: 30px; }
    
    .cta-btn {
      background: #FF6B9D;
      color: white;
      padding: 15px 40px;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: bold;
    }
    .cta-btn:hover { background: #C44569; transform: translateY(-2px); }
    
    .products {
      padding: 80px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .products h2 { font-size: 2.5rem; text-align: center; margin-bottom: 50px; }
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    }
    .product-card {
      background: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
    .product-card:hover { transform: translateY(-5px); }
    .product-image { background: linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 100%); height: 200px; }
    .product-info { padding: 20px; }
    .product-price { font-size: 1.5rem; color: #FF6B9D; font-weight: bold; margin-bottom: 10px; }
    
    .features {
      background: #f8f9fa;
      padding: 80px 20px;
    }
    .features h2 { font-size: 2.5rem; text-align: center; margin-bottom: 50px; }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .feature-card {
      background: white;
      padding: 30px;
      border-radius: 10px;
      text-align: center;
    }
    
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
    
    .footer {
      background: #333;
      color: white;
      padding: 40px 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="hero">
    <h1>Tu Colección de Moda Exclusiva</h1>
    <p>Descubre las últimas tendencias en ropa premium</p>
    <button class="cta-btn">Comprar Ahora</button>
  </div>

  <div class="products">
    <h2>Nuestros Productos Destacados</h2>
    <div class="product-grid">
      <div class="product-card">
        <div class="product-image"></div>
        <div class="product-info">
          <h3>Producto Premium 1</h3>
          <div class="product-price">$99.99</div>
          <p>Descripción del producto con características especiales</p>
        </div>
      </div>
      <div class="product-card">
        <div class="product-image"></div>
        <div class="product-info">
          <h3>Producto Premium 2</h3>
          <div class="product-price">$129.99</div>
          <p>Descripción del producto con características especiales</p>
        </div>
      </div>
      <div class="product-card">
        <div class="product-image"></div>
        <div class="product-info">
          <h3>Producto Premium 3</h3>
          <div class="product-price">$149.99</div>
          <p>Descripción del producto con características especiales</p>
        </div>
      </div>
    </div>
  </div>

  <div class="features">
    <h2>¿Por qué Comprar con Nosotros?</h2>
    <div class="features-grid">
      <div class="feature-card">
        <h3>🚚 Envío Gratis</h3>
        <p>En compras mayores a $50</p>
      </div>
      <div class="feature-card">
        <h3>🔄 Devolución Fácil</h3>
        <p>30 días garantía sin preguntas</p>
      </div>
      <div class="feature-card">
        <h3>💳 Pago Seguro</h3>
        <p>Múltiples formas de pago</p>
      </div>
    </div>
  </div>

  <div class="testimonials">
    <h2>Opiniones de Nuestros Clientes</h2>
    <div class="testimonial-grid">
      <div class="testimonial-card">
        <div style="color: #ffc107; margin-bottom: 10px;">⭐⭐⭐⭐⭐</div>
        <p>"Excelente calidad y muy rápido en el envío"</p>
        <p style="font-weight: bold; margin-top: 10px;">- Ana García</p>
      </div>
      <div class="testimonial-card">
        <div style="color: #ffc107; margin-bottom: 10px;">⭐⭐⭐⭐⭐</div>
        <p>"Me encantó la ropa, volveré a comprar"</p>
        <p style="font-weight: bold; margin-top: 10px;">- Sofia López</p>
      </div>
    </div>
  </div>

  <div class="footer">
    <p>&copy; 2024 Tu Tienda de Moda. Todos los derechos reservados.</p>
  </div>
</body>
</html>`
    },
    {
      id: 'tech-gadgets',
      name: 'Gadgets Tecnológicos',
      category: 'tech',
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gadgets Tecnológicos Premium</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; }
    
    .hero {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 100px 20px;
      text-align: center;
    }
    .hero h1 { font-size: 3.5rem; margin-bottom: 20px; font-weight: bold; }
    .hero p { font-size: 1.3rem; margin-bottom: 30px; }
    
    .cta-btn {
      background: #00d4ff;
      color: #000;
      padding: 15px 40px;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: bold;
    }
    .cta-btn:hover { background: #00b8d4; transform: translateY(-2px); }
    
    .specs {
      padding: 80px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .specs h2 { font-size: 2.5rem; text-align: center; margin-bottom: 50px; }
    .specs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    }
    .spec-card {
      background: #f8f9fa;
      padding: 30px;
      border-radius: 10px;
      border-left: 4px solid #00d4ff;
    }
    .spec-card h3 { color: #00d4ff; margin-bottom: 10px; }
    
    .features {
      background: #f0f2f5;
      padding: 80px 20px;
    }
    .features h2 { font-size: 2.5rem; text-align: center; margin-bottom: 50px; }
    .features-list {
      max-width: 800px;
      margin: 0 auto;
      list-style: none;
    }
    .features-list li {
      padding: 15px 0;
      border-bottom: 1px solid #ddd;
      font-size: 1.1rem;
    }
    .features-list li:before { content: "✓ "; color: #00d4ff; font-weight: bold; margin-right: 10px; }
    
    .footer {
      background: #1a1a2e;
      color: white;
      padding: 40px 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="hero">
    <h1>Última Tecnología en Gadgets</h1>
    <p>Dispositivos innovadores para el futuro</p>
    <button class="cta-btn">Explorar Productos</button>
  </div>

  <div class="specs">
    <h2>Especificaciones Principales</h2>
    <div class="specs-grid">
      <div class="spec-card">
        <h3>📱 Pantalla 4K</h3>
        <p>Resolución ultra nítida con 120Hz de refresco</p>
      </div>
      <div class="spec-card">
        <h3>⚡ Procesador Último Gen</h3>
        <p>Velocidad máxima con eficiencia energética</p>
      </div>
      <div class="spec-card">
        <h3>🔋 Batería 72 horas</h3>
        <p>Uso prolongado sin recargas constantes</p>
      </div>
    </div>
  </div>

  <div class="features">
    <h2>Características Destacadas</h2>
    <ul class="features-list">
      <li>Diseño premium con materiales de alta calidad</li>
      <li>Conectividad 5G ultra rápida</li>
      <li>Cámara de 200MP con IA</li>
      <li>Sistema operativo optimizado</li>
      <li>Garantía extendida de 2 años</li>
    </ul>
  </div>

  <div class="hero" style="background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);">
    <h2 style="margin-bottom: 20px;">¡Disponible Ahora!</h2>
    <button class="cta-btn" style="background: #1a1a2e; color: white;">Comprar Ahora</button>
  </div>

  <div class="footer">
    <p>&copy; 2024 Gadgets Tech Premium. Todos los derechos reservados.</p>
  </div>
</body>
</html>`
    },
    {
      id: 'fitness-gym',
      name: 'Programa de Fitness/Gym',
      category: 'fitness',
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Programa Fitness Premium</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; }
    
    .hero {
      background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
      color: white;
      padding: 100px 20px;
      text-align: center;
    }
    .hero h1 { font-size: 3.5rem; margin-bottom: 20px; font-weight: bold; }
    .hero p { font-size: 1.3rem; margin-bottom: 30px; }
    
    .cta-btn {
      background: #ff6b35;
      color: white;
      padding: 15px 40px;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: bold;
    }
    .cta-btn:hover { background: #e55100; transform: translateY(-2px); }
    
    .programs {
      padding: 80px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .programs h2 { font-size: 2.5rem; text-align: center; margin-bottom: 50px; }
    .program-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
    }
    .program-card {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      border-top: 4px solid #ff6b35;
    }
    .program-price { font-size: 2rem; color: #ff6b35; font-weight: bold; margin: 15px 0; }
    
    .benefits {
      background: #f8f9fa;
      padding: 80px 20px;
    }
    .benefits h2 { font-size: 2.5rem; text-align: center; margin-bottom: 50px; }
    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .benefit-card {
      background: white;
      padding: 30px;
      border-radius: 10px;
      text-align: center;
      font-size: 3rem;
    }
    
    .footer {
      background: #333;
      color: white;
      padding: 40px 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="hero">
    <h1>Transforma Tu Cuerpo en 12 Semanas</h1>
    <p>Programa científico de fitness diseñado por expertos</p>
    <button class="cta-btn">Comenzar Mi Transformación</button>
  </div>

  <div class="programs">
    <h2>Nuestros Programas</h2>
    <div class="program-grid">
      <div class="program-card">
        <h3>💪 Programa Básico</h3>
        <p>Perfecto para principiantes</p>
        <div class="program-price">$29.99/mes</div>
        <p>Incluye: Entrenamientos básicos, Nutrición guía, Soporte por email</p>
      </div>
      <div class="program-card">
        <h3>🔥 Programa Premium</h3>
        <p>Intermedio a avanzado</p>
        <div class="program-price">$59.99/mes</div>
        <p>Incluye: Todo lo básico + Coaching personal, Planes personalizados</p>
      </div>
      <div class="program-card">
        <h3>🏆 Programa VIP</h3>
        <p>Máximo rendimiento</p>
        <div class="program-price">$99.99/mes</div>
        <p>Incluye: Todo premium + Consultas ilimitadas, Seguimiento 1-a-1</p>
      </div>
    </div>
  </div>

  <div class="benefits">
    <h2>Resultados Garantizados</h2>
    <div class="benefits-grid">
      <div class="benefit-card">
        <div>💯</div>
        <h3 style="margin-top: 10px;">Garantía 100%</h3>
      </div>
      <div class="benefit-card">
        <div>⏱️</div>
        <h3 style="margin-top: 10px;">30-60 min/día</h3>
      </div>
      <div class="benefit-card">
        <div>🎯</div>
        <h3 style="margin-top: 10px;">Resultados Medibles</h3>
      </div>
    </div>
  </div>

  <div class="footer">
    <p>&copy; 2024 Fitness Premium. Todos los derechos reservados.</p>
  </div>
</body>
</html>`
    },
    {
      id: 'b2b-services',
      name: 'Servicios B2B Empresariales',
      category: 'b2b',
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Servicios Empresariales B2B</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; }
    
    .hero {
      background: linear-gradient(135deg, #004e89 0%, #1b6ca8 100%);
      color: white;
      padding: 100px 20px;
      text-align: center;
    }
    .hero h1 { font-size: 3.5rem; margin-bottom: 20px; font-weight: bold; }
    .hero p { font-size: 1.3rem; margin-bottom: 30px; }
    
    .cta-btn {
      background: #f77f00;
      color: white;
      padding: 15px 40px;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: bold;
    }
    .cta-btn:hover { background: #d46f00; transform: translateY(-2px); }
    
    .services {
      padding: 80px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .services h2 { font-size: 2.5rem; text-align: center; margin-bottom: 50px; }
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
    }
    .service-card {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      border-left: 5px solid #f77f00;
    }
    .service-card h3 { color: #004e89; margin-bottom: 15px; }
    
    .why-us {
      background: #f0f2f5;
      padding: 80px 20px;
    }
    .why-us h2 { font-size: 2.5rem; text-align: center; margin-bottom: 50px; }
    .why-us-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .why-us-card {
      background: white;
      padding: 30px;
      border-radius: 10px;
      text-align: center;
    }
    
    .clients {
      padding: 80px 20px;
      text-align: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    .clients h2 { font-size: 2.5rem; margin-bottom: 40px; }
    .client-logos {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
    }
    .client-logo {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      font-weight: bold;
      color: #999;
    }
    
    .footer {
      background: #004e89;
      color: white;
      padding: 40px 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="hero">
    <h1>Soluciones Empresariales Inteligentes</h1>
    <p>Impulsa tu negocio con nuestros servicios premium</p>
    <button class="cta-btn">Contactar Ventas</button>
  </div>

  <div class="services">
    <h2>Nuestros Servicios</h2>
    <div class="services-grid">
      <div class="service-card">
        <h3>📊 Consultoría Estratégica</h3>
        <p>Asesoramiento experto para optimizar tu modelo de negocio y maximizar ROI</p>
      </div>
      <div class="service-card">
        <h3>🚀 Transformación Digital</h3>
        <p>Implementación de tecnología moderna para automatizar procesos</p>
      </div>
      <div class="service-card">
        <h3>💼 Gestión de Proyectos</h3>
        <p>Ejecución eficiente de proyectos complejos a tiempo y presupuesto</p>
      </div>
      <div class="service-card">
        <h3>👥 Capacitación Corporativa</h3>
        <p>Programas de desarrollo para potenciar tu equipo</p>
      </div>
    </div>
  </div>

  <div class="why-us">
    <h2>¿Por Qué Elegirnos?</h2>
    <div class="why-us-grid">
      <div class="why-us-card">
        <h3>✅ 15+ años de experiencia</h3>
        <p>Expertise probado en múltiples industrias</p>
      </div>
      <div class="why-us-card">
        <h3>✅ Equipo especializado</h3>
        <p>Profesionales certificados y altamente calificados</p>
      </div>
      <div class="why-us-card">
        <h3>✅ Resultados medibles</h3>
        <p>Enfoque data-driven con ROI comprobado</p>
      </div>
    </div>
  </div>

  <div class="clients">
    <h2>Empresas que Confían en Nosotros</h2>
    <div class="client-logos">
      <div class="client-logo">Empresa 1</div>
      <div class="client-logo">Empresa 2</div>
      <div class="client-logo">Empresa 3</div>
      <div class="client-logo">Empresa 4</div>
    </div>
  </div>

  <div class="hero" style="background: linear-gradient(135deg, #f77f00 0%, #fcbf49 100%);">
    <h2 style="margin-bottom: 20px;">Transforma tu Negocio Hoy</h2>
    <button class="cta-btn" style="background: #004e89; color: white;">Agendar Demo</button>
  </div>

  <div class="footer">
    <p>&copy; 2024 Servicios B2B Premium. Todos los derechos reservados.</p>
  </div>
</body>
</html>`
    }
  ];

  return templates;
}
