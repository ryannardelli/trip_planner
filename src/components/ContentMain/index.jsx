import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Form } from '../../components/Form';

export const ContentMain = () => {
  return (
    <div className="container" id="container-main">
      <div className="col-12" id="container-header">
        <h1>Informe o seu CEP</h1>
      </div>

      <div className="col-12">
        <Form />
      </div>
    </div>
  );
};
