import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, Text, View } from "react-native";
import clsx from "clsx";

export type IconNameProps = keyof typeof MaterialIcons.glyphMap;

type DrawerButtonProps = PressableProps & {
  title: string;
  isFocused?: boolean;
  hasDivider?: boolean;
  iconName: IconNameProps;
  notifications?: number;
};

export function DrawerButton({
  title,
  iconName,
  isFocused,
  hasDivider,
  notifications,
  ...rest
}: DrawerButtonProps) {
  return (
    <Pressable
      className={clsx("py-2 w-full", {
        "border-b ml-10 border-gray-500": hasDivider,
      })}
      {...rest}
    >
      <View
        className={clsx("flex-row items-center gap-2 w-full h-14 px-6 -ml-2", {
          "bg-orange-800 rounded-r-full": isFocused,
          "-ml-12": hasDivider,
        })}
      >
        <MaterialIcons
          name={iconName}
          size={20}
          color={isFocused ? colors.orange[500] : colors.gray[400]}
        />
        <Text
          className={clsx("text-white font-subtitle text-base flex-1", {
            "text-orange-300": isFocused,
          })}
        >
          {title}
        </Text>

        <Text
          className={clsx("text-gray-400 text-sm font-body", {
            "text-orange-300": isFocused,
          })}
        >
          {notifications}
        </Text>
      </View>
    </Pressable>
  );
}
