import { Image, StyleSheet, Text, View } from 'react-native';


export default function ConversationScreen(item: any) {
  return (
    <View key={item.id} style={styles.messageItem}>
      <View style={styles.messageInfo}>
        <Image source={{ uri: item.profilePicture }} style={styles.profilePicture} />
        {item.connected ? (<View style={styles.status} />) : null}
        <View>
          <Text style={styles.messageName}>{item.name}</Text>
          <Text style={styles.messageText}>{item.message}</Text>
        </View>
      </View>
      <View style={styles.messageFooter}>
        <Text style={styles.lastMessageTime}>{item.lastMessageTime}</Text>
        {!item.read && (
          <Text style={styles.readIndicator}>1</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageItem: {
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
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
  },
  messageText: {
    fontSize: 14,
    color: '#666',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  status: {
    position: 'absolute',
    top: 45,
    left: 45,
    width: 15,
    height: 15,
    backgroundColor: '#4CAF50',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
  messageFooter: {
    alignItems: 'center',
    gap: 5,
  },
  lastMessageTime: {
    fontSize: 12,
    color: '#999',
    alignSelf: 'flex-start',
    marginLeft: 'auto',
  },
  readIndicator: {
    backgroundColor: '#007AFF',
    color: 'white',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,    
    fontSize: 12,
    marginLeft: 10,
    alignSelf: 'flex-end',
  },
});