import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (!value) {
      setIsEmpty(true);
      setIsValid(null);
      return;
    } else {
      setIsEmpty(false);
    }

    const cepRegex = /^[0-9]{8}$/;
    if (cepRegex.test(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputValue) {
      setIsEmpty(true);
      setIsValid(false);
      return;
    }

    if (isValid) {
      setLoading(true);
      try {
        // Chamada à BrasilAPI
        const response = await fetch(
          `https://brasilapi.com.br/api/cep/v2/${inputValue}`,
        );
        if (!response.ok) {
          throw new Error('CEP não encontrado');
        }
        const data = await response.json();
        console.log('Dados do CEP:', data);

        // Chamada à WeatherAPI
        try {
          const api_key = 'c9316ad413924550b55155233243112';
          const weatherResponse = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${data.city}&lang=pt`,
          );
          if (!weatherResponse.ok) {
            throw new Error('Não foi possível obter a previsão do tempo');
          }
          const weatherData = await weatherResponse.json();
          console.log('Dados climáticos:', weatherData);

          // Navegação com dados de ambas as APIs
          setTimeout(() => {
            navigate(`/information`, { state: { data, weatherData } });
          }, 2000);
        } catch (e) {
          console.log('Erro ao consultar a WeatherAPI:', e);
        }
      } catch (e) {
        console.log('Erro ao buscar dados da BrasilAPI:', e);
        navigate('/error');
      }
    }
  };

  return (
    <form
      action="#"
      autoComplete="off"
      id="form-container"
      className="needs-validation"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="cep"
        className={`form-control ${
          isEmpty || isValid === false
            ? 'is-invalid'
            : isValid === true
              ? 'is-valid'
              : ''
        }`}
        placeholder="Digite seu CEP"
        value={inputValue}
        onChange={handleChange}
        required
      />
      {isEmpty ? (
        <div className="invalid-feedback py-2">
          O campo CEP não pode estar vazio.
        </div>
      ) : (
        <>
          <div className="valid-feedback py-2">CEP válido</div>
          <div className="invalid-feedback py-2">
            CEP inválido. Deve ter 8 dígitos.
          </div>
        </>
      )}
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>

      {loading && (
        <div className="d-flex justify-content-center mt-3">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>
      )}
    </form>
  );
};
