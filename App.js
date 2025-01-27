// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, Button, FlatList, Modal, ScrollView, SectionList, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
// import ExStyles from './style'
// import { UserData } from './components/UserData';
// import Student from './components/ClassComponent';
// import style from './style';



// state in RN
// const App = () => {

// const [name, setName] = useState("Navyum");
// let data = "gogii"

// const testName = () => {
//   setName("Navy");
//   data = "gogigogi"
// }

//   return (
//     <View>
//       <Text style={{ fontSize: 30, fontWeight:'800' }}>state in RN</Text>
//       <Text style={{ fontSize: 20 }}>{name}</Text>
//       <Button 
//         title='update name'
//         onPress={() => setName('Nav')}
//       />
//       <Button 
//         title='update me'
//         onPress={testName}
//       />
//     </View> 
//   );
// }


// props in RN
// {
// // const App = () => {
// //   const [name, setName] = useState(second)
// //   // let name = "Navyum";
// //   return (
// //     <View>
// //       <Text style={{ fontSize: 30 }}>props in RN</Text>

// //       <Button
// //         title='update name'
// //         onPress={() => setName('Nav')}
// //       />
// //       <User
// //         name={name}
// //         age={24}
// //       />
// //     </View>
// //   )
// // }


// // const User = (props) => {
// //   console.warn(props.name);
// //   return (
// //     <View style={{ backgroundColor: 'green', padding: 5 }}>
// //       <Text style={{ fontSize: 30 }}>Child component
// //         {props.name}
// //       </Text>
// //     </View>
// //   )
// // }
// }


// Styles
// {
// const App = () => {

//   return(
//     <View>
//       <Text style={{ fontSize: 30 }}>Styles in RN</Text>
//       <Text style={{ fontSize: 30 }}>Styles in RN</Text>
//       <Text style={styles.textbox}>Styles in RN</Text>
//       <Text style={ExStyles.textbox}>Styles in RN</Text>
//       <Text style={[styles.textbox, ExStyles.textbox, {marginTop:20}]}>Styles in RN</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create ({
//   textbox: {
//     color: '#fff',
//     fontSize:25,
//     backgroundColor: 'blue',
//     marginBottom: 10,
//     padding: 10,
//     borderRadius: 10,
//     textAlign: 'center',
//     height: 100,
//     textAlignVertical: 'center',
//     borderColor:'red',
//     borderWidth: 2
//   }
// })
// }


// Handle Text Input 
// {
// const App = () => {
//   const [name, setName] = useState("")

//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>InputText in RN</Text>
//       <Text style={{ fontSize: 30 }}>Your name is : {name}</Text>

//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//         placeholder='enter your name'
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />
//       <Button 
//         title='clear Input Valur'
//         onPress={() => setName("")}
//       />
//     </View>
//   )
// }
// }


// Simple Form
// {
// const App = () => {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [display, setDisplay] = useState(false)

//   const resetFormData = () => {
//     setDisplay(false);
//     setEmail("")
//     setName("")
//     setPassword("")
//   }


//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>Simple Form in RN</Text>
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//         placeholder='enter User Name'
//         onChangeText={(text) => setName(text)}
//         value={name}
//       />

//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//         placeholder='enter User Email'
//         onChangeText={(text) => setEmail(text)}
//         value={email}
//       />

//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//         placeholder='enter User Password'
//         onChangeText={(text) => setPassword(text)}
//         value={password}
//         secureTextEntry={true}
//       />

//       <View style={{marginBottom:10}}>
//         <Button
//           title='Print details'
//           onPress={() => setDisplay(true)}
//         />
//       </View>

//       <View>
//         <Button
//           title='Clear details'
//           onPress={resetFormData}
//         />
//       </View>

//       <View>
//         {
//           display ? 
//           <View>
//             <Text style={{fontSize:25}}>Username: {name}</Text>
//             <Text style={{fontSize:25}}>Email: {email}</Text>
//             <Text style={{fontSize:25}}>Password: {password}</Text>
//           </View>
//           : null
//         }
//       </View>

//     </View>
//   )
// }
// }


// List 
// {
// const users = [
//   {
//     id: 1,
//     name: 'John',
//   },
//   {
//     id: 2,
//     name: 'cina',
//   },
//   {
//     id: 3,
//     name: 'no',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   }
// ]


// const App = () => {
//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>List with Flatlist Component</Text>
//       <FlatList 
//         data={users}    // ye array me hi hoga
//         renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}  // ye data ko render kar dega
//         keyExtractor={(item)=>item.id}   // ye kisi unique ke liye work me lete hai
//       />
//     </View>
//   )
// };

// const styles = StyleSheet.create({
//   item:{
//     fontSize:24,
//     padding:10,
//     color:"#fff",
//     backgroundColor: "blue",
//     borderColor: "black",
//     borderWidth:1,
//     margin:10
//   }
// })
// }


// Custom list
// {
// const users = [
//   {
//     id: 1,
//     name: 'John',
//   },
//   {
//     id: 2,
//     name: 'cina',
//   },
//   {
//     id: 3,
//     name: 'no',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'Rita',
//   }
// ]


// const App = () => {
//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>List with map function</Text>
//       <ScrollView style={{marginBottom:50}}>
//       {
//         users.map((item)=><Text style={styles.item}>{item.name}</Text>)
//       }
//       </ScrollView>
//     </View>
//   )
// };

