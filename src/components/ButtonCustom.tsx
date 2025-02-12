import React from 'react';
import { Pressable, Text, useWindowDimensions, View } from 'react-native';
import { ButtonInterface } from '../interfaces/ButtonInterface';
import { colours, styles } from '../config/theme/theme';

export const ButtonCustom = ({ label, colour = colours.primary, onPress }: ButtonInterface) => {

    const { width, height } = useWindowDimensions();

    return (

        <View style={{ alignSelf: 'center', marginBottom: 30 }}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => ({
                    ...styles.button,
                    backgroundColor: colour,
                    opacity: (pressed) ? 0.8 : 1,
                    width: width * 0.75,
                })}>
                <View style={styles.viewButton}>
                    <Text
                        style={{
                            ...styles.buttonText,
                            color: colours.lettersButton
                        }}>
                        {label}
                    </Text>
                </View>
            </Pressable>
        </View>

    )

}
