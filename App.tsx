import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function App() {

  const [ length, setLength ] = React.useState('')
  const [ isEnabledLower, setIsEnabledLower ] = React.useState(true)
  const [ passwordGenerated, isPasswordGenerated ] = React.useState(false)
  const [ password, setPassword ] = React.useState('')

  const toggleSwitchLower = () => {
    setIsEnabledLower(!isEnabledLower)
  }
  const [ isEnabledUpper, setIsEnabledUpper ] = React.useState(false)
  const toggleSwitchUpper = () => {
    setIsEnabledUpper(!isEnabledUpper)
  }
  const [ isEnabledNumbers, setIsEnabledNumbers ] = React.useState(false)
  const toggleSwitchNumbers = () => {
    setIsEnabledNumbers(!isEnabledNumbers)
  }
  const [ isEnabledSymbols, setIsEnabledSymbols ] = React.useState(false)
  const toggleSwitchSymbols = () => {
    setIsEnabledSymbols(!isEnabledSymbols)
  }

  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lower = "abcdefghijklmnopqrstuvwxyz"
  let number = "0123456789"
  let symbol = "@$#&*_{}[],=-().+;'/"
  let result = ""

  const generate = () => {
    let characters = ''
    if (isEnabledLower) characters += lower
    if (isEnabledUpper) characters += upper
    if (isEnabledNumbers) characters += number
    if (isEnabledSymbols) characters += symbol

    let chLength = characters.length
    let result = ""
    for (let index = 0; index < parseInt(length); index++) {
      const element = characters.charAt(Math.round(Math.random()*chLength));
      result += element
    } 
    isPasswordGenerated(true)
    setPassword(result)
  }


  const reset = () => {
    setLength('')
    setIsEnabledLower(true)
    setIsEnabledUpper(false)
    setIsEnabledNumbers(false)
    setIsEnabledSymbols(false)
    isPasswordGenerated(false)
  }


  return (
    <View style={{paddingHorizontal: 8, paddingVertical: 8,}}>
      <Text style={styles.title}>Password Generator</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.lengthText}>Password Length: </Text>
        <TextInput maxLength={2} 
        value={length}
        style={styles.lengthInputText} 
        onChangeText={setLength} 
        placeholder='Ex: 8' 
        keyboardType='numeric'>
        </TextInput>
      </View>
      <View style={styles.optionContainer}>
        <View style={styles.optionsCard}>
          <Text style={styles.optionsText}>Include Lowercase Letters: </Text>
          <Switch 
          style={styles.switch}
          trackColor={{true: '#2D9596', false: '#9AD0C2', }}
          thumbColor={isEnabledLower ? '#265073' : '#ECF4D6'}
          onValueChange={toggleSwitchLower}
          value={isEnabledLower}
          />
        </View>
        <View style={styles.optionsCard}>
          <Text style={styles.optionsText}>Include Uppercase Letters: </Text>
          <Switch 
          style={styles.switch}
          trackColor={{true: '#2D9596', false: '#9AD0C2', }}
          thumbColor={isEnabledUpper ? '#265073' : '#ECF4D6'}
          onValueChange={toggleSwitchUpper}
          value={isEnabledUpper}
          />
        </View>
        <View style={styles.optionsCard}>
          <Text style={styles.optionsText}>Include Numbers: </Text>
          <Switch 
          style={styles.switch}
          trackColor={{true: '#2D9596', false: '#9AD0C2', }}
          thumbColor={isEnabledNumbers ? '#265073' : '#ECF4D6'}
          onValueChange={toggleSwitchNumbers}
          value={isEnabledNumbers}
          />
        </View>
        <View style={styles.optionsCard}>
          <Text style={styles.optionsText}>Include Sybmols: </Text>
          <Switch 
          style={styles.switch}
          trackColor={{true: '#2D9596', false: '#9AD0C2', }}
          thumbColor={isEnabledSymbols ? '#265073' : '#ECF4D6'}
          onValueChange={toggleSwitchSymbols}
          value={isEnabledSymbols}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.generateBtn} onPress={generate}>
          <Text style={{textAlign: 'center', color: '#000000', fontSize: 18, textAlignVertical: 'center', fontWeight: '600'}}>Generate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetBtn} onPress={reset}>
          <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 18, textAlignVertical: 'center', fontWeight: '600'}}>Reset</Text>
        </TouchableOpacity>
      </View>
      {passwordGenerated ? (
        <View style={styles.passwordContainer}>
          <Text style={styles.password}>{password}</Text>
        </View>
      ) : null }
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000000',
    marginTop: 16,
  },
  lengthText: {
    marginTop: 16,
    color: '#000000',
    fontSize: 22,
    fontWeight: '500',
    // borderColor: '#000000',
    // borderWidth: 2,
    paddingVertical: 8,
  },
  lengthInputText: {
    width: 90,
    marginLeft: 'auto',
    marginRight: 4,
    fontSize: 22,
    marginTop: 16,
    borderColor: '#5F0F40',
    borderWidth: 2,
    paddingHorizontal: 8
  },
  optionContainer: {
    flexDirection: 'column',
    marginTop: 16,
    elevation: 4, 
    shadowColor: '#000000', 
    shadowOffset: {width: 4, height: 4},
    marginHorizontal: 8,
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 10,
  },
  optionsCard: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 4,
  },
  optionsText: {
    color: '#000000',
    fontSize: 22,
    fontWeight: '400',
  },
  switch: {
    marginLeft: 'auto',
    // height: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 8,
    borderRadius: 10,
    height: 100,
    backgroundColor: '#89CFF3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  generateBtn: {
    backgroundColor: '#C5E898',
    height: 50,
    width: 100,
    margin: 30,
    paddingHorizontal: 8,
    paddingTop: 10,
    borderRadius: 8
  },
  resetBtn: {
    backgroundColor: '#BF3131',
    height: 50,
    width: 75,
    margin: 30,
    paddingHorizontal: 8,
    paddingTop: 10,
    borderRadius: 8
  },
  passwordContainer: {
    marginHorizontal: 8,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: {width: 4, height: 4},
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 8
  },
  password: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '600',
  }
})