// const styles = StyleSheet.create({
//   item:{
//     fontSize:24,
//     padding:10,
//     color:"#fff",
//     backgroundColor: "blue",
//     borderColor: "black",
//     borderWidth:1,
//     margin:10
//   }
// })
// }


// Dynamic Grid
// {
// const users = [
//   {
//     id: 1,
//     name: 'John',
//   },
//   {
//     id: 2,
//     name: 'cina',
//   },
//   {
//     id: 3,
//     name: 'no',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'bita',
//   },
//   {
//     id: 4,
//     name: 'Rita',
//   }
// ]

// const App = () => {
//   return(
//     <View>
//       <Text style={{fontSize:30}}>Grid with Dynamic Data</Text>

//       <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
//       {/* <Text style={style.item}>navi</Text>
//       <Text style={style.item}>navi</Text>
//       <Text style={style.item}>navi</Text>
//       <Text style={style.item}>navi</Text>
//       <Text style={style.item}>navi</Text> */}
//       {
//         users.map((item)=><Text style={style.item}>{item.name}</Text>)
//       }
//       </View>

//     </View>
//   )
// }

// const style = StyleSheet.create({
//   item:{
//     fontSize:24,
//     padding:5,
//     color:"#fff",
//     backgroundColor: "blue",
//     borderColor: "black",
//     borderWidth:1,
//     margin:5,
//     width:120,
//     height:120,
//     textAlignVertical:'center',
//     textAlign:'center'
//   }
// })
// }


// Component in loop Flatlist
// {
// const users = [
//   {
//     id: 1,
//     name: 'John',
//     email: 'test@gogi.com'
//   },
//   {
//     id: 2,
//     name: 'cina',
//     email: 'test@gogi.com'
//   },
//   {
//     id: 3,
//     name: 'no',
//     email: 'test@gogi.com'
//   },
//   {
//     id: 4,
//     name: 'bita',
//     email: 'test@gogi.com'
//   }
// ]

// const App = () => {
//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>Component in loop Flatlist</Text>

//       <FlatList
//         data={users}
//         // renderItem={({ item }) => <View style={style.box}>
//         //   <Text style={style.item}>{item.name}</Text>
//         //   <Text style={style.item}>{item.email}</Text>
//         // </View>}
//         renderItem={({ item }) => <UserData item={item}/>}
//       />


//     </View>
//   )
// }
// // {
// // // const UserData = (props) => {
// // //   const { item } = props.item;
// // //   return (
// // //     <View style={style.box}>
// // //       <Text style={style.item}>{item.name}</Text>
// // //       <Text style={style.item}>{item.email}</Text>
// // //     </View>
// // //   )
// // // }

// // // const style = StyleSheet.create({
// // //   item: {
// // //     fontSize: 20,
// // //     margin: 10,
// // //     flex: 1,
// // //     margin: 2,
// // //     backgroundColor: 'orange',
// // //     textAlign: 'center'

// // //   },
// // //   box: {
// // //     flexDirection: 'row',
// // //     borderWidth: 2,
// // //     borderColor: 'black',
// // //     width: 100,
// // //     marginBottom: 10
// // //   }
// // // })
// // }
// }


// Section List in RN
// {
// const App = () => {
//   const users = [
//     {
//       id: '1',
//       name: 'John',
//       data: ["JS", "Reactjs", "RN"]
//     },
//     {
//       id: '2',
//       name: 'cina',
//       data: ["CS", "JS", "RN"]
//     },
//     {
//       id: '3',
//       name: 'no',
//       data: ["CS", "JS", "RN"]
//     },
//     {
//       id: '2',
//       name: 'bita',
//       data: ["CS", "JS", "RN"]
//     },
//   ]



//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>Section List in RN</Text>

//       <SectionList
//         sections={users}
//         // keyExtractor={(item, index) => item.id}
//         renderItem={({ item }) => <Text style={{fontSize:20, marginLeft:20}}>{item}</Text>}
//         renderSectionHeader={({Section:{name}}) => (
//           <Text style={{fontSize:25, color:'red'}}>{name}</Text>
//         )}
//       />
//     </View>
//   )
// }
// }



// Class Component in React-Native
// {
// class App extends React.Component{
//   fruit = () => {
//     console.warn("Apple");
//   }
//   render(){
//     return(
//       <View>
//         <Text style={{fontSize:30}}>Section List in RN</Text>
//         <TextInput 
//           placeholder='enter your name'
//         />
//         <Button 
//           title='Press me'
//           onPress={this.fruit}
//         />


//         <Student />
//       </View>
//       )
//       }
// }
// }


// State and Props in Class Component
// {
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       name: 'Rahul',
//       // age: 20,
//       // address: 'Delhi'
//       }
//   }


//   updateName = (val) => {
//     this.setState({name: val})   // setState bydefault aati h class me 
//   }


//   render() {
//     return (
//       <View>
//         <Text style={{ fontSize: 30 }}>{this.state.name}</Text>
//         <TextInput
//           placeholder='enter your name'
//           onChangeText={
//             (text)=>this.updateName(text)
//             }
//         />
//         <Button
//           title='Press me'
//           onPress={this.fruit}
//         />


//         <Student 
//           name={this.state.name}
//         />
//       </View>
//     )
//   }
// }
// }



