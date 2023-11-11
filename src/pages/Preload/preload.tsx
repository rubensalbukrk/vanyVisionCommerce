import { View, Text, ActivityIndicator } from 'react-native'

const Preload = () => {
    return (
        <View className="flex-1 w-full justify-center items-center bg-black">
            <Text className='text-white font-bold'>
                Carregando
            </Text>
            <ActivityIndicator size={32} color="white" />
        </View>
    )
}
export { Preload };