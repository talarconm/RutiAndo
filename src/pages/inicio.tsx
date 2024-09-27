import { IonContent, IonButton, IonItem, IonLabel, IonIcon, IonMenu, IonList, IonMenuButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { addCircleOutline, homeOutline, personOutline, settingsOutline, constructOutline } from 'ionicons/icons';
import '../theme/Tab1.css';

const Tab1: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content" side="end" menuId="first">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem routerLink="/home">
              <IonIcon slot="start" icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem routerLink="/publicar">
              <IonIcon slot="start" icon={addCircleOutline} />
              <IonLabel>Publicar</IonLabel>
            </IonItem>
            <IonItem routerLink="/perfil">
              <IonIcon slot="start" icon={personOutline} />
              <IonLabel>Perfil</IonLabel>
            </IonItem>
            <IonItem routerLink="/configuracion">
              <IonIcon slot="start" icon={settingsOutline} />
              <IonLabel>Configuración</IonLabel>
            </IonItem>
            <IonItem routerLink="/soporte">
              <IonIcon slot="start" icon={constructOutline} />
              <IonLabel>Soporte</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

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
          <br />
          <IonSearchbar className='searchbar'></IonSearchbar>
          <br />
          <IonTitle className='actividades'>Actividades</IonTitle>

          <div className="card-container-incio">
            <Cardinicio1 />
            <Cardinicio2 />
            <Cardinicio3 />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20 }}>
          <IonTitle className='publicaciones-titulo'>Publicaciones</IonTitle>
            <Botonpublicar />
          </div>
          <Publicacion/>
        </IonContent>
      </IonPage>
    </>
  );
};

function Botonpublicar() {
  return (
    <>
      <IonButton className="boton-publicar" shape="round">Publicar</IonButton>
    </>
  );
}

function Cardinicio1() {
  return (
    <IonCard className='cardinicio'>
      <img alt="Silhouette of mountains" src="../src/images/ruta.jpg" />
      <IonCardHeader>
        <IonCardTitle>Rutas</IonCardTitle>
        <IonCardSubtitle>¡Descubre nuevas rutas!</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent></IonCardContent>
    </IonCard>
  );
}

function Cardinicio2() {
  return (
    <IonCard className='cardinicio2'>
      <img alt="Silhouette of mountains" src="../src/images/ruta-cajon.jpg" />
      <IonCardHeader>
        <IonCardTitle>Retos</IonCardTitle>
        <IonCardSubtitle>Atrevete completar nuevos retos</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent></IonCardContent>
    </IonCard>
  );
}

function Cardinicio3() {
  return (
    <IonCard className='cardinicio3'>
      <img alt="Silhouette of mountains" src="../src/images/publicacion.jpg" />
      <IonCardHeader>
        <IonCardTitle style={{fontSize: 20}}>Social</IonCardTitle>
        <IonCardSubtitle>actividades de la comunidad</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent></IonCardContent>
    </IonCard>
  );
}

function Publicacion() {
  return (
    <IonCard className='publicacion'>
      <img alt="Silhouette of mountains" src="../src/images/reunion.jpg" />
      <IonCardHeader>
        <IonCardTitle>Float_slowly</IonCardTitle>
        <IonCardSubtitle className='publicacion-subtitulo'>Festival de la bicicleta 2023!!</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent></IonCardContent>
    </IonCard>
  );
}
export default Tab1;