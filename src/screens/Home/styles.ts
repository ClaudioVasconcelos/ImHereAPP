import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: "#131016",
		flex: 1,
		padding: 24,
	},
	eventName: {
		color: "#FDFDFD",
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 48,
	},
	eventDate: {
		color: "#6b6b6b",
		fontSize: 16,
	},
	input: {
		flex: 1,
		height: 56,
		backgroundColor: "#1f1e25",
		borderRadius: 5,
		color: "#FFF",
		padding: 16,
		fontSize: 16,
		marginRight: 12,
	},

	buttonText: {
		color: "#FFF",
		fontSize: 24,
	},
	button: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: "#31cf67",
		justifyContent: "center",
		alignItems: "center",
	},
	form:{
		flexDirection: "row",
		width: "100%",
		marginTop: 36,
		marginBottom: 42,

	}
	,listEmptyText:{
		color: "#FFF",
		fontSize: 14,
		textAlign: "center",
	}
});
