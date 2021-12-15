import { BrowserRouter, Switch } from 'react-router-dom';
import RuterRender from './RuterRender';

// public
import Inicio from 'components/views/Inicio';

const Ruter = () => {
  return (
    <BrowserRouter>
      <Switch>

        <RuterRender path='/'><Inicio/></RuterRender>
        
      </Switch>
    </BrowserRouter>
  );
}

export default Ruter;