// Life Cycle with useEffect
// {
// const App = () => {

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//   console.warn('useEffect called')
//   },[])

//   return(
//     <View>
//       <Text style={{fontSize:30}}>LIfe Cycle with useEffect {count}</Text>
//       <Button 
//         title='update count'
//         onPress={()=>setCount(count+1)}
//       />
//     </View>
//   )
// }
// }


// useEffect for state and props
// {
// const App = () => {

//   const [count, setCount] = useState(0);
//   const [data, setData] = useState(100);
//   const [number, setNumber] = useState(100);

//   // useEffect(() => {
//   //   console.warn("do some animation here :", count)
//   // }, [count, number])

//   // useEffect(() => {
//   //   console.warn("call api here : ", data)
//   // }, [data])

//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}> useEffect in Component : {count} : {data} : {number}</Text>

//       <Button
//         title='update counter'
//         onPress={() => setCount(count + 1)}
//       />

//       <Button
//         title='update counter'
//         onPress={() => setData(data + 1)}
//       />

//       <Button
//         title='update counter'
//         onPress={() => setNumber(number + 1)}
//       />

//       <User 
//         info={{data, count}}
//       />


//     </View>
//   )
// }


// const User = () => {
//   // console.warn(props.info);

//   useEffect(()=> {
//     console.warn("run this code when data is updated");
//   },[props.info.data])

//   useEffect(()=> {
//     console.warn("run this code when counter is updated");
//   },[props.info.count])

//   return (
//     <View>
//       <Text style={{ fontSize: 30, color: 'orange' }}>user component</Text>


//       <Text style={{ fontSize: 30, color: 'orange' }}>data : {props.info.data}</Text>
//       <Text style={{ fontSize: 30, color: 'orange' }}>count : {props.info.count}</Text>

//     </View>
//   )

// }
// }


// Show/Hide component
// {
// const App = () => { 
//   const [show, setShow] = useState(true);

//   return(
//     <View>
//       <Text style={{ fontSize: 30, color: 'orange' }}> Show/Hide Component </Text>
//       <Button 
//         title='toggle component'
//         onPress={()=>setShow(!show)}
//       />
//       {
//         show === true? <User /> : null
//       }

//       <User />
//     </View>
//   )
// }

// const User = () => {

//   return(
//     <View>
//       <Text style={{fontSize:30, color:'green'}}>User Component</Text>
//     </View>
//   )
// }
// }



// useEffect for Unmount Component
// {
// const App = () => { 
//   const [show, setShow] = useState(true);

//   return(
//     <View>
//       <Text style={{ fontSize: 30, color: 'orange' }}> useEffect for Unmount Component </Text>
//       <Button 
//         title='toggle'
//         onPress={()=>setShow(!show)}
//       />
//       {
//         show ? <Student /> : null
//       }


//       <User />
//     </View>
//   )
// }

// const Student = () => {

//   let timer = setInterval(()=>{
//     console.warn("timer called");
//   }, 2000)

//   useEffect(() => {
//     // console.warn("useEffect called");
//     // return() => {console.warn("useEffect called for unmount")}
//     return() => clearInterval(timer)
//   })

//   return(
//     <View>
//       <Text style={{fontSize:30, color:'green'}}>Student Component</Text>
//     </View>
//   )
// }
// }



// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------



// Responsive UI with flex
// {
// const App = () => {
//   return (
//     <View style={{flex:1}}>
//       <View style={{flex:1, backgroundColor:'red', flexDirection:'row'}}>
//         <View style={{flex:1, backgroundColor:'blue', margin:10}}></View>
//         <View style={{flex:1, backgroundColor:'blue', margin:10}}></View>
//         <View style={{flex:1, backgroundColor:'blue', margin:10}}></View>
//       </View>
//       <View style={{flex:1, backgroundColor:'green'}}>flex2</View>
//       <View style={{flex:1, backgroundColor:'orange'}}>flex3</View>

//       <TouchableHighlight>
//         <Text >Touchable</Text>
//       </TouchableHighlight>


//     </View>
//   )
// }
// }



// Radio Button
// {
// const App = () => {

//   const [selectedRadio, setSelectedRadio] = useState(1)
//   return (
//     <View style={style.main}>
//       <TouchableOpacity
//       onPress={() => setSelectedRadio(1)}
//       >
//         <View style={style.radioWrapper}>
//           <View style={style.radio}>
//             {/* <View style={style.radioCircle}></View> */}
//             {
//               selectedRadio === 1 ? <View style={style.radioCircle}></View> : null
//             }
//           </View>
//           <Text style={style.radioText}>Radio 1</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity
//       onPress={() => setSelectedRadio(2)}
//       >
//         <View style={style.radioWrapper}>
//           <View style={style.radio}>
//           {
//               selectedRadio === 2 ? <View style={style.radioCircle}></View> : null
//             }
//           </View>
//           <Text style={style.radioText}>Radio 1</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   )
// }


// const style = StyleSheet.create({
//   main: {
//     flex: 1,
//     backgroundColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   radioText: {
//     fontSize: 25
//   },
//   radio: {
//     height: 40,
//     width: 40,
//     borderRadius: 20,
//     borderWidth: 2,
//     borderColor: 'black',
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10
//   },
//   radioWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10
//   },
//   radioCircle: {
//     height: 28,
//     width: 28,
//     borderRadius: 10,
//     backgroundColor: 'black',
//     margin: 4
//   }
// })
// }


