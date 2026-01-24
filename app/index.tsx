import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useCart } from '../contexts/CartContext';
import { Colors } from '../constants/Colors';
import VirtueCard from '../components/VirtueCard';
import ProductCard from '../components/ProductCard';

const { width, height } = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const router = useRouter();
  const { addItem } = useCart();
  const floatAnim1 = React.useRef(new Animated.Value(0)).current;
  const floatAnim2 = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const animateFloat = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(floatAnim1, {
            toValue: -10,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(floatAnim1, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
          }),
        ])
      ).start();

      Animated.loop(
        Animated.sequence([
          Animated.timing(floatAnim2, {
            toValue: -10,
            duration: 4000,
            useNativeDriver: true,
          }),
          Animated.timing(floatAnim2, {
            toValue: 0,
            duration: 4000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animateFloat();
  }, []);

  const theologicalVirtues = [
    {
      icon: '',
      title: 'Faith',
      description: 'Orienting the intellect toward God.',
    },
    {
      icon: '',
      title: 'Hope',
      description: 'Orienting the will toward God as our happiness.',
    },
    {
      icon: '',
      title: 'Charity',
      description: 'Union with God through love.',
    },
  ];

  const cardinalVirtues = [
    {
      icon: '',
      title: 'Prudence',
      description: 'Ordering Moral Life',
    },
    {
      icon: '⚖️',
      title: 'Justice',
      description: 'Giving What Is Due',
    },
    {
      icon: '',
      title: 'Fortitude',
      description: 'Courage In Difficulty',
    },
    {
      icon: '',
      title: 'Temperance',
      description: 'Moderation of Pleasure',
    },
  ];

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
      {/* Hero Section */}
      <View style={styles.hero}>
        <Animated.View style={[styles.blob1, { transform: [{ translateY: floatAnim1 }] }]}>
          <View style={styles.blob} />
        </Animated.View>
        <Animated.View style={[styles.blob2, { transform: [{ translateY: floatAnim2 }] }]}>
          <View style={styles.blob} />
        </Animated.View>

        <View style={styles.heroContent}>
          <View style={styles.badge}>
            <View style={styles.badgeDot} />
            <Text style={styles.badgeText}>Welcome to Speaking Virtue</Text>
          </View>

          <Text style={styles.heroTitle}>
            Truth Spoken.{'\n'}
            Virtue Lived.{'\n'}
            <Text style={styles.heroTitleItalic}>Love Revealed.</Text>
          </Text>

          <Text style={styles.heroSubtitle}>
            Speaking Virtue is a Catholic organisation dedicated to the spiritual, moral, and intellectual formation of the human person.
          </Text>

          <View style={styles.heroButtons}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => router.push('/shop')}
            >
              <Text style={styles.primaryButtonText}>Explore Resources</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => router.push('/articles')}
            >
              <Text style={styles.secondaryButtonText}>Read Journal →</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Lottie Animation Placeholder */}
        <View style={styles.heroAnimation}>
          <Text style={styles.animationPlaceholder}>🎭 Lottie Animation</Text>
        </View>
      </View>

      {/* Virtues Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Why Virtue Matters Today</Text>
          <View style={styles.sectionDivider} />
          <Text style={styles.sectionSubtitle}>
            In an age marked by moral relativism, Speaking Virtue exists as a steady and faithful voice. Virtue is the discipline that orders desire, strengthens the will, and aligns human freedom with divine wisdom.
          </Text>
        </View>

        {/* Theological Virtues */}
        <View style={styles.virtuesHeader}>
          <View style={styles.virtuesDivider} />
          <Text style={styles.virtuesTitle}>The Theological Virtues</Text>
          <View style={styles.virtuesDivider} />
        </View>

        <View style={styles.theologicalVirtues}>
          {theologicalVirtues.map((virtue, index) => (
            <VirtueCard
              key={index}
              icon={virtue.icon}
              title={virtue.title}
              description={virtue.description}
              isLarge
            />
          ))}
        </View>

        {/* Cardinal Virtues */}
        <View style={styles.virtuesHeader}>
          <View style={styles.virtuesDivider} />
          <Text style={styles.virtuesTitle}>The Cardinal Virtues</Text>
          <View style={styles.virtuesDivider} />
        </View>

        <View style={styles.cardinalVirtues}>
          {cardinalVirtues.map((virtue, index) => (
            <VirtueCard
              key={index}
              icon={virtue.icon}
              title={virtue.title}
              description={virtue.description}
            />
          ))}
        </View>
      </View>

      {/* Quote Section */}
      <View style={styles.quoteSection}>
        <LinearGradient
          colors={[Colors.virtue.deepPurple, 'rgba(46, 26, 85, 0.8)']}
          style={styles.quoteGradient}
        >
          <Text style={styles.quoteIcon}>❝</Text>
          <Text style={styles.quoteText}>
            "No greater joy can I have than this, to hear that my children follow the truth."
          </Text>
          <View style={styles.quoteDivider}>
            <View style={styles.quoteLine} />
            <Text style={styles.quoteReference}>3 John 1:4</Text>
            <View style={styles.quoteLine} />
          </View>
        </LinearGradient>
      </View>

      {/* Products Section */}
      <View style={styles.productsSection}>
        <View style={styles.productsHeader}>
          <Text style={styles.productsSubtitle}>Our Offerings</Text>
          <Text style={styles.productsTitle}>Curated for the Soul</Text>
          <View style={styles.productsFeatures}>
            <Text style={styles.productsFeature}>✓ In-depth Articles grounded in Tradition</Text>
            <Text style={styles.productsFeature}>✓ Creative Expressions of faith</Text>
            <Text style={styles.productsFeature}>✓ Formational Resources</Text>
            <Text style={styles.productsFeature}>✓ A Faithful Community</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
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
      </View>

      {/* Newsletter Section */}
      <View style={styles.newsletterSection}>
        <LinearGradient
          colors={[Colors.virtue.deepPurple, Colors.virtue.purple]}
          style={styles.newsletterGradient}
        >
          <View style={styles.newsletterShapes}>
            <View style={styles.newsletterShape1} />
            <View style={styles.newsletterShape2} />
          </View>

          <View style={styles.newsletterContent}>
            <Text style={styles.newsletterIcon}>✉️</Text>
            <Text style={styles.newsletterTitle}>Join the Order</Text>
            <Text style={styles.newsletterSubtitle}>
              Subscribe to receive our weekly dispatch on philosophy, art, and the pursuit of excellence. No spam, only substance.
            </Text>

            <View style={styles.newsletterForm}>
              <View style={styles.newsletterInput}>
                <Text style={styles.newsletterPlaceholder}>Email Address</Text>
              </View>
              <TouchableOpacity style={styles.newsletterButton}>
                <Text style={styles.newsletterButtonText}>Subscribe</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8F6',
  },
  hero: {
    minHeight: height * 0.9,
    justifyContent: 'center',
    paddingTop: 120,
    paddingHorizontal: 24,
    overflow: 'hidden',
  },
  blob1: {
    position: 'absolute',
    top: 100,
    right: -100,
    width: 300,
    height: 300,
  },
  blob2: {
    position: 'absolute',
    bottom: 100,
    left: -100,
    width: 400,
    height: 400,
  },
  blob: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
    backgroundColor: 'rgba(75, 46, 131, 0.1)',
  },
  heroContent: {
    alignItems: 'center',
    zIndex: 1,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: 'rgba(75, 46, 131, 0.2)',
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.virtue.purple,
    marginRight: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.virtue.purple,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: '600',
    color: Colors.virtue.black,
    textAlign: 'center',
    lineHeight: 56,
    marginBottom: 24,
    fontFamily: 'serif',
  },
  heroTitleItalic: {
    fontStyle: 'italic',
    color: Colors.virtue.purple,
  },
  heroSubtitle: {
    fontSize: 18,
    color: Colors.virtue.grey,
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 48,
    maxWidth: 600,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  primaryButton: {
    backgroundColor: Colors.virtue.deepPurple,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 4,
    shadowColor: Colors.virtue.purple,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  primaryButtonText: {
    color: Colors.virtue.white,
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: 'rgba(75, 46, 131, 0.3)',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 4,
  },
  secondaryButtonText: {
    color: Colors.virtue.purple,
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  heroAnimation: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: -150 }],
    width: 400,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(75, 46, 131, 0.05)',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  animationPlaceholder: {
    fontSize: 18,
    color: Colors.virtue.purple,
    fontWeight: '600',
  },
  section: {
    paddingVertical: 120,
    paddingHorizontal: 24,
    backgroundColor: Colors.virtue.white,
  },
  sectionHeader: {
    alignItems: 'center',
    marginBottom: 80,
  },
  sectionTitle: {
    fontSize: 48,
    fontWeight: '600',
    color: Colors.virtue.black,
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: 'serif',
  },
  sectionDivider: {
    width: 48,
    height: 1,
    backgroundColor: Colors.virtue.purple,
    marginBottom: 32,
  },
  sectionSubtitle: {
    fontSize: 18,
    color: Colors.virtue.grey,
    textAlign: 'center',
    lineHeight: 28,
    maxWidth: 800,
  },
  virtuesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 48,
  },
  virtuesDivider: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(75, 46, 131, 0.2)',
    marginHorizontal: 24,
  },
  virtuesTitle: {
    fontSize: 24,
    fontStyle: 'italic',
    color: Colors.virtue.charcoal,
    fontFamily: 'serif',
  },
  theologicalVirtues: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 80,
    gap: 32,
  },
  cardinalVirtues: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 24,
  },
  quoteSection: {
    paddingVertical: 120,
    paddingHorizontal: 24,
  },
  quoteGradient: {
    paddingVertical: 80,
    paddingHorizontal: 48,
    borderRadius: 16,
    alignItems: 'center',
  },
  quoteIcon: {
    fontSize: 64,
    color: Colors.virtue.gold,
    marginBottom: 32,
  },
  quoteText: {
    fontSize: 36,
    fontWeight: '600',
    color: Colors.virtue.white,
    textAlign: 'center',
    lineHeight: 48,
    marginBottom: 32,
    fontFamily: 'serif',
  },
  quoteDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  quoteLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.virtue.white,
    opacity: 0.5,
  },
  quoteReference: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.virtue.white,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  productsSection: {
    paddingVertical: 120,
    paddingHorizontal: 24,
    backgroundColor: Colors.virtue.light,
  },
  productsHeader: {
    alignItems: 'flex-start',
    marginBottom: 80,
    maxWidth: 600,
  },
  productsSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.virtue.accent,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 16,
  },
  productsTitle: {
    fontSize: 48,
    fontWeight: '600',
    color: Colors.virtue.black,
    marginBottom: 32,
    fontFamily: 'serif',
  },
  productsFeatures: {
    gap: 8,
  },
  productsFeature: {
    fontSize: 16,
    color: Colors.virtue.charcoal,
    flexDirection: 'row',
    alignItems: 'center',
  },
  newsletterSection: {
    paddingVertical: 120,
    paddingHorizontal: 24,
    overflow: 'hidden',
  },
  newsletterGradient: {
    paddingVertical: 80,
    paddingHorizontal: 48,
    borderRadius: 16,
    alignItems: 'center',
    position: 'relative',
  },
  newsletterShapes: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  newsletterShape1: {
    position: 'absolute',
    top: -100,
    left: -100,
    width: 300,
    height: 300,
    backgroundColor: Colors.virtue.burgundy,
    borderRadius: 150,
    opacity: 0.3,
  },
  newsletterShape2: {
    position: 'absolute',
    bottom: -100,
    right: -100,
    width: 400,
    height: 400,
    backgroundColor: Colors.virtue.purple,
    borderRadius: 200,
    opacity: 0.2,
  },
  newsletterContent: {
    alignItems: 'center',
    zIndex: 1,
  },
  newsletterIcon: {
    fontSize: 48,
    marginBottom: 24,
  },
  newsletterTitle: {
    fontSize: 48,
    fontWeight: '600',
    color: Colors.virtue.white,
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: 'serif',
  },
  newsletterSubtitle: {
    fontSize: 18,
    color: Colors.virtue.white,
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 48,
    maxWidth: 600,
    opacity: 0.9,
  },
  newsletterForm: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
    maxWidth: 500,
  },
  newsletterInput: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 16,
    justifyContent: 'center',
  },
  newsletterPlaceholder: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 16,
  },
  newsletterButton: {
    backgroundColor: Colors.virtue.white,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
  },
  newsletterButtonText: {
    color: Colors.virtue.deepPurple,
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default HomeScreen;
