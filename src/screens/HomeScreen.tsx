import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <View style={styles.welcomeBadge}>
              <View style={styles.pulseDot} />
              <Text style={styles.welcomeText}>Welcome to Speaking Virtue</Text>
            </View>

            <Text style={styles.heroTitle}>
              Truth Spoken. {'\n'}
              <Text style={styles.heroTitleCharcoal}>Virtue Lived.</Text> {'\n'}
              <Text style={styles.heroTitleItalic}>Love Revealed.</Text>
            </Text>

            <Text style={styles.heroSubtitle}>
              Speaking Virtue is a Catholic organisation dedicated to the spiritual, moral, and intellectual formation of the human person.
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.exploreButton}
                onPress={() => router.push('/shop')}
              >
                <Text style={styles.exploreButtonText}>Explore Resources</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.journalButton}
                onPress={() => router.push('/articles')}
              >
                <Text style={styles.journalButtonText}>Read Journal &rarr;</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Hero Animation Placeholder */}
          <View style={styles.animationContainer}>
            <Text style={styles.animationPlaceholder}>[Lottie Animation Here]</Text>
          </View>
        </View>

        {/* Why Virtue Matters */}
        <View style={styles.virtuesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Why Virtue Matters Today</Text>
            <View style={styles.sectionDivider} />
            <Text style={styles.sectionDescription}>
              In an age marked by moral relativism, Speaking Virtue exists as a steady and faithful voice. Virtue is the discipline that orders desire, strengthens the will, and aligns human freedom with divine wisdom.
            </Text>
          </View>

          {/* Theological Virtues */}
          <View style={styles.theologicalSection}>
            <View style={styles.virtueHeader}>
              <View style={styles.headerLine} />
              <Text style={styles.virtueTitle}>The Theological Virtues</Text>
              <View style={styles.headerLine} />
            </View>

            <View style={styles.virtuesGrid}>
              <TouchableOpacity style={styles.virtueCard}>
                <View style={styles.iconCircle}>
                  <Text style={styles.iconText}>🙏</Text>
                </View>
                <Text style={styles.virtueName}>Faith</Text>
                <Text style={styles.virtueDescription}>Orienting the intellect toward God.</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.virtueCard}>
                <View style={styles.iconCircle}>
                  <Text style={styles.iconText}>🕊️</Text>
                </View>
                <Text style={styles.virtueName}>Hope</Text>
                <Text style={styles.virtueDescription}>Orienting the will toward God as our happiness.</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.virtueCard}>
                <View style={styles.iconCircle}>
                  <Text style={styles.iconText}>❤️</Text>
                </View>
                <Text style={styles.virtueName}>Charity</Text>
                <Text style={styles.virtueDescription}>Union with God through love.</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Cardinal Virtues */}
          <View style={styles.cardinalSection}>
            <View style={styles.virtueHeader}>
              <View style={styles.headerLine} />
              <Text style={styles.virtueTitle}>The Cardinal Virtues</Text>
              <View style={styles.headerLine} />
            </View>

            <View style={styles.cardinalGrid}>
              <View style={styles.cardinalCard}>
                <Text style={styles.cardinalIcon}>🧠</Text>
                <Text style={styles.cardinalName}>Prudence</Text>
                <Text style={styles.cardinalDescription}>Ordering Moral Life</Text>
              </View>

              <View style={styles.cardinalCard}>
                <Text style={styles.cardinalIcon}>⚖️</Text>
                <Text style={styles.cardinalName}>Justice</Text>
                <Text style={styles.cardinalDescription}>Giving What Is Due</Text>
              </View>

              <View style={styles.cardinalCard}>
                <Text style={styles.cardinalIcon}>🛡️</Text>
                <Text style={styles.cardinalName}>Fortitude</Text>
                <Text style={styles.cardinalDescription}>Courage In Difficulty</Text>
              </View>

              <View style={styles.cardinalCard}>
                <Text style={styles.cardinalIcon}>🤝</Text>
                <Text style={styles.cardinalName}>Temperance</Text>
                <Text style={styles.cardinalDescription}>Moderation of Pleasure</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Parallax Quote */}
        <View style={styles.quoteSection}>
          <Text style={styles.quoteIcon}>❝</Text>
          <Text style={styles.quoteText}>
            "No greater joy can I have than this, to hear that my children follow the truth."
          </Text>
          <View style={styles.quoteAuthorContainer}>
            <View style={styles.authorLine} />
            <Text style={styles.quoteAuthor}>3 John 1:4</Text>
            <View style={styles.authorLine} />
          </View>
        </View>

        {/* What You Will Find Here */}
        <View style={styles.offeringsSection}>
          <View style={styles.offeringsHeader}>
            <View style={styles.offeringsLeft}>
              <Text style={styles.offeringsLabel}>Our Offerings</Text>
              <Text style={styles.offeringsTitle}>Curated for the Soul</Text>
              <View style={styles.offeringsList}>
                <Text style={styles.offeringItem}>✓ In-depth Articles grounded in Tradition</Text>
                <Text style={styles.offeringItem}>✓ Creative Expressions of faith</Text>
                <Text style={styles.offeringItem}>✓ Formational Resources</Text>
                <Text style={styles.offeringItem}>✓ A Faithful Community</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.viewResourcesButton}
              onPress={() => router.push('/shop')}
            >
              <Text style={styles.viewResourcesText}>View Resources &rarr;</Text>
            </TouchableOpacity>
          </View>

          {/* Featured Products Preview */}
          <View style={styles.productsGrid}>
            <TouchableOpacity style={styles.productCard} onPress={() => router.push('/shop')}>
              <View style={styles.productImageContainer}>
                <Text style={styles.imagePlaceholder}>[Image Here]</Text>
                <View style={styles.shopNowBadge}>
                  <Text style={styles.shopNowText}>Shop Now</Text>
                </View>
              </View>
              <Text style={styles.productTitle}>Speaking Virtue: Vol I</Text>
              <Text style={styles.productCategory}>Resources</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.productCard} onPress={() => router.push('/shop')}>
              <View style={styles.productImageContainer}>
                <Text style={styles.imagePlaceholder}>[Image Here]</Text>
                <View style={styles.shopNowBadge}>
                  <Text style={styles.shopNowText}>Shop Now</Text>
                </View>
              </View>
              <Text style={styles.productTitle}>The Daily Stoic Journal</Text>
              <Text style={styles.productCategory}>Formation</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.productCard} onPress={() => router.push('/shop')}>
              <View style={styles.productImageContainer}>
                <Text style={styles.imagePlaceholder}>[Image Here]</Text>
                <View style={styles.shopNowBadge}>
                  <Text style={styles.shopNowText}>Shop Now</Text>
                </View>
              </View>
              <Text style={styles.productTitle}>Visual Arts Tee</Text>
              <Text style={styles.productCategory}>Expressions</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Newsletter Section */}
        <View style={styles.newsletterSection}>
          <View style={styles.newsletterContent}>
            <View style={styles.newsletterIcon}>
              <Text style={styles.newsletterIconText}>✉️</Text>
            </View>
            <Text style={styles.newsletterTitle}>Join the Order</Text>
            <Text style={styles.newsletterSubtitle}>
              Subscribe to receive our weekly dispatch on philosophy, art, and the pursuit of excellence. No spam, only substance.
            </Text>
            <View style={styles.newsletterForm}>
              <TextInput
                style={styles.newsletterInput}
                placeholder="Email Address"
                placeholderTextColor="#ffffff80"
                keyboardType="email-address"
              />
              <TouchableOpacity style={styles.subscribeButton}>
                <Text style={styles.subscribeButtonText}>Subscribe</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8F6',
  },
  scrollView: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  heroSection: {
    minHeight: Dimensions.get('window').height * 0.9,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  blob1: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 500,
    height: 500,
    backgroundColor: 'rgba(75, 46, 131, 0.1)',
    borderRadius: 250,
  },
  blob2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 600,
    height: 600,
    backgroundColor: 'rgba(139, 21, 56, 0.05)',
    borderRadius: 300,
  },
  heroContent: {
    maxWidth: 1200,
    width: '100%',
    flexDirection: width > 768 ? 'row' : 'column',
    alignItems: 'center',
    zIndex: 1,
  },
  textContent: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 40,
  },
  welcomeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(75, 46, 131, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 32,
  },
  pulseDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4B2E83',
    marginRight: 8,
  },
  welcomeText: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#4B2E83',
  },
  heroTitle: {
    fontSize: width > 768 ? 72 : 48,
    fontWeight: 'bold',
    color: '#121212',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 72,
  },
  heroTitleCharcoal: {
    color: '#2D2D2D',
  },
  heroTitleItalic: {
    fontStyle: 'italic',
    color: '#4B2E83',
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 40,
    maxWidth: 500,
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: width > 640 ? 'row' : 'column',
    gap: 16,
  },
  exploreButton: {
    backgroundColor: '#2E1A55',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  exploreButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  journalButton: {
    borderWidth: 1,
    borderColor: 'rgba(75, 46, 131, 0.3)',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  journalButtonText: {
    color: '#4B2E83',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  animationContainer: {
    flex: 1,
    textAlign: 'center',
    marginBottom: 24,
    height: width > 768 ? Dimensions.get('window').height * 0.7 : Dimensions.get('window').height * 0.5,
    position: 'relative',
  },
  animationBorder: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    bottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(75, 46, 131, 0.1)',
    borderRadius: 50,
  },
  animationBackground: {
    flex: 1,
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 100,
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(75, 46, 131, 0.05)',
  },
  lottie: {
    width: '100%',
    height: '100%',
    maxWidth: 600,
  },
  animationOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(75, 46, 131, 0.2)',
  },
  animationPlaceholder: {
    fontSize: 14,
    color: '#666',
  },
  imagePlaceholder: {
    fontSize: 14,
    color: '#666',
  },
  virtuesSection: {
    paddingVertical: 128,
    backgroundColor: '#FFFFFF',
    position: 'relative',
    overflow: 'hidden',
  },
  textureOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.03,
    backgroundColor: '#000',
  },
  virtuesContent: {
    maxWidth: 1200,
    paddingHorizontal: 24,
    alignSelf: 'center',
  },
  sectionHeader: {
    alignItems: 'center',
    marginBottom: 80,
  },
  sectionTitle: {
    fontSize: width > 768 ? 48 : 36,
    fontWeight: 'bold',
    color: '#121212',
    textAlign: 'center',
    marginBottom: 24,
  },
  sectionDivider: {
    width: 96,
    height: 1,
    backgroundColor: '#4B2E83',
    marginBottom: 32,
  },
  sectionDescription: {
    maxWidth: 768,
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
  },
  theologicalSection: {
    marginBottom: 96,
  },
  virtueHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  headerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(75, 46, 131, 0.2)',
    maxWidth: 48,
  },
  virtueTitle: {
    fontSize: 24,
    fontStyle: 'italic',
    color: '#2D2D2D',
    marginHorizontal: 16,
  },
  virtuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  virtueCard: {
    width: (width - 48) / 3,
    padding: 40,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 32,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  iconText: {
    fontSize: 24,
  },
  virtueName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E1A55',
    marginBottom: 12,
  },
  virtueDescription: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 20,
  },
  cardinalSection: {
    marginBottom: 0,
  },
  cardinalGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  cardinalCard: {
    width: (width - 48) / 4,
    padding: 32,
    borderWidth: 1,
    borderColor: 'rgba(75, 46, 131, 0.1)',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },
  cardinalIcon: {
    fontSize: 48,
    marginBottom: 16,
    opacity: 0.8,
  },
  cardinalName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardinalDescription: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#666666',
  },
  quoteSection: {
    paddingVertical: 160,
    backgroundColor: '#2E1A55',
    position: 'relative',
  },
  quoteOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(46, 26, 85, 0.8)',
  },
  quoteContent: {
    alignItems: 'center',
    paddingHorizontal: 24,
    zIndex: 1,
  },
  quoteIcon: {
    fontSize: 60,
    color: '#DAA520',
    marginBottom: 40,
    opacity: 0.6,
  },
  quoteText: {
    fontSize: width > 768 ? 48 : 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 56,
    marginBottom: 40,
  },
  quoteAuthorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    maxWidth: 32,
  },
  quoteAuthor: {
    color: 'rgba(255, 255, 255, 0.8)',
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  offeringsSection: {
    paddingVertical: 128,
    backgroundColor: '#F5F2EB',
  },
  offeringsContent: {
    maxWidth: 1200,
    paddingHorizontal: 24,
    alignSelf: 'center',
  },
  offeringsHeader: {
    flexDirection: width > 768 ? 'row' : 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 80,
  },
  offeringsLeft: {
    flex: 1,
    marginBottom: width > 768 ? 0 : 40,
  },
  offeringsLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#6B3FA0',
    marginBottom: 16,
  },
  offeringsTitle: {
    fontSize: width > 768 ? 48 : 36,
    fontWeight: 'bold',
    color: '#121212',
    marginBottom: 32,
  },
  offeringsList: {
    gap: 16,
  },
  offeringItem: {
    fontSize: 18,
    color: '#2D2D2D',
    lineHeight: 24,
  },
  viewResourcesButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  viewResourcesText: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#2D2D2D',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  productCard: {
    width: (width - 48) / 3,
    marginBottom: 32,
  },
  productImageContainer: {
    aspectRatio: 3/4,
    marginBottom: 24,
    overflow: 'hidden',
    position: 'relative',
    borderRadius: 4,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(75, 46, 131, 0)',
  },
  shopNowBadge: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  shopNowText: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#121212',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productCategory: {
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#666666',
  },
  newsletterSection: {
    paddingVertical: 128,
    backgroundColor: '#2E1A55',
    position: 'relative',
    overflow: 'hidden',
  },
  newsletterShape1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    opacity: 0.2,
  },
  newsletterShape2: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 500,
    height: 500,
    backgroundColor: '#4B2E83',
    borderRadius: 250,
  },
  newsletterContent: {
    maxWidth: 512,
    paddingHorizontal: 24,
    alignSelf: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  newsletterIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  newsletterIconText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  newsletterTitle: {
    fontSize: width > 768 ? 48 : 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 24,
  },
  newsletterSubtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  newsletterForm: {
    width: '100%',
    flexDirection: width > 640 ? 'row' : 'column',
    gap: 16,
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
  },
  newsletterInput: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'transparent',
    borderWidth: 0,
    color: '#FFFFFF',
    fontSize: 16,
  },
  subscribeButton: {
    paddingHorizontal: 40,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  subscribeButtonText: {
    color: '#2E1A55',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

export default HomeScreen;
