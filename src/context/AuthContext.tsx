import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuthRequest, ResponseType, Prompt, makeRedirectUri } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { Alert } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

interface User {
  id: string;
  email: string;
  name: string;
  picture?: string;
}

interface AuthContextType {
  user: User | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: process.env.GOOGLE_CLIENT_ID || 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google OAuth client ID
      scopes: ['openid', 'profile', 'email'],
      responseType: ResponseType.Token,
      redirectUri: makeRedirectUri(),
      prompt: Prompt.SelectAccount,
    },
    {
      authorizationEndpoint: 'https://accounts.google.com/oauth/v2/auth',
    }
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      fetchUserInfo(access_token);
    } else if (response?.type === 'error') {
      Alert.alert('Login Failed', 'Unable to authenticate with Google.');
    }
  }, [response]);

  const fetchUserInfo = async (accessToken: string) => {
    try {
      const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const userInfo = await response.json();
      setUser({
        id: userInfo.id,
        email: userInfo.email,
        name: userInfo.name,
        picture: userInfo.picture,
      });
    } catch (error) {
      Alert.alert('Error', 'An error occurred while fetching user info.');
    }
  };

  const login = () => {
    promptAsync();
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
