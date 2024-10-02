import { Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from "react-native";

const InputField = ({
    label, labelStyle, icon, secureTextEntry = false, containerStyle, inputStyle, iconStyle, className
}) => {
    <KeyboardAvoidingView>
        <TouchableWithoutFeedback>
            <View className="my-2 w-full">
                <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
                    {label}
                </Text>
            </View>
            <View className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}>
                
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
}

export default InputField;