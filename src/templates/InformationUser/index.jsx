import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import { showModal, closeModal } from '../../utils/handleModal';
import { useState } from 'react';
import './styles.css';

export const InformationUser = () => {
  const [showModalState, setShowModalState] = useState(false);
  const location = useLocation();
  const data = location.state?.data;
  const dataWeather = location.state?.weatherData;

  const handleShowModal = () => {
    showModal(setShowModalState);
  };

  const handleCloseModal = () => {
    closeModal(setShowModalState);
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
              <button className="btn btn-primary" onClick={handleShowModal}>
                Exibir mais informações
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card" id="card-temp">
            <div className="card-body">
              <h5 className="card-title text-center">Resultado:</h5>
              <div>
                <p>
                  <strong>Temperatura</strong>: {dataWeather.current.temp_c}°C
                </p>
                <p>
                  <strong>Condição: </strong>
                  {dataWeather.current.condition.text}
                </p>
                <p>
                  <strong>Umidade:</strong> {dataWeather.current.humidity}%
                </p>
                <p>
                  <strong>Vento:</strong> {dataWeather.current.wind_kph}km/h
                </p>
                <button className="btn btn-primary" onClick={handleShowModal}>
                  Exibir resultado
                </button>
              </div>
            </div>
          </div>
        </div>
        <Link to="/" className="return">
          Voltar
        </Link>
      </div>

      {/* Modal Informações */}
      <div
        className={`modal fade ${showModalState ? 'show' : ''}`}
        tabIndex="-1"
        style={{ display: showModalState ? 'block' : 'none' }}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Informações Detalhadas
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <h6>
                <strong>Informações de Endereço:</strong>
              </h6>
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

              <h6>
                <strong>Informações Climáticas:</strong>
              </h6>
              <p>
                <strong>Temperatura:</strong> {dataWeather.current.temp_c}°C
              </p>
              <p>
                <strong>Condição:</strong> {dataWeather.current.condition.text}
              </p>
              <p>
                <strong>Umidade:</strong> {dataWeather.current.humidity}%
              </p>
              <p>
                <strong>Vento:</strong> {dataWeather.current.wind_kph}km/h
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleCloseModal}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