// Dynamic Radio Button
// {
// const App = () => {

//   const skills = [
//     {
//       id: 1,
//       name: "Java"
//     },
//     {
//       id: 2,
//       name: "C++"
//     },
//     {
//       id: 3,
//       name: "C"
//     },
//     {
//       id: 4,
//       name: "Python"
//     },
//     {
//       id: 5,
//       name: "JavaScript"
//     },
//   ]

//   const [selectedRadio, setSelectedRadio] = useState(1)
//   return (
//     <View style={style.main}>
//       {
//         skills.map((item, index) =>
//           <TouchableOpacity
//             key={index}
//             onPress={() => setSelectedRadio(item.id)}
//           >
//             <View style={style.radioWrapper}>
//               <View style={style.radio}>
//                 {/* <View style={style.radioCircle}></View> */}
//                 {
//                   selectedRadio == item.id ? <View style={style.radioCircle}></View> : null
//                 }
//               </View>
//               <Text style={style.radioText}>{item.name}</Text>
//             </View>
//           </TouchableOpacity>
//         )
//       }

//     </View>
//   )
// }


// const style = StyleSheet.create({
//   main: {
//     flex: 1,
//     backgroundColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   radioText: {
//     fontSize: 25
//   },
//   radio: {
//     height: 40,
//     width: 40,
//     borderRadius: 20,
//     borderWidth: 2,
//     borderColor: 'black',
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10
//   },
//   radioWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10
//   },
//   radioCircle: {
//     height: 28,
//     width: 28,
//     borderRadius: 10,
//     backgroundColor: 'black',
//     margin: 4
//   }
// })
// }


// Activity Indicator (Loader)
// {
// const App = () => {
//   const [show, setShow] = useState(false);
//   const displayLoader = () => {
//     setShow(true);

//     setTimeout(()=>{
//       setShow(false);
//     }, 3000)

//     // api call in 3 sec
//   }
//   return(
//     <View style={style.main}>
//       {/* <ActivityIndicator size="large" color="red" />
//       <ActivityIndicator size="small" color="red" /> */}


//       {/* <ActivityIndicator size={200} color="green" animating={show}/> */}

//       {
//         show ? <ActivityIndicator size="large" color="red" /> : null
//       }

//       <Button 
//         title='show loader'
//         onPress={displayLoader}
//       />
//     </View>
//   )
// }

// const style = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//     }
// })
// }


// --------------------------------------------
// --------------------------------------------
// --------------------------------------------


// Modal in React Native (Dialog Box)
// {
// const App = () => {
//   const [showModal, setShowModal] = useState(false);

//   return(
//     <View style={styles.main}>
//     <Text>Modal in React Native (Dialog Box)</Text>
//       <Modal
//       transparent={true}
//       visible={showModal}
//       animationType='slide'
//         >
//         <View style={styles.centerView}>
//           <View style={styles.modalView}>
//             <Text style={{fontSize:30, marginBottom:20}}>Hello Code Step by step</Text>
//             <Button 
//               title='close modal'
//               onPress={() => setShowModal(false)}
//             />
//           </View>
//         </View>
//       </Modal>    
//       <View style={styles.buttonView}>
//       <Button 
//         title='open Madal'
//         onPress={() => setShowModal(true)}
//       />
//       </View>

//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//   },
//   buttonView: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   centerView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   modalView: {
//     backgroundColor: '#fff',
//     padding: 30,
//     borderRadius: 10,
//     width: 300,
//     height: 300,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: 'black',
//     elevation:10 
//   }

// })
// }


// Pressable in React Native
// {
// import { Pressable, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View style={{ styles.main }}>
//       <Pressable
//         onPress={() => console.warn("normal on Press")}
//         onLongPress={() => console.warn("long press")}
//         onLongPress={() => console.warn("long press")}
//         onPressIn={() => console.warn("press In")}
//         onPressOut={() => console.warn("press Out")}
//       >
//         <Text style={styles.pressableBtn}>Pressable</Text>
//       </Pressable>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   pressableBtn: {
//     backgroundColor: 'red',
//     padding: 10,
//     borderRadius: 10,
//     width: 100,
//     height: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: 20
//   }
// })
// }



// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------



// Status Bar 
// {
// import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'


// const App = () => {
//   const [hide, setHide] = useState(false)
//   const [barStyle, setBarStyle] = useState("default")

//   return (
//     <View style={styles.main}>
//       <StatusBar 
//         backgroundColor='red'
//         // barStyle='light-content'
//         barStyle={barStyle}
//         hidden={false}
//       />

//       <Button title='toggle Status Bar' onPress={()=>setHide(!hide)}/>
//       <Button title='Update style' onPress={()=>setBarStyle('dark-content')}/>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//     }
// })
// }


// Platform
// {
// import { Platform, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text style={{fontSize:30}}>Platform : {Platform.OS}</Text>
//       {
//         Platform.OS == "ios"? 
//         <View styl={{beginAsyncEvent:'red', height:100, width:100}}> </View>
//         :
//         <View styl={{beginAsyncEvent:'green', height:100, width:100}}> </View>
//       }
//       <Text style={styles.text}> Hello </Text>
//       <Text>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   text: {
//     color: Platform.OS == "android" ? "orange" : "yellow" ,
//   }
// })
// }


// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------



