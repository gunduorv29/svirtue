import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { useCart } from '../contexts/CartContext';
import { Colors } from '../constants/Colors';

const { width } = Dimensions.get('window');

interface DrawerMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ isVisible, onClose }) => {
  const router = useRouter();
  const { itemCount } = useCart();

  const slideAnim = React.useRef(new Animated.Value(-width)).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isVisible ? 0 : -width,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  const handleNavigation = (route: string) => {
    router.push(route);
    onClose();
  };

  const menuItems = [
    { icon: '', label: 'Home', route: '/' },
    { icon: '', label: 'About', route: '/about' },
    { icon: '', label: 'Journal', route: '/articles' },
    { icon: '', label: 'Shop', route: '/shop' },
    { icon: '', label: 'Cart', route: '/cart', badge: itemCount },
  ];

  if (!isVisible) return null;

  return (
    <>
      <TouchableOpacity style={styles.overlay} onPress={onClose} activeOpacity={1} />
      <Animated.View style={[styles.drawer, { transform: [{ translateX: slideAnim }] }]}>
        <View style={styles.content}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => handleNavigation(item.route)}
            >
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>{item.icon}</Text>
              </View>
              <Text style={styles.label}>{item.label}</Text>
              {item.badge && item.badge > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.badge}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(46, 26, 85, 0.6)',
    zIndex: 100,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: width * 0.8,
    backgroundColor: Colors.virtue.white,
    zIndex: 101,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  content: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 32,
    justifyContent: 'flex-start',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    paddingVertical: 12,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.virtue.purple,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowColor: Colors.virtue.purple,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  icon: {
    fontSize: 24,
    color: Colors.virtue.white,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.virtue.deepPurple,
    flex: 1,
  },
  badge: {
    backgroundColor: Colors.virtue.burgundy,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  badgeText: {
    color: Colors.virtue.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default DrawerMenu;
