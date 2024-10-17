import { IonContent, IonButton, IonMenuButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonHeader, IonPage, IonTitle, IonToolbar, IonChip, IonIcon } from '@ionic/react';
import { star, starHalf } from 'ionicons/icons'; //ícono de estrella
import '../theme/san-cristobal.css';

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
        <IonCard className='publicacion5'>
            <img alt="Silhouette of mountains" src="../src/images/reunion.jpg" />
            <IonCardHeader>
                <IonCardTitle className='titulo-sancristobal'>Cerro san Cristobal</IonCardTitle>
                <div className='container-icono'>
                <IonIcon icon={star}  className="star-icon"/>
                <IonIcon icon={star}  className="star-icon"/>
                <IonIcon icon={star}  className="star-icon"/>
                <IonIcon icon={starHalf}  className="star-icon"/>
                </div>
                <IonCardSubtitle className='publicacion-subtitulo'>La segunda montaña más alta de la ciudad, es un sitio muy  visitado para realizar caminatas, andar en bicicleta, hacer actividades físicas al aire libre o simplemente disfrutar de las hermosas vistas.
                    Durante el camino de ascenso hay diversos sitios de interés como el Jardín Japones, Zoológico Nacional, vivero Cumbre, piscinas municipales, zonas de picnic y varios miradores que permiten observar la ciudad.
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