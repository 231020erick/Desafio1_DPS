import {useState} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Platform, SafeAreaView} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function TareaInputField(props){
  const[tarea, setTarea] = useState();
  const handleAgregarTarea = (value) => {
    props.addTarea(value);
    setTarea('null');
  }

  return(
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.inputField} value={tarea} onChangeText={text => setTarea(text)} placeholder={"Agrega una Tarea"} placeholderTextColor={'white'} />
      <TouchableOpacity onPress={()=> handleAgregarTarea(tarea)}>
        <View style={styles.boton}>
          <MaterialIcons name="keyboard-arrow-up" size={25} color="red" />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Style
const styles = StyleSheet.create({
  container:{
    borderColor:'white',
    backgroundColor: 'purple',
    borderWidth:2,
    marginHorizontal:20,
    borderRadius:25,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    position:'absolute',
    bottom:10,
    left:'13%'
  },
  inputField:{
    color:'white',
    height:30,
    flex:1,
    marginLeft:10,
  },
  boton:{
    height:25,
    width:29,
    borderRadius:25,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});