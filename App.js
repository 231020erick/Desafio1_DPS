import {useState} from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
// components
import TareaInputField from './components/TareaInputField';
import TareaItem from './components/TareaItem';

export default function App() {
  const[tareas,setTareas] = useState([]);
  const addTarea = (tarea) =>{
    if(tarea == null) return;
    setTareas([...tareas, tarea]);
  }
  const borrarTarea = (deleteRepo)=>{
    setTareas(tareas.filter((value, Repo) => Repo != deleteRepo));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Lista de Tareas.</Text>
      <ScrollView style={styles.scrView}>
        {tareas.map((tarea, Repo) => {
          return(
            <View key={Repo} style={styles.tareaContainer}>
              <TareaItem Repo={Repo +1} tarea={tarea} borrarTarea={()=> borrarTarea(Repo)} />
            </View>
          )
        })}
      </ScrollView>
      <View style={styles.footerbar}>
        <TareaInputField addTarea={addTarea} />
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    position:'relative'
  },
  headText:{
    margin:24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrView:{marginBottom:10},
  tareaContainer:{marginTop:10},
  footerbar:{position:'absolute', bottom:0, backgroundColor:'black', width:'100%', height:50}  
});
