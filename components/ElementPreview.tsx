'use client';

import { PageElement } from '@/types';

interface ElementPreviewProps {
  element: PageElement;
  onSelect: (element: PageElement) => void;
  isSelected: boolean;
}

export function ElementPreview({
  element,
  onSelect,
  isSelected,
}: ElementPreviewProps) {
  const baseStyles = `
    ${element.styles.backgroundColor ? `bg-[${element.styles.backgroundColor}]` : ''}
    ${element.styles.textColor ? `text-[${element.styles.textColor}]` : ''}
    ${element.styles.fontSize ? `text-[${element.styles.fontSize}]` : ''}
    ${element.styles.padding || 'p-4'}
    ${element.styles.margin || 'm-0'}
    ${element.styles.borderRadius ? `rounded-[${element.styles.borderRadius}]` : ''}
    cursor-pointer transition-all
    ${isSelected ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'}
  `;

  const getStyleObject = () => {
    return {
      backgroundColor: element.styles.backgroundColor,
      color: element.styles.textColor,
      fontSize: element.styles.fontSize,
      padding: element.styles.padding,
      margin: element.styles.margin,
      borderRadius: element.styles.borderRadius,
      textAlign: element.styles.textAlign as any,
    };
  };

  const renderElement = () => {
    switch (element.type) {
      case 'heading':
        return (
          <h2 style={getStyleObject()} className="font-bold">
            {element.content || 'Encabezado'}
          </h2>
        );
      case 'paragraph':
        return (
          <p style={getStyleObject()}>
            {element.content || 'Párrafo de texto'}
          </p>
        );
      case 'button':
        return (
          <button
            style={getStyleObject()}
            className="px-4 py-2 rounded font-semibold bg-blue-600 text-white hover:bg-blue-700"
          >
            {element.content || 'Botón'}
          </button>
        );
      case 'image':
        return (
          <img
            src={element.content || 'https://via.placeholder.com/400x300'}
            alt="Imagen"
            style={getStyleObject()}
            className="max-w-full h-auto"
          />
        );
      case 'section':
        return (
          <section
            style={getStyleObject()}
            className="w-full border-2 border-dashed border-gray-300"
          >
            {element.children && element.children.length > 0 ? (
              element.children.map((child) => (
                <ElementPreview
                  key={child.id}
                  element={child}
                  onSelect={onSelect}
                  isSelected={isSelected}
                />
              ))
            ) : (
              <p className="text-gray-400">Arrastra elementos aquí</p>
            )}
          </section>
        );
      default:
        return <div style={getStyleObject()}>{element.content}</div>;
    }
  };

  return (
    <div onClick={() => onSelect(element)} className={baseStyles}>
      {renderElement()}
    </div>
  );
}
