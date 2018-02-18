import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import RootStack from './../routes/navigator';
import { addListener } from './../redux/middleware/Nav.middleware';

class Root extends Component {

    render() {
        return (
            <RootStack
navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
                addListener
            })}
            />
        );
    }
}  

const mapStateToProps = (state) => ({
    nav: state.nav
});

export default connect(mapStateToProps)(Root);
