import { IonContent, IonText, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonSearchbar, IonMenu, IonButtons, IonMenuButton } from '@ionic/react';
import '../theme/Tab2.css';
import mapaImage from '../images/mapa.png';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='bar'>
          <IonTitle className='tex-titulo'>RutiAndo</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* aca va el menu */}

      {/*    */}
      <IonContent fullscreen>



        {/* aca va la barra de busqueda */}
        <IonSearchbar showClearButton="always" value="Buscar..."></IonSearchbar>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonText className='ion-tex-inicio'>
          <h2>Rutas populares</h2>
        </IonText>

        {/* Aca empiezan las cards */}
        <div className='container-cards'>
          <IonCard className='card1'>
            <img alt="Mapa" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <IonCardHeader className='card-header1'>
              <IonCardTitle>Cerro San Cristobal</IonCardTitle>
              <IonCardSubtitle className='subtitle1'>Dificultad: Moderada</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>

            </IonCardContent>
          </IonCard>


          <IonCard className='card2'>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <IonCardHeader className='card-header2'>
              <IonCardTitle>Sendero Los Peumos</IonCardTitle>
              <IonCardSubtitle className='subtitle2'>Dificultad: Moderada</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>

            </IonCardContent>
          </IonCard>



          <IonCard className='card3'>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <IonCardHeader className='card-header3'>
              <IonCardTitle>Cero El Carbón</IonCardTitle>
              <br />
              <IonCardSubtitle className='subtitle3'>Dificultad: Difícil</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>

            </IonCardContent>
          </IonCard>
        </div>

        <IonText className='ion-tex-mapa'>
          <h2>Cerca de ti</h2>
        </IonText>
        {/* Imagen debajo de la card*/}
        <img alt="Mapa" src={mapaImage} className="imagen" />

      </IonContent>
    </IonPage>
  );
};

export default Tab2;

