import { Link } from 'react-router-dom';

export const Error = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-danger">Ocorreu um erro inesperado</h1>
      <p>
        Desculpe, algo deu errado enquanto processávamos sua solicitação. Por
        favor, tente novamente mais tarde.
      </p>
      <Link to="/" className="btn btn-primary">
        Tentar novamente
      </Link>
    </div>
  );
};
