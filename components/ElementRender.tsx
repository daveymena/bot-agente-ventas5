'use client';

import { PageElement } from '@/types';

interface ElementRenderProps {
  element: PageElement;
  onSelect: (element: PageElement) => void;
  isSelected: boolean;
  onDelete?: (id: string) => void;
}

export function ElementRender({
  element,
  onSelect,
  isSelected,
  onDelete,
}: ElementRenderProps) {
  const getInlineStyles = (): React.CSSProperties => {
    return {
      backgroundColor: element.styles.backgroundColor,
      color: element.styles.textColor,
      fontSize: element.styles.fontSize,
      padding: element.styles.padding,
      margin: element.styles.margin,
      borderRadius: element.styles.borderRadius,
      textAlign: element.styles.textAlign as any,
      border: isSelected ? '2px solid rgb(59, 130, 246)' : 'none',
      boxShadow: isSelected ? '0 0 0 2px rgba(59, 130, 246, 0.1)' : 'none',
      position: 'relative' as const,
    };
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(element.id);
    }
  };

  const renderContent = () => {
    switch (element.type) {
      case 'heading':
        return (
          <h1 style={getInlineStyles()} onClick={() => onSelect(element)}>
            {element.content}
            {isSelected && (
              <button
                onClick={handleDelete}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                ✕
              </button>
            )}
          </h1>
        );

      case 'paragraph':
        return (
          <p style={getInlineStyles()} onClick={() => onSelect(element)}>
            {element.content}
            {isSelected && (
              <button
                onClick={handleDelete}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                ✕
              </button>
            )}
          </p>
        );

      case 'button':
        return (
          <div style={{ ...getInlineStyles(), display: 'inline-block' }}>
            <button
              onClick={() => onSelect(element)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              {element.content}
            </button>
            {isSelected && (
              <button
                onClick={handleDelete}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                ✕
              </button>
            )}
          </div>
        );

      case 'image':
        return (
          <div
            style={getInlineStyles()}
            onClick={() => onSelect(element)}
            className="relative"
          >
            <img
              src={element.content || 'https://via.placeholder.com/400x300?text=Imagen'}
              alt="Elemento imagen"
              className="max-w-full h-auto"
            />
            {isSelected && (
              <button
                onClick={handleDelete}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800 bg-white rounded-full p-1"
              >
                ✕
              </button>
            )}
          </div>
        );

      case 'section':
        return (
          <section
            style={getInlineStyles()}
            onClick={() => onSelect(element)}
            className="relative"
          >
            {element.children && element.children.length > 0 ? (
              <div className="space-y-4">
                {element.children.map((child) => (
                  <ElementRender
                    key={child.id}
                    element={child}
                    onSelect={onSelect}
                    isSelected={isSelected}
                    onDelete={onDelete}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-400 italic">
                Arrastra elementos aquí para añadirlos
              </p>
            )}
            {isSelected && (
              <button
                onClick={handleDelete}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800 bg-white rounded-full p-1"
              >
                ✕
              </button>
            )}
          </section>
        );

      default:
        return (
          <div style={getInlineStyles()} onClick={() => onSelect(element)}>
            {element.content}
            {isSelected && (
              <button
                onClick={handleDelete}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              >
                ✕
              </button>
            )}
          </div>
        );
    }
  };

  return renderContent();
}
