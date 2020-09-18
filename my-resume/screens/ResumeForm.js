import React from 'react'
import ValidationComponent from 'react-native-form-validator'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'

export default class ResumeForm extends ValidationComponent{
    state ={
        name: '',
        nickname: '',
        age: '',
        skill:  ''
    }
    _onSubmit = () => {
        this.validate({
            name: { required: true},
            nickname: { required: true},
            age: { required: true, numbers: true },
            skill: { required: true}
        })
    }
    render(){
        return (
            <View style= {styles.container}>
                {/* Show */}
                <View>
                    <Text style={styles.getErrorMessages}>
                        {this.getErrorMessages()}
                    </Text>
                </View>
                {/* Full Name */}
                <View>
                    <Text>Full Name</Text>
                    <TextInput 
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ name: text })} 
                    value={this.state.name}
                    ></TextInput>
                </View>

                {/* Nickname */}
                <View style={{marginTop: 20}}>
                    <Text>Nickname</Text>
                    <TextInput 
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ nickname: text })} 
                    value={this.state.nickname}
                    ></TextInput>
                </View>

                {/* Age */}
                <View style={{marginTop: 20}}>
                    <Text>Age</Text>
                    <TextInput 
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ age: text })} 
                    value={this.state.age}
                    ></TextInput>
                </View>

                {/* Skill */}
                <View style={{marginTop: 20}}>
                    <Text>Skill</Text>
                    <TextInput 
                    style={styles.textAreaInput}
                    onChangeText={(text) => this.setState({ skill: text })} 
                    value={this.state.skill}
                    multiline= {true}
                    ></TextInput>
                </View>

                {/* Button */}
                <View style={{marginTop: 20}}>
                    <Button 
                    title='Create Resume' 
                    onPress={this._onSubmit}  
                    ></Button>
                </View>
            </View>
        )
    }
}

// style
const styles = StyleSheet.create({
    container: {
        padding: 30, 
        backgroundColor: 'white', 
        minHeight: '100%'
    },
    textInput: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
    },
    textAreaInput: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1
    },
    getErrorMessages: {
        color: 'red',
        marginBottom: 20
    }
})
