import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Linking } from 'react-native';
import Header from '../components/Header';

const { width } = Dimensions.get('window');

const AboutScreen = () => {
  const openEmail = () => {
    Linking.openURL('mailto:hello@speakingvirtue.com');
  };

  return (
    <View style={styles.container}>
      <Header currentScreen="About" />

      <ScrollView style={styles.scrollContainer}>
        {/* About Hero */}
        <View style={styles.heroSection}>
          {/* Background Decoration */}
          <View style={styles.backgroundDecoration}>
            <Text style={styles.virtueText}>VIRTUE</Text>
          </View>

          <View style={styles.heroContent}>
            <Text style={styles.heroLabel}>Our Identity</Text>
            <Text style={styles.heroTitle}>A Mission & Movement</Text>
            <Text style={styles.heroSubtitle}>
              Speaking Virtue is a gathering of hearts and minds committed to speaking truth without fear and living virtue without compromise.
            </Text>
            <View style={styles.heroQuote}>
              <Text style={styles.quoteText}>"Authentic evangelisation begins not with condemnation, but with clarity."</Text>
            </View>
          </View>
        </View>

        {/* The Story Split (Mission & Vision) */}
        <View style={styles.storySection}>
          <View style={styles.storyLeft}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=1920&auto=format&fit=crop' }}
              style={styles.storyImage}
              resizeMode="cover"
            />
            <View style={styles.imageOverlay} />
          </View>
          <View style={styles.storyRight}>
            {/* Mission */}
            <View style={styles.missionSection}>
              <Text style={styles.sectionTitle}>Our Mission</Text>
              <View style={styles.bulletList}>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>To express truth faithfully, without dilution or distortion.</Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>To promote virtuous living as the foundation of authentic freedom.</Text>
                </View>
                <View style={styles.bulletItem}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>To embody virtue personally, recognizing that credibility flows from integrity.</Text>
                </View>
              </View>
            </View>

            {/* Vision */}
            <View style={styles.visionSection}>
              <Text style={styles.sectionTitle}>Our Vision</Text>
              <Text style={styles.visionText}>
                We envision a world renewed by words that can be trusted—words that heal rather than wound, clarify rather than confuse, and elevate rather than degrade.
              </Text>

              <View style={styles.visionQuotes}>
                <Text style={styles.visionQuote}>Immersed in <Text style={styles.visionHighlight}>Truth</Text></Text>
                <Text style={styles.visionQuote}>Purified with <Text style={styles.visionHighlight}>Virtue</Text></Text>
                <Text style={styles.visionQuote}>Enveloped in <Text style={styles.visionHighlight}>Love</Text></Text>
              </View>
            </View>
          </View>
        </View>

        {/* Core Values Grid */}
        <View style={styles.valuesSection}>
          {/* Background radial */}
          <View style={styles.valuesBackground} />

          <View style={styles.valuesContent}>
            <View style={styles.valuesHeader}>
              <Text style={styles.valuesTitle}>Our Core Values</Text>
              <Text style={styles.valuesSubtitle}>The Foundation of Our Voice</Text>
            </View>

            <View style={styles.valuesGrid}>
              <View style={styles.valueCard}>
                <Text style={styles.valueIcon}>💬</Text>
                <Text style={styles.valueName}>Truthfulness</Text>
                <Text style={styles.valueDesc}>Speaking honestly, even when silence is easier.</Text>
              </View>
              <View style={styles.valueCard}>
                <Text style={styles.valueIcon}>👁️</Text>
                <Text style={styles.valueName}>Realism</Text>
                <Text style={styles.valueDesc}>Addressing life as it is, without idealism or despair.</Text>
              </View>
              <View style={styles.valueCard}>
                <Text style={styles.valueIcon}>📖</Text>
                <Text style={styles.valueName}>Undiluted</Text>
                <Text style={styles.valueDesc}>Upholding Godly principles in their fullness.</Text>
              </View>
              <View style={styles.valueCard}>
                <Text style={styles.valueIcon}>🤝</Text>
                <Text style={styles.valueName}>Trust</Text>
                <Text style={styles.valueDesc}>Offering words that form, guide, and endure.</Text>
              </View>
              <View style={styles.valueCard}>
                <Text style={styles.valueIcon}>⚖️</Text>
                <Text style={styles.valueName}>Honesty</Text>
                <Text style={styles.valueDesc}>Integrity of intention, message, and witness.</Text>
              </View>
            </View>
          </View>
        </View>

        {/* The Team / Curator */}
        <View style={styles.teamSection}>
          <View style={styles.teamContainer}>
            <View style={styles.teamImageContainer}>
              <Image
                source={require('../../assets/icon.png')}
                style={styles.teamImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.teamContent}>
              <Text style={styles.teamLabel}>Our Witness</Text>
              <Text style={styles.teamTitle}>Faithful Witness</Text>
              <Text style={styles.teamText}>
                We reject both harsh rigidity and sentimental compromise. Truth must be spoken clearly, faithfully, and lovingly. Our goal is to form virtuous persons capable of moral courage, spiritual depth, and genuine love.
              </Text>
            </View>
          </View>
        </View>

        {/* Contact Section */}
        <View style={styles.contactSection}>
          <View style={styles.contactContent}>
            <Text style={styles.contactTitle}>Send a Dispatch</Text>
            <Text style={styles.contactSubtitle}>
              For inquiries, collaborations, or philosophical disputes.
            </Text>
            <TouchableOpacity style={styles.emailButton} onPress={openEmail}>
              <Text style={styles.emailText}>hello@speakingvirtue.com</Text>
            </TouchableOpacity>
            <View style={styles.socialIcons}>
              <TouchableOpacity style={styles.socialIcon}>
                <Text style={styles.socialText}>📷</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIcon}>
                <Text style={styles.socialText}>🐦</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIcon}>
                <Text style={styles.socialText}>💼</Text>
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
  scrollContainer: {
    flex: 1,
  },
  heroSection: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    paddingVertical: width > 768 ? 160 : 96,
    alignItems: 'center',
    paddingHorizontal: 24,
    overflow: 'hidden',
  },
  backgroundDecoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.03,
  },
  virtueText: {
    fontFamily: 'serif',
    fontSize: width * 0.2,
    color: '#4B2E83',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: 1024,
    alignItems: 'center',
    zIndex: 1,
  },
  heroLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 3,
    color: '#6B3FA0',
    marginBottom: 24,
  },
  heroTitle: {
    fontFamily: 'serif',
    fontSize: width > 768 ? 72 : 48,
    fontWeight: 'bold',
    color: '#121212',
    textAlign: 'center',
    marginBottom: 40,
  },
  heroSubtitle: {
    fontSize: width > 768 ? 32 : 24,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 40,
    marginBottom: 48,
    maxWidth: 768,
  },
  heroQuote: {
    marginTop: 48,
  },
  quoteText: {
    fontFamily: 'serif',
    fontSize: 36,
    fontStyle: 'italic',
    color: '#4B2E83',
    textAlign: 'center',
  },
  storySection: {
    flexDirection: width > 768 ? 'row' : 'column',
  },
  storyLeft: {
    flex: 1,
    height: width > 768 ? 'auto' : 300,
    position: 'relative',
    order: width > 768 ? 2 : 1,
  },
  storyImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(46, 26, 85, 0.3)',
  },
  storyRight: {
    flex: 1,
    backgroundColor: '#F5F2EB',
    padding: width > 768 ? 96 : 48,
    order: width > 768 ? 1 : 2,
  },
  missionSection: {
    marginBottom: 64,
  },
  sectionTitle: {
    fontFamily: 'serif',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2E1A55',
    marginBottom: 24,
  },
  bulletList: {
    gap: 16,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  bulletDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#8B1538',
    marginTop: 6,
  },
  bulletText: {
    fontSize: 18,
    color: '#2D2D2D',
    lineHeight: 28,
    flex: 1,
  },
  visionSection: {
    marginBottom: 0,
  },
  visionText: {
    fontSize: 18,
    color: '#2D2D2D',
    lineHeight: 28,
    marginBottom: 32,
  },
  visionQuotes: {
    paddingLeft: 32,
    borderLeftWidth: 2,
    borderLeftColor: '#D4AF37',
    gap: 6,
  },
  visionQuote: {
    fontFamily: 'serif',
    fontSize: 24,
    color: '#2D2D2D',
  },
  visionHighlight: {
    fontStyle: 'italic',
    color: '#4B2E83',
  },
  valuesSection: {
    backgroundColor: '#2E1A55',
    paddingVertical: 128,
    position: 'relative',
    overflow: 'hidden',
  },
  valuesBackground: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 800,
    height: 800,
    backgroundColor: '#4B2E83',
    borderRadius: 400,
    opacity: 0.3,
    transform: [{ translateX: -400 }, { translateY: -400 }],
  },
  valuesContent: {
    paddingHorizontal: 24,
    alignItems: 'center',
    zIndex: 1,
  },
  valuesHeader: {
    alignItems: 'center',
    marginBottom: 80,
  },
  valuesTitle: {
    fontFamily: 'serif',
    fontSize: width > 768 ? 48 : 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  valuesSubtitle: {
    color: '#D4AF37',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: 12,
    fontWeight: 'bold',
  },
  valuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 24,
  },
  valueCard: {
    width: width > 1200 ? '18%' : width > 768 ? '30%' : '45%',
    padding: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  valueIcon: {
    fontSize: 36,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 24,
  },
  valueName: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#FFFFFF',
    marginBottom: 12,
  },
  valueDesc: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'center',
    lineHeight: 18,
  },
  teamSection: {
    paddingVertical: 96,
    backgroundColor: '#FFFFFF',
    maxWidth: 1280,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 24,
  },
  teamContainer: {
    flexDirection: width > 768 ? 'row' : 'column',
    alignItems: 'center',
    gap: 48,
  },
  teamImageContainer: {
    width: width > 768 ? '30%' : '100%',
    aspectRatio: 3/4,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 8,
  },
  teamImage: {
    width: '100%',
    height: '100%',
  },
  teamContent: {
    width: width > 768 ? '60%' : '100%',
  },
  teamLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#6B3FA0',
    marginBottom: 8,
  },
  teamTitle: {
    fontFamily: 'serif',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#121212',
    marginBottom: 24,
  },
  teamText: {
    fontSize: 18,
    color: '#2D2D2D',
    lineHeight: 28,
  },
  contactSection: {
    backgroundColor: '#F9F8F6',
    paddingVertical: 128,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  contactContent: {
    maxWidth: 768,
    alignSelf: 'center',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  contactTitle: {
    fontFamily: 'serif',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#121212',
    textAlign: 'center',
    marginBottom: 24,
  },
  contactSubtitle: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 48,
  },
  emailButton: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(75, 46, 131, 0.2)',
    paddingBottom: 8,
    marginBottom: 64,
  },
  emailText: {
    fontFamily: 'serif',
    fontSize: width > 768 ? 60 : 40,
    color: '#4B2E83',
    textAlign: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 40,
  },
  socialIcon: {
    padding: 8,
  },
  socialText: {
    fontSize: 32,
    color: 'rgba(102, 102, 102, 0.6)',
  },
});

export default AboutScreen;
