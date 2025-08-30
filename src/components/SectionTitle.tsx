import React from 'react';

type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <h2 className="text-2xl font-bold mb-6 text-center">{children}</h2>
);

export default SectionTitle;
