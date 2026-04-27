import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonForm from "../components/ButtonForm";
import LabeledInput from "../components/LabeledInput";

export default function RegisterScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <Text style={styles.title}>Insira alguns dados básicos:</Text>
                <View style={styles.form}>
                    <LabeledInput 
                        label='Nome' 
                        placeholder='Digite seu nome completo'
                        
                    />
                    <LabeledInput 
                        label='Email' 
                        placeholder='Insira seu endereço de email'
                        keyboardType='email-adress'
                    />
                    <LabeledInput
                        label='Senha'
                        placeholder="Insira sua senha"
                        secureTextEntry={true}
                    />
                    <LabeledInput
                        label='Repita sua senha'
                        placeholder="Insira sua senha"
                        secureTextEntry={true}
                    />
                    <ButtonForm
                    textButton="Entrar"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    title: {
        fontSize: 20,
        fontWeight:"700",
        textAlign: "center",
        color: "#6B6E71",
        marginBottom: 26,
    },
    form: {
        width: "100%",
        marginTop: 16,
        paddingHorizontal: 20,
    },
    forgetText: {
        color: "#00213d",
        fontSize: 13,
        fontWeight: "600",
        textDecorationLine: "underline",
    },
    forget: {
        marginTop: 14,
        alignSelf: "center",
    },
    footer: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    footerText:{
        fontSize: 13,
        color: "#3a3a3a",
    },
    footerLink: {
        color: "#0e73e8",
        fontSize: 13,
        fontWeight: "700",
    },

})