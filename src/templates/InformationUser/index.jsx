import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { generatePDF } from '../../utils/gerenatePDF';
import { useState } from 'react';
import './styles.css';

export const InformationUser = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
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
          <div className="card" id="card-temp">
            <img
              src="https://www.mataoinforma.com.br/wp-content/uploads/2021/10/Previsao-do-Tempo.jpg"
              alt="Previsão do tempo"
              className="img-fluid"
            />
            <div className="card-body">
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
