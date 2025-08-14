import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./loginStyles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";

export default function Login() {
  const [campoNome, setCampoNome] = useState('');
  const [campoSenha, setCampoSenha] = useState('');
  const [validaNome, setValidaNome] = useState(true);
  const [validaSenha, setValidaSenha] = useState(true);

  const validaCampos = () => {
    const nomeValido = campoNome.trim().length > 0;
    const senhaValida = campoSenha.trim().length > 0;

    setValidaNome(nomeValido);
    setValidaSenha(senhaValida);

    return nomeValido && senhaValida;
  };

  const buttonClick = () => {
    if (validaCampos()) {
      router.navigate('/Produtos');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tela1}>
        <Text style={styles.texto1}>Seja bem vindo a loja </Text>
        <Text style={styles.texto1}>virtual da UniFECAF!</Text>
        <Text style={styles.texto2}>Insira seus dados para entrar na sua conta.</Text>
      </View>

      <View style={styles.tela2}>

        <View>
          <Text>Username</Text>
          <TextInput 
            style={[
              styles.inText, 
              validaNome ? styles.inText : styles.fieldEmpty
            ]}
            onChangeText={setCampoNome}
            value={campoNome}
          />
          {!validaNome && (
            <Text style={styles.textAlert}>
              <Ionicons name="alert-circle-outline" size={14} color="red" /> 
              Campo obrigatório!
            </Text>
          )}
        </View>
        
        <View>
          <Text>Senha</Text>
          <TextInput
            style={[
              styles.inText, 
              validaSenha ? styles.inText : styles.fieldEmpty
            ]}
            onChangeText={setCampoSenha}
            secureTextEntry
            value={campoSenha}
          />
          {!validaSenha && (
            <Text style={styles.textAlert}>
              <Ionicons name="alert-circle-outline" size={14} color="red" />
              Campo obrigatório!
            </Text>
          )}
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={buttonClick}
        >
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

