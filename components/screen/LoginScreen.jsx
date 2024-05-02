import { StyleSheet, Text, View, Image, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import authApi from 'api/auth-api';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();
    const handleRegister = () => {
        navigation.navigate("Signup")
    }

    async function login(){
        const result = await authApi.login(email, password);
        Alert.alert(result.message);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../../assets/2-removebg-preview.png")} />
            <View style={styles.containerText}>
                <Text style={styles.textTitle}>Finance Pro.</Text>
            </View>
            <View>
                <Text style={styles.textSubTitle}>Login com a sua conta</Text>
            </View>
            <View style={styles.inputContainer}>
                <Fontisto name={"email"} size={24} color={"#f8fafc"} style={styles.inputImage} />
                <TextInput style={styles.textInput} placeholder='Email' placeholderTextColor={"#f8fafc"} onChangeText={setEmail}/>
            </View>
            <View style={styles.inputContainer}>
                <Fontisto name={"locked"} size={24} color={"#f8fafc"} style={styles.inputImage} />
                <TextInput style={styles.passwordInput} placeholder='Senha' placeholderTextColor={"#f8fafc"} onChangeText={setPassword} secureTextEntry/>
            </View>
            <View>
                <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
            </View>
            <View style={styles.singInButtonContainer}>
                <Text style={styles.singIn}>Sing In</Text>
                <Button title="→" onPress={login} style={styles.singInButton}/>
            </View>
            <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.footerText}>Não posui conta? <Text style={{textDecorationLine: "underline", color:"#00bbff"}}>Cadstre-se agora</Text></Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen

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
    textSubTitle: {
        fontSize: 16,
        fontFamily: "sans-serif",
        fontWeight: "500",
        color: "#f8fafc",
        alignSelf: "center",
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
    forgotPasswordText: {
        color: "#f8fafc",
        textAlign: "right",
        width: "90%",
        fontSize: 15,
    },
    singInButtonContainer: {
        flexDirection: "row",
        marginTop: 120,
        width: "90%",
        justifyContent: "flex-end",
    },
    singIn: {
        color: "#f8fafc",
        fontSize: 25,
        fontWeight: "bold",
    },
    singInButton: {
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