import React from 'react';

interface ContentBoxProps {
  children: React.ReactNode;
  className?: string;
}

const ContentBox = ({ children, className = '' }: ContentBoxProps) => {
  return (
    <div className={`bg-[#1e1e1e] border-4 border-teal-900 rounded-xl shadow-xl p-8 mx-auto max-w-5xl text-white ${className}`}>
      {children}
    </div>
  );
};

export default ContentBox;
