import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';


 const Perfil1 = (props)=>{
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/5b/ed/ad/5bedadefb36a6f80dabfa0a9b2b973e2.jpg' }}
          style={styles.coverPhoto}
        />
        <Image
          source={{ uri: 'https://i.pinimg.com/474x/10/88/3c/10883cc7ee48b49eecfaf63560a3d86f.jpg' }}
          style={styles.profilePic}
        />
        <Text style={styles.name}>Minnesota Timberwolves <Ionicons name="checkmark-circle" size={16} color="#3b82f6" /></Text>
        <Text style={styles.followers}>seguidores 4,7 mi • seguindo 23</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Apresentação</Text>
        <Text style={styles.bio}>
        O Minnesota Timberwolves está fazendo uma campanha histórica nos Playoffs da NBA, mostrando grande força nas séries eliminatórias. Liderados por Anthony Edwards, jovem estrela em ascensão, o time combina energia e talento em quadra. Com atuações decisivas, Edwards se destaca como um dos principais jogadores da pós-temporada. A equipe busca seu primeiro título da NBA, alimentando o sonho da torcida. Cada jogo dos Timberwolves tem sido uma demonstração de garra e evolução no cenário da liga.
        </Text>
        <Text style={styles.info}>Página • Franquia</Text>
      </View>
    </ScrollView>
  );
}

export default Perfil1;