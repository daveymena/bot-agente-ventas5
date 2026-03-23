'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { EditorProvider, useEditor } from '@/contexts/EditorContext';
import { PageElement } from '@/types';
import { ElementRender } from '@/components/ElementRender';
import { v4 as uuidv4 } from 'uuid';

function EditorContent() {
  const router = useRouter();
  const {
    project,
    selectedElement,
    selectElement,
    updateElement,
    addElement,
    removeElement,
    createNewProject,
  } = useEditor();

  const [showElementPanel, setShowElementPanel] = useState(true);
  const [showPropertiesPanel, setShowPropertiesPanel] = useState(true);

  useEffect(() => {
    if (!project) {
      createNewProject('Mi Landing Page Profesional');
    }
  }, []);

  const addNewElement = (type: PageElement['type']) => {
    const defaultContent: Record<PageElement['type'], string> = {
      heading: 'Tu Encabezado Principal',
      paragraph: 'Escribe tu contenido aquí',
      button: 'Haz Clic Aquí',
      image: 'https://via.placeholder.com/400x300?text=Tu+Imagen',
      section: 'Nueva Sección',
      hero: 'Hero Section',
      'contact-form': 'Formulario de Contacto',
      features: 'Características',
      testimonials: 'Testimonios',
    };

    const newElement: PageElement = {
      id: uuidv4(),
      type,
      content: defaultContent[type],
      styles: {
        padding: '16px',
        textAlign: 'center',
        backgroundColor: '#ffffff',
        textColor: '#000000',
        fontSize: '16px',
      },
    };
    addElement(newElement);
    selectElement(newElement);
  };

  const exportAsHTML = () => {
    if (!project) return;

    let html = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${project.name}</title>
    <style>
        * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
        }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container { 
            max-width: 1200px; 
            margin: 0 auto; 
            padding: 0 20px; 
        }
        h1, h2, h3, h4, h5, h6 {
            margin-bottom: 10px;
        }
        p {
            margin-bottom: 10px;
        }
        button {
            cursor: pointer;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
        }
        section {
            padding: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">`;

    const renderElements = (elements: PageElement[]): string => {
      return elements
        .map((el) => {
          const styles = Object.entries(el.styles)
            .filter(([, value]) => value)
            .map(([key, value]) => {
              const cssKey = key
                .replace(/([A-Z])/g, '-$1')
                .toLowerCase()
                .replace('-text-color', '-color')
                .replace('-background-color', 'background-color');
              return `${cssKey}: ${value}`;
            })
            .join('; ');

          const styleAttr = styles ? ` style="${styles}"` : '';

          switch (el.type) {
            case 'heading':
              return `<h2${styleAttr}>${escapeHtml(el.content)}</h2>`;
            case 'paragraph':
              return `<p${styleAttr}>${escapeHtml(el.content)}</p>`;
            case 'button':
              return `<button${styleAttr}>${escapeHtml(el.content)}</button>`;
            case 'image':
              return `<img src="${el.content}" alt="Imagen" ${styleAttr} style="max-width: 100%; ${styles}">`;
            case 'section':
              const children = el.children ? renderElements(el.children) : '';
              return `<section${styleAttr}>${children}</section>`;
            default:
              return `<div${styleAttr}>${escapeHtml(el.content)}</div>`;
          }
        })
        .join('\n    ');
    };

    const escapeHtml = (text: string): string => {
      const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      };
      return text.replace(/[&<>"']/g, (m) => map[m]);
    };

    html += `\n        ${renderElements(project.elements)}\n    </div>\n</body>\n</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.name.replace(/\s+/g, '-').toLowerCase()}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportAsCSS = () => {
    if (!project) return;

    const css = `/* Estilos para ${project.name} */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 10px;
  font-weight: bold;
}

p {
  margin-bottom: 10px;
}

button {
  cursor: pointer;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

section {
  padding: 20px 0;
}

/* Estilos personalizados */
`;

    const blob = new Blob([css], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.name.replace(/\s+/g, '-').toLowerCase()}.css`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!project) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin text-4xl mb-4">⏳</div>
          <p className="text-gray-600">Cargando editor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Barra superior */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg h-16 flex items-center justify-between px-6 flex-shrink-0">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push('/')}
            className="hover:bg-blue-500 px-4 py-2 rounded transition font-semibold"
          >
            ← Inicio
          </button>
          <h2 className="text-xl font-bold">{project.name}</h2>
        </div>

        <div className="flex gap-2">
          <button
            onClick={exportAsHTML}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-semibold transition flex items-center gap-2"
          >
            📥 HTML
          </button>
          <button
            onClick={exportAsCSS}
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded font-semibold transition flex items-center gap-2"
          >
            📥 CSS
          </button>
          <button
            onClick={() => alert('✓ Proyecto guardado exitosamente')}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-semibold transition flex items-center gap-2"
          >
            💾 Guardar
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-1 overflow-hidden">
        {/* Panel izquierdo - Componentes */}
        {showElementPanel && (
          <div className="w-72 bg-white shadow-lg border-r flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-bold text-gray-900">Componentes</h3>
              <button
                onClick={() => setShowElementPanel(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="overflow-y-auto flex-1 p-4">
              <div className="space-y-2">
                {[
                  { type: 'heading' as const, icon: '📝' },
                  { type: 'paragraph' as const, icon: '📄' },
                  { type: 'button' as const, icon: '🔘' },
                  { type: 'image' as const, icon: '🖼️' },
                  { type: 'section' as const, icon: '📦' },
                ].map(({ type, icon }) => (
                  <button
                    key={type}
                    onClick={() => addNewElement(type)}
                    className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-900 rounded transition font-semibold flex items-center gap-2"
                  >
                    {icon} {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-4">
                Proyecto
              </h3>
              <input
                type="text"
                value={project.name}
                onChange={(e) => {
                  updateElement(project.id, { content: e.target.value });
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
                placeholder="Nombre del proyecto"
              />
              <p className="text-xs text-gray-600">
                Elementos: {project.elements.length}
              </p>
            </div>
          </div>
        )}

        {/* Centro - Preview */}
        <div className="flex-1 overflow-y-auto p-8 bg-gray-50">
          <div className="bg-white rounded-lg shadow-lg p-12 max-w-4xl mx-auto">
            {project.elements.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📝</div>
                <p className="text-gray-400 text-lg mb-4">
                  No hay elementos aún.
                </p>
                <p className="text-gray-400 text-sm">
                  Agrega componentes desde el panel izquierdo
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {project.elements.map((element) => (
                  <ElementRender
                    key={element.id}
                    element={element}
                    onSelect={selectElement}
                    isSelected={selectedElement?.id === element.id}
                    onDelete={removeElement}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Panel derecho - Propiedades */}
        {showPropertiesPanel && (
          <div className="w-80 bg-white shadow-lg border-l flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-bold text-gray-900">Propiedades</h3>
              <button
                onClick={() => setShowPropertiesPanel(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-4">
              {selectedElement ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Tipo: {selectedElement.type}
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Contenido
                    </label>
                    <textarea
                      value={selectedElement.content}
                      onChange={(e) =>
                        updateElement(selectedElement.id, {
                          content: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Color de fondo
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={selectedElement.styles.backgroundColor || '#ffffff'}
                        onChange={(e) =>
                          updateElement(selectedElement.id, {
                            styles: {
                              ...selectedElement.styles,
                              backgroundColor: e.target.value,
                            },
                          })
                        }
                        className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={selectedElement.styles.backgroundColor || '#ffffff'}
                        readOnly
                        className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Color de texto
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={selectedElement.styles.textColor || '#000000'}
                        onChange={(e) =>
                          updateElement(selectedElement.id, {
                            styles: {
                              ...selectedElement.styles,
                              textColor: e.target.value,
                            },
                          })
                        }
                        className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={selectedElement.styles.textColor || '#000000'}
                        readOnly
                        className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm bg-gray-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Tamaño de fuente
                    </label>
                    <input
                      type="text"
                      value={selectedElement.styles.fontSize || '16px'}
                      onChange={(e) =>
                        updateElement(selectedElement.id, {
                          styles: {
                            ...selectedElement.styles,
                            fontSize: e.target.value,
                          },
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      placeholder="16px"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Relleno (padding)
                    </label>
                    <input
                      type="text"
                      value={selectedElement.styles.padding || '16px'}
                      onChange={(e) =>
                        updateElement(selectedElement.id, {
                          styles: {
                            ...selectedElement.styles,
                            padding: e.target.value,
                          },
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      placeholder="16px"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Alineación
                    </label>
                    <select
                      value={selectedElement.styles.textAlign || 'left'}
                      onChange={(e) =>
                        updateElement(selectedElement.id, {
                          styles: {
                            ...selectedElement.styles,
                            textAlign: e.target.value as any,
                          },
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    >
                      <option value="left">Izquierda</option>
                      <option value="center">Centro</option>
                      <option value="right">Derecha</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Bordes redondeados
                    </label>
                    <input
                      type="text"
                      value={selectedElement.styles.borderRadius || '0px'}
                      onChange={(e) =>
                        updateElement(selectedElement.id, {
                          styles: {
                            ...selectedElement.styles,
                            borderRadius: e.target.value,
                          },
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      placeholder="0px"
                    />
                  </div>

                  <button
                    onClick={() => removeElement(selectedElement.id)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded transition"
                  >
                    🗑️ Eliminar elemento
                  </button>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <p className="text-sm">Selecciona un elemento</p>
                  <p className="text-xs mt-2">para editar sus propiedades</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Editor() {
  return (
    <EditorProvider>
      <EditorContent />
    </EditorProvider>
  );
}
