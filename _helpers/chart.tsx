import { View, Text } from 'react-native'
import React from 'react'
import { LineChart } from "react-native-gifted-charts";


export default function Chart() {
    const data = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];

  return (
   <View style={{width:'100%', backgroundColor:"white"}}>
     <LineChart
        data={data}
        color={'#177AD5'}
        thickness={3}
        dataPointsColor={'red'}
        
      />
   </View>
  )
}