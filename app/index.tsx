import { Moon, Plus, Search, TvMinimal } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import ConversationScreen from './components/Conversation';

export default function HomeScreen() {
  const mockData = [
    { 
      id: 1,
      name: 'John Doe', 
      message: 'Hello, how are you?', 
      connected: true, 
      profilePicture: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
      lastMessageTime: '09:00 AM',
      read: false
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      message: 'See you tomorrow!', 
      connected: false, 
      profilePicture: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      lastMessageTime: '10:30 AM',
      read: true
    },
    { 
      id: 3, 
      name: 'Bob Johnson', 
      message: 'Thanks for your help.', 
      connected: true, 
      profilePicture: 'https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg',
      lastMessageTime: '09:15 AM',
      read: false
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.user}>
          <Text style={styles.userInitial}>P</Text>
          <View style={styles.userText}>
            <Text style={styles.userName}>Pulse</Text>
            <Text style={styles.appName}>Messagerie</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <Pressable style={styles.button}>
            <Moon size={16} color="#374151" />
            <Text style={styles.buttonText}>Sombre</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <TvMinimal size={16} color="#374151" />
            <Text style={styles.buttonText}>Telephone</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.card}>
          
          <View style={styles.cardHeader}>
            <Text style={styles.messageText}>Messages</Text>
            <Plus size={20} color="#007AFF" />
          </View>

          <View>
            <View style={styles.searchBar}>
              <Search size={16} color="#374151" />
              <TextInput style={styles.searchInput} placeholder="Rechercher..." />
            </View>
            <View style={styles.conversations}>
              {mockData.map((item) => (
                <ConversationScreen key={item.id} {...item} />
              ))}
            </View>
          </View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  user: {
    flexDirection: 'row',
    gap: 10,
  },
  userInitial: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007AFF',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userText: {
    display: 'flex',
    flexDirection: 'column',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  appName: {
    fontSize: 14,
    color: '#6b7280',
  },
  buttons: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  body: {
    alignItems: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 500,
    marginBottom: 20,
    marginTop: 50,
    padding: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  messageText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  plus: {
    color: '#007AFF',
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d5d5d8',
    borderRadius: 25,
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  searchInput: {
    width: '100%',
    ...({ outlineStyle: 'none' } as any)
  },
  conversations: {
    width: '100%',
  },
});
