import React from "react";
// import HomeScreen from "./src/screens/HomeScreen";
import ConsistencyGraph from "./src/components/ConsistencyGraph";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";


export default function App() {
  return (
    // <HomeScreen/>
    <SafeAreaProvider>
      <SafeAreaView>
        <ConsistencyGraph/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
