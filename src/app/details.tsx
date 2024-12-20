import { Link } from "expo-router";
import Animated from "react-native-reanimated";
import { Text } from "tamagui";

export default function Page() {
	return (
		<Animated.View sharedTransitionTag="tag">
			<Link href="/">Go to Home</Link>
			<Text>Details</Text>
		</Animated.View>
	);
}
