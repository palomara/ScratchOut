import React, { Component } from "react";
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    SafeAreaView
} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

 class searchTasks extends Component {

     constructor(props) {
         super(props);

         this.state = {
             loading: false,
             data: [],
             error: null,
             query: "",
             fullData: []
         };

         this.arrayholder = [];
     }

     componentDidMount() {
         this.makeRemoteRequest();
     }

     makeRemoteRequest = () => {
         this.setState({ loading: true });

         getTasks()
             .then(tasks => {
                 this.setState({
                     loading: false,
                     data: tasks
                 });
             })
             .catch(error => {
                 this.setState({ error, loading: false });
             });
     };

     handleSearch = (text) => {
         this.setState({query : text});
     }

     renderSeparator = () => {
         return (
             <View
                 style={{
                     height: 1,
                     width: "86%",
                     backgroundColor: "#CED0CE",
                     marginLeft: "14%"
                 }}
             />
         );
     };

     renderHeader = () => {
         return <SearchBar placeholder="Digite aqui..." lightTheme round onChangeText={this.handleSearch} />;
     };

     renderFooter = () => {
         if (!this.state.loading) return null;

         return (
             <View
                 style={{
                     paddingVertical: 20,
                     borderTopWidth: 1,
                     borderColor: "#CED0CE"
                 }}
             >
                 <ActivityIndicator animating size="large" />
             </View>
         );
     };


 }



export default searchTasks;


