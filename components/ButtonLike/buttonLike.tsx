import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'


const ButtonLike = () => {
  const [like, setLike] = useState(false)
  const toggleLike = () => {
    setLike((previousState) => !previousState)
  }
  
  return (
    <TouchableOpacity onPress={toggleLike}>
      <View
        className="w-12 h-12 justify-center items-center
            bg-white/30 rounded-full mr-6 "
      >
        <Entypo name={like ? "heart" : "heart-outlined"} size={32} color={like ? "#e50808" : "#ffffff71"} />
      </View>
    </TouchableOpacity>
  );
};

export { ButtonLike };
