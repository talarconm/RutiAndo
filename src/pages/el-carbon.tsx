import { IonContent, IonButton, IonMenuButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonHeader, IonPage, IonTitle, IonToolbar, IonChip, IonIcon } from '@ionic/react';
import { star, starHalf } from 'ionicons/icons'; //ícono de estrella
import '../theme/el-carbon.css';

const Tab1: React.FC = () => {
    return (

        <>
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar className='bar'>
                        <IonTitle className='tex-titulo'>RutiAndo</IonTitle>
                        <IonButtons slot="end">
                            <IonMenuButton />
                        </IonButtons>
                    </IonToolbar>

                </IonHeader>

                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                    </IonHeader>
                    <Botoniniciar />
                    <Publicacion />
                </IonContent>
            </IonPage>
        </>
    );
};

function Botoniniciar() {
    return (
        <>
            <IonButton className="botoniniciar" shape="round" expand="block">Iniciar Ruta</IonButton>
        </>
    );
}


function Publicacion() {
    return (
        <IonCard className='publicacion'>
            <img alt="Silhouette of mountains" src="../src/images/reunion.jpg" />
            <IonCardHeader>
                <IonCardTitle className='titulo-elcarbon'>Cerro El Carbón</IonCardTitle>
                <div className='container-icono'>
                <IonIcon icon={star}  className="star-icon"/>
                <IonIcon icon={star}  className="star-icon"/>
                <IonIcon icon={star}  className="star-icon"/>
                
                </div>
                <IonCardSubtitle className='publicacion-subtitulo'>Disfruta esta ruta de ida y vuelta de 3.7-millas cerca de Vitacura, Santiago. Considerada una ruta difícil, se tarda una media de 3 h 7 min en completarla. Es un sitio muy popular para el senderismo y correr, por lo que es probable encontrarse con otras personas mientras se está por la zona. La ruta está abierta todo el año y es perfecta para visitar en cualquier momento.
                </IonCardSubtitle>
                <>
                <div className='chip-container'>
                    <IonChip className='chip'>PetFrienly</IonChip>
                    <IonChip className='chip'>Familiar</IonChip>
                    <IonChip className='chip'>Vista</IonChip>
                    <IonChip className='chip'>Ciclismo</IonChip>
                    <IonChip className='chip'>Running</IonChip>
                </div>
                </>
            </IonCardHeader>

        </IonCard>
    );
}
export default Tab1;