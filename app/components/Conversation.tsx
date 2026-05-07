import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { User } from 'lucide-react-native';
import { mockConversations } from '../data/conversations';
import { colors } from '../theme/colors';


export default function Conversation({ onPress, ...item }: any) {
  const latestMessage = mockConversations.find((c) => c.id === item.id)?.messages.slice(-1)[0];

  return (
    <Pressable key={item.id} onPress={onPress} style={styles.messageItem}>
      <View style={styles.messageInfo}>
        <View style={styles.avatar}>
          {item.profilePicture ? (
            <Image source={{ uri: item.profilePicture }} style={styles.profilePicture} />
          ) : (
            <User size={40} style={styles.profileIcon} />
          )}
          {item.connected ? (<View style={styles.status} />) : null}
        </View>
        <View>
          <Text style={styles.messageName}>{item.name}</Text>
          <Text style={styles.messageText}>{latestMessage?.text || 'Aucun message'}</Text>
        </View>
      </View>
      <View style={styles.messageFooter}>
        <Text style={styles.lastMessageTime}>{latestMessage?.timestamp || ''}</Text>
        {latestMessage?.read === false && (
          <Text style={styles.readIndicator}>1</Text>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  messageItem: {
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  messageInfo: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 10,
  },
  messageName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.foreground,
  },
  messageText: {
    fontSize: 14,
    color: colors.mutedForeground,
  },
  avatar: {
    width: 50,
    height: 50,
    position: 'relative',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileIcon: {
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 25,
  },
  status: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    backgroundColor: colors.online,
    borderColor: colors.card,
    borderWidth: 2,
    borderRadius: 7,
  },
  messageFooter: {
    alignItems: 'center',
    gap: 5,
  },
  lastMessageTime: {
    fontSize: 12,
    color: colors.mutedForeground,
    alignSelf: 'flex-start',
    marginLeft: 'auto',
  },
  readIndicator: {
    backgroundColor: colors.primary,
    color: colors.primaryForeground,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    fontSize: 12,
    marginLeft: 10,
    alignSelf: 'flex-end',
  },
});