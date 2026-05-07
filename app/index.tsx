import { useRouter } from 'expo-router';
import { Plus, Search } from 'lucide-react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Conversation from './components/Conversation';
import { mockUser } from './data/users';
import { colors } from './theme/colors';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.body}>
      <View style={styles.card}>
        
        <View style={styles.cardHeader}>
          <Text style={styles.messageText}>Messages</Text>
          <Plus size={20} color={colors.primary} />
        </View>

        <View>
          <View style={styles.searchBar}>
            <Search size={16} color={colors.mutedForeground} />
            <TextInput style={styles.searchInput} placeholder="Rechercher..." />
          </View>
          <View style={styles.conversations}>
            {mockUser.map((item) => (
              <Conversation key={item.id} onPress={() => router.push(`/conversation/${item.id}`)} {...item} />
            ))}
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: colors.card,
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
    color: colors.foreground,
  },
  plus: {
    color: colors.primary,
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.input,
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
