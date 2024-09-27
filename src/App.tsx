import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

//iconoss
import { homeOutline, mapOutline, chatbubbleOutline, personOutline } from 'ionicons/icons';

//se registran la paginas
import Login from './pages/Login';// página de Login
import Inicio from './pages/inicio';
import Rutas from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {/*redirigir al login cuando se abre la aplicación */}
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>

          {/*para q siempre se muestre la pantalla de login al inicio */}
          <Route exact path="/login">
            <Login />
          </Route>
        </IonRouterOutlet>

        {/*aqui estan las tabs y el router outlet */}
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/inicio">
              <Inicio />
            </Route>
            <Route exact path="/tab2">
              <Rutas />
            </Route>
            <Route exact path="/tab3">
              <Tab3 />
            </Route>
            <Route exact path="/tab4">
              <Tab4 />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/inicio">
              <IonIcon aria-hidden="true" icon={homeOutline} />
              <IonLabel>Inicio</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon aria-hidden="true" icon={mapOutline} />
              <IonLabel>Rutas</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon aria-hidden="true" icon={chatbubbleOutline} />
              <IonLabel>Comunidad</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/tab4">
              <IonIcon aria-hidden="true" icon={personOutline} />
              <IonLabel>Perfil</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
