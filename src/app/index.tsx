import { Dimensions, FlatList } from "react-native";
import { Button, View } from "tamagui";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function Page() {
	return (
		<>
			{/* <Link href="/details">Go to Details</Link> */}
			<FlatList
				data={["a", "b", "c", "d", "e", "f"]}
				renderItem={renderItem}
				pagingEnabled
				horizontal
			/>
		</>
	);

	function renderItem({ item }: { item: string }) {
		return (
			<View {...{ height, width }}>
				<Button height="100%">{item}</Button>
			</View>
		);
	}
}
