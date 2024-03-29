import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";

// IMPORTING IMAGES HERE
import youtubeIcon from "../assets/icons/youtube_icon.png";
import shortsIcon from '../assets/icons/shorts_icon.png'
// import avatar from "../assets/profile.jpg";
import { categories, shortVideos } from "../constants/index";
import ShortVideoCard from "../components/ShortVideoCard";


export default function HomeScreen() {
     // USESTATES HERE
     const [activeCategory, setActiveCategory] = useState('All')
     return (
          <View style={{ backgroundColor: "#212121", minHeight: "100%" }}>
               <SafeAreaView className="my-10 mx-3">
                    <StatusBar style="light" />
                    <View className="flex-row justify-between items-center ">
                         {/* ICON AND BRAND AREA */}
                         <View className="flex-row items-center  space-x-2">
                              <Image source={youtubeIcon} className="h-7 w-10" />
                              <Text className="text-white font-semibold text-xl tracking-tighter">YouTube </Text>
                         </View>
                         <View className="flex-row items-center space-x-2">
                              <Icon.Cast stroke="white" strokeWidth={1.2} height={22} />
                              <Icon.Bell stroke="white" strokeWidth={1.2} height={22} />
                              <Icon.Search stroke="white" strokeWidth={1.2} height={22} />
                             

                              {/* <Image source={avatar} className="w-7 h-7 rounded-full object-cover" /> */}
                         </View>
                    </View>
                    </SafeAreaView>


                    
                    {/* CATEGORY  SECTION */}
                         <ScrollView className=" flex-1 -mt-6" showsVerticalScrollIndicator={false}>
                    <View className="py-2 pb-5 ">
                         <ScrollView className="px-4" horizontal showsHorizontalScrollIndicator={false}>
                              {categories.map((category, index)=>{
                                   let isActive = category == activeCategory;
                                   let textClass = isActive ? 'text-black' : 'text-white'
                                   return(
                                        <TouchableOpacity key={index} 
                                        style={{backgroundColor: isActive ? 'white' : 'rgba(255, 255, 255, 0.1)'}}
                                         className="rounded-md p-1 px-3 mr-2" onPress={()=> setActiveCategory(category)}>
                                             <Text className={textClass}>{category}</Text>
                                        </TouchableOpacity>
                                   )
                              })}
                              </ScrollView>
                       
                    </View>

                    {/* SHORTS SECTIONS */}
                    <View className="px-2 space-y-3 ">
                         <View className="mx-1 flex-row items-center space-x-2">
                              <Image source={shortsIcon } className="h-6 w-5"/>
                              <Text className="text-white font-semibold text-lg ">Shorts</Text>
                         </View>
                              <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-3">
                                   {
                                        shortVideos.map((item, index)=> <ShortVideoCard item={item} key={index}/>)
                                   }
                              </ScrollView>
                    </View>




                    </ScrollView>
          </View>
     );
}
