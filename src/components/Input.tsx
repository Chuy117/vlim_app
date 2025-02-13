import { TextInput } from 'react-native'
import { inputProp } from '../interfaces/InputInterface'
import { styles } from '../config/theme/theme'
import { useInput } from '../hooks/useInput';
import { useEffect } from 'react';

export const Input = ({ type = 'default', holder, onValueChange }: inputProp) => {

    const { value, onChangeText } = useInput();

    useEffect(() => {
        onValueChange(value);
    }, [value, onValueChange]);

    return (
        <>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
                placeholder={holder}
                keyboardType={type}
            />
        </>
    )

}