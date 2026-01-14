
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useCart } from '../context/CartContext';
import Toast from 'react-native-toast-message';
import Header from '../components/Header';

const { width } = Dimensions.get('window');

const products = [
  {
    id: 1,
    title: 'Speaking Virtue: Vol I',
    price: 25,
    img: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=600&auto=format&fit=crop',
    category: 'Resources'
  },
  {
    id: 2,
    title: 'The Daily Stoic Journal',
    price: 18,
    img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
    category: 'Formation'
  },
  {
    id: 3,
    title: 'Visual Arts Tee',
    price: 32,
    img: 'https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?q=80&w=600&auto=format&fit=crop',
    category: 'Expressions'
  },
  {
    id: 4,
    title: 'Philosophy of Virtue',
    price: 28,
    img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=600&auto=format&fit=crop',
    category: 'Resources'
  },
  {
    id: 5,
    title: 'Meditations Notebook',
    price: 15,
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    category: 'Formation'
  },
  {
    id: 6,
    title: 'Sacred Art Print',
    price: 45,
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=600&auto=format&fit=crop',
    category: 'Expressions'
  }
];

const ShopScreen = ({ navigation }: any) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart(product.id, product.title, product.price, product.img);
    Toast.show({
      type: 'success',
      text1: 'Added to Cart',
      text2: `${product.title} has been added to your cart.`,
    });
  };

  return (
    <View style={styles.container}>
      <Header currentScreen="Shop" />

      <ScrollView style={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Curated Resources</Text>
          <Text style={styles.headerSubtitle}>Tools for spiritual growth and intellectual formation</Text>
        </View>

        {/* Products Grid */}
        <View style={styles.productsGrid}>
          {products.map((product) => (
            <View key={product.id} style={styles.productCard}>
              <Image source={{ uri: product.img }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{product.title}</Text>
                <Text style={styles.productCategory}>{product.category}</Text>
                <Text style={styles.productPrice}>${product.price}</Text>
                <TouchableOpacity
                  style={styles.addToCartButton}
                  onPress={() => handleAddToCart(product)}
                >
                  <Text style={styles.addToCartText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Cart Button */}
        <TouchableOpacity
          style={styles.viewCartButton}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.viewCartText}>View Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8F6',
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    padding: 32,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0a0a0a',
    marginBottom: 16,
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 28,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between',
  },
  productCard: {
    width: (width - 48) / 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 16,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E1A55',
    marginBottom: 4,
  },
  productCategory: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#666666',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B2E83',
    marginBottom: 16,
  },
  addToCartButton: {
    backgroundColor: '#2E1A55',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  viewCartButton: {
    backgroundColor: '#4B2E83',
    margin: 32,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewCartText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default ShopScreen;
