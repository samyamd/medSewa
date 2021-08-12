import {Alert} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const commonTitle = 'Photo App';
const cameraMessage =
  'Photo App needs access to your camera and storage so that you can capture and upload paystub.';
const storageMessage =
  'Photo App needs access to your storage so that you can choose and upload paystub.';
const ok = 'OK';
const takePhoto = 'Take Photo';
const chooseExisting = 'Choose Existing';
const cancel = 'Cancel';
const settings = 'Settings';

const DEFAULT_OPTIONS = {
  title: null,
  takePhotoButtonTitle: takePhoto,
  chooseFromLibraryButtonTitle: chooseExisting,
  cancelButtonTitle: cancel,
  allowsEditing: true,
  quality: 1.0,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  permissionDenied: {
    title: commonTitle,
    text: cameraMessage,
    reTryTitle: settings,
    okTitle: ok,
    storageMessage,
  },
};

function showPermissionDeniedMessage(title, message) {
  Alert.alert(
    title,
    message,
    [{text: settings, onPress: () => OpenSettings.openSettings()}, {text: ok}],
    {cancelable: false},
  );
}

function processResponse(response, options) {
  //   console.log('response', response);
  if (response.didCancel) {
    // Do nothing
    return null;
  } else if (response.error) {
    if (response.error.indexOf('Photo library') > -1) {
      showPermissionDeniedMessage(
        options.permissionDenied.title,
        options.permissionDenied.storageMessage,
      );
    } else if (response.error.indexOf('Camera') > -1) {
      showPermissionDeniedMessage(
        options.permissionDenied.title,
        options.permissionDenied.text,
      );
    } else {
      // Do nothing.
    }
    return null;
  }
  // Return the response URI to perform further operation.
  // const source = { uri: response.uri };
  // return source;
  return response;
}

export function showImagePicker(options = null) {
  return new Promise((resolve, reject) => {
    launchCamera({...DEFAULT_OPTIONS, ...options}, response => {
      const result = processResponse(response, options);
      if (result !== null) {
        resolve(result);
      } else {
        reject(result);
      }
    });
  });
}

export default {showImagePicker};
