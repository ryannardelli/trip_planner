import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import { showModal, closeModal } from '../../utils/handleModal';
import { useState } from 'react';
import { ModalInformation } from '../../components/ModalInformation';
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
      <ModalInformation
        showModalState={showModalState} // Passando o estado do modal
        handleCloseModal={handleCloseModal} // Passando a função de fechar o modal
        data={data} // Passando os dados de endereço
        dataWeather={dataWeather} // Passando os dados do clima
      />
    </div>
  );
};
