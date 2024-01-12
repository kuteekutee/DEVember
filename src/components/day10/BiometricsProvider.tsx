import { PropsWithChildren, createContext, useContext, useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { Alert } from "react-native";

type BiometricsContext = {
  isUnlocked: boolean;
  authenticate: () => Promise<void>;
};
const BiometricsContext = createContext<BiometricsContext>({
  isUnlocked: false,
  authenticate: async () => {},
});

const BiometricProvider = ({ children }: PropsWithChildren) => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const authenticate = async () => {
    // const enrolled = await LocalAuthentication.getEnrolledLevelAsync();
    // const supported =
    //   await LocalAuthentication.supportedAuthenticationTypesAsync();
    // console.log("Enrolled: ", enrolled);
    // console.log("Supported: ", supported);

    // check  whether a face or fingerprint scanner is available on the device.
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    console.log("has Hardware", hasHardware);
    if (!hasHardware) {
      Alert.alert("Not Supported");
      return;
    }
    const res = await LocalAuthentication.authenticateAsync();
    if (res.success) {
      setIsUnlocked(true);
    }
  };
  return (
    <BiometricsContext.Provider value={{ isUnlocked, authenticate }}>
      {children}
    </BiometricsContext.Provider>
  );
};

export default BiometricProvider;

export const useBiometrics = () => useContext(BiometricsContext);
