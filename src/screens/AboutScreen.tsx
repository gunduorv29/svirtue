import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* About Hero */}
        <View style={styles.heroSection}>
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
        <View style={styles.missionVision}>
          <View style={styles.imageSection}>
            <Text style={styles.imagePlaceholder}>[Image Here]</Text>
          </View>
          <View style={styles.textSection}>
            {/* Mission */}
            <View style={styles.missionBlock}>
              <Text style={styles.sectionTitle}>Our Mission</Text>
              <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>✓ To express truth faithfully, without dilution or distortion.</Text>
                <Text style={styles.bulletItem}>✓ To promote virtuous living as the foundation of authentic freedom.</Text>
                <Text style={styles.bulletItem}>✓ To embody virtue personally, recognizing that credibility flows from integrity.</Text>
              </View>
            </View>

            {/* Vision */}
            <View style={styles.visionBlock}>
              <Text style={styles.sectionTitle}>Our Vision</Text>
              <Text style={styles.visionText}>
                We envision a world renewed by words that can be trusted—words that heal rather than wound, clarify rather than confuse, and elevate rather than degrade.
              </Text>

              <View style={styles.visionHighlights}>
                <Text style={styles.highlightText}>Immersed in <Text style={styles.highlightItalic}>Truth</Text></Text>
                <Text style={styles.highlightText}>Purified with <Text style={styles.highlightItalic}>Virtue</Text></Text>
                <Text style={styles.highlightText}>Enveloped in <Text style={styles.highlightItalic}>Love</Text></Text>
              </View>
            </View>
          </View>
        </View>

        {/* Core Values Grid */}
        <View style={styles.valuesSection}>
          <View style={styles.valuesHeader}>
            <Text style={styles.valuesTitle}>Our Core Values</Text>
            <Text style={styles.valuesSubtitle}>The Foundation of Our Voice</Text>
          </View>

          <View style={styles.valuesGrid}>
            <View style={styles.valueCard}>
              <Text style={styles.valueIcon}>💬</Text>
              <Text style={styles.valueTitle}>Truthfulness</Text>
              <Text style={styles.valueDescription}>Speaking honestly, even when silence is easier.</Text>
            </View>

            <View style={styles.valueCard}>
              <Text style={styles.valueIcon}>👁️</Text>
              <Text style={styles.valueTitle}>Realism</Text>
              <Text style={styles.valueDescription}>Addressing life as it is, without idealism or despair.</Text>
            </View>

            <View style={styles.valueCard}>
              <Text style={styles.valueIcon}>📖</Text>
              <Text style={styles.valueTitle}>Undiluted</Text>
              <Text style={styles.valueDescription}>Upholding Godly principles in their fullness.</Text>
            </View>

            <View style={styles.valueCard}>
              <Text style={styles.valueIcon}>🤝</Text>
              <Text style={styles.valueTitle}>Trust</Text>
              <Text style={styles.valueDescription}>Offering words that form, guide, and endure.</Text>
            </View>

            <View style={styles.valueCard}>
              <Text style={styles.valueIcon}>⚖️</Text>
              <Text style={styles.valueTitle}>Honesty</Text>
              <Text style={styles.valueDescription}>Integrity of intention, message, and witness.</Text>
            </View>
          </View>
        </View>

        {/* The Team / Curator */}
        <View style={styles.teamSection}>
          <View style={styles.teamContent}>
            <View style={styles.teamImage}>
              <Text style={styles.imagePlaceholder}>[Image Here]</Text>
            </View>
            <View style={styles.teamText}>
              <Text style={styles.teamLabel}>Our Witness</Text>
              <Text style={styles.teamTitle}>Faithful Witness</Text>
              <Text style={styles.teamDescription}>
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
            <Text style={styles.contactEmail}>hello@speakingvirtue.com</Text>
            <View style={styles.socialIcons}>
              <Text style={styles.socialIcon}>📘</Text>
              <Text style={styles.socialIcon}>🐦</Text>
              <Text style={styles.socialIcon}>💼</Text>
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
  heroSection: {
    minHeight: 400,
    backgroundColor: '#FFFFFF',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heroContent: {
    alignItems: 'center',
    zIndex: 1,
  },
  heroLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#6B3FA0',
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#121212',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 56,
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 40,
    maxWidth: 600,
  },
  heroQuote: {
    marginTop: 40,
  },
  quoteText: {
    fontSize: 24,
    fontStyle: 'italic',
    color: '#4B2E83',
    textAlign: 'center',
  },
  missionVision: {
    flexDirection: 'row',
    minHeight: 400,
  },
  imageSection: {
    flex: 1,
    minHeight: 400,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  imagePlaceholder: {
    fontSize: 14,
    color: '#666',
  },
  textSection: {
    flex: 1,
    backgroundColor: '#F5F2EB',
    padding: 40,
  },
  missionBlock: {
    marginBottom: 64,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E1A55',
    marginBottom: 24,
  },
  bulletList: {
    gap: 16,
  },
  bulletItem: {
    fontSize: 16,
    color: '#2D2D2D',
    lineHeight: 24,
  },
  visionBlock: {
    marginBottom: 0,
  },
  visionText: {
    fontSize: 16,
    color: '#2D2D2D',
    lineHeight: 24,
    marginBottom: 24,
  },
  visionHighlights: {
    gap: 8,
  },
  highlightText: {
    fontSize: 20,
    color: '#2D2D2D',
  },
  highlightItalic: {
    fontStyle: 'italic',
    color: '#4B2E83',
  },
  valuesSection: {
    backgroundColor: '#2E1A55',
    paddingVertical: 80,
    paddingHorizontal: 24,
  },
  valuesHeader: {
    alignItems: 'center',
    marginBottom: 40,
  },
  valuesTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  valuesSubtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#DAA520',
  },
  valuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  valueCard: {
    width: '18%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  valueIcon: {
    fontSize: 32,
    marginBottom: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  valueTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  valueDescription: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'center',
    lineHeight: 18,
  },
  teamSection: {
    paddingVertical: 80,
    backgroundColor: '#FFFFFF',
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  teamContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  teamImage: {
    width: 200,
    height: 300,
    backgroundColor: '#f0f0f0',
    marginRight: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamText: {
    flex: 1,
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#121212',
    marginBottom: 16,
  },
  teamDescription: {
    fontSize: 16,
    color: '#2D2D2D',
    lineHeight: 24,
  },
  contactSection: {
    backgroundColor: '#F9F8F6',
    paddingVertical: 80,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  contactContent: {
    maxWidth: 600,
    alignSelf: 'center',
    alignItems: 'center',
  },
  contactTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#121212',
    marginBottom: 16,
  },
  contactSubtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 24,
  },
  contactEmail: {
    fontSize: 32,
    color: '#4B2E83',
    marginBottom: 40,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 20,
  },
  socialIcon: {
    fontSize: 24,
    color: '#666666',
  },
});

export default AboutScreen;