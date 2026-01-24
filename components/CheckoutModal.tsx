import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Modal } from 'react-native';
import { useCart } from '../contexts/CartContext';
import { Colors } from '../constants/Colors';
import { createCartSession, initializePayment } from '../utils/api';

interface CheckoutModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isVisible, onClose }) => {
  const { items, total, clearCart } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentProvider, setPaymentProvider] = useState<'paystack' | 'flutterwave'>('paystack');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const handlePayment = async () => {
    if (!name || !email) {
      setError('Please fill in all fields');
      return;
    }

    setIsProcessing(true);
    setError('');

    try {
      // Create cart session
      const cartResponse = await createCartSession({
        items,
        total,
      });

      if (!cartResponse.success) {
        throw new Error('Failed to create cart session');
      }

      // Initialize payment
      const paymentResponse = await initializePayment(paymentProvider, {
        sessionId: cartResponse.sessionId,
        email,
        amount: total,
        name,
        items,
      });

      if (paymentResponse.success && paymentResponse.paymentUrl) {
        // In a real app, this would open the payment URL
        console.log('Payment URL:', paymentResponse.paymentUrl);
        clearCart();
        onClose();
      } else {
        throw new Error(paymentResponse.message || 'Payment initialization failed');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.title}>Secure Checkout</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeIcon}>✕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.totalSection}>
            <Text style={styles.totalLabel}>Total Due</Text>
            <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your full name"
                placeholderTextColor={Colors.virtue.grey}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor={Colors.virtue.grey}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Select Payment Method</Text>
              <View style={styles.paymentOptions}>
                <TouchableOpacity
                  style={[
                    styles.paymentOption,
                    paymentProvider === 'paystack' && styles.paymentOptionSelected,
                  ]}
                  onPress={() => setPaymentProvider('paystack')}
                >
                  <Text style={[
                    styles.paymentOptionText,
                    paymentProvider === 'paystack' && styles.paymentOptionTextSelected,
                  ]}>
                    Paystack
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.paymentOption,
                    paymentProvider === 'flutterwave' && styles.paymentOptionSelected,
                  ]}
                  onPress={() => setPaymentProvider('flutterwave')}
                >
                  <Text style={[
                    styles.paymentOptionText,
                    paymentProvider === 'flutterwave' && styles.paymentOptionTextSelected,
                  ]}>
                    Flutterwave
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={[styles.payButton, isProcessing && styles.payButtonDisabled]}
              onPress={handlePayment}
              disabled={isProcessing}
            >
              <Text style={styles.payButtonText}>
                {isProcessing ? 'Processing...' : 'Pay Now'}
              </Text>
            </TouchableOpacity>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(46, 26, 85, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modal: {
    backgroundColor: Colors.virtue.white,
    borderRadius: 8,
    padding: 32,
    width: '100%',
    maxWidth: 500,
    shadowColor: Colors.virtue.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.virtue.light,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.virtue.deepPurple,
    fontFamily: 'serif',
  },
  closeIcon: {
    fontSize: 24,
    color: Colors.virtue.grey,
  },
  totalSection: {
    backgroundColor: Colors.virtue.light,
    padding: 16,
    borderRadius: 8,
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.virtue.charcoal,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  totalValue: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.virtue.purple,
    fontFamily: 'serif',
  },
  form: {
    gap: 24,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.virtue.grey,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.virtue.light,
    borderRadius: 4,
    padding: 16,
    fontSize: 16,
    backgroundColor: Colors.virtue.light,
    color: Colors.virtue.black,
  },
  paymentOptions: {
    flexDirection: 'row',
    gap: 16,
  },
  paymentOption: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.virtue.light,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
  },
  paymentOptionSelected: {
    borderColor: Colors.virtue.purple,
    backgroundColor: 'rgba(75, 46, 131, 0.05)',
  },
  paymentOptionText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.virtue.deepPurple,
  },
  paymentOptionTextSelected: {
    color: Colors.virtue.purple,
  },
  payButton: {
    backgroundColor: Colors.virtue.purple,
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16,
  },
  payButtonDisabled: {
    opacity: 0.6,
  },
  payButtonText: {
    color: Colors.virtue.white,
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  errorText: {
    color: Colors.virtue.burgundy,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 16,
  },
});

export default CheckoutModal;
