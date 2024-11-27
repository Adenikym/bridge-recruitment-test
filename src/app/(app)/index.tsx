import * as React from 'react';

import { FocusAwareStatusBar, Text, View } from '@/components/ui';

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <FocusAwareStatusBar />
      <Text className="text-base">Home Screen</Text>
    </View>
  );
};

export default Home;
