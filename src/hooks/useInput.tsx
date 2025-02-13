import { useState } from 'react';

export const useInput = (initialValue = '') => {

    const [value, setValue] = useState<string>(initialValue);

    const onChangeText = (text: string): void => {
        setValue(text);
    };

    return {
        value,
        onChangeText,
    };

}
