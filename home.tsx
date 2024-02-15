import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {
  NativeBaseProvider,
  Box,
  Container,
  VStack,
  Center,
  AspectRatio,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  extendTheme,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {background} from 'native-base/lib/typescript/theme/styled-system';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

type nav = {
  navigation: any;
};
//<Text onPress={() => navigation.navigate('Pass')}>App.tsx</Text>
export default function Home({navigation}: nav) {

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{backgroundColor: '#fdfdfd'}}>
        <ScrollView>
          <Center flex={1}>
            <Box
              maxW="96%"
              rounded="xl"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              backgroundColor="#01274c"
              flex={1}>
              <Box>
                <AspectRatio w="100%" ratio={476 / 288}>
                  <Image
                    source={require('./assets/BlueBox.jpg')}
                    alt="image"
                    flex={1}
                    width={'100%'}
                    height={'100%'}
                    resizeMode="contain"
                  />
                </AspectRatio>
              </Box>
              <Stack p="2.5" pt=".7">
                <TouchableHighlight
                  onPress={() => navigation.navigate('Pass')}
                  style={{
                    backgroundColor: '#002445',
                    borderRadius: 8,
                    padding: 6,
                  }}
                  underlayColor={'#00509a'}>
                  <Center>
                    <AntDesign name="barcode" size={20} color={'white'} />
                    <Text color={'white'} fontSize={10}>
                      Scan Card
                    </Text>
                  </Center>
                </TouchableHighlight>
              </Stack>
            </Box>
            
          </Center>
          <AspectRatio w="100%" ratio={30/47}>
          <Image
              source={require('./assets/Home1.jpg')}
              alt="home"
              width={'100%'}
              height={'100%'}
              resizeMode="contain"
              flex={1}
            />
            </AspectRatio>
            <AspectRatio w="100%" ratio={30/30}>
            <Image
            source={require('./assets/Home2.jpg')}
            alt="x"
            width={'100%'}
              height={'100%'}
            resizeMode="contain"
            flex={1}/>
            </AspectRatio>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
