import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/CartContext';

const { width } = Dimensions.get('window');

interface HeaderProps {
  currentScreen?: string;
}

const Header: React.FC<HeaderProps> = ({ currentScreen }) => {
  const navigation = useNavigation();
  const { getItemCount } = useCart();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const cartItemCount = getItemCount();

  const navigateTo = (screen: string) => {
    navigation.navigate(screen as never);
    setMobileMenuVisible(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          {/* Brand / Logo */}
          <TouchableOpacity
            style={styles.logoContainer}
            onPress={() => navigateTo('Home')}
          >
            <Image
              source={require('../../assets/icon.png')}
              style={styles.logoImage}
            />
            <Text style={styles.logoText}>Speaking Virtue</Text>
          </TouchableOpacity>

          {/* Desktop Menu */}
          <View style={styles.desktopMenu}>
            <TouchableOpacity
              style={[styles.navLink, currentScreen === 'Home' && styles.activeNavLink]}
              onPress={() => navigateTo('Home')}
            >
              <Text style={[styles.navText, currentScreen === 'Home' && styles.activeNavText]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.navLink, currentScreen === 'About' && styles.activeNavLink]}
              onPress={() => navigateTo('About')}
            >
              <Text style={[styles.navText, currentScreen === 'About' && styles.activeNavText]}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.navLink, currentScreen === 'Articles' && styles.activeNavLink]}
              onPress={() => navigateTo('Articles')}
            >
              <Text style={[styles.navText, currentScreen === 'Articles' && styles.activeNavText]}>Journal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.navLink, currentScreen === 'Shop' && styles.activeNavLink]}
              onPress={() => navigateTo('Shop')}
            >
              <Text style={[styles.navText, currentScreen === 'Shop' && styles.activeNavText]}>Shop</Text>
            </TouchableOpacity>
          </View>

          {/* Right Actions */}
          <View style={styles.rightActions}>
            {/* Instagram Link */}
            <TouchableOpacity style={styles.socialLink}>
              <Text style={styles.iconText}>📷</Text>
            </TouchableOpacity>

            {/* Cart */}
            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => navigateTo('Cart')}
            >
              <Text style={styles.iconText}>🛒</Text>
              {cartItemCount > 0 && (
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>{cartItemCount}</Text>
                </View>
              )}
            </TouchableOpacity>

            {/* Mobile Hamburger */}
            <TouchableOpacity
              style={styles.hamburgerButton}
              onPress={toggleMobileMenu}
            >
              <Text style={styles.iconText}>☰</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Mobile Menu Modal */}
      <Modal
        visible={mobileMenuVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setMobileMenuVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setMobileMenuVisible(false)}
        >
          <View style={styles.mobileMenu}>
            <TouchableOpacity
              style={styles.mobileMenuItem}
              onPress={() => navigateTo('Home')}
            >
              <Text style={styles.mobileMenuText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mobileMenuItem}
              onPress={() => navigateTo('About')}
            >
              <Text style={styles.mobileMenuText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mobileMenuItem}
              onPress={() => navigateTo('Articles')}
            >
              <Text style={styles.mobileMenuText}>Journal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mobileMenuItem}
              onPress={() => navigateTo('Shop')}
            >
              <Text style={styles.mobileMenuText}>Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mobileMenuItem}
              onPress={() => navigateTo('Cart')}
            >
              <Text style={styles.mobileMenuText}>Cart</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(75, 46, 131, 0.05)',
    paddingTop: 40,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    maxWidth: 1280,
    alignSelf: 'center',
    width: '100%',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoImage: {
    width: 32,
    height: 32,
    borderRadius: 4,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E1A55',
    fontFamily: 'serif',
  },
  desktopMenu: {
    flexDirection: 'row',
    gap: 48,
  },
  navLink: {
    paddingVertical: 8,
    position: 'relative',
  },
  activeNavLink: {
    // Active state styling
  },
  navText: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    color: '#2D2D2D',
  },
  activeNavText: {
    color: '#4B2E83',
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  socialLink: {
    padding: 8,
  },
  cartButton: {
    position: 'relative',
    padding: 8,
  },
  cartBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#8B1538',
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  iconText: {
    fontSize: 24,
    color: '#666666',
  },
  hamburgerButton: {
    padding: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
  mobileMenu: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(75, 46, 131, 0.1)',
    paddingTop: 80,
    paddingBottom: 32,
    paddingHorizontal: 32,
  },
  mobileMenuItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  mobileMenuText: {
    fontSize: 24,
    color: '#2E1A55',
    fontFamily: 'serif',
    textAlign: 'center',
  },
});

export default Header;
