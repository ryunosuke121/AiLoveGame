import { createContext, useContext, useState, ReactNode } from 'react';


interface AnswerContextType {
  isCompleted: boolean;
  setIsCompleted: (value: boolean) => void;
}

export const AnswerContext = createContext<AnswerContextType | undefined>(undefined);

export const useAnswerContext = () => {
  const context = useContext(AnswerContext);
  if (!context) {
    throw new Error('useAnswerContext must be used within an AnswerProvider');
  }
  return context;
};

export const AnswerProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [isCompleted, setIsCompleted] = useState(false);
  
    return (
      <AnswerContext.Provider value={{ isCompleted, setIsCompleted }}>
        {children}
      </AnswerContext.Provider>
    );
  };