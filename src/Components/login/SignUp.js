import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native';




export default class LoginScreen extends React.Component {
    
    static navigationOptions = {
        
        title: "Sign Up",
        headerStyle: {
            
          backgroundColor: '#1C222E'
        },
        
        
      };

    constructor(props) {
        super(props)
        this.validateInput = React.createRef()

    }

    state = {
        username: "",
        password: "",
        errMsg: ""
    }

    render() {

        return (
            <ScrollView >
                <View style={styles.container}>
                    <Text style={{ fontSize: 25, marginTop: 20 }}>Welcome </Text>
                    <Text style={{ fontSize: 16, color: 'gray', marginTop: 20 }}>Sign Up to continue</Text>

                    <Animatable.View
                        ref={this.validateInput}
                    >
                        <TextInput
                            style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                            placeholder="Username"
                            onChangeText={(text) => {
                                this.setState({ errMsg: '' }),
                                    this.setState({ username: text })
                            }
                            }
                        />

                        <TextInput
                            style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                            placeholder="Email"
                            onChangeText={(text) => {
                                this.setState({ errMsg: '' }),
                                    this.setState({ username: text })
                            }
                            }
                        />

                        <TextInput
                            style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={(text) => {
                                this.setState({ errMsg: '' }),
                                    this.setState({ password: text })
                            }
                            }

                        />
                        <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{this.state.errMsg}</Text>

                    </Animatable.View>



                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                        <TouchableOpacity

                            style={{ width: 200, backgroundColor: '#0d47a1', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30 }}
                        >
                            <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 16 }}>Sign Up</Text>
                        </TouchableOpacity>



                        <View style={{ flexDirection: 'row', marginTop: 60 }}>
                            <TouchableOpacity>
                                <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#3f51b5', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>f</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#f44336', marginHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>G</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#1565c0', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>in</Text>
                            </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </ScrollView>



        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20
    }
})