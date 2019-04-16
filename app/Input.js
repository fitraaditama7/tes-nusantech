import React, { Component } from 'react'
import { View, Text, TextInput, Button, CheckBox, StyleSheet } from 'react-native'

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked1: false,
      isChecked2: false,
      isChecked3: false,
      number1: 0,
      number2: 0,
      number3: 0,
      result: '',
      disabled: false
    }
  }

  // async handleCheck(checkObject) {
  //   await this.setState(checkObject)
  //   const checked = [this.state.isChecked1, this.state.isChecked2, this.state.isChecked3]
  //   const data = []
  //   checked.map(item => {
  //     if (item) {
  //       data.push(item)
  //     }
  //   })
  //   if (data.length > 1) {
  //     this.setState({ disabled: false })
  //   } else {
  //     this.setState({ disabled: true })
  //   }
  // }

  calculate(operator) {
    let num = 0
    let index = null
    let arr = []
    const arrNum = [
      {number: this.state.number1, isChecked: this.state.isChecked1},
      {number: this.state.number2, isChecked: this.state.isChecked2},
      {number: this.state.number3, isChecked: this.state.isChecked3}
    ]

    arrNum.map(item => {
      if (item.isChecked) {
        arr.push(item)
      } 
    })

    if (arr.length > 1) {
      arrNum.map(item => {
        if (item.isChecked && item.number !== '') {
          if (operator === '+') {
            num += Number(item.number)
          } else if (operator === '-') {
            if (index === null) {
              num = item.number
              index = 1
            } else {
              num -= Number(item.number)
            }
          } else if (operator === '*') {
            if (index === null) {
              num = item.number
              index = 1
            } else {
              num *= Number(item.number)
            }
          } else {
            if (index === null) {
              num = item.number
              index = 1
            } else {
              num /= Number(item.number)
            }
          }
        }
      })
    } else {
      alert('Error!, Isi Setidaknya 2 data')
    }

    this.setState({
      result: num
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            keyboardType='numeric'
            style={styles.input}
            placeholder="Insert First Number"
            onChangeText={(number1) => {
              this.setState({ number1 })
            }}
            
          />
          <CheckBox 
            style={styles.check}
            onValueChange={() => this.setState({isChecked1: !this.state.isChecked1})}
            value={this.state.isChecked1}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            keyboardType='numeric'
            style={styles.input}
            placeholder="Insert Second Number"
            onChangeText={(number2) => {
              this.setState({ number2 })
            }}
          />
          <CheckBox 
            style={styles.check}
            onValueChange={() => this.setState({isChecked2: !this.state.isChecked2})}
            value={this.state.isChecked2}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            keyboardType='numeric'
            style={styles.input} 
            placeholder="Insert Third Number"
            onChangeText={(number3) => {
              this.setState({ number3 })
            }}
          />
          <CheckBox 
            style={styles.check}
            onValueChange={() => this.setState({isChecked3: !this.state.isChecked2})}
            value={this.state.isChecked3}
          />
        </View>
        <View style={styles.buttonView}>
          <View style={styles.button}>
            <Button
              disabled={this.state.disabled}
              title="+"
              onPress={() => this.calculate('+')}
            />
          </View>
          <View style={styles.button}>
            <Button
              disabled={this.state.disabled}
              title="-"
              onPress={() => this.calculate('-')}
            />
          </View>
          <View style={styles.button}>
            <Button
              disabled={this.state.disabled}
              title="*"
              onPress={() => this.calculate('*')}
            />
          </View>
          <View style={styles.button}>
            <Button
              disabled={this.state.disabled}
              title="/"
              onPress={() => this.calculate('/')}
            />
          </View>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultLabel}>Result:</Text>
          <Text style={styles.resultText}>{this.state.result}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputView: {
    flexDirection: 'row',
    margin: 15,
    height: 20
  },
  buttonView: {
    flexDirection: 'row',
    margin: 15,
    height: 40
  },
  result: {
    flexDirection: 'row',
    margin: 15,
  },
  resultLabel: {
    flex: 1,
    fontSize: 40
  },
  resultText: {
    flex: 1,
    fontSize: 40
  },
  input: {
    flex: 3,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#636363',
    height: 35
  },
  check: {
    borderColor: '#636363',
  },
  button: {
    flex: 1,
    margin: 5
  }
})