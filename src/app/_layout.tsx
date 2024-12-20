import { Provider } from "@/components/Tamagui";
import { Stack } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
	return (
		<Provider>
			<SafeAreaProvider>
				<SafeAreaView style={{ flex: 1 }}>
					<Stack screenOptions={{ headerShown: false }} />
				</SafeAreaView>
			</SafeAreaProvider>
			<StatusBar />
		</Provider>
	);
}
