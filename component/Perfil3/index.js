import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';


 const Perfil3 = (props)=>{
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/80/48/c6/8048c6e1986efde75596bc9d6cd50b84.jpg' }}
          style={styles.coverPhoto}
        />
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/0f/2f/d0/0f2fd0a1596c380d05613689b4480fca.jpg' }}
          style={styles.profilePic}
        />
        <Text style={styles.name}>Boston Celtics<Ionicons name="checkmark-circle" size={16} color="#3b82f6" /></Text>
        <Text style={styles.followers}>seguidores 3,4 mi • seguindo 17</Text>
       
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Apresentação</Text>
        <Text style={styles.bio}>
        O Boston Celtics chega forte aos Playoffs da NBA, buscando ampliar sua coleção de títulos históricos. Jayson Tatum lidera a equipe com atuações consistentes e decisivas, consolidando-se como um dos maiores talentos da liga. Com uma defesa sólida e um ataque eficiente, os Celtics são considerados um dos grandes favoritos. A tradição e a paixão da torcida impulsionam o time em cada partida. Tatum é peça fundamental na missão de reconquistar o troféu da NBA para Boston.
        </Text>
        <Text style={styles.info}>Página • Franquia</Text>
      </View>
    </ScrollView>
  );
}

export default Perfil3;