/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView, TouchableOpacity } from 'react-native';
import ViewContainer from 'GroupExpenses/app/components/ViewContainer'
import StatusBarBackground from 'GroupExpenses/app/components/StatusBarBackground'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

const people = [
  { firstName: "cletus", lastName: "jones", roomNumber: 8 },
  { firstName: "john", lastName: "cena", roomNumber: 94 },
  { firstName: "spencer", lastName: "olson", roomNumber: 88 }
]

class GroupExpenses extends Component {
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 })
    this.state = {
      peopleDataSource: dataSource.cloneWithRows(people)
    }
  }

  renderPersonRow(person) {
    return (
      <TouchableOpacity style={styles.personRow} onPress={event => console.log(person)}>
        <Text style={styles.personName}>{`${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`}</Text>
        <View style={{flex: 1}}/>
        <Icon name="chevron-right" style={styles.personMoreIcon}/>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ViewContainer>
      <StatusBarBackground/>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Famous People</Text>
      </View>
      <ListView
        style={{marginTop: 100}}
        dataSource={this.state.peopleDataSource}
        renderRow={person => this.renderPersonRow(person)}>
      </ListView>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  personRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50
  },
  personName: {
    marginLeft: 24
  },
  titleView: {
    flexDirection: "row",
    justifyContent: "center"
  },
  titleText: {
    fontWeight: "bold"
  },
  personMoreIcon: {
    color: "green",
    height: 20,
    width: 20,
    marginRight: 25
  }
});

AppRegistry.registerComponent('GroupExpenses', () => GroupExpenses);
