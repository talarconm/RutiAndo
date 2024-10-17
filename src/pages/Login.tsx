import { IonButton, IonInput, IonItem, IonLabel, IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonText, IonList } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // hook useHistory
import '../theme/Login.css';

const Login: React.FC = () => {
    const history = useHistory(); // crea una instancia del hook useHistory

    const handleLogin = () => {
        //esto es para redirigir a la pestaña de inicio después del inicio de sesión
        console.log("Botón de ingresar presionado"); // para ver si se está ejecutando bien en la consola
        history.push('/inicio'); // Redirige a la ruta de la pestaña de inicio
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='bar'>
                    <IonTitle className='tittle-login' size="large" color="primary">RutiAndo</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className='login-container'>
                    <IonText className='texto-inicio'>
                        <h2>Crea tu cuenta para disfrutar grandes aventuras</h2>
                    </IonText>
                    <IonText className="subtitulo">
                        <h3>Iniciar sesión</h3>
                    </IonText>

                    {/* Campo de entrada de email*/}
                    <IonList style={{ background: 'transparent' }}>
                        <IonItem lines='none' className='input-item'>
                            <IonInput labelPlacement="floating" clearInput>
                                <div slot="label">
                                    Email <IonText color="danger">(Required)</IonText>
                                </div>
                            </IonInput>
                        </IonItem>
                    </IonList>

                    {/* Campo de entrada de contraseña */}
                    <IonList style={{ background: 'transparent' }}>
                        <IonItem lines='none' className='input-item'>
                            <IonInput labelPlacement="floating" clearInput>
                                <div slot="label" className='div-login'>
                                    Contraseña <IonText color="dark">(Required)</IonText>
                                </div>
                            </IonInput>
                        </IonItem>
                    </IonList>

                    <IonText className="password-hint" style={{ color: '#6A0DAD' }}>
                        <h6>¿Olvidaste tu contraseña?</h6>
                    </IonText>

                    {/* Botón de ingresar */}
                    <IonButton className='boton-login' expand="block" shape="round" onClick={handleLogin}>
                        Ingresar
                    </IonButton>

                    {/* Imagen */}
                    <div className="zorro">
                        <img className="foto-perfil" src="../src/images/zorroFINAL.png" alt="zorro" />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
