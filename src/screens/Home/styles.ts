import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {backgroundColor: '#131016',
    flex:1,
    padding: 24,
    },
    eventName: {
      color: '#fdfcfe',
          fontSize: 24,
          fontWeight: 'bold',                             
          marginTop: 48,
    },
    eventDate: {color: '6b6b6b',fontSize: 16},
    input: {
        flex:1,
        height: 56,
        backgroundColor: '#1f1e25',
        borderRadius: 6,
        color:'#fdfcfe',
        padding: 16,
        fontSize: 16,
        marginRight: 12,

    },
    buttonText: {
        color:'#fff',
        fontSize: 25,
    },
    button: {
       width: 56,
       height: 56,
       borderRadius: 6,
       backgroundColor: '#31cf67',
       alignItems: 'center',
       justifyContent: 'center',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
    },
    listEmptyText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    }
  })
  