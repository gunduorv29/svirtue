import { Slot } from 'expo-router';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CartProvider } from '../src/context/CartContext';
import { AuthProvider } from '../src/context/AuthContext';

export default function Layout() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <CartProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Slot />
        </CartProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
