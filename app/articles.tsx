import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';
import { Colors } from '../constants/Colors';

const ArticlesScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    {
      id: 1,
      title: 'Beauty: Speaking Virtue',
      category: 'Journal',
      description: 'An exploration of beauty as a path to truth and virtue in the Catholic tradition.',
      image: 'assets/Beauty-2.png',
      pdf: 'assets/Beauty_SpeakingVirtue.pdf',
    },
    {
      id: 2,
      title: 'Chastity Talk',
      category: 'Journal',
      description: 'A discussion on the virtue of chastity and its role in forming authentic love.',
      image: 'assets/Chastity.png',
      pdf: 'assets/Chastity-talk.pdf',
    },
    {
      id: 3,
      title: 'Hearts on Fire',
      category: 'Journal',
      description: 'By Coach Joss and Coach Annie - Igniting passion for virtue and faith.',
      image: 'assets/Hearts.png',
      pdf: 'assets/Hearts on Fire by Coach Joss and Coach Annie.pdf',
    },
  ];

  const openPDF = (pdfPath: string) => {
    // In a real app, this would open the PDF in a WebView or external browser
    console.log('Opening PDF:', pdfPath);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>The Journal</Text>
        <Text style={styles.title}>Articles & Reflections</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>
          Thoughtful explorations of philosophy, theology, and the human experience. Each piece is crafted to provoke reflection and inspire virtue.
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search articles..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={Colors.virtue.grey}
        />
      </View>

      <View style={styles.articlesGrid}>
        {articles.map((article) => (
          <TouchableOpacity
            key={article.id}
            style={styles.articleCard}
            onPress={() => openPDF(article.pdf)}
          >
            <View style={styles.articleImage}>
              <Text style={styles.imagePlaceholder}>📄</Text>
            </View>
            <View style={styles.articleContent}>
              <View style={styles.articleMeta}>
                <Text style={styles.articleCategory}>{article.category}</Text>
                <Text style={styles.articleType}>PDF Document</Text>
              </View>
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.articleDescription}>{article.description}</Text>
              <View style={styles.articleFooter}>
                <Text style={styles.readMore}>Read PDF</Text>
                <Text style={styles.externalIcon}>↗</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8F6',
    paddingTop: 120,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 80,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.virtue.accent,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: '600',
    color: Colors.virtue.black,
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: 'serif',
  },
  divider: {
    width: 48,
    height: 1,
    backgroundColor: Colors.virtue.purple,
    marginBottom: 32,
  },
  description: {
    fontSize: 18,
    color: Colors.virtue.grey,
    textAlign: 'center',
    lineHeight: 28,
    maxWidth: 600,
  },
  searchContainer: {
    paddingHorizontal: 24,
    marginBottom: 64,
  },
  searchInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderWidth: 1,
    borderColor: 'rgba(75, 46, 131, 0.2)',
    borderRadius: 8,
    paddingHorizontal: 48,
    paddingVertical: 16,
    fontSize: 16,
    color: Colors.virtue.black,
  },
  articlesGrid: {
    paddingHorizontal: 24,
    paddingBottom: 80,
    gap: 32,
  },
  articleCard: {
    backgroundColor: Colors.virtue.white,
    borderRadius: 8,
    padding: 32,
    shadowColor: Colors.virtue.purple,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(75, 46, 131, 0.1)',
  },
  articleImage: {
    aspectRatio: 4/3,
    backgroundColor: Colors.virtue.light,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  imagePlaceholder: {
    fontSize: 48,
  },
  articleContent: {
    gap: 16,
  },
  articleMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  articleCategory: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.virtue.accent,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  articleType: {
    fontSize: 12,
    color: Colors.virtue.grey,
  },
  articleTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.virtue.black,
    fontFamily: 'serif',
  },
  articleDescription: {
    fontSize: 16,
    color: Colors.virtue.grey,
    lineHeight: 24,
  },
  articleFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  readMore: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.virtue.charcoal,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  externalIcon: {
    fontSize: 16,
    color: Colors.virtue.purple,
  },
});

export default ArticlesScreen;
