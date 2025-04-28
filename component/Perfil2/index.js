import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';


 const Perfil2 = (props)=>{
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/c0/2a/24/c02a2445c2445afe7bb1be82f4baecb7.jpg' }}
          style={styles.coverPhoto}
        />
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/d9/a0/ec/d9a0ec1bcaa5ab31b8d08dc582be56f2.jpg' }}
          style={styles.profilePic}
        />
        <Text style={styles.name}>Oklahoma City Thunder <Ionicons name="checkmark-circle" size={16} color="#3b82f6" /></Text>
        <Text style={styles.followers}>seguidores 3,2 mi • seguindo 300</Text>
       
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Apresentação</Text>
        <Text style={styles.bio}>
        O Oklahoma City Thunder surpreende nos Playoffs da NBA com um elenco jovem e muito competitivo. Shai Gilgeous-Alexander, líder da equipe, vem sendo um dos destaques da pós-temporada com atuações impressionantes. O Thunder demonstra maturidade e velocidade, superando expectativas contra adversários mais experientes. A torcida acredita que este pode ser o começo de uma nova era vitoriosa para a franquia. Cada jogo reforça o protagonismo de Shai como uma das estrelas da liga.
        </Text>
        <Text style={styles.info}>Página • Franquia</Text>
      </View>
    </ScrollView>
  );
}

export default Perfil2;