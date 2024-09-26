import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../theme/variables.css';
import '../theme/Tab1.css';
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='tex-titulo1'>RutiAndo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense"> {/* permite que la cabecera se "condense" cuando el usuario comienza a desplazarse por la página*/}
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Texto de inicio de sesión */}
        <IonText className='ion-tex-inicio'>
        <h2>Inicia sesión para disfrutar grandes aventuras</h2>
        </IonText>
        {/* container */}
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
