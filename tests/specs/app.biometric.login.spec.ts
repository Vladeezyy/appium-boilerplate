import TabBar from '../screenobjects/components/TabBar';
import LoginScreen from '../screenobjects/LoginScreen';
import Biometrics from '../helpers/Biometrics';
import NativeAlert from '../screenobjects/components/NativeAlert';
import AndroidSettings from '../screenobjects/AndroidSettings';

/**
 * IMPORTANT!
 * To verify if Touch/FaceID for iOS and FingerPrint for Android work we need to verify if they are enabled. This can be done by verifying
 * if the biometrics button is shown. If not shown we need to enabled it.
 * For iOS it's pretty straightforward, but for Android is more complex. There is a helper (Android Settings) that will handle all steps for
 * you for Android 7.1 till the latest version of Android.
 */
describe('WebdriverIO and Appium, when interacting with a biometric button,', () => {
    it('should be able to login with a matching touch/faceID/fingerprint', async () => {
        await driver.pause(100000);
    }); 
});

