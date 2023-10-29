// Por ejemplo, en tu componente de navegación
import { Link } from 'react-router-dom';

function Navegation() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/acerca-de">Acerca de</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}

export default Navegation;