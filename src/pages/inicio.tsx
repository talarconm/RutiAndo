import { IonContent, IonMenuButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar, IonRouterLink } from '@ionic/react';
import '../theme/inicio.css';

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
          <IonTitle className='actividades'>Tendencias</IonTitle>

          <div className="card-container-incio">
            <Cardinicio1 />
            <Cardinicio2 />
            <Cardinicio3 />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20 }}>
          <IonTitle className='publicaciones-titulo'>Actualidad</IonTitle>
          </div>
          <Publicacion/>
          <Publicacion2/>
          <Publicacion3/>
        </IonContent>
      </IonPage>
    </>
  );
};


function Cardinicio1() {
  return (
    <IonCard className='cardinicio'>
      <img alt="Silhouette of mountains" src="../src/images/ruta.jpg" />
      <IonCardHeader>
        <IonCardTitle className='titlecard1'>Ciclismo</IonCardTitle>
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
        <IonCardTitle className='titlecard2'>Running</IonCardTitle>
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
        <IonCardTitle className='titlecard3'>Hiking</IonCardTitle>
        <IonCardSubtitle>actividades de la comunidad</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent></IonCardContent>
    </IonCard>
  );
}

function Publicacion() {
  return (
    <IonCard className='publicacion'>
      <a href='https://www.esciclismo.com/actualidad/carretera/83270.html' target='_blank' rel='noopener noreferrer'>
      <img alt="Silhouette of mountains" src="../src/images/mundial-ruta-elite-femenino.jpg" />
      <IonCardHeader>
        <IonCardTitle>Ciclismo</IonCardTitle>
        <IonCardSubtitle className='publicacion-subtitulo'>Mundial de Zúrich: Lotte Kopecky revalida el título en un apasionante sprint final</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent></IonCardContent>
      </a>
    </IonCard>
  );
}

function Publicacion2() {
  return (
    <IonCard className='publicacion'>
      <a href="https://www.streetprorunning.com/blog/mejores-zapatillas-running/" target='_blank' rel='noopener noreferrer'>{/*target='_blank' para q el enlace se abra en una nueva pestaña rel='noopener noreferrer' practica de seguridad para evitar q la ueva pestala tenga acceso a la ventana q lo abre*/}
      <img alt="Silhouette of mountains" src="../src/images/adidas.png"/>
      <IonCardHeader>
        <IonCardTitle>Running</IonCardTitle>
        <IonCardSubtitle className='publicacion-subtitulo'>Las 20 mejores zapatillas de running</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent></IonCardContent>
      </a>
    </IonCard>
  );
}

function Publicacion3() {
  return (
    <IonCard className='publicacion'>
      <a href="https://thehappening.com/7-de-los-mejores-lugares-del-mundo-para-hiking/" target='_blank' rel='noopener noreferrer'>
      <img alt="Silhouette of mountains" src="../src/images/hiking.webp" />
      <IonCardHeader>
        <IonCardTitle>Hiking</IonCardTitle>
        <IonCardSubtitle className='publicacion-subtitulo'>7 de los mejores lugares del mundo para hiking</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent></IonCardContent>
      </a>
    </IonCard>
  );
}
export default Tab1;