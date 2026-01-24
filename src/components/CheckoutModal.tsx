import React, { useState } from 'react'; 
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { useCart } from '../context/CartContext';

const { width } = Dimensions.get('window');

interface CheckoutModalProps {
  visible: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ visible, onClose }) => {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [provider, setProvider] = useState<'paystack' | 'flutterwave'>('paystack');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = async () => {
    if (!name.trim() || !email.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // 1. Create cart session
      const cartResponse = await fetch('http://localhost:3001/api/cart/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart, total })
      });

      const cartData = await cartResponse.json();
      if (!cartData.success) throw new Error('Failed to create cart session');

      const sessionId = cartData.sessionId;

      // 2. Initialize Payment
      const endpoint = provider === 'paystack'
        ? 'http://localhost:3001/api/payment/paystack/initialize'
        : 'http://localhost:3001/api/payment/flutterwave/initialize';

      const paymentResponse = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, email, amount: total, name, items: cart })
      });

      const paymentData = await paymentResponse.json();

      if (paymentData.success && paymentData.paymentUrl) {
        setPaymentUrl(paymentData.paymentUrl);
      } else {
        throw new Error(paymentData.message || 'Payment initialization failed');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.title}>Complete Your Order</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <View style={styles.orderSummary}>
              <Text style={styles.summaryTitle}>Order Summary</Text>
              {cart.map((item, index) => (
                <View key={index} style={styles.item}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>${item.price} × {item.quantity}</Text>
                </View>
              ))}
              <View style={styles.total}>
                <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
              </View>
            </View>

            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
                placeholderTextColor="#666"
              />

              <TextInput
                style={styles.input}
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#666"
              />

              <View style={styles.providerContainer}>
                <Text style={styles.providerLabel}>Payment Method</Text>
                <View style={styles.providerButtons}>
                  <TouchableOpacity
                    style={[styles.providerButton, provider === 'paystack' && styles.providerActive]}
                    onPress={() => setProvider('paystack')}
                  >
                    <Text style={[styles.providerText, provider === 'paystack' && styles.providerTextActive]}>
                      Paystack
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.providerButton, provider === 'flutterwave' && styles.providerActive]}
                    onPress={() => setProvider('flutterwave')}
                  >
                    <Text style={[styles.providerText, provider === 'flutterwave' && styles.providerTextActive]}>
                      Flutterwave
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {error ? <Text style={styles.error}>{error}</Text> : null}

              <TouchableOpacity
                style={[styles.payButton, loading && styles.payButtonDisabled]}
                onPress={handlePayment}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.payButtonText}>Pay Now - ${total.toFixed(2)}</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: width * 0.9,
    maxWidth: 400,
    maxHeight: '80%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#121212',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    fontSize: 24,
    color: '#666',
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  orderSummary: {
    marginBottom: 24,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#121212',
    marginBottom: 12,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
    color: '#2d2d2d',
  },
  itemPrice: {
    fontSize: 16,
    color: '#666',
  },
  total: {
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    paddingTop: 12,
    marginTop: 12,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#121212',
    textAlign: 'right',
  },
  form: {
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: '#121212',
  },
  providerContainer: {
    marginBottom: 8,
  },
  providerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#121212',
    marginBottom: 12,
  },
  providerButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  providerButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 8,
    alignItems: 'center',
  },
  providerActive: {
    borderColor: '#4B2E83',
    backgroundColor: '#4B2E83',
  },
  providerText: {
    fontSize: 16,
    color: '#666',
  },
  providerTextActive: {
    color: '#fff',
  },
  error: {
    color: '#e74c3c',
    fontSize: 14,
    textAlign: 'center',
  },
  payButton: {
    backgroundColor: '#2E1A55',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  payButtonDisabled: {
    opacity: 0.6,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  webview: {
    flex: 1,
    height: 400,
  },
});

export default CheckoutModal;
