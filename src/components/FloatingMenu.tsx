import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

interface FloatingMenuProps {
  currentScreen?: string;
}

const FloatingMenu: React.FC<FloatingMenuProps> = ({ currentScreen }) => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const menuItems = [
    { name: 'Home', screen: 'Home', icon: 'home' },
    { name: 'About', screen: 'About', icon: 'info-circle' },
    { name: 'Journal', screen: 'Articles', icon: 'book' },
    { name: 'Shop', screen: 'Shop', icon: 'shopping-bag' },
    { name: 'Cart', screen: 'Cart', icon: 'shopping-cart' },
  ];

  const toggleMenu = () => {
    const toValue = isOpen ? 0 : 1;
    Animated.timing(animation, {
      toValue,
      duration: 300,
      easing: Easing.elastic(1),
      useNativeDriver: true,
    }).start();
    setIsOpen(!isOpen);
  };

  const navigateTo = (screen: string) => {
    navigation.navigate(screen as never);
    setIsOpen(false);
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const renderMenuItems = () => {
    return menuItems.map((item, index) => {
      const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -(index + 1) * 60],
      });
      const opacity = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0.5, 1],
      });
      const scale = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0.3, 1],
      });

      return (
        <Animated.View
          key={item.name}
          style={[
            styles.menuItem,
            {
              transform: [{ translateY }, { scale }],
              opacity,
            },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.menuButton,
              currentScreen === item.screen && styles.activeMenuButton,
            ]}
            onPress={() => navigateTo(item.screen)}
          >
            <Icon
              name={item.icon}
              size={20}
              color={currentScreen === item.screen ? '#FFFFFF' : '#4B2E83'}
            />
            <Text
              style={[
                styles.menuText,
                currentScreen === item.screen && styles.activeMenuText,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      );
    });
  };

  return (
    <View style={styles.container}>
      {renderMenuItems()}
      <TouchableOpacity style={styles.fab} onPress={toggleMenu}>
        <Animated.View
          style={{
            transform: [
              {
                rotate: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '45deg'],
                }),
              },
            ],
          }}
        >
          <Icon name="plus" size={24} color="#FFFFFF" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4B2E83',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  menuItem: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 24,
    marginBottom: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: 'rgba(75, 46, 131, 0.1)',
  },
  activeMenuButton: {
    backgroundColor: '#4B2E83',
  },
  menuText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4B2E83',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  activeMenuText: {
    color: '#FFFFFF',
  },
});

export default FloatingMenu;
