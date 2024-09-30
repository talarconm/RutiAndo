import { IonContent, IonButton, IonItem, IonMenuButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import '../theme/Tab3.css';

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
      <IonButton className="botonpublicar" shape="round">Publicar</IonButton>
    </>
  );
}

function Cardinicio1() {
  return (
    <IonCard className='cardinicio'>
      <img alt="Silhouette of mountains" src="../src/images/ruta.jpg" />
      <IonCardHeader>
        <IonCardTitle className='title-rutas'>Rutas</IonCardTitle>
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
        <IonCardTitle className='title-retos'>Retos</IonCardTitle>
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
        <IonCardTitle className='title-social'>Social</IonCardTitle>
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