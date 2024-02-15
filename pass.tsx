import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Pass() {
  const [imgPath, setImgPath] = useState('');

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const getImg = async () => {
    try {
      const value = await AsyncStorage.getItem('img');
      if (value !== null) {
        // value previously stored
        setImgPath(value);
      }
    } catch (e) {
      // error reading value
      console.log('Error retreiving from AsyncStore');
    }
  };

  useEffect(() => {
    getImg();
  }, [refreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {imgPath.length > 0 && (
          <Image
            source={{uri: imgPath}}
            style={{width: Dimensions.get('window').width, height: 675}}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
