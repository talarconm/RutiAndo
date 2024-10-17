import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonSearchbar, IonMenu, IonButtons, IonMenuButton, IonRouterLink, IonButton, IonAlert } from '@ionic/react';
import '../theme/Tab2.css';
import mapaImage from '../images/mapa.png';
import { useState } from 'react';

const Tab2: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <IonPage id='conteiner'>
      <IonHeader>
        <IonToolbar className='bar'>
          <IonTitle className='tex-titulo'>RutiAndo</IonTitle>
          {/* boton del menu */}
          <IonButtons slot='end'>
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* aca va la barra de busqueda */}
        <IonHeader collapse="condense">
        </IonHeader>
        <br />
        <IonSearchbar className='searchbar2'></IonSearchbar>
        <br />

        {/* botón de alerta */}
        <div className='container-alerta'>
          <IonTitle className='ion-tex-inicio'>Rutas populares</IonTitle>
          <IonButton className='alert-button' onClick={() => setShowAlert(true)}>EMERGENCIAS</IonButton>
        </div>

        {/*IonAlert */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Presionaste el botón de emergencias"
          message="¿Deseas llamar a emergencias?"
          buttons={['Si']}

        />

        {/*aca empiezan las cards */}
        <div className='container-cards'>
          <IonCard className='card1'>
            <IonRouterLink className='router' routerLink='/san-cristobal'>
              <img alt="San cristobal" src="../src/images/sancristobal.jpg" />
              <IonCardHeader className='card-header1'>
                <IonCardTitle className='title1'>Cerro San Cristobal</IonCardTitle>
                <IonCardSubtitle className='subtitle1'>Dificultad: Moderada</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
              </IonCardContent>
            </IonRouterLink>
          </IonCard>

          <IonCard className='card2'>
            <IonRouterLink className='router' routerLink='/los-peumos'>
              <img alt="Los peumos" src="../src/images/lospeumos.jpg" />
              <IonCardHeader className='card-header2'>
                <IonCardTitle className='title2'>Sendero Los Peumos</IonCardTitle>
                <IonCardSubtitle className='subtitle2'>Dificultad: Moderada</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
              </IonCardContent>
            </IonRouterLink>
          </IonCard>


          <IonCard className='card3'>
            <IonRouterLink className='router' routerLink='/el-carbon'>
              <img alt="El carbon" src="../src/images/elcarbon.jpg" />
              <IonCardHeader className='card-header3'>
                <IonCardTitle className='title3'>Cero El Carbón</IonCardTitle>
                <IonCardSubtitle className='subtitle3'>Dificultad: Difícil</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
              </IonCardContent>
            </IonRouterLink>
          </IonCard>
        </div>

        <IonTitle className='ion-tex-mapa'>Cerca de ti</IonTitle>
        {/*imagen debajo de la card*/}
        <img alt="Mapa" src={mapaImage} className="imagen" />

      </IonContent>
    </IonPage>
  );
};

export default Tab2;

