import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonForm from "../components/ButtonForm";
import LabeledInput from "../components/LabeledInput";

export default function RegisterAll() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <Text style={styles.title}>Agora, mais alguns dados sobre você: </Text>
                <View style={styles.form}>
                    <LabeledInput
                        label='CEP'
                        placeholder='Insira seu CEP'
                    />
                    <LabeledInput
                        label='Endereço'
                        placeholder='Insira seu endereço'
                    />
                    <LabeledInput
                        label='Número'
                        placeholder='Insira seu número '
                    />
                    <LabeledInput 
                        label='Complemento' 
                        placeholder='Insira seu complemento'
                    />  
                    <LabeledInput 
                        label='Telefone' 
                        placeholder='(00) 00000-0000'
                    /> 
                    <ButtonForm
                    textButton="voltar"
                    /><ButtonForm
                    textButton="Avançar"
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