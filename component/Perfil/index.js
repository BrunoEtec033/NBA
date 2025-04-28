import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';


 const Perfil = (props)=>{
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/73/2b/43/732b430626ce1e8a27cbee43fc00b796.jpg' }}
          style={styles.coverPhoto}
        />
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Adam_Silver.jpg/1200px-Adam_Silver.jpg' }}
          style={styles.profilePic}
        />
        <Text style={styles.name}>ESCOLHA SUA FRANQUIA<Ionicons name="checkmark-circle" size={16} color="#3b82f6" /></Text>
        <Text style={styles.followers}>SELECIONE UM ABAIXO</Text>
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.followButton} onPress = { () => props.navigation.navigate("Perfil1") }>
            <Text style={styles.buttonText}>Minnesota Timberwolves</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.followButton} onPress = { () => props.navigation.navigate("Perfil2") }>
            <Text style={styles.buttonText}>Oklahoma City Thunder</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton} onPress = { () => props.navigation.navigate("Perfil3") }>
            <Text style={styles.buttonText}>Boston Celtics</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Apresentação</Text>
        <Text style={styles.bio}>
        Os Playoffs da NBA são a fase decisiva da temporada, reunindo os 16 melhores times das Conferências Leste e Oeste em séries de melhor de sete jogos. Desde 2021, um torneio chamado Play-In define as últimas vagas. As disputas são intensas e cheias de rivalidades históricas, com grandes viradas e momentos lendários. Boston Celtics e Los Angeles Lakers lideram em títulos conquistados. Os Playoffs são considerados o ápice do basquete mundial, onde surgem os maiores heróis do esporte.
        </Text>
        <Text style={styles.info}>Página • NBA</Text>
      </View>
    </ScrollView>
  );
}

export default Perfil;