import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
  SafeAreaView,
  StatusBar
  
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';


export default class CreateBankScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bankName: '',
      accountNo: '',
      bankCode: '',
      ifscCode:'',
      branchName:'',
      branchNumber:'',
      banckAccountCurrency:'',
      swiftCode:'',
      ibanNo:'',
      accountType:'',
    };
  }

  submitDetails = () => {
    console.log('21', this.state);
    db.collection('details').add({
      bankName: this.state.bankName,
      accountNo: this.state.accountNo,
      bankCode: this.state.bankCode,
      ifscCode: this.state.ifscCode,
      branchName:this.state.branchName,
      branchNumber:this.state.branchNumber,
      banckAccountCurrency:this.state.banckAccountCurrency,
      swiftCode:this.state.swiftCode,
      ibanNo:this.state.ibanNo,
      accountType:this.state.ibanNo,
      date: firebase.firestore.Timestamp.now().toDate(),
    });
    this.setState({
      bankName: '',
      accountNo: '',
      bankCode: '',
      ifscCode:'',
      branchName:'',
      branchNumber:'',
      banckAccountCurrency:'',
      swiftCode:'',
      ibanNo:'',
      accountType:'',
    });
    // ToastAndroid.show('Your details have been stored'
    // , ToastAndroid.SHORT)
    alert('Your details have been stored');
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <Header
          backgroundColor={'rgb(32, 137, 220)'}
          centerComponent={{
            text: 'BYUGU',
            style: { color: 'white', fontSize: 30 },
          }}
        />
         <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TextInput
          placeholder="BankName"
          onChangeText={(text) => {
            this.setState({
              bankName: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.bankName}
          style={styles.bankName}
        />
      
        <TextInput
          placeholder="AccountNo"
          onChangeText={(text) => {
            this.setState({
              accountNo: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.accountNo}
          style={styles.accountNo}
        />
        <TextInput
          placeholder="BankCode"
          onChangeText={(text) => {
            this.setState({
              bankCode: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.bankCode}
          style={styles.bankCode}
          multiline={true}
        />

<TextInput
          placeholder="IFSCCode"
          onChangeText={(text) => {
            this.setState({
              ifscCode: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.ifscCode}
          style={styles.ifscCode}
          multiline={true}
        />

<TextInput
          placeholder="BranchName"
          onChangeText={(text) => {
            this.setState({
              branchName: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.branchName}
          style={styles.branchName}
          multiline={true}
        />

        
<TextInput
          placeholder="BranchNumber"
          onChangeText={(text) => {
            this.setState({
              branchNumber: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.branchNumber}
          style={styles.branchNumber}
          multiline={true}
        />

<TextInput
          placeholder="BankAccountCurrency"
          onChangeText={(text) => {
            this.setState({
              banckAccountCurrency: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.banckAccountCurrency}
          style={styles.banckAccountCurrency}
          multiline={true}
        />


<TextInput
          placeholder="SWIFT/BIC"
          onChangeText={(text) => {
            this.setState({
              swiftCode: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.swiftCode}
          style={styles.swiftCode}
          multiline={true}
        />


<TextInput
          placeholder="IBANNo"
          onChangeText={(text) => {
            this.setState({
             ibanNo: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.ibanNo}
          style={styles.ibanNo}
          multiline={true}
        />

<TextInput
          placeholder="BankAccountType"
          onChangeText={(text) => {
            this.setState({
              accountType: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.accountType}
          style={styles.accountType}
          multiline={true}
        />




        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitDetails}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        </ScrollView>
        </SafeAreaView>
     </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    


   
  },
  bankName: {
    height: 40,
    borderWidth: 2,
    marginTop: 40,
    margin: 10,
    color: 'black',
    padding: 6,
  },
  accountNo: {
    height: 40,
    borderWidth: 2,
    margin: 10,
    padding: 6,
  },
  bankCode: {
    height: 40,
    borderWidth: 2,
    margin: 10,
    padding: 6,
  },

  ifscCode: {
    height: 40,
    borderWidth: 2,
    margin: 10,
    padding: 6,
  },
  
  branchName: {
    height: 40,
    borderWidth: 2,
    margin: 10,
    padding: 6,
  },
  
  branchNumber: {
    height: 40,
    borderWidth: 2,
    margin: 10,
    padding: 6,
  },
  
  swiftCode: {
    height: 40,
    borderWidth: 2,
    margin: 10,
    padding: 6,
  },
  
  banckAccountCurrency: {
    height: 40,
    borderWidth: 2,
    margin: 10,
    padding: 6,
  },
  
  ibanNo: {
    height: 40,
    borderWidth: 2,
    margin: 10,
    padding: 6,
  },

  
  accountType: {
    height: 40,
    borderWidth: 2,
    margin: 10,
    padding: 6,
  },
  submitButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgb(32, 137, 220)',
    width: 80,
    height: 40,
    color: 'rgb(32, 137, 220)',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    color: 'white'
  },
  scrollView:{
    
    position: 'absolute',
    flex:1,
top: 100,
left: 10,
right:10,
bottom: 100,

  }
});
