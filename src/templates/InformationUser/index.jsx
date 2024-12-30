import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './styles.css';

export const InformationUser = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Informações</h5>
              <p>
                <strong>CEP:</strong>
              </p>
              <p>
                <strong>Logradouro:</strong>
              </p>
              <p>
                <strong>Bairro:</strong>
              </p>
              <p>
                <strong>Cidade:</strong>
              </p>
              <p>
                <strong>Estado:</strong>
              </p>
              <p>
                <strong>DDD:</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>

        <Link to="/" className="return">
          Voltar
        </Link>
      </div>
    </div>
  );
};
