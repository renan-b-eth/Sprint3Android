import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from '@react-navigation/headers-buttons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
      <Image
        source={require('./assets/logo2.png')}
        style={styles.imagem}
      />

      <View>
      <HeaderButtons>
      <Item
      title="Search"
      iconName="search"
      onPress={() => navigation.navigate('Search')}
      />
      <Item
      title="Menu"
      iconName="menu"
      onPress={() => navigation.openDrawer()}
      />
      </HeaderButtons>
      {/* Restante do conteúdo da tela */}
      </View>
    </View>

    
    
  );
}



const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <HeaderButtons>
    <Item
      title="Search"
      iconName="search"
      onPress={() => navigation.navigate('Search')}
    />
    <Item
      title="Menu"
      iconName="menu"
      onPress={() => navigation.openDrawer()}
    />
    </HeaderButtons>
    {/**/}
    </View>
  );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 300,
    height: 200,
    resizeMode: 'contain'
  },
});