// Install NPM package in RN
// {
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import WebView from 'react-native-webview'

// const App = () => {
//   return (
//     <View>
//       <WebView 
//         source={{uri: 'https://www.google.com'}}
//       />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})
// }



// Custom Modal ( Pop-up )
// {
// import { Button, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'

// const App = () => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <View style={styles.container}>
//       {
//         showModal ?
//           <View style={styles.modal}>
//             <View style={styles.body}>
//               <Text style={styles.text}>This is a custom modal</Text>
//               <Button
//                 title='close'
//                 onPress={() => setShowModal(false)}
//               />
//             </View>
//           </View>
//           : null
//       }


//       <Button
//         title="Open Dialog"
//         onPress={() => setShowModal(true)}
//       />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-end'
//   },
//   modal: {
//     flex: 1,
//     backgroundColor: 'egba(50,50,50,.5)',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   body: {
//     backgroundColor: 'white',
//     height: 300,
//     width: 300,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20
//   }
// })
// }


// Navigation with React-Native // Stack Navigation // Stack Navigation style
// {
// import { View, Text, Button, TextInput } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import Login from './screens/LoginScreen';
// import Home from './screens/HomeScreen';
// import Header from './components/HeaderComponent';


// const Stack = createNativeStackNavigator();
// const App = () => {

//   const btnAction = () => {
//     console.warn('button pressed');
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//                 screenOptions={{
//             title: "User login",
//             headerStyle: {
//               backgroundColor: '#f4511e',
//             },
//             headerTitleStyle:{
//               fontSize:30
//             },
//             headerTintColor: 'orange'
//             }}
//       >

//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{
//             headerTitle:( )=> <Button title='left' onPress={btnAction}/>,
//             headerRight:( )=> <Header />,
//             title: "User login",
//             headerStyle: {
//               backgroundColor: '#fff',
//             },
//             headerTitleStyle:{
//               fontSize:30
//             },
//             headerTintColor: 'orange'
//             }}
//         />

//         <Stack.Screen
//           name="Home"
//           component={Home}
//         />

//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }


// export default App
// }


// -----------------------------------------
// -----------------------------------------
// -----------------------------------------


// Tab Navigation // Bottom
// {
// import { View, Text } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


// const Tab = createBottomTabNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Login" component={Login} />
//         <Tab.Screen name="SignUp" component={SignUp} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// const Login= () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'
//     }}>
//       <Text style={{fontSize:25}}>Login Screen</Text>
//     </View>
//     )
// }

// const SignUp= () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'
//     }}>
//       <Text style={{fontSize:25}}>SignUp Screen</Text>
//     </View>
//     )
// }

// export default App
// }



// Top Tab navigatiom
// {
// import { View, Text } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


// const Tab = createMaterialTopTabNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Login" component={Login} />
//         <Tab.Screen name="SignUp" component={SignUp} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// const Login= () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'
//     }}>
//       <Text style={{fontSize:25}}>Login Screen</Text>
//     </View>
//     )
// }

// const SignUp= () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'
//     }}>
//       <Text style={{fontSize:25}}>SignUp Screen</Text>
//     </View>
//     )
// }

// export default App
// }


// ---------------------------------------
// ---------------------------------------
// ---------------------------------------


// Simple API 
// {
// import { View, Text } from 'react-native'
// import React, { useEffect } from 'react'

// const App = () => {

//   const [data, setData] = useState(undefined);

//   const getAPIData = async () => {
//     // api call
//       // console.warn("hello");
//       const url = "https://jsonplaceholder.typicode.com/posts/1";
//       let result = await fetch(url);
//       result = await result.json();
//       console.warn(result);
//       setData(result)
//   }

//   useEffect(() => {
//     getAPIData();
//   }, [])


//   return (
//     <View>
//       {
//         data ? <View>
//           <Text style={{fontSize: 30}}> {data.id}</Text>
//           <Text style={{fontSize: 30}}> {data.userId}</Text>
//           <Text style={{fontSize: 30}}> {data.title}</Text>
//           <Text style={{fontSize: 30}}> {data.body}</Text>
//         </View> : null
//       }
//     </View>
//   )
// }

// export default App
// }


// List with API
// {
// import { View, Text, ScrollView } from 'react-native'
// import React, { useState } from 'react'

// const App = () => {

//   const [data, setData] = useState([]);

//   const getAPIData = async () => {
//     // api call
//     const url = "https://jsonplaceholder.typicode.com/posts"
//     let result = await fetch(url);
//     result = await result.json();
//     setData(result);

//   }

//   useEffect(() => {
//     getAPIData();

//   }, []);


//   return (
//     <ScrollView>
//       <Text style={{fontSize:30}}>List with API</Text>
//       {
//         data.length ? 
//         data.map((item, index) => 
//           <View style={{padding:10, borderBottomColor: "#ccc", borderBottomWidth:1}}>
//             <Text style={{fontSize: 20, backgroundColor: "#ddd"}}> Id : {item.id}</Text>
//             <Text style={{fontSize: 30}}> {item.userId}</Text>
//             <Text style={{fontSize: 30}}> Title : {item.title}</Text>
//             <Text style={{fontSize: 30}}> Body : {item.body}</Text>
//           </View>
//         )
//         : 
//         null
//       }
//     </ScrollView>
//   )
// }

// export default App
// }


