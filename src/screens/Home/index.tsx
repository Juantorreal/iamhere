import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export default function Home() {
 const [participants, setParticipants] = useState<string[]>([] )
 const [participantName, setParticipantName] = useState('')


  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('Participante existe', 'Participante já cadastrado')
    }
    
    setParticipants(state => [...state,participantName])
    setParticipantName('');

  }
  function handleParticipantRemove(name:string) {

    setParticipants(prevState => prevState.filter(participant => participant !== name))

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
      onChangeText={text => setParticipantName(text)}
      value={participantName}
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
 