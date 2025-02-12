import { KeyboardAvoidingView, TextInput, View, Button, Alert } from 'react-native'
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

    /* const [inputValue, setInputValue] = useState('');

    const handleValueChange = (value: string): void => {
        setInputValue(value);
      }; */

    const [nombre, setNombre] = useState('');
    const [invitados, setInvitados] = useState('');
    const [placas, setPlacas] = useState('');
    const [asunto, setAsunto] = useState('');
    const [vehiculo, setVehiculo] = useState('');
    const [comentarios, setComentarios] = useState('');

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
        <KeyboardAvoidingView style={styles.container}>

            <Header title='Registro vehicular' />
            <Subheader text='Por favor, complete el siguiente formulario para poder tener acceso' />

            {/* <Input holder='Nombre completo' onValueChange={handleValueChange} />
            <Input holder='No. invitados' type='numeric' onValueChange={handleValueChange}/>
            <Input holder='Asunto' onValueChange={handleValueChange} />
            <Input holder='Vehículo' onValueChange={handleValueChange} />
            <Input holder='Placas' onValueChange={handleValueChange} />
            <Input holder='Comentarios' onValueChange={handleValueChange} /> */}

            <>
                <TextInput
                    style={styles.input}
                    onChangeText={setNombre}
                    value={nombre}
                    placeholder={'Nombre completo'}
                />
            </>
            <>
                <TextInput
                    style={styles.input}
                    onChangeText={setInvitados}
                    value={invitados}
                    placeholder={'No. invitados'}
                    keyboardType='numeric'
                />
            </>
            <>
                <TextInput
                    style={styles.input}
                    onChangeText={setAsunto}
                    value={asunto}
                    placeholder={'Asunto'}
                />
            </>
            <>
                <TextInput
                    style={styles.input}
                    onChangeText={setVehiculo}
                    value={vehiculo}
                    placeholder={'Vehiculo'}
                />
            </>
            <>
                <TextInput
                    style={styles.input}
                    onChangeText={setPlacas}
                    value={placas}
                    placeholder={'Placas'}
                />
            </>
            <>
                <TextInput
                    style={styles.input}
                    onChangeText={setComentarios}
                    value={comentarios}
                    placeholder={'Comentarios'}
                />
            </>

            <>
                <Button title='Show Date Picker' onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode='datetime'
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </>

            <ButtonCustom colour={colours.primary} label='Registrar' onPress={() => sendAccess()} />

        </KeyboardAvoidingView>
    )

}