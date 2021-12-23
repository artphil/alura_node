import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar } from "react-native";

import estilosGlobais, { cores } from "../../estilos";
import estilos from "./estilos";

interface Props {
  children: React.ReactNode
}

function TelaPadrao({ children }: Props) {
  return (
    <>
      <SafeAreaView style={estilos.ajusteTela}>
        <StatusBar backgroundColor={cores.verde} />
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? "padding" : "height"}
          style={estilosGlobais.preencher}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={estilos.ajusteTelaBaixo} />
    </>
  );
}

export default TelaPadrao;