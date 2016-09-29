'use strict'

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

class StatusBarBackground extends Component {
  propTypes: {
    style: React.PropTypes.object
  }

	render() {
		return (
			<View style={[styles.statusBarBackground, this.props.style]}/>
		)
	}
}

const styles = StyleSheet.create({
  statusBarBackground: {
    height: 20,
    backgroundColor: "lime"
  }
})

module.exports = StatusBarBackground