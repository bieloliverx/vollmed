import { StyleSheet } from "react-native";
import { TextInput, Text, View } from "react-native-web"

const INPUT_BG = "#F5F5F5";
const INPUT_BORDER = "#E8E8E8"
const LABEL_COLOR = "#36454F"

export default function LabeledInput({label, ...rest}) {
    return(
        <View style={styles.wrapper}>
            <Text style={styles.label}>
                {label ? label : "Não informado"}
            </Text>
            {/* Se o label for passado, exiba o label. Se não, exiba não informado */}
            <TextInput
                style={styles.input}
                placeholderTextColor="#B5B5B5"
                {...rest}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",              // Faz o componento ocupar toda a largura disponível
        marginBottom: 14,          // Define o espaço abaixo do campo
    },
    label: {
        marginBottom: 6,          
        color: LABEL_COLOR,       // Cor do texto do rótulo(label), utilizando a constante LABEL_COLOR
        fontSize: 14,            // Tamanho da fonte do rótulo(label)
        fontWeight: 600,        // Peso da fonte do rótulo(label), tornando-a um pouco mais grossa
    },
    input: {
        backgroundColor: INPUT_BG,                    // Cor de fundo do campo de entrada, utilizando a constante INPUT_BG
        borderRadius: 8,                             // Arredondamento dos cantos do campo de entrada
        paddingHorizontal: 14,                      // Define o espaçamento interno esquerdo e direito
        paddingVertical: 12,                       // Define o espaçamento interno superior e inferior
        borderWidth: 1,                           // Define a largura da borda do campo de entrada
        borderColor: INPUT_BORDER,               // Cor da borda do campo de entrada, utilizando a constante INPUT_BORDER
        shadowColor: "#000",                  // Cor da sombra do campo de entrada
        shadowOffset: { width: 1, height: 2 }, // Define o deslocamento da sombra
        shadowOpacity: 0.08,                  // Define a opacidade(transparência) da sombra
        shadowRadius: 6,                     // Define o aredondamento da sombra
        fontSize: 14,                       // Tamanho da fonte do texto dentro do campo de entrada
        color: '#222',                   // Cor do texto dentro do campo de entrada
    },
})