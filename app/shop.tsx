import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useCart } from '../contexts/CartContext';
import { Colors } from '../constants/Colors';
import ProductCard from '../components/ProductCard';

const ShopScreen: React.FC = () => {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      title: 'Speaking Virtue: Vol I',
      category: 'Resources',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'The Daily Stoic Journal',
      category: 'Formation',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Visual Arts Tee',
      category: 'Expressions',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?q=80&w=600&auto=format&fit=crop',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>Our Collection</Text>
        <Text style={styles.title}>Formational Resources</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>
          Curated tools for spiritual, moral, and intellectual growth. Each item is designed to foster virtue and deepen understanding.
        </Text>
      </View>

      <View style={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addItem({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
            })}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8F6',
    paddingTop: 120,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 80,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.virtue.accent,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: '600',
    color: Colors.virtue.black,
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: 'serif',
  },
  divider: {
    width: 48,
    height: 1,
    backgroundColor: Colors.virtue.purple,
    marginBottom: 32,
  },
  description: {
    fontSize: 18,
    color: Colors.virtue.grey,
    textAlign: 'center',
    lineHeight: 28,
    maxWidth: 600,
  },
  grid: {
    paddingHorizontal: 24,
    paddingBottom: 80,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 32,
  },
});

export default ShopScreen;
