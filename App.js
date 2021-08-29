import React, { useState }  from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';

const list = [
  'Deixe para trás o que não te leva pra frente.',
  'Elimine o que não te ajuda a evoluir.',
  'Imagine uma nova história para sua vida e acredite nela.',
  'Faça dos seus sonhos um objetivo.',
  'Não desista da pessoa que você está se tornando. Evoluir leva tempo, mas vale a pena.',
  'Siga os bons e aprenda com eles.',
  'Deixe de lado as preocupações e seja feliz.',
  'Você sempre será sua melhor companhia!',
  'O que tem de ser seu sempre voltará a você.',
  'Não posso te ajudar, sou apenas uma frase no biscoito.',
]

export default function App() {

  const [image, setImage] = useState(require('./images/biscoito.png'));
  const [text, setText] = useState('');

  const quebrar = () => {
    setText('"' + list[Math.floor(Math.random() * list.length)] + '"');
    setImage(require('./images/biscoitoQuebrado.png'));
  }

  const resetar = () => {
    setText('');
    setImage(require('./images/biscoito.png'));
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image}
             source={image}>
      </Image>
      <Text style={styles.text}>
            {text}
      </Text>
      <Button style={styles.buttonQuebrar}
              mode="contained"
              onPress={quebrar}>
              Quebrar o Biscoito!
      </Button>
      <Button style={styles.buttonReset}
              mode="contained"
              onPress={resetar}>
              Resetar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    margin: 20,
    width: 200,
    height: 200
  },

  text: {
    fontSize:20,
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    margin: 20,
    alignContent:'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  buttonQuebrar: {
    borderRadius: 20,
    margin: 20,
    backgroundColor: '#ffc107'
  },

  buttonReset: {
    borderRadius: 20,
    backgroundColor: '#dc3545'
  }
});
