import React from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export default function Home() {

  const participants = ["Juan", 'John ', 'Miss', 'Iza', 'Manna', 'Ana', 'Clara', 'Maria', 'Bia', 'Aline'];

  function handleParticipantAdd() {
    if(participants.includes("Juan")) {
        return Alert.alert("Participante Existe", "Participante já cadastrado")
        
    }

  }
  function handleParticipantRemove(name:string) {
    Alert.alert("Remover", "Deseja Remover o participante?", [ 
        {
          text: 'Sim',
          onPress: () => Alert.alert('Deletado')

        },
        {
          text: 'Não',
          style: 'cancel'

        }
    ])
    console.log(`voce clicou no button Remove ${name}`)
  }

  return (
    <View style={styles.container
    }>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

      <View style={styles.form}>
      <TextInput style= {styles.input}
      placeholder="Nome do participante"
      placeholderTextColor="#6b6b6b"
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>Ninguém registrado até o momento !</Text>
        )}
      />
    </View>
  )
}
 