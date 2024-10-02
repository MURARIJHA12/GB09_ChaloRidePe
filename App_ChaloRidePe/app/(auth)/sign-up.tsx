import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { useState } from "react";
import {Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });
    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Image source={images.signUpCar} className="z=0 w-full h-[250px]"/>
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
                        Create Your Account
                    </Text>
                </View>

                <View className="p-5">
                    <InputField
                        label="Name"
                        placeholder="Enter Your name"
                        icon={icons.person}
                        value={form.name}
                        onChangeText={(value)=>setForm({
                            ...form, 
                            name: value
                        })}
                    />
                    <InputField
                        label="Email"
                        placeholder="Enter Your email"
                        icon={icons.person}
                        value={form.email}
                        onChangeText={(value)=>setForm({
                            ...form, 
                            email: value
                        })}
                    />
                    <InputField
                        label="Password"
                        placeholder="Enter Your name"
                        icon={icons.person}
                        value={form.password}
                        onChangeText={(value)=>setForm({
                            ...form, 
                            password: value
                        })}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp;