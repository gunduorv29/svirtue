import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CartProvider } from './src/context/CartContext';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/AppNavigator';

const { width } = Dimensions.get('window');

const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [fadeAnim] = useState(new Animated.Value(1));
  const [spinAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Spinner animation
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();

    // Fade out after 2 seconds
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }).start(() => onFinish());
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={[styles.loadingContainer, { opacity: fadeAnim }]}>
      <View style={styles.loadingContent}>
        <Animated.View style={[styles.spinner, { transform: [{ rotate: spin }] }]}>
          <View style={styles.spinnerCircle} />
        </Animated.View>
        <Text style={styles.loadingText}>Speaking Virtue</Text>
      </View>
    </Animated.View>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onFinish={() => setIsLoading(false)} />
      ) : (
        <AuthProvider>
          <CartProvider>
            <AppNavigator />
            <StatusBar style="auto" />
          </CartProvider>
        </AuthProvider>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#F9F8F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContent: {
    alignItems: 'center',
  },
  spinner: {
    width: 64,
    height: 64,
    marginBottom: 32,
  },
  spinnerCircle: {
    width: '100%',
    height: '100%',
    borderWidth: 3,
    borderColor: '#4B2E83',
    borderTopColor: 'transparent',
    borderRadius: 32,
  },
  loadingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B2E83',
    letterSpacing: 2,
  },
});
