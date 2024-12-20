import { config } from "@tamagui/config/v3";
import { TamaguiProvider, createTamagui } from "tamagui";

type Props = {
	children: React.ReactNode;
};

export function Provider({ children }: Props) {
	const tamaguiConfig = createTamagui(config);

	return (
		<TamaguiProvider defaultTheme="dark" config={tamaguiConfig}>
			{children}
		</TamaguiProvider>
	);
}
