import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useCart } from '../contexts/CartContext';
import { Colors } from '../constants/Colors';

const CartScreen: React.FC = () => {
  const router = useRouter();
  const { items, removeItem, updateQty, total } = useCart();

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.emptyIcon}>
          <Text style={styles.emptyIconText}>🛒</Text>
        </View>
        <Text style={styles.emptyTitle}>Your cart is currently empty.</Text>
        <TouchableOpacity
          style={styles.returnButton}
          onPress={() => router.push('/shop')}
        >
          <Text style={styles.returnButtonText}>Return to Shop</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Shopping Cart</Text>
      </View>

      <View style={styles.cartContainer}>
        <View style={styles.itemsContainer}>
          {items.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                <View style={styles.quantityControls}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => updateQty(item.id, item.qty - 1)}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.qty}</Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => updateQty(item.id, item.qty + 1)}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.itemActions}>
                <TouchableOpacity onPress={() => removeItem(item.id)}>
                  <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
                <Text style={styles.itemTotal}>${(item.price * item.qty).toFixed(2)}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.summary}>
          <Text style={styles.summaryTitle}>Order Summary</Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>${total.toFixed(2)}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Shipping</Text>
            <Text style={styles.summaryNote}>Calculated at checkout</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Tax</Text>
            <Text style={styles.summaryNote}>—</Text>
          </View>

          <View style={styles.summaryDivider} />

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
          </View>

          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>

          <View style={styles.paymentIcons}>
            <Text style={styles.paymentIcon}>💳</Text>
            <Text style={styles.paymentIcon}>💳</Text>
            <Text style={styles.paymentIcon}>💳</Text>
          </View>
        </View>
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
    paddingVertical: 40,
  },
  title: {
    fontSize: 48,
    fontWeight: '600',
    color: Colors.virtue.deepPurple,
    fontFamily: 'serif',
  },
  cartContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 48,
  },
  itemsContainer: {
    flex: 1,
    gap: 24,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: Colors.virtue.white,
    padding: 24,
    borderRadius: 8,
    shadowColor: Colors.virtue.purple,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: Colors.virtue.light,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 24,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.virtue.deepPurple,
    marginBottom: 8,
    fontFamily: 'serif',
  },
  itemPrice: {
    fontSize: 14,
    color: Colors.virtue.grey,
    marginBottom: 16,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: Colors.virtue.light,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.virtue.charcoal,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.virtue.charcoal,
    minWidth: 24,
    textAlign: 'center',
  },
  itemActions: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  removeText: {
    fontSize: 14,
    color: Colors.virtue.burgundy,
    textDecorationLine: 'underline',
  },
  itemTotal: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.virtue.purple,
    fontFamily: 'serif',
  },
  summary: {
    width: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 32,
    borderRadius: 8,
    shadowColor: Colors.virtue.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  summaryTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.virtue.black,
    marginBottom: 32,
    fontFamily: 'serif',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  summaryLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.virtue.charcoal,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.virtue.black,
  },
  summaryNote: {
    fontSize: 14,
    color: Colors.virtue.grey,
    fontStyle: 'italic',
  },
  summaryDivider: {
    height: 1,
    backgroundColor: Colors.virtue.light,
    marginVertical: 24,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.virtue.purple,
    fontFamily: 'serif',
  },
  totalValue: {
    fontSize: 36,
    fontWeight: '600',
    color: Colors.virtue.black,
    fontFamily: 'serif',
  },
  checkoutButton: {
    backgroundColor: Colors.virtue.deepPurple,
    paddingVertical: 16,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: Colors.virtue.purple,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  checkoutButtonText: {
    color: Colors.virtue.white,
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  paymentIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    opacity: 0.4,
  },
  paymentIcon: {
    fontSize: 24,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 120,
  },
  emptyIcon: {
    width: 80,
    height: 80,
    backgroundColor: Colors.virtue.light,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  emptyIconText: {
    fontSize: 32,
  },
  emptyTitle: {
    fontSize: 20,
    color: Colors.virtue.charcoal,
    marginBottom: 32,
    fontFamily: 'serif',
  },
  returnButton: {
    backgroundColor: Colors.virtue.black,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 4,
  },
  returnButtonText: {
    color: Colors.virtue.white,
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default CartScreen;
