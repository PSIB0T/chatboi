import { StackNavigator } from 'react-navigation';
import Hello from './../components/Hello.component';
import Details from './../components/Details.component';

const RootStack = StackNavigator({
    Home: {
        screen: Hello
    },
    Details: {
        screen: Details
    }
    }, {
        initialRouteName: 'Home'
    });

export default RootStack;
