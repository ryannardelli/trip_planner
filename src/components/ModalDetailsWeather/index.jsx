import P from 'prop-types';

export const ModalDetailsWeather = ({
  showModalState,
  handleCloseModal,
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

            <p>
              <strong>Previsão para os próximos dias:</strong>{' '}
              {/* {dataWeather.forecast.forecastday[0].day.avgtemp_c}°C */}
            </p>
            <p>
              <strong>Índice UV:</strong> {dataWeather.current.uv}
            </p>
            <p>
              <strong>Sensação Térmica:</strong>{' '}
              {dataWeather.current.feelslike_c}°C
            </p>
            <p>
              <strong>Visibilidade:</strong> {dataWeather.current.vis_km} km
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
      vis_km: P.number.isRequired,
      uv: P.number.isRequired,
      feelslike_c: P.number.isRequired,
    }).isRequired,
    forecast: P.shape({
      forecastday: P.arrayOf(
        P.shape({
          day: P.shape({
            avgtemp_c: P.number.isRequired, // Temperatura média
          }).isRequired,
        }),
      ).isRequired,
    }).isRequired,
  }).isRequired, // Espera um objeto com informações climáticas, incluindo a previsão do tempo
};
