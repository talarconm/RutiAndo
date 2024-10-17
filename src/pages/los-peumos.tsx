import { IonContent, IonButton, IonMenuButton, IonButtons, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonHeader, IonPage, IonTitle, IonToolbar, IonChip, IonIcon } from '@ionic/react';
import { star, starHalf } from 'ionicons/icons'; //ícono de estrella
import '../theme/los-peumos.css';

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
            <IonButton className="botoniniciar4" shape="round" expand="block">Iniciar Ruta</IonButton>
        </>
    );
}


function Publicacion() {
    return (
        <IonCard className='publicacion4'>
            <img alt="Silhouette of mountains" src="../src/images/reunion.jpg" />
            <IonCardHeader>
                <IonCardTitle className='titulo-lospeumos'>Sendero Los Peumos</IonCardTitle>
                <div className='container-icono'>
                    <IonIcon icon={star} className="star-icon" />
                    <IonIcon icon={star} className="star-icon" />
                    <IonIcon icon={star} className="star-icon" />
                    <IonIcon icon={star} className="star-icon" />
                    <IonIcon icon={starHalf} className="star-icon" />
                </div>
                <IonCardSubtitle className='publicacion-subtitulo'>El sendero Los Peumos es una de las opciones de senderos que pueden recorrer en el Parque
                    Natural Aguas de Ramón, permite disfrutar de la abundante vegetación de la precordillera de Santiago, en especial el bosque de peumos, y agradables vistas panorámicas.
                    Es considerado un sendero ideal para visitar en familia, debido a que es una ruta circular corta y sencilla, con varios miradores y una cascada.
                </IonCardSubtitle>
                <>
                    <div className='chip-container'>
                        <IonChip className='chip1'>Senderismo</IonChip>
                        <IonChip className='chip2'>Familiar</IonChip>
                        <IonChip className='chip3'>Vista</IonChip>
                        <IonChip className='chip4'>Rocoso</IonChip>
                        <IonChip className='chip5'>Río</IonChip>
                    </div>
                </>
            </IonCardHeader>


        </IonCard>
    );
}
export default Tab1;