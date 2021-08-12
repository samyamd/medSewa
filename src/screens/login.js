import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import {purple, themebg, themefg, white} from '../utils/colors';
// import {icons} from '../utils/icons';
import {showImagePicker} from '../components/imagePickerModule';

export default function login({navigation}) {
  const [pickImage, setpickImage] = useState('');

  return (
    <View>
      <Text>LOGIN PAGE</Text>
      <View style={{width: '60%', marginHorizontal: '20%'}}>
        <Input
          type=""
          placeholder="Your Name"
          secure={false}
          //   icon={icons.mail}
        />
        <Input type="" />
        <Input type="numeric" placeholder="Phone Number" />
        <Button
          onPress={() => {
            showImagePicker()
              .then(source => {
                var imageData = source.assets[0].uri;
                setpickImage(imageData);
                console.log(pickImage);
              })
              .catch(error => {
                console.log(error);
              });
          }}
          text="Register Here"
          color={themefg}
          bg={themebg}></Button>

        <Image
          style={{width: 66, height: 58}}
          source={{
            uri:
              pickImage !== null
                ? pickImage
                : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </View>
    </View>
  );
}