// FlatList with API
// {
// import { View, Text, ScrollView, FlatList } from 'react-native'
// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [data, setData] = useState([]);

//   const getAPIData = async () => {
//     // api call
//     const url = "https://jsonplaceholder.typicode.com/posts"
//     let result = await fetch(url);
//     result = await result.json();
//     setData(result);

//   }

//   useEffect(() => {
//     getAPIData();

//   }, []);


//   return (
//     <View>
//       <Text style={{fontSize:30}}>List with API</Text>
//       {
//         data.length ? 
//         <FlatList 
//           data={data}
//           renderItem={({item}) => <View style={{borderBlockColor:'orange', padding:10}}>
//           <Text style={{fontSize: 20, backgroundColor: "#ddd"}}> Id : {item.id}</Text>
//           <Text style={{fontSize: 20, backgroundColor: "#ddd"}}> Title : {item.title}</Text>
//           <Text style={{fontSize: 20, backgroundColor: "#ddd"}}> Body : {item.body}</Text>
//           </View>}
//         />
//         : 
//         null
//       }
//     </View>
//   )
// }

// export default App
// }


// API with JSON-Server
// {
// import { View, Text, Button } from 'react-native'
// import React from 'react'

// const App = () => {
//   const saveAPIData = async () => {

//     // console.warn("test");

//     const data = {
//       name: "Rahul",
//       age: 34,
//       email: "rahul@gmail.com"
//     }

//     const url = "http://10.0.2.2:3000/users";
//     let result = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(data)
//     });
//     result = await result.json();
//     console.warn(result);
//   }

//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>Post API call</Text>
//       <Button title='Save Data' onPress={saveAPIData} />
//     </View>
//   )
// }

// export default App
// }



// --------------------------------------
// --------------------------------------
// --------------------------------------



//  Post API with Input Field
// {
// import { View, Text, TextInput, Button } from 'react-native'
// import React from 'react'
// import { useState } from 'react';

// const App = () => {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);
//   const [email, setEmail] = useState("");

//   const saveData = async () => {
//     // console.warn(name);
//     // console.warn(age);
//     // console.warn(email);

//     const url = "http://10.0.2.2:3000/users";
//     let result = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         name: name,
//         age: age,
//         email: email
//       })
//     })
//     result = await result.json();
//     console.warn("data added");
//     setName(name)
//   }

//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>Post API with Input Field</Text>

//       <TextInput
//         placeholder='Enter Name'
//         value={name}
//         onChangeText={(text) => setName(text)}
//         style={{ borderWidth: 1, borderColor: 'black', padding: 10, fontSize: 20 }}
//       />

//       <TextInput
//         placeholder='Enter Age'
//         value={age}
//         onChangeText={(text) => setAge(text)}
//         style={{ borderWidth: 1, borderColor: 'black', padding: 10, fontSize: 20 }}
//       />

//       <TextInput
//         placeholder='Enter Email'
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//         style={{ borderWidth: 1, borderColor: 'black', padding: 10, fontSize: 20 }}
//       />

//       <Button
//         title='Save Data'
//         onPress={saveData}
//       />
//     </View>
//   )
// }

// export default App
// }



// Simple Form Validation
// {
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
// import React from 'react'
// import { useState } from 'react';

// const App = () => {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);
//   const [email, setEmail] = useState("");


//   const [nameError, setNameError] = useState(false);
//   const [ageError, setAgeError] = useState(false);
//   const [emailError, setEmailError] = useState(false);


//   const saveData = async () => {
//     // console.warn(name);
//     // console.warn(age);
//     // console.warn(email);

//     if(!name){
//       setNameError(true);
//     }else{
//       setNameError(false);
//     }

//     // alternative
//     // {
//     //   name ? setNameError(false) : setEmailError(true) ;
//     // }

//     if(!age){
//       setAgeError(true);
//     }else{
//       setAgeError(false);
//     }
//     // alternative
//     // setAgeError(!age ? true : false);


//     if(!email){
//       setEmailError(true);
//     }else{
//       setEmailError(false);
//     }
//     // alternative
//     // setEmailError(!email)

//     if(!name || !age || !email){
//       return false
//     }

//     console.warn("stop");

//     const url = "http://10.0.2.2:3000/users";
//     let result = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         name: name,
//         age: age,
//         email: email
//       })
//     })
//     result = await result.json();
//     console.warn("data added");
//     setName(name)
//   }

//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>Simple Form Validation</Text>

//       <TextInput
//         placeholder='Enter Name'
//         value={name}
//         onChangeText={(text) => setName(text)}
//         style={styles.input}
//       />
//       {
//         nameError ? <Text style={styles.errorText}>Please Enter Valid Name </Text> : null
//       }

//       <TextInput
//         placeholder='Enter Age'
//         value={age}
//         onChangeText={(text) => setAge(text)}
//         style={styles.input}
//       />
//       {
//         ageError ? <Text style={styles.errorText}>Please Enter Valid Age </Text> : null
//       }

//       <TextInput
//         placeholder='Enter Email'
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//         style={styles.input}
//       />
//       {
//         emailError ? <Text style={styles.errorText}>Please Enter Valid Email </Text> : null
//       }

//       <Button
//         title='Save Data'
//         onPress={saveData}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   input: {
//     margin:20,
//     borderWidth: 1,
//     borderColor: 'orange',
//     padding: 10,
//     fontSize: 20,
//     marginBottom:5
//   },
//   errorText: {
//     color: 'red',
//     marginLeft:20
//   }
// })

