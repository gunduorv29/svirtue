import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const ArticlesScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerLabel}>The Journal</Text>
          <Text style={styles.headerTitle}>Articles & Reflections</Text>
          <View style={styles.headerDivider} />
          <Text style={styles.headerDescription}>
            Thoughtful explorations of philosophy, theology, and the human experience. Each piece is crafted to provoke reflection and inspire virtue.
          </Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search articles..."
            placeholderTextColor="#666666"
          />
        </View>

        {/* Journals Grid */}
        <View style={styles.articlesGrid}>
          <TouchableOpacity style={styles.articleCard}>
            <View style={styles.articleImage}>
              <Text style={styles.imagePlaceholder}>[Image Here]</Text>
            </View>
            <View style={styles.articleMeta}>
              <Text style={styles.articleType}>Journal</Text>
              <Text style={styles.articleFormat}>PDF Document</Text>
            </View>
            <Text style={styles.articleTitle}>Beauty: Speaking Virtue</Text>
            <Text style={styles.articleDescription}>
              An exploration of beauty as a path to truth and virtue in the Catholic tradition.
            </Text>
            <View style={styles.articleFooter}>
              <Text style={styles.readText}>Read PDF</Text>
              <Text style={styles.arrowText}>→</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.articleCard}>
            <View style={styles.articleImage}>
              <Text style={styles.imagePlaceholder}>[Image Here]</Text>
            </View>
            <View style={styles.articleMeta}>
              <Text style={styles.articleType}>Journal</Text>
              <Text style={styles.articleFormat}>PDF Document</Text>
            </View>
            <Text style={styles.articleTitle}>Chastity Talk</Text>
            <Text style={styles.articleDescription}>
              A discussion on the virtue of chastity and its role in forming authentic love.
            </Text>
            <View style={styles.articleFooter}>
              <Text style={styles.readText}>Read PDF</Text>
              <Text style={styles.arrowText}>→</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.articleCard}>
            <View style={styles.articleImage}>
              <Text style={styles.imagePlaceholder}>[Image Here]</Text>
            </View>
            <View style={styles.articleMeta}>
              <Text style={styles.articleType}>Journal</Text>
              <Text style={styles.articleFormat}>PDF Document</Text>
            </View>
            <Text style={styles.articleTitle}>Hearts on Fire</Text>
            <Text style={styles.articleDescription}>
              By Coach Joss and Coach Annie - Igniting passion for virtue and faith.
            </Text>
            <View style={styles.articleFooter}>
              <Text style={styles.readText}>Read PDF</Text>
              <Text style={styles.arrowText}>→</Text>
            </View>
          </TouchableOpacity>
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
  header: {
    paddingVertical: 80,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 40,
  },
  headerLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#6B3FA0',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#121212',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 56,
  },
  headerDivider: {
    width: 96,
    height: 1,
    backgroundColor: '#4B2E83',
    marginBottom: 32,
  },
  headerDescription: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 768,
  },
  searchContainer: {
    maxWidth: 512,
    alignSelf: 'center',
    marginBottom: 64,
  },
  searchInput: {
    width: '100%',
    paddingLeft: 48,
    paddingRight: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: 'rgba(75, 46, 131, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
    color: '#121212',
    fontSize: 16,
  },
  articlesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  articleCard: {
    width: '30%',
    backgroundColor: '#FFFFFF',
    padding: 32,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(75, 46, 131, 0.1)',
    marginBottom: 32,
  },
  articleImage: {
    aspectRatio: 4/3,
    marginBottom: 24,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    fontSize: 14,
    color: '#666',
  },
  articleMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  articleType: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#6B3FA0',
  },
  articleFormat: {
    fontSize: 10,
    color: '#666666',
  },
  articleTitle: {
    fontSize: 24,
    marginBottom: 16,
    color: '#2E1A55',
  },
  articleDescription: {
    color: '#666666',
    lineHeight: 24,
    marginBottom: 24,
  },
  articleFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  readText: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#2D2D2D',
  },
  arrowText: {
    color: '#4B2E83',
    fontSize: 18,
  },
});

export default ArticlesScreen;
