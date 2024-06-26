import React from 'react'
import { View, Image, Text } from 'react-native'
import { formatViews } from '../utils/Numbers';
import * as Icon from 'react-native-feather'


const VideoCard = ({video}) => {
  console.log("vide", video)
  return (
    <View className="mt-4">
      
    <Image  source={{ uri: video?.thumbnail[0].url }}  className="h-52 w-full"/>
    <View className="flex items-end mr-2 mb-5 -mt-6">
      <View className="bg-black rounded "> 
          <Text className="text-white font-semibold text-xs">
              {video?.lengthText}
          </Text>
      </View>
      
    </View>
    <View 
      className="flex-row justify-between items-center pb-5 space-x-3 mx-2">
     <Image source={{ uri: video?.channelThumbnail[0].url }} className="h-9 w-9 rounded-full" />

         
          <View className="flex-1 space-y-1">
              <Text className="text-white font-semibold">
                  {video?.title}
              </Text>
              <Text className="text-zinc-400 text-xs">
                  {video?.channelTitle.length>20? video?.channelTitle.slice(0,20)+'...': video?.channelTitle} • {formatViews(video?.viewCount)} views • {video?.publishedText}
              </Text>
          </View>
          <View className="self-start">
              <Icon.MoreVertical stroke="white" strokeWidth={2} height={15} />
          </View>
    </View>
  </View>
  )
}

export default VideoCard; 