// export default App
// }



// Make List From API
// {
// import { View, Text, StyleSheet, Button, Modal, TextInput } from 'react-native'
// import React from 'react'
// import { useState } from 'react';

// const App = () => {

//   const [data, setData] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(undefined);

//   const getAPIData = async () => {
//     const url = "http://10.0.2.2:3000/users"
//     let result = await fetch(url);
//     result = await result.json();
//     // console.warn(result);
//     if (result) {
//       setData(result);
//     }
//   }

//   const deleteUser = async (id) => {
//     const url = "http://10.0.2.2:3000/users";
//     // console.warn(`${url}/${id}`);
//     let result = await fetch(`${url}/${id}`, {
//       method: "DELETE"
//     });
//     result = await result.json();
//     if (result) {
//       console.warn("User deleted");
//       getAPIData();
//     }
//   }

//   useEffect(() => {
//     getAPIData();
//   }, []);



//   const updateUser = (data) => {
//     setShowModal(true);
//     setSelectedUser(data)
//   }


//   return (
//     <View style={styles.container}>
//       {/* <Text style={{ fontSize: 30 }}>Make List From API</Text> */}

//       <View style={styles.dataWrapper}>
//         <View style={{ flex: 1 }}><Text>Name</Text></View>
//         <View style={{ flex: 1 }}><Text>Age</Text></View>
//         <View style={{ flex: 2 }}><Text>Operations</Text></View>
//       </View>


//       {
//         data.length ?
//           data.map((item) => <View style={styles.dataWrapper}>
//             <View style={{ flex: 1 }}><Text>{item.name}</Text></View>
//             <View style={{ flex: 1 }}><Text>{item.age}</Text></View>

//             <View style={{ flex: 1 }}>
//               <Button
//                 title='Delete'
//                 onPress={() => deleteUser(item.id)}
//               /></View>
//             <View style={{ flex: 1 }}><Button title='Update'
//               onPress={() => updateUser(item)}
//             /></View>
//           </View>)
//           : null
//       }

//       <Modal visible={showModal} transparent={true}>
//         <userModal
//           setShowModal={setShowModal}
//           selectedUser={selectedUser}
//           getAPIData={getAPIData}
//         />
//       </Modal>
//     </View>
//   )
// }

// const userModal = (props) => {
//   console.log(props.selectedUser);

//   const [name, setName] = useState(undefined);
//   const [age, setAge] = useState(undefined);
//   const [email, setEmail] = useState(undefined);

//   useEffect(() => {

//     if (props.selectedUser) {
//       setName(props.selectedUser.name);
//       setAge(props.selectedUser.age.toString());
//       setEmail(props.selectedUser.email);
//     }
//   }, [props.selectedUser]);


//   const updateUser = async () => {
//     console.warn(name, age, email, props.selectedUser.id);
//     const url = "http://10.0.2.2:3000/users"
//     const id = props.selectedUser.id;

//     let result = await fetch(`${url}/${id}`,{
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           // id: props.selectedUser.id,
//           name: name,
//           age: age,
//           email: email
//           })
//     });
//     result = await result.json();
//     // console.warn(result);
//     if (result) {
//       console.warn(result);
//       props.getAPIData();
//       props.setShowModal(false);
//     }
//   }



//   return (
//     <View style={styles.centeredView}>
//       <View style={styles.modalView}>

//         <TextInput
//           style={styles.input}
//           value={name}
//           onChangeText={(text)=>setName(text)}
//         />
//         <TextInput
//           style={styles.input}
//           value={age}
//           onChangeText={(text)=>setAge(text)}
//         />
//         <TextInput
//           style={styles.input}
//           value={email}
//           onChangeText={(text)=>setEmail(text)}
//         />

//         <View style={{ marginBottom: 15 }}>
//           <Button
//             title='update'
//             onPress={updateUser}
//           />
//         </View>

//         {/* <Text>
//           Dummy Modal
//           {props.selectedUser.name}
//         </Text> */}

