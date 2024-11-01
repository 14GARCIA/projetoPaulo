import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/1-b468cdef.png')}
          style={styles.reactLogo
            
          }

        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText  style={styles.titleText} type="title">3001: O RECOMEÇO</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Tema Do Jogo</ThemedText>
        <ThemedText>
          O jogo tem um tema futurista, onde o mundo está entrando em colapso por conta da poluição, do consumo exagerado e do mau uso de tecnologia. E para esconder sagrados obscuros sebre o real envolvimento com os problemas. A maior empresa de tecnologia do planeta começa a perseguir e eliminar pessoas que poderiam descobrir toda a verdade, até que ela tenta eliminar um certo grupo de pessoas mas não é bem assim.. agora este grupo val tentar acabar com toda essa hleraquia.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">PROPOSTA</ThemedText>
        <ThemedText>
          Este jogo tem como proposta mostrar para as pessoas as causas que o uso inadequado da tecnologia pode afetar nosso futuro.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Quem Somos?</ThemedText>
        <ThemedText>
        Os desenvolvedores do 3001, são alunos da ETEC Juscelino kubitschek que fizeram o jogo como o projeto de TCC, os nomes deles são: Adrian, Fabiano, Gustavo Telxera, Gustavo Muniz, Henrique e Kauã.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
   
    
  },
  titleText: {
    color: '#6b3fa0', 
    fontSize: 45,
    fontWeight: 'bold', 
    
  },
  
  stepContainer: {
    
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 2000,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
