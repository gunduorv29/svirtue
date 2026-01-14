import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import Header from '../components/Header';

const articles = [
  {
    id: 1,
    title: 'Chastity Talk',
    description: 'Exploring the beauty and power of purity in modern relationships',
    file: 'Chastity Talk.pdf'
  },
  {
    id: 2,
    title: 'Hearts on Fire',
    description: 'Igniting passion for God\'s purpose in your life',
    file: 'Hearts on Fire by Coach Joss and Coach Annie.pdf'
  }
];

const ArticlesScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const openArticle = async (filename: string) => {
    // In a real app, this would open the PDF or navigate to article content
    Alert.alert('Opening Article', `Opening ${filename}`);
    // For now, we'll just show an alert
    // In production, you might use a PDF viewer library or web view
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View className="flex-1 bg-virtue-light">
      <Header currentScreen="Articles" />

      <ScrollView className="flex-1">
        {/* Header Section */}
        <View className="py-20 px-6 bg-white">
          <View className="text-center">
            <Text className="font-serif text-4xl md:text-5xl text-virtue-black mb-6">Faith Journal</Text>
            <Text className="text-lg text-virtue-grey font-light leading-relaxed max-w-2xl mx-auto">
              Biblical insights and spiritual inspiration for your journey
            </Text>
          </View>
        </View>

        {/* Search Bar */}
        <View className="px-6 py-8">
          <View className="relative">
            <TextInput
              className="w-full bg-white border border-virtue-purple/10 rounded-lg px-6 py-4 text-virtue-black placeholder-virtue-grey focus:border-virtue-purple focus:outline-none"
              placeholder="Search articles..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <View className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Text className="text-virtue-purple opacity-60">🔍</Text>
            </View>
          </View>
        </View>

        {/* Articles List */}
        <View className="px-6 pb-8">
          {filteredArticles.map((article) => (
            <TouchableOpacity
              key={article.id}
              className="bg-white rounded-xl p-6 mb-4 shadow-sm border border-virtue-purple/5 hover:shadow-soft transition-all duration-300"
              onPress={() => openArticle(article.file)}
            >
              <View className="flex-1">
                <Text className="font-serif text-2xl text-virtue-deepPurple mb-3">{article.title}</Text>
                <Text className="text-virtue-grey text-base leading-relaxed mb-4 font-light">
                  {article.description}
                </Text>
                <View className="flex items-center justify-between">
                  <Text className="text-virtue-purple font-semibold text-sm uppercase tracking-widest">
                    Read Article
                  </Text>
                  <Text className="text-virtue-purple text-lg">→</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Coming Soon Section */}
        <View className="mx-6 mb-8 bg-virtue-gold/10 border border-virtue-gold/20 rounded-xl p-8">
          <View className="text-center">
            <View className="w-16 h-16 mx-auto bg-virtue-gold/20 rounded-full flex items-center justify-center mb-6">
              <Text className="text-2xl">📚</Text>
            </View>
            <Text className="font-serif text-2xl text-virtue-deepPurple mb-4">Coming Soon</Text>
            <Text className="text-virtue-grey leading-relaxed font-light">
              More articles and devotionals will be added regularly. Stay tuned for weekly inspiration and biblical insights.
            </Text>
          </View>
        </View>

        {/* Newsletter CTA */}
        <View className="mx-6 mb-12 bg-virtue-deepPurple rounded-xl p-8 relative overflow-hidden">
          <View className="absolute inset-0 bg-virtue-purple/10 rounded-xl" />
          <View className="relative z-10 text-center">
            <Text className="font-serif text-2xl text-white mb-4">Stay Inspired</Text>
            <Text className="text-white/80 mb-6 leading-relaxed font-light">
              Subscribe to our newsletter for faith-based insights and spiritual encouragement
            </Text>
            <TouchableOpacity className="bg-white text-virtue-deepPurple px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-virtue-gold transition-colors">
              <Text className="text-virtue-deepPurple font-bold uppercase tracking-widest text-sm">Subscribe Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ArticlesScreen;
