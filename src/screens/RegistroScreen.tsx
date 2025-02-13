import { KeyboardAvoidingView, TextInput, View, Button, Alert, Platform } from 'react-native'
import { colours, styles } from '../config/theme/theme'
import { Header } from '../components/Header'
import { Subheader } from '../components/Subheader'
import { ButtonCustom } from '../components/ButtonCustom'
import { Input } from '../components/Input'
import { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import axios from 'axios'
import { AccessReq } from '../interfaces/AccessReq'

export const RegistroScreen = () => {

    const [nombre, setNombre] = useState('');
    const [invitados, setInvitados] = useState('');
    const [placas, setPlacas] = useState('');
    const [asunto, setAsunto] = useState('');
    const [vehiculo, setVehiculo] = useState('');
    const [comentarios, setComentarios] = useState('');

    const nombreChange = (value: string): void => {
        setNombre(value);
    };

    const invitadosChange = (value: string): void => {
        setInvitados(value);
    };

    const placasChange = (value: string): void => {
        setPlacas(value);
    };

    const asuntoChange = (value: string): void => {
        setAsunto(value);
    };

    const vehiculoChange = (value: string): void => {
        setVehiculo(value);
    };

    const comentariosChange = (value: string): void => {
        setComentarios(value);
    };

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {

        setDate(date.toISOString().split('T')[0]);
        setHour(date.toTimeString().split(' ')[0]);
        hideDatePicker();

    };

    const sendAccess = async () => {

        const formData = new FormData();
        formData.append('fecha', date);
        formData.append('horaTiempo', hour);
        formData.append('nombrePersona', nombre);
        formData.append('paxInvitados', invitados);
        formData.append('asunto', asunto);
        formData.append('vehiculo', vehiculo);
        formData.append('placasVehiculo', placas);
        formData.append('comentarios', comentarios);
        formData.append('nombreUsu', 'seguridad');
        formData.append('archivoUno', '');
        formData.append('fotoVisitante', '');
        formData.append('banderaTipoVisita', '1');
        formData.append('tipoFormularioVisita', '2');
        formData.append('puertaAccesoInvitadoVisitante', '2');
        formData.append('aQuienVisitaInvitadoVisitante', 'Seguridad');
        formData.append('correoUsu', 'aRkRABEnQoC5ZfFABPegXg==');
        formData.append('nombreUsu', 'seguridad');
        formData.append('idusu', 'j7RyFAsH/NHB9zO5wXdxgw==');
        formData.append('perfil', '1');
        formData.append('htl', 'tw7vprpq7zYZAUrCBYH/CQ==');
        formData.append("objCorreosAviso", "[{\"id\":37966,\"correo\":\"vladimir.luna@vlim.com.mx\"}]");

        try {
            const response = await axios.post<AccessReq>('https://www.vlimaccesscontrol.com/kanaiWS/ws_saveAgenda', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Cookie': 'PHPSESSID=qbm926f3v4vmug72tgijg5nho0'
                }
            });

            Alert.alert(response.data.message, `Su agenda quedó registrada para el ${date} a las ${hour}`, [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);

        } catch (error) {
            console.error('Error en la petición:', error);
        }

    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            keyboardVerticalOffset={60}
        >

            <Header title='Registro vehicular' />
            <Subheader text='Por favor, complete el siguiente formulario para poder tener acceso' />

            <Input holder='Nombre completo' onValueChange={nombreChange} />
            <Input holder='No. invitados' type='numeric' onValueChange={invitadosChange} />
            <Input holder='Asunto' onValueChange={asuntoChange} />
            <Input holder='Vehículo' onValueChange={vehiculoChange} />
            <Input holder='Placas' onValueChange={placasChange} />
            <Input holder='Comentarios' onValueChange={comentariosChange} />

            <View style={styles.viewPicker}>
                <Button title='Show Date Picker' onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode='datetime'
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>

            <ButtonCustom colour={colours.primary} label='Registrar' onPress={() => sendAccess()} />

        </KeyboardAvoidingView>
    )

}