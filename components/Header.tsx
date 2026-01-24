import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
import { useCart } from '../contexts/CartContext';
import { Colors } from '../constants/Colors';
import DrawerMenu from './DrawerMenu';

const { width } = Dimensions.get('window');

const Header: React.FC = () => {
  const router = useRouter();
  const { itemCount } = useCart();
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/speaking_virtue/');
  };

  const handleLogoPress = () => {
    router.push('/');
  };

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  return (
    <>
      <BlurView intensity={80} style={styles.header}>
        <View style={styles.container}>
          {/* Logo and Brand */}
          <TouchableOpacity style={styles.logoContainer} onPress={handleLogoPress}>
            <Text style={styles.logo}>Speaking Virtue</Text>
          </TouchableOpacity>

          {/* Right Actions */}
          <View style={styles.rightActions}>
            <TouchableOpacity onPress={handleInstagramPress} style={styles.instagramButton}>
              <Text style={styles.instagramIcon}></Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleDrawer} style={styles.hamburgerButton}>
              <Text style={styles.hamburgerIcon}></Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>

      <DrawerMenu isVisible={isDrawerVisible} onClose={() => setIsDrawerVisible(false)} />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(75, 46, 131, 0.05)',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    minHeight: 80,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.virtue.deepPurple,
    fontFamily: 'serif',
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  instagramButton: {
    padding: 8,
  },
  instagramIcon: {
    fontSize: 28,
    color: Colors.virtue.charcoal,
    fontFamily: 'FontAwesome',
  },
  hamburgerButton: {
    padding: 8,
  },
  hamburgerIcon: {
    fontSize: 28,
    color: Colors.virtue.charcoal,
    fontFamily: 'FontAwesome',
  },
});

export default Header;
