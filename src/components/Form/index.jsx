import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export const Form = () => {
  return (
    <form action="#" autoComplete="off" id="form-container">
      <input
        type="text"
        id="cep"
        className="form-control mb-4"
        placeholder="Digite seu CEP"
      />
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};
