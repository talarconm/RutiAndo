import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenu,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonToolbar,
  setupIonicReact,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonPage,
  IonButtons,
  IonMenuButton
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
import SanCristobal from './pages/san-cristobal';
import LosPeumos from './pages/los-peumos';
import ElCarbon from './pages/el-carbon';


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
        {/* Menú lateral */}
        <IonHeader>
          <IonToolbar className='bar'>
            <IonTitle className='tex-titulo'>RutiAndo</IonTitle>
            <img className="foto-zorro" alt='zorro' src='../src/images/zorroFINAL.png'/>
            <IonButtons slot="end"> 
              <IonMenuButton />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <>
          <IonMenu contentId="main-content"  >
            <IonHeader>
              <IonToolbar className="toolbarmenu">
                <IonTitle>Menú</IonTitle>
              </IonToolbar>
            </IonHeader> 
            <IonContent className='color'>
              {/* borre ionlist para sacar el borde ngro */}
              {/* poner perfil en la parte de menu como didi */}
                <IonItem className="item2" routerLink="/inicio">Inicio</IonItem>
                <IonItem className="item2" routerLink="/tab2">Rutas</IonItem>
                <IonItem className="item2" routerLink="/tab3">Comunidad</IonItem>
                <IonItem className="item2" routerLink="/tab4">Perfil</IonItem>
                <IonItem className="item2" routerLink="/tab4">Soporte</IonItem>
              
            </IonContent>
          </IonMenu>
        </>
        <IonTabs>
        <IonRouterOutlet id="main-content">
          {/*redirigir al login cuando se abre la aplicación */}
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>

          {/*para q siempre se muestre la pantalla de login al inicio */}
          <Route exact path="/login">
            <Login />
          </Route>

          {/*aqui estan las tabs */}
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

          <Route exact path="/san-cristobal">
          <SanCristobal/>
          </Route>

          <Route exact path="/los-peumos">
          <LosPeumos/>
          </Route>

          <Route exact path="/el-carbon">
          <ElCarbon/>
          </Route>
        </IonRouterOutlet>
        
        {/*barra de las tabs */}
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
