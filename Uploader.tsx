import React, { useState } from 'react';
import { Button, Dimensions, Image, SafeAreaView, Text, View } from 'react-native';
import * as ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Uploader(){
    const [selectedImage, setSelectedImage] = useState('');

    const openImagePicker = () => {

        ImagePicker.openPicker({
            width: Dimensions.get('window').width,
            height: 665,
            cropping: true,
            compressImageQuality: .8
          }).then(image => {
            console.log(image);
            setSelectedImage(image.path)
            storeImg(image.path)
          });
    };

    const storeImg = async (value : string) => {
        try {
            await AsyncStorage.clear()
            await AsyncStorage.setItem('img', value);
        } catch (e) {
            console.log("Error with AsyncStorage")
        }
    };

    return (
    <SafeAreaView>
        
        <View>
            <Text>Image Uploader url: {selectedImage} </Text>
            <Button title="Upload" onPress={openImagePicker}/>
            {selectedImage.length > 0 && (
                <Image
                    source={{ uri: selectedImage }}
                    style={{ width: Dimensions.get('window').width, height: 675}}
                />
            )}
        </View>
    </SafeAreaView>
    );
}