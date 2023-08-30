import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
	nameParticipant: string;
	onRemove?: () => void;
};

export function Participant({ nameParticipant, onRemove }: Props) {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{nameParticipant}</Text>

			<TouchableOpacity style={styles.button} onPress={onRemove}>
				<Text style={styles.buttonText}> -</Text>
			</TouchableOpacity>
		</View>
	);
}
