import { createContext, useContext, useState } from 'react';
import { Project, PageElement } from '@/types';
import { v4 as uuidv4 } from 'uuid';

interface EditorContextType {
  project: Project | null;
  selectedElement: PageElement | null;
  selectElement: (element: PageElement | null) => void;
  updateElement: (id: string, updates: Partial<PageElement>) => void;
  addElement: (element: PageElement, parentId?: string) => void;
  removeElement: (id: string) => void;
  createNewProject: (name: string) => void;
}

const EditorContext = createContext<EditorContextType | null>(null);

export function EditorProvider({ children }: { children: React.ReactNode }) {
  const [project, setProject] = useState<Project | null>(null);
  const [selectedElement, setSelectedElement] = useState<PageElement | null>(null);

  const createNewProject = (name: string) => {
    const newProject: Project = {
      id: uuidv4(),
      name,
      description: '',
      elements: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setProject(newProject);
  };

  const selectElement = (element: PageElement | null) => {
    setSelectedElement(element);
  };

  const updateElement = (id: string, updates: Partial<PageElement>) => {
    if (!project) return;

    const updateInTree = (elements: PageElement[]): PageElement[] => {
      return elements.map((el) => {
        if (el.id === id) {
          return { ...el, ...updates };
        }
        if (el.children) {
          return {
            ...el,
            children: updateInTree(el.children),
          };
        }
        return el;
      });
    };

    setProject({
      ...project,
      elements: updateInTree(project.elements),
      updatedAt: new Date(),
    });

    if (selectedElement?.id === id) {
      setSelectedElement({ ...selectedElement, ...updates });
    }
  };

  const addElement = (element: PageElement, parentId?: string) => {
    if (!project) return;

    if (!parentId) {
      setProject({
        ...project,
        elements: [...project.elements, element],
        updatedAt: new Date(),
      });
    } else {
      const addToTree = (elements: PageElement[]): PageElement[] => {
        return elements.map((el) => {
          if (el.id === parentId) {
            return {
              ...el,
              children: [...(el.children || []), element],
            };
          }
          if (el.children) {
            return {
              ...el,
              children: addToTree(el.children),
            };
          }
          return el;
        });
      };

      setProject({
        ...project,
        elements: addToTree(project.elements),
        updatedAt: new Date(),
      });
    }
  };

  const removeElement = (id: string) => {
    if (!project) return;

    const removeFromTree = (elements: PageElement[]): PageElement[] => {
      return elements
        .filter((el) => el.id !== id)
        .map((el) => {
          if (el.children) {
            return {
              ...el,
              children: removeFromTree(el.children),
            };
          }
          return el;
        });
    };

    setProject({
      ...project,
      elements: removeFromTree(project.elements),
      updatedAt: new Date(),
    });

    if (selectedElement?.id === id) {
      setSelectedElement(null);
    }
  };

  return (
    <EditorContext.Provider
      value={{
        project,
        selectedElement,
        selectElement,
        updateElement,
        addElement,
        removeElement,
        createNewProject,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor debe usarse dentro de EditorProvider');
  }
  return context;
}
