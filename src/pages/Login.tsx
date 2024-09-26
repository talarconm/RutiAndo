import { IonButton, IonInput, IonItem, IonLabel, IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import '../theme/Login.css';

const Login: React.FC = () => {
    console.log("Login component is rendering"); //para ver si se esta renderizand bien , en la consola
    const history = useHistory();

    const handleLogin = () => {
        //esto es para redirigir a las tabs después del inicio de sesión
        history.push('/tab1');
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='toolbar'>
                    <IonTitle className='tittle-login'>
                        RutiAndo
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            
            {/*texto de inicio de sesión */}
            <IonText className='tex-inicio'>
                <h2>Inicia sesión para disfrutar grandes aventuras</h2>
            </IonText>

            <IonContent className="ion-padding">
                <h2>Iniciar Sesión</h2>
                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput type="email" />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Contraseña</IonLabel>
                    <IonInput type="password" />
                </IonItem>
                <IonButton expand="full" onClick={handleLogin}>Ingresar</IonButton>
            </IonContent>

            
        </IonPage>
    );
};

export default Login;
