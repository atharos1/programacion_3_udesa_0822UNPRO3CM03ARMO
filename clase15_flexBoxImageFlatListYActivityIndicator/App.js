import { FlatList, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

export default function App() {
  const chats = [
    {
      id: 1,
      name: "Darth Maul",
      message: "At last we will reveal ourselves",
      avatar: "https://media.vandalsports.com/i/1080x1080/3-2022/20223159850_1.jpg"
    },
    {
      id: 2,
      name: "Obi Wan Kenobi",
      message: "Hello there!",
      avatar: "https://elplanetaurbano.com/wp-content/uploads/2022/06/obi-wan-kenobi-epu.jpg"
    },
    {
      id: 3,
      name: "Anakin Skywalker",
      message: "You're shorter than expected!",
      avatar: "https://img.europapress.es/fotoweb/fotonoticia_20181221175313_1200.jpg"
    }
  ]

  const renderChat = (item) => {
    return (
      <View style={styles.chatContainer}>
        <Image source={{uri: item.avatar}} style={styles.avatar} />
        <View>
          <Text style={styles.chatTitle}>{item.name}</Text>
          <Text>{item.message}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {
        chats.length === 0
          ? <ActivityIndicator color="red" />
          : <FlatList
              data={chats}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => renderChat(item)} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1 
  },
  avatar: {
    height: 50,
    width: 50
  },
  chatContainer: {
    flexDirection: 'row',
    margin: 1
  },
  chatTitle: {
    fontWeight: 'bold'
  }
});
