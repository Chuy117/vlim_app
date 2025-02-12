import { Text, View } from 'react-native';
import { subProps } from '../interfaces/SubheaderInterface';
import { styles } from '../config/theme/theme';

export const Subheader = ({ text }: subProps) => {
    return (
        <View style={styles.sectionSub}>
            <Text style={styles.textSub}>{text}</Text>
        </View>
    )
}
