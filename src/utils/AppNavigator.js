import React from 'react';

import { StackActions } from '@react-navigation/native';

const navigationReference = React.createRef();

const navigate = (name, params) => navigationReference.current?.navigate(name, params);

const resetAndPush = (name, params) => navigationReference.current?.reset({
    index: 0,
    routes: [{ name, params }]
})

const popScreen = (n) => {
    const popAction = StackActions.pop(n);
    navigationReference.current?.dispatch(popAction);
};

const goBack = () => navigationReference.current.goBack();

export default {
    navigationReference,
    navigate,
    resetAndPush,
    popScreen,
    goBack
}