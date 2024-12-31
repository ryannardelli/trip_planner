import P from 'prop-types';

export const ModalDetailsWeather = ({
  showModalState,
  handleCloseModal,
  data,
  dataWeather,
}) => {
  return (
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
              Informações do Resultado
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
  );
};

ModalDetailsWeather.propTypes = {
  showModalState: P.bool.isRequired, // Espera um booleano para controle da visibilidade do modal
  handleCloseModal: P.func.isRequired, // Espera uma função para fechar o modal
  data: P.shape({
    cep: P.string.isRequired,
    street: P.string.isRequired,
    neighborhood: P.string.isRequired,
    city: P.string.isRequired,
  }).isRequired, // Espera um objeto com informações de endereço
  dataWeather: P.shape({
    current: P.shape({
      temp_c: P.number.isRequired,
      condition: P.shape({
        text: P.string.isRequired,
      }).isRequired,
      humidity: P.number.isRequired,
      wind_kph: P.number.isRequired,
    }).isRequired,
  }).isRequired, // Espera um objeto com informações climáticas
};
