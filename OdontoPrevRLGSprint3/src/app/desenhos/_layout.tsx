//Importanto o componente Drawer da biblioteca expo-router/drawer
import { Drawer } from 'expo-router/drawer';

//Configurando o Drawer funcional TabLayout como padrão de exportação
export default function TabLayout() {
  return (
    //Configura um Drawer Navigator para a navegação lateral 
    <Drawer
    screenOptions={{headerShown: true}}
    defaultStatus='closed'    
    //Configura o Drawer Navigator com o nome de 'index'
    >
       <Drawer.Screen 
        name="index" 
        options={
            {title: 'OdontoPrev'}
        } />      
        <Drawer.Screen
        name="login"
        options={
            {title: 'Login'}
        } />
          <Drawer.Screen
        name="telarecuperacao"
        options={
            {title: 'Tela Recuperação '}
        } />
           <Drawer.Screen
        name="delivered"
        options={
            {title: 'Clinicas'}
        } />
            <Drawer.Screen
        name="dentista"
        options={
            {title: 'Dentistas'}
        } />
        
    </Drawer>
  );
}