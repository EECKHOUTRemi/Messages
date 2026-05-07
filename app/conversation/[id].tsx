import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, View, Text, Image, TextInput, Pressable } from 'react-native';
import { mockUser } from '../data/users';
import { mockConversations } from '../data/conversations';
import { EllipsisVertical, Mic, ArrowLeft, Paperclip, Phone, SendHorizontal, Video, User } from 'lucide-react-native';
import { colors } from '../theme/colors';

export default function ConversationScreen() {
    const router = useRouter();
    const conversationId = parseInt(useLocalSearchParams().id.toString() || '0'); // Get the conversation ID from the URL parameters and convert it to a number
    const conversation = mockConversations.find((c) => c.id === conversationId); // Find the conversation with the matching ID
    const user = mockUser.find((u) => u.id === conversationId); // Find the user with the matching ID

    return (
        <View style={styles.body}>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View style={styles.cardHeaderLeft}>
                        <Pressable onPress={() => router.back()} style={styles.arrowLeft}>
                            <ArrowLeft size={20} color={colors.foreground} />
                        </Pressable>
                        <View style={styles.avatar}>
                            {user?.profilePicture ? (
                                <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
                            ) : (
                                <User size={40} style={styles.profileIcon} />
                            )}
                            {user?.connected ? (<View style={styles.status} />) : null}
                        </View>
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>{user?.name}</Text>
                            <Text style={styles.userStatus}>
                                {user?.connected ? 'En ligne' : 'Hors ligne'}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.cardHeaderRight}>
                        <Phone size={20} color={colors.mutedForeground} />
                        <Video size={20} color={colors.mutedForeground} />
                        <EllipsisVertical size={20} color={colors.mutedForeground} />
                    </View>
                </View>
                <View style={styles.cardBody}>
                    {conversation?.messages ? conversation?.messages.map((message) => (
                        <View key={message.id} style={message.sender === 'You' ? styles.messageSent : styles.messageReceived}>
                            <Text style={{color: (message.sender === 'You' ? colors.messageSentForeground : colors.messageReceivedForeground), fontSize: 16}}>
                                {message.text}
                            </Text>
                            <Text  style={{fontSize: 12, color: (message.sender === 'You' ? colors.messageSentForeground : colors.mutedForeground), marginTop: 10}}>
                                {message.timestamp}
                            </Text>
                        </View>
                    )) : (
                        <Text style={styles.noMessages}>Aucun message</Text>
                    )}
                </View>
                <View style={styles.cardFooter}>
                    <Paperclip size={20} color={colors.mutedForeground}/>
                    <View style={styles.messageField}>
                        <TextInput style={styles.messageInput} placeholder="Message..." placeholderTextColor={colors.mutedForeground} />
                        <SendHorizontal color={colors.primary}/>
                    </View>
                    <Mic color={colors.voice}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
    },
    card: {
        width: '100%',
        maxWidth: 500,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 10,
        overflow: 'hidden',
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
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
    },
    cardHeaderLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    arrowLeft: {
        marginRight: 10,
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
    userInfo: {
        display: 'flex',
        flexDirection: 'column',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.foreground,
    },
    userStatus: {
        fontSize: 14,
        color: colors.mutedForeground,
    },
    cardHeaderRight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    headerIcon: {
        color: colors.mutedForeground,
    },
    cardBody: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: colors.background,
        height: 600,
    },
    messageSent: {
        alignSelf: 'flex-end',
        backgroundColor: colors.messageSent,
        color: colors.messageSentForeground,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        maxWidth: '80%',
    },
    messageReceived: {
        alignSelf: 'flex-start',
        backgroundColor: colors.messageReceived,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        maxWidth: '80%',
    },
    noMessages: {
        alignSelf: 'center',
        color: colors.mutedForeground,
        fontStyle: 'italic',
    },
    cardFooter: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopColor: colors.border,
        borderTopWidth: 1,
    },
    messageField: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        backgroundColor: colors.input,
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flex: 1,
    },
    messageInput: {
        width: '100%',
        color: colors.foreground,
        ...({ outlineStyle: 'none' } as any)
    },
    micButton: {
        color: colors.voice,
    },
});
