import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Colors } from '../constants/Colors';

interface VirtueCardProps {
  icon: string;
  title: string;
  description: string;
  isLarge?: boolean;
}

const VirtueCard: React.FC<VirtueCardProps> = ({
  icon,
  title,
  description,
  isLarge = false,
}) => {
  const [isActive, setIsActive] = useState(false);
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    setIsActive(!isActive);
    Animated.spring(scaleAnim, {
      toValue: isActive ? 1 : 1.05,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[{ transform: [{ scale: scaleAnim }] }]}>
      <TouchableOpacity
        style={[
          styles.card,
          isLarge ? styles.largeCard : styles.smallCard,
          isActive && styles.activeCard,
        ]}
        onPress={handlePress}
        activeOpacity={0.9}
      >
        <View style={[styles.iconContainer, isActive && styles.activeIconContainer]}>
          <Text style={[styles.icon, isActive && styles.activeIcon]}>{icon}</Text>
        </View>
        <Text style={[styles.title, isActive && styles.activeTitle]}>{title}</Text>
        <Text style={[styles.description, isActive && styles.activeDescription]}>
          {description}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.virtue.light,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    shadowColor: Colors.virtue.purple,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 4,
  },
  largeCard: {
    padding: 40,
  },
  smallCard: {
    padding: 20,
  },
  activeCard: {
    backgroundColor: Colors.virtue.purple,
    borderColor: Colors.virtue.purple,
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
    transform: [{ translateY: -4 }],
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.virtue.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: Colors.virtue.purple,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activeIconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  icon: {
    fontSize: 28,
    color: Colors.virtue.purple,
    fontFamily: 'FontAwesome',
  },
  activeIcon: {
    color: Colors.virtue.white,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.virtue.deepPurple,
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'serif',
  },
  activeTitle: {
    color: Colors.virtue.white,
  },
  description: {
    fontSize: 14,
    color: Colors.virtue.grey,
    textAlign: 'center',
    lineHeight: 20,
  },
  activeDescription: {
    color: Colors.virtue.white,
  },
});

export default VirtueCard;
