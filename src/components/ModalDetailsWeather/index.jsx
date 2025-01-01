/* eslint-disable react/prop-types */
import P from 'prop-types';
export const ModalDetailsWeather = ({
  showModalState,
  handleCloseModal,
  dataWeather,
  forecast,
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
            <h5>
              <strong>Informações Climáticas:</strong>
            </h5>
            <p>
              <strong>Temperatura:</strong> {dataWeather.current.temp_c}°C
            </p>
            <p>
              <strong>Condição:</strong> {dataWeather.current.condition.text}
              <img
                src={`https:${dataWeather.current.condition.icon}`}
                alt={dataWeather.current.text}
                style={{ width: '40px', height: '40px' }}
              />
            </p>
            <p>
              <strong>Umidade:</strong> {dataWeather.current.humidity}%
            </p>
            <p>
              <strong>Vento:</strong> {dataWeather.current.wind_kph}km/h
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
            <h5>
              <strong>Previsão para os próximos dias:</strong>
            </h5>
            {forecast ? (
              forecast.forecast.forecastday.map((day, index) => (
                <div key={index}>
                  <p>
                    <strong>Data:</strong>{' '}
                    {new Date(day.date).toLocaleDateString('pt-BR')}
                  </p>
                  <p>
                    <strong>Temperatura média:</strong> {day.day.avgtemp_c}°C
                  </p>
                  <p>
                    <strong>Condição:</strong> {day.day.condition.text}
                    <img
                      src={`https:${day.day.condition.icon}`}
                      alt={day.day.condition.text}
                      style={{ width: '40px', height: '40px' }}
                    />
                  </p>
                </div>
              ))
            ) : (
              <p>Dados de previsão indisponíveis.</p>
            )}
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
  showModalState: P.bool.isRequired,
  handleCloseModal: P.func.isRequired,
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
  }).isRequired,
  forecast: P.shape({
    forecastday: P.arrayOf(
      P.shape({
        date: P.string.isRequired,
        day: P.shape({
          avgtemp_c: P.number.isRequired,
          condition: P.shape({
            text: P.string.isRequired,
          }).isRequired,
        }).isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
