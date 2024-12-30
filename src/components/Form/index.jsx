import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { useState } from 'react';

export const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  // const { locationData, setLocationData } = useState('');

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
      console.log(inputValue);
      try {
        const response = await fetch(
          `https://brasilapi.com.br/api/cep/v2/${inputValue}`,
        );
        if (!response.ok) {
          throw new Error('CEP não encontrado');
        }
        const data = await response.json();
        console.log(data);
      } catch (e) {
        console.log('Erro ao buscar dados da api: ', e);
      }
    }
    return;
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
    </form>
  );
};
