import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Colors } from '../constants/Colors';

const AboutScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <View style={styles.heroOverlay} />
        <View style={styles.heroContent}>
          <Text style={styles.heroSubtitle}>Our Identity</Text>
          <Text style={styles.heroTitle}>A Mission & Movement</Text>
          <Text style={styles.heroDescription}>
            Speaking Virtue is a gathering of hearts and minds committed to speaking truth without fear and living virtue without compromise.
          </Text>
          <Text style={styles.heroQuote}>
            "Authentic evangelisation begins not with condemnation, but with clarity."
          </Text>
        </View>
      </View>

      {/* Mission & Vision */}
      <View style={styles.missionVision}>
        <View style={styles.mission}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <View style={styles.bulletPoints}>
            <Text style={styles.bulletPoint}>
              • To express truth faithfully, without dilution or distortion.
            </Text>
            <Text style={styles.bulletPoint}>
              • To promote virtuous living as the foundation of authentic freedom.
            </Text>
            <Text style={styles.bulletPoint}>
              • To embody virtue personally, recognizing that credibility flows from integrity.
            </Text>
          </View>
        </View>

        <View style={styles.vision}>
          <Text style={styles.sectionTitle}>Our Vision</Text>
          <Text style={styles.visionText}>
            We envision a world renewed by words that can be trusted—words that heal rather than wound, clarify rather than confuse, and elevate rather than degrade.
          </Text>
          <View style={styles.visionHighlights}>
            <Text style={styles.highlight}>Immersed in <Text style={styles.highlightPurple}>Truth</Text></Text>
            <Text style={styles.highlight}>Purified with <Text style={styles.highlightPurple}>Virtue</Text></Text>
            <Text style={styles.highlight}>Enveloped in <Text style={styles.highlightPurple}>Love</Text></Text>
          </View>
        </View>
      </View>

      {/* Core Values */}
      <View style={styles.coreValues}>
        <Text style={styles.coreValuesTitle}>Our Core Values</Text>
        <Text style={styles.coreValuesSubtitle}>The Foundation of Our Voice</Text>

        <View style={styles.valuesGrid}>
          <View style={styles.valueCard}>
            <Text style={styles.valueIcon}>💬</Text>
            <Text style={styles.valueTitle}>Truthfulness</Text>
            <Text style={styles.valueDescription}>
              Speaking honestly, even when silence is easier.
            </Text>
          </View>

          <View style={styles.valueCard}>
            <Text style={styles.valueIcon}>👁️</Text>
            <Text style={styles.valueTitle}>Realism</Text>
            <Text style={styles.valueDescription}>
              Addressing life as it is, without idealism or despair.
            </Text>
          </View>

          <View style={styles.valueCard}>
            <Text style={styles.valueIcon}>📖</Text>
            <Text style={styles.valueTitle}>Undiluted</Text>
            <Text style={styles.valueDescription}>
              Upholding Godly principles in their fullness.
            </Text>
          </View>

          <View style={styles.valueCard}>
            <Text style={styles.valueIcon}>🤝</Text>
            <Text style={styles.valueTitle}>Trust</Text>
            <Text style={styles.valueDescription}>
              Offering words that form, guide, and endure.
            </Text>
          </View>

          <View style={styles.valueCard}>
            <Text style={styles.valueTitle}>Honesty</Text>
            <Text style={styles.valueDescription}>
              Integrity of intention, message, and witness.
            </Text>
          </View>
        </View>
      </View>

      {/* Team Section */}
      <View style={styles.team}>
        <View style={styles.teamCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' }}
            style={styles.teamImage}
          />
          <View style={styles.teamContent}>
            <Text style={styles.teamSubtitle}>Our Witness</Text>
            <Text style={styles.teamTitle}>Faithful Witness</Text>
            <Text style={styles.teamDescription}>
              We reject both harsh rigidity and sentimental compromise. Truth must be spoken clearly, faithfully, and lovingly. Our goal is to form virtuous persons capable of moral courage, spiritual depth, and genuine love.
            </Text>
          </View>
        </View>
      </View>

      {/* Contact Section */}
      <View style={styles.contact}>
        <Text style={styles.contactTitle}>Send a Dispatch</Text>
        <Text style={styles.contactDescription}>
          For inquiries, collaborations, or philosophical disputes.
        </Text>
        <Text style={styles.contactEmail}>hello@speakingvirtue.com</Text>
        <View style={styles.socialIcons}>
          <Text style={styles.socialIcon}>📘</Text>
          <Text style={styles.socialIcon}>🐦</Text>
          <Text style={styles.socialIcon}>💼</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.virtue.white,
  },
  hero: {
    height: 400,
    backgroundColor: Colors.virtue.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.03)',
  },
  heroContent: {
    alignItems: 'center',
    paddingHorizontal: 24,
    zIndex: 1,
  },
  heroSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.virtue.accent,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: '600',
    color: Colors.virtue.black,
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: 'serif',
  },
  heroDescription: {
    fontSize: 20,
    color: Colors.virtue.grey,
    textAlign: 'center',
    lineHeight: 32,
    marginBottom: 32,
    maxWidth: 600,
  },
  heroQuote: {
    fontSize: 24,
    fontStyle: 'italic',
    color: Colors.virtue.purple,
    textAlign: 'center',
    fontFamily: 'serif',
  },
  missionVision: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 80,
    backgroundColor: Colors.virtue.light,
  },
  mission: {
    flex: 1,
    paddingRight: 40,
  },
  vision: {
    flex: 1,
    paddingLeft: 40,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.virtue.deepPurple,
    marginBottom: 24,
    fontFamily: 'serif',
  },
  bulletPoints: {
    gap: 16,
  },
  bulletPoint: {
    fontSize: 16,
    color: Colors.virtue.charcoal,
    lineHeight: 24,
  },
  visionText: {
    fontSize: 16,
    color: Colors.virtue.charcoal,
    lineHeight: 24,
    marginBottom: 32,
  },
  visionHighlights: {
    paddingLeft: 24,
    borderLeftWidth: 2,
    borderLeftColor: Colors.virtue.gold,
    gap: 8,
  },
  highlight: {
    fontSize: 20,
    fontFamily: 'serif',
    color: Colors.virtue.charcoal,
  },
  highlightPurple: {
    fontStyle: 'italic',
    color: Colors.virtue.purple,
  },
  coreValues: {
    paddingVertical: 80,
    paddingHorizontal: 24,
    backgroundColor: Colors.virtue.deepPurple,
  },
  coreValuesTitle: {
    fontSize: 48,
    fontWeight: '600',
    color: Colors.virtue.white,
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'serif',
  },
  coreValuesSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.virtue.gold,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 64,
  },
  valuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 24,
  },
  valueCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    width: 200,
  },
  valueIcon: {
    fontSize: 32,
    marginBottom: 16,
  },
  valueTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.virtue.white,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
  },
  valueDescription: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    lineHeight: 18,
  },
  team: {
    paddingVertical: 80,
    paddingHorizontal: 24,
    backgroundColor: Colors.virtue.white,
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  teamCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 48,
  },
  teamImage: {
    width: 200,
    height: 300,
    borderRadius: 8,
  },
  teamContent: {
    flex: 1,
  },
  teamSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.virtue.accent,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  teamTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.virtue.black,
    marginBottom: 16,
    fontFamily: 'serif',
  },
  teamDescription: {
    fontSize: 16,
    color: Colors.virtue.charcoal,
    lineHeight: 24,
  },
  contact: {
    paddingVertical: 80,
    paddingHorizontal: 24,
    backgroundColor: '#F9F8F6',
    alignItems: 'center',
  },
  contactTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.virtue.black,
    marginBottom: 16,
    fontFamily: 'serif',
  },
  contactDescription: {
    fontSize: 16,
    color: Colors.virtue.grey,
    textAlign: 'center',
    marginBottom: 32,
  },
  contactEmail: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.virtue.purple,
    textDecorationLine: 'underline',
    marginBottom: 48,
    fontFamily: 'serif',
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 32,
  },
  socialIcon: {
    fontSize: 24,
    color: Colors.virtue.grey,
  },
});

export default AboutScreen;
