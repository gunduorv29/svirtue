import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image
          source={require('../../../assets/icon.png')}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>Speaking Virtue</Text>
          <Text style={styles.heroSubtitle}>Empowering Women Through Faith & Fashion</Text>
        </View>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.sectionText}>
          Speaking Virtue is a faith-based fashion brand dedicated to empowering women through
          modest, elegant clothing that reflects Christian values and inspires confidence.
        </Text>
      </View>

      {/* Shop Preview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Collection</Text>
        <TouchableOpacity
          style={styles.shopButton}
          onPress={() => router.push('/shop')}
        >
          <Text style={styles.shopButtonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>

      {/* Articles Preview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Latest Articles</Text>
        <TouchableOpacity
          style={styles.articlesButton}
          onPress={() => router.push('/articles')}
        >
          <Text style={styles.articlesButtonText}>Read Our Journal</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroSection: {
    height: 300,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    textAlign: 'center',
  },
  shopButton: {
    backgroundColor: '#8B4513',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  shopButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  articlesButton: {
    backgroundColor: '#DAA520',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  articlesButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
