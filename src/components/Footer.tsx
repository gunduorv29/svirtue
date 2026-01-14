import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  const handleSocialLink = (url: string) => {
    Linking.openURL(url);
  };

  const handleNavigate = (screen: string) => {
    navigation.navigate(screen as never);
  };

  return (
    <View style={styles.container}>
      {/* Background Pattern */}
      <View style={styles.pattern} />
      <View style={styles.gradient} />

      <View style={styles.content}>
        <View style={styles.mainSection}>
          <View style={styles.brandSection}>
            <Text style={styles.brandText}>Speaking Virtue</Text>
            <Text style={styles.description}>
              Wisdom for the modern soul. Join us in the pursuit of the good life through discipline, faith, and character.
            </Text>
            <View style={styles.socialLinks}>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLink('https://www.instagram.com/speaking_virtue/')}
              >
                <Text style={styles.socialIcon}>📷</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLink('https://twitter.com/speakingvirtue')}
              >
                <Text style={styles.socialIcon}>🐦</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLink('https://youtube.com/@speakingvirtue')}
              >
                <Text style={styles.socialIcon}>📺</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.linksSection}>
            <View style={styles.linkColumn}>
              <Text style={styles.sectionTitle}>Explore</Text>
              <TouchableOpacity onPress={() => handleNavigate('Shop')}>
                <Text style={styles.link}>Shop Collection</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigate('Articles')}>
                <Text style={styles.link}>The Journal</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigate('About')}>
                <Text style={styles.link}>About Us</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.linkColumn}>
              <Text style={styles.sectionTitle}>Legal</Text>
              <TouchableOpacity>
                <Text style={styles.link}>Privacy Policy</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.link}>Terms of Service</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.link}>Returns & Shipping</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <Text style={styles.copyright}>
            © 2025 Speaking Virtue. All Rights Reserved.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E1A55',
    paddingTop: 48,
    paddingBottom: 32,
    position: 'relative',
    overflow: 'hidden',
  },
  pattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)',
    backgroundSize: '40px 40px',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 128,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  content: {
    paddingHorizontal: 24,
  },
  mainSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 80,
  },
  brandSection: {
    flex: 1,
    minWidth: 300,
    marginBottom: 32,
  },
  brandText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
    fontFamily: 'serif',
  },
  description: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.6)',
    lineHeight: 28,
    marginBottom: 32,
    fontWeight: '300',
  },
  socialLinks: {
    flexDirection: 'row',
    gap: 16,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.6)',
  },
  linksSection: {
    flexDirection: 'row',
    gap: 48,
  },
  linkColumn: {
    minWidth: 150,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D4AF37',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 24,
  },
  link: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.6)',
    marginBottom: 16,
    fontWeight: '300',
  },
  bottomSection: {
    alignItems: 'center',
    paddingTop: 32,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  copyright: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

export default Footer;
