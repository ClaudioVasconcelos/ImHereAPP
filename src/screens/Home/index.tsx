import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
	const [participants, setParticipants] = useState<string[]>([]);
	const [nameParticipant, setNameParticipant] = useState<string>("");

	const handleParticipantAdd = () => {
		if (participants.includes(nameParticipant)) {
			return Alert.alert("participante já existe", "Já existe um participante com esse nome");
		}
		setParticipants((prevState) => [...prevState, nameParticipant]);
		setNameParticipant("");
	};

	const handleParticipantRemove = (name: string) => {
		Alert.alert(`Remover ${name}`, "Deseja remover o participante?", [
			{
				text: "Sim",
				onPress: () => {
					setParticipants((prevState) =>
						prevState.filter((participant) => participant !== name)
					);
				},
			},
			{
				text: "Não",
				style: "cancel",
			},
		]);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do Evento</Text>
			<Text style={styles.eventDate}>Quinta-feira, 24 de Junho de 2023</Text>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Nome do participante"
					placeholderTextColor={"#6B6B6B"}
					onChangeText={setNameParticipant}
					value={nameParticipant}
				/>
				<TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
					<Text style={styles.buttonText}> +</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={participants}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Participant
						nameParticipant={item}
						onRemove={() => handleParticipantRemove(item)}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => (
					<Text style={styles.listEmptyText}>
						Ninguém chegou ao evento ainda? Adicone participantes a sua lista de
						presença! `
					</Text>
				)}
			/>
		</View>
	);
}
