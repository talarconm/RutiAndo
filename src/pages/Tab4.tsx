import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../theme/variables.css';

const Tab4: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className='tex-titulo'>RutiAndo</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 4</IonTitle>
                    </IonToolbar>
                </IonHeader>

                {/* Texto de inicio de sesión */}
                <IonText className='ion-tex-inicio'>
                    <h2>Inicia sesión para disfrutar grandes aventuras</h2>
                </IonText>

                <ExploreContainer name="Tab 4 page" />
            </IonContent>
        </IonPage>
    );
};

export default Tab4;
