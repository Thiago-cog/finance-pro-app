import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import authApi from 'api/auth-api';


const SignupScreen = () => {
	const [fullname, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function login() {
		const result = await authApi.registerUser(email, password, fullname);
		Alert.alert(result.message);
	}

	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={require("../../assets/2-removebg-preview.png")} />
			<View style={styles.containerText}>
				<Text style={styles.textTitle}>Crie sua conta</Text>
			</View>
			<View style={styles.inputContainer}>
				<FontAwesome name={"user"} size={24} color={"#f8fafc"} style={styles.inputImage} />
				<TextInput style={styles.textInput} placeholder='Nome' placeholderTextColor={"#f8fafc"} onChangeText={setFullName} />
			</View>
			<View style={styles.inputContainer}>
				<Fontisto name={"email"} size={24} color={"#f8fafc"} style={styles.inputImage} />
				<TextInput style={styles.textInput} placeholder='Email' placeholderTextColor={"#f8fafc"} onChangeText={setEmail} />
			</View>
			<View style={styles.inputContainer}>
				<Fontisto name={"locked"} size={24} color={"#f8fafc"} style={styles.inputImage} />
				<TextInput style={styles.passwordInput} placeholder='Senha' placeholderTextColor={"#f8fafc"} onChangeText={setPassword} secureTextEntry />
			</View>
			<View style={styles.createButtonContainer}>
				<Text style={styles.create}>Criar</Text>
				<Button title="→" onPress={login} style={styles.createButton} />
			</View>
		</View>
	);
}

export default SignupScreen

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#111827",
		width: "100%",
		height: "100%",
		flex: 1,
		// alignItems: "center",
	},
	logo: {
		marginTop: 50,
		height: 100,
		width: 100,
		alignSelf: "center",
	},
	containerText: {
		marginTop: -10,
		marginBottom: 20,
		alignItems: "center"
	},
	textTitle: {
		fontSize: 40,
		fontFamily: "sans-serif",
		fontWeight: "800",
		color: "#f8fafc",
	},
	inputContainer: {
		backgroundColor: "#1f2937",
		flexDirection: "row",
		borderRadius: 20,
		marginHorizontal: 40,
		elevation: 10,
		marginVertical: 20,
		alignItems: "center",
	},
	textInput: {
		height: 45,
		flex: 1,
		color: "#f8fafc",
		marginLeft: 12,
		fontSize: 15,
		fontFamily: "sans-serif",
		fontWeight: "600"
	},
	passwordInput: {
		height: 45,
		flex: 1,
		color: "#f8fafc",
		marginLeft: 12,
		fontSize: 15,
		fontFamily: "sans-serif",
		fontWeight: "600",
	},
	inputImage: {
		marginLeft: 15,
	},
	createButtonContainer: {
		flexDirection: "row",
		marginTop: 120,
		width: "90%",
		justifyContent: "flex-end",
	},
	create: {
		color: "#f8fafc",
		fontSize: 25,
		fontWeight: "bold",
	},
	createButton: {
		height: 34,
		width: 56,
		borderRadius: 17,
	},
	footerText: {
		color: "#f8fafc",
		textAlign: "center",
		fontSize: 15,
		marginTop: 120
	}
});