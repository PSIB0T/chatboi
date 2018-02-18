import RootStack from './../../routes/navigator';

const initialState = RootStack.router.getStateForAction(
                        RootStack.router.getActionForPathAndParams('Home')
                    );
export const navReducer = (state = initialState, action) => {
    const nextState = RootStack.router.getStateForAction(action, state);
    return nextState || state;
};