//         <Button
//           title='close'
//           onPress={() => props.setShowModal(false)}
//         />
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   dataWrapper: {
//     // flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: 'orange',
//     margin: 5,
//     padding: 8,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   input: {
//     // height: 40,
//     width: 300,
//     marginBottom: 15,
//     borderWidth: 1,
//     padding: 10,
//     borderColor: 'skyblue',
//     fontSize:20
//   }
// })

// export default App
// }



// Search with API
// {
// import { View, Text, TextInput } from 'react-native'
// import React from 'react'

// const App = () => {

//   const [data, setData] = useState([]);

//   const searchUser = async (text) => {
//     const url = `http://10.0.2.2:3000/users?q={text}`
//     console.warn(url);
//     let result = await fetch(url);
//     result = await result.json();
//     if (result) {
//       console.warn(result);
//       setData(result);
//     }

//   }


//   return (
//     <View style={{flex:1}}>
//     <TextInput 
//       style={{borderColor:'skyblue', borderWidth:1, margin:15, fontSize:20}}
//       placeholder='Search'
//       onChangeText={(text)=>searchUser(text)}
//     />

//     {
//       data.length?
//       data.map((item)=> <View style={{padding:10, flexDirection:'row', justifyContent:'space-between'}}>
//         <Text style={{fontSize:20}}>{item.name}</Text>
//         <Text style={{fontSize:20}}>{item.age}</Text>
//         <Text style={{fontSize:20}}>{item.email}</Text>

//       </View>) : null
//     }
//       <Text style={{fontSize:30}}>Search with API</Text>
//     </View>
//   )
// }

// export default App
// }


// Ref in RN
// {
// import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
// import React from 'react'
// import { useRef } from 'react';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

// const App = () => {

//   const input = useRef();

//   const updateInput = () => {
//     console.warn("call");
//     input.current.focus();
//     input.current.setNativeProps({
//       color:'red',
//       fontSize:20
//     })
//   }

//   return (
//     <View>
//       <TextInput
//         ref={input}
//         placeholder='Enter Name'
//         style={styles.input}
//       />
//       <TextInput
//         placeholder='Enter Password'
//         style={styles.input}
//         secureTextEntry={true}
//       />

//       <Button
//         title='Update Input'
//         onPress={updateInput}
//       />

//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'skyblue',
//     margin: 15,
//     padding: 10,
//     borderRadius: 5
//   }
// })

// export default App
// }


// async-storage in React Native
// {
// import { View, Text, Button } from 'react-native'
// import React from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { useState } from 'react';

// const App = () => {

//   const [user, setUser] = useState('');


//   const setData = async () => {
//     await AsyncStorage.setItem("name", "navyum")
//   }

//   const getData = async () => {
//     const name = await AsyncStorage.getItem("name")
//     // console.log(name)
//     setUser(name)
//   }

//   const removeData = async () => {
//     await AsyncStorage.removeItem("name")
//     setUser('')
//   }

//   return (
//     <View style={{marginTop:100, marginLeft:30}}>
//       <Text style={{fontSize:30}}>Async-storage in React Native : {user}</Text>

//       <Button 
//         title='Set Data'
//         onPress={setData}
//       />

//       <Button 
//         title='Get Data'
//         onPress={getData}
//       />

//       <Button 
//         title='Remove Data'
//         onPress={removeData}
//       />
//     </View>
//   )
// }

// export default App
// }


// async-storage with login feature
// {
// import { View, Text, Button, TextInput } from 'react-native';
// import React, { useState } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const App = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [storedUsername, setStoredUsername] = useState('');
//   const [storedPassword, setStoredPassword] = useState('');

//   const setData = async () => {
//     try {
//       await AsyncStorage.setItem("username", username);
//       await AsyncStorage.setItem("password", password);
//       console.log("Data set");
//     } catch (error) {
//       console.error("Error setting data", error);
//     }
//   };

//   const getData = async () => {
//     try {
//       const storedUser = await AsyncStorage.getItem("username");
//       const storedPass = await AsyncStorage.getItem("password");
//       if (storedUser !== null && storedPass !== null) {
//         setStoredUsername(storedUser);
//         setStoredPassword(storedPass);
//       }
//       console.log("Data retrieved");
//     } catch (error) {
//       console.error("Error retrieving data", error);
//     }
//   };

//   const removeData = async () => {
//     try {
//       await AsyncStorage.removeItem("username");
//       await AsyncStorage.removeItem("password");
//       setStoredUsername('');
//       setStoredPassword('');
//       console.log("Data removed");
//     } catch (error) {
//       console.error("Error removing data", error);
//     }
//   };

//   return (
//     <View style={{ marginTop: 100, marginLeft: 30 }}>
//       <Text style={{ fontSize: 30 }}>Async-storage in React Native</Text>
      
//       <TextInput
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
//       />
      
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
//       />
      
//       <View style={{ marginVertical: 10 }}>
//         <Button
//           title='Set Data'
//           onPress={setData}
//         />
//       </View>
//       <View style={{ marginVertical: 10 }}>
//         <Button
//           title='Get Data'
//           onPress={getData}
//         />
//       </View>
//       <View style={{ marginVertical: 10 }}>
//         <Button
//           title='Remove Data'
//           onPress={removeData}
//         />
//       </View>

//       <Text>Stored Username: {storedUsername}</Text>
//       <Text>Stored Password: {storedPassword}</Text>
//     </View>
//   );
// };

// export default App;
// }



// Element Inspector in React Native



// Make UI for Redux
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Product from './components/Product'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductWrapper from './components/ProductWrapper'
import UserList from './components/UserList'

const Stack = createNativeStackNavigator();

const App = () => {

  // const products = [
  //   {
  //     name: 'Samsung Mobile',
  //     color: 'white ',
  //     price: 30000,
  //     image: 'https://picsum.photos/200',
  //   },
  //   {
  //     name: 'Apple I Phone',
  //     color: 'Black ',
  //     price: 20000,
  //     image: 'https://picsum.photos/200',
  //   },
  //   {
  //     name: 'Chineeeseee Mobile',
  //     color: 'Orange ',
  //     price: 18000,
  //     image: 'https://picsum.photos/200',
  //   },
  // ]


  return (
    // <View style={styles.container}>
    //   {/* <Header />
    //   <ScrollView>
    //   {
    //     products.map((item) => <Product item={item} /> )
    //   }
    //   </ScrollView> */}
      
    //   {/* <Text>App</Text> */}
    // </View>


    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={ProductWrapper} />
        <Stack.Screen name='User' component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   }
// })