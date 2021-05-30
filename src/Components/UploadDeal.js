import React, { useState } from 'react';
import { View, Text, Image } from 'react-native'
import { Icon } from "native-base";
import ImagePicker from 'react-native-image-picker'
import { Input, Button } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { Alert } from 'react-native';




//const [date, setDate] = useState(new Date())
export default class UploadDeal extends React.Component {
  

  state = {
    photo: null,
  }

  handleChoosePhoto = () => {
    const options = {

      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response })
      }
    })
  }

  static navigationOptions = {
    title: "Upload Deal",
  
    headerStyle: {
      backgroundColor: '#1C222E'
    },

    headerRight: (
      <View style={{ flexDirection: "row" }}>
        {/* <Button
        onPress={() => Alert.alert('Simple Button pressed')}
          type="FontAwesome5"
          name="check"
          style={{ color: "#fff", marginRight: 15 }}
        /> */}
        <Button
          onPress={() => Alert.alert('Simple Button ')}
          type={'clear'}

          icon={
            <Icon

              type="FontAwesome5"
              name="check"
              size={15}
              style={{ color: "white" }}
            />
          }

        />
      </View>
    )
  };

  render() {
    const { photo } = this.state;
   
    return (

      


      <View style={{ flexDirection: "column", flex: 1, backgroundColor: "#1C222E" }}>

        <View style={{ backgroundColor: "#243141" }}>
          <Input
            color= '#fff'
            placeholder='  http://www.example.com/deal '
            leftIcon={{ type: 'font-awesome', name: 'link', color: "#889AA8" }}
            
          />
        </View>

        <ScrollView style={{ backgroundColor: "#243141", marginTop: 15}}>

          <View style={{ marginTop: 10, flex: 1, marginHorizontal: 13 }}>
            {photo && (
              <Image
                source={{ uri: photo.uri }}
                style={{ width: 300, height: 300 }}
              />
            )}
            <Text style={{ color: "#889AA8", alignItems: 'flex-start', fontSize: 20 }}>Upload mage</Text>

            <Image
              style={{ width: "100%", height: 150 }}
              source={require('./images/upld.png')}
            />

            <Input
              color= '#fff'
              placeholder='  Price'
              leftIcon={{ type: 'font-awesome', name: 'tags', color: "#889AA8"  }}
            />
            <Input
              color= '#fff'
              placeholder='  Coupon Code'
              leftIcon={{ type: 'font-awesome', name: 'cut', color: "#889AA8"  }}
            />
            <Input
              color= '#fff'
              placeholder='  Title'
              leftIcon={{ type: 'font-awesome', name: 'filter', color: "#889AA8"  }}
            />
            <Input
              color= '#fff'
              placeholder='  Description'
              leftIcon={{ type: 'font-awesome', name: 'audio-description', color: "#889AA8"  }}
              multiline={true}
              autoComplete={false}
              autoCapitalize={false}
            />
            <Input
              color= '#fff'
              placeholder='  Categories'
              leftIcon={{ type: 'font-awesome', name: 'copy', color: "#889AA8"  }}
            />
            
          </View>

          
        </ScrollView >




      </View>

    );


  }
}
