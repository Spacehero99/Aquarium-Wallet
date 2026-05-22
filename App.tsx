import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { AuthProvider } from '@app/providers/AuthProvider';
import { ThemeProvider } from '@app/providers/ThemeProvider';
import { LoadingProvider } from '@app/providers/LoadingProvider';
import { ErrorBoundary } from '@app/providers/ErrorBoundary';
import Navigation from '@app/navigation/BottomTabs';

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <LoadingProvider>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ flex: 1 }}>
              <Navigation />
            </SafeAreaView>
          </LoadingProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;