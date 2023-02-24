import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function TareaItem(props){
  return(
    <View style={styles.container}>
      <View style={styles.ixContainer}>
        <Text style={styles.index}>{props.index}</Text>
      </View>
      <View style={styles.tareaContainer}>
        <Text style={styles.tarea} onPress={()=> props.abrirTarea()}>{props.tarea}</Text>
        <TouchableOpacity onPress={()=> props.borrarTarea()}>
          <MaterialIcons style={styles.borrar} name="delete" size={18} color='red' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  ixContainer: {
    backgroundColor: '#3e3364',
    borderRadius: '50%',
    marginRight: 10,
    alignItems: 'center',
    justifyContent:'center',
    width: 30,
    height:30,
  },
  index: {
    color: '#fff',
    fontSize: 20,
  },
  tareaContainer:{
    backgroundColor: '#3e3364',
    borderRadius:25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 30,
  },
  tarea:{
    color:'#fff',
    width:'90%',
    fontSize:16,
  },
  borrar:{marginRight:10,}
 
});