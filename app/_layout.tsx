import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Moon, TvMinimal } from 'lucide-react-native';
import { colors } from './theme/colors';

export const unstable_settings = {
  anchor: 'index',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaView>
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
                <Moon size={16} color={colors.foreground} />
                <Text style={styles.buttonText}>Sombre</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <TvMinimal size={16} color={colors.foreground} />
                <Text style={styles.buttonText}>Telephone</Text>
              </Pressable>
            </View>
          </View>

          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="conversation/[id]" />
          </Stack>
          
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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
    backgroundColor: colors.primary,
    color: colors.primaryForeground,
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
    color: colors.foreground,
  },
  appName: {
    fontSize: 14,
    color: colors.mutedForeground,
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
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
  buttonText: {
    fontSize: 14,
    color: colors.foreground,
    fontWeight: '500',
  },
});