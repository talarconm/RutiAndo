import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonMenuButton } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton,IonButtons } from '@ionic/react';
import '../theme/Tab4.css'; 

const Tab4: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='bar'>
                    <IonTitle className='tex-titulo'>RutiAndo</IonTitle>
                    {/* boton para que se vea el menu */}
                    <IonButtons slot='end'>
                        <IonMenuButton/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <CardUser/> 

                <Botonpublicar/>
                <Progreso />
                
                <br />
                <div className="calendario">
                    <img className="imagen-calendario" src="../src/images/calendario.png" alt="Calendario" />
                </div>

                <IonTitle className="logros" size="large">Tus Logros</IonTitle>

                <div className="card-container">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </IonContent>
        </IonPage>
    );
};

function Progreso() {
    return (
        <IonCard className='progreso'>
            <IonCardHeader>
                <IonCardTitle style={{ color: 'white', fontSize: '25px' }}> Progreso Semanal</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <div>
                    <div style={{ color: 'white', fontSize: '18px' }}> Rutas: 3</div>
                    <div style={{ color: 'white', fontSize: '18px' }}>Duración: 2h 32min</div>
                    <div style={{ color: 'white', fontSize: '18px' }}>Distancia: 22.05km</div>
                </div>
            </IonCardContent>
        </IonCard>
    );
}

function Botonpublicar() {
    return (
        <>
            <IonButton className="boton-publicar" shape="round">Progreso</IonButton>
        </>
    );
}

function CardUser() {
    return (
        <IonCard className='carduser'>
            <IonCardContent className='carduser-content'>
                <img className='foto-perfil' alt="Profile picture" src="../src/images/zorro.png" />
                <div className='user-info'>
                    <IonCardTitle className='user-title'>Ruti</IonCardTitle>
                    <IonCardSubtitle className='user-subtitle'>Seguidores | Siguiendo | Logros</IonCardSubtitle>
                </div>
            </IonCardContent>
        </IonCard>
    );
}


function Card() {
    return (
        <IonCard className='card'>
            <IonCardHeader>
                <IonCardTitle>Nuevo logro</IonCardTitle>
                <IonCardSubtitle></IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>

            </IonCardContent>
        </IonCard>
    );
}



export default Tab4;