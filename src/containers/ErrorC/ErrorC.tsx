import React from 'react';

interface ErrorProps {
  messageError: '403' | '404';
}

export const ErrorContainer = ({ messageError }: ErrorProps) => {
  const HASH = {
    '403': 'Esta pagina no esta autorizada para tu perfil',
    '404': 'La pagina que buscas no esta disponible.',
  };

  const messagePage = HASH[messageError];

  return (
    <div>
      <h1>{messagePage}</h1>
    </div>
  );
};
