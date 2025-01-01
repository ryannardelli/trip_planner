import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ModalInformation } from '../../components/ModalInformation';
import { ModalDetailsWeather } from '../../components/ModalDetailsWeather';
import './styles.css';

export const InformationUser = () => {
  // Estados para controlar qual modal será exibido
  const [showInformationModal, setShowInformationModal] = useState(false);
  const [showWeatherModal, setShowWeatherModal] = useState(false);
  // const forecastData = location.state?.forecastData; // Dados da previsão

  const location = useLocation();
  const data = location.state?.data;
  const dataWeather = location.state?.weatherData;

  const handleShowInformationModal = () => {
    setShowInformationModal(true);
  };

  const handleShowWeatherModal = () => {
    setShowWeatherModal(true);
  };

  const handleCloseModal = () => {
    setShowInformationModal(false);
    setShowWeatherModal(false);
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
              <p>
                <strong>Estado:</strong> {data.state}
              </p>
              <button
                className="btn btn-primary"
                onClick={handleShowInformationModal}
              >
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
                <p>
                  <strong>Sensação Térmica:</strong>{' '}
                  {dataWeather.current.feelslike_c}°C
                </p>
                <button
                  className="btn btn-primary"
                  onClick={handleShowWeatherModal}
                >
                  Ver Detalhes climáticos
                </button>
              </div>
            </div>
          </div>
        </div>

        <Link to="/" className="return">
          Voltar
        </Link>
      </div>

      {/* Modal de Informações */}
      <ModalInformation
        showModalState={showInformationModal}
        handleCloseModal={handleCloseModal}
        data={data}
        dataWeather={dataWeather}
      />

      {/* Modal de Detalhes Climáticos */}
      <ModalDetailsWeather
        showModalState={showWeatherModal}
        handleCloseModal={handleCloseModal}
        data={data}
        dataWeather={dataWeather}
      />
    </div>
  );
};
