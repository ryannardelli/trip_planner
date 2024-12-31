import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import { generatePDF } from '../../utils/gerenatePDF';
import { useState } from 'react';
import './styles.css';

export const InformationUser = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const location = useLocation();
  const data = location.state?.data;
  const handleDownloadClick = () => {
    setIsButtonDisabled(true);
    generatePDF();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Informações:</h5>
              <p>
                <strong>CEP:</strong> {data.cep}
              </p>
              <p>
                <strong>Rua:</strong> {data.street}
              </p>
              <p>
                <strong>Bairro:</strong> {data.neighborhood}
              </p>
              <p>
                <strong>Cidade:</strong> {data.city}
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card" id="card-temp">
            <div className="card-body">
              <h5 className="card-title text-center">Resultado:</h5>
              <div>
                <p>
                  <strong>Temperatura</strong>:°C
                </p>
                <p>
                  <strong>Condição:</strong>
                </p>
                <p>
                  <strong>Umidade:</strong>%
                </p>
                <p>
                  <strong>Vento:</strong>km/h
                </p>
                <button
                  className="btn btn-primary"
                  onClick={handleDownloadClick}
                  disabled={isButtonDisabled}
                >
                  Gerar Relatório
                </button>
              </div>
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
