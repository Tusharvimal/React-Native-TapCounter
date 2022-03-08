import { Alert, AppState, Platform, Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { addTap, darkMode, locked, oneLess, reset } from '../store/action';

const MainScreen = () => {
    const taps = useSelector(state => state.taps)
    const noOfTaps = taps.noOfTaps;
    const isLocked = taps.isLocked;
    const isDark = taps.isDark;
    const dispatch = useDispatch()
    const tapHandler = () => {
        if (isLocked) {
            return;
        }
        // setNoOfTaps(prevState => prevState + 1)
        dispatch(addTap())
    }
    const lockHandler = () => {
        // setIsLocked(prevState => !prevState)
        dispatch(locked())
    }
    const oneLessHandler = () => {
        if (noOfTaps > 0) {
            dispatch(oneLess())
        }
        return;
    }
    const resetHandler = () => {
        if (noOfTaps === 0) {
            return;
        }
        Alert.alert('Reset counter', 'Are you sure you want to reset the counter ?', [
            {
                text: 'Cancel',
                onPress: () => {
                    return;
                },
                style: 'cancel'
            },
            {
                text: 'Okay',
                onPress: () => {
                    // setNoOfTaps(0)
                    dispatch(reset())
                },
                style: 'default'
            }])
    }
    const darkHandler = () => {
        // setIsDark(prevState => !prevState)
        dispatch(darkMode())
    }

    // const appState = useRef(AppState.currentState);
    // const [appStateVisible, setAppStateVisible] = useState(appState.current);

    if (isDark) {
        return (
            <Pressable style={{ ...styles.screen, backgroundColor: '#333333' }} onPress={tapHandler}>
                <View style={styles.dark}>
                    <Ionicons name='moon' color='white' size={25} />
                    <Switch
                        trackColor={{ false: '#ccc', true: Colors.primaryColor }}
                        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                        value={isDark}
                        onValueChange={darkHandler}
                    />
                </View>
                <View style={styles.tapsContainer}>
                    {isLocked === false ?
                        <Text style={{ ...styles.taps, color: 'white' }}>{noOfTaps}</Text>
                        :
                        <Text style={{ ...styles.taps, color: 'red' }}>{noOfTaps}</Text>
                    }
                </View>
                <View style={styles.buttonsContainer}>
                    <Pressable style={{ ...styles.button, backgroundColor: 'white' }} onPress={oneLessHandler}>
                        <Text style={{ ...styles.buttonText, color: '#333333' }}>-1</Text>
                    </Pressable>
                    <Pressable style={{ ...styles.button, backgroundColor: 'white' }} onPress={lockHandler}>
                        {isLocked === false ?
                            isDark === true ?
                                <Ionicons name='lock-open-outline' color='#333333' size={25} />
                                :
                                <Ionicons name='lock-open-outline' color='white' size={25} />
                            :
                            <Ionicons name='lock-closed-outline' color='red' fontWeight='bold' size={25} />
                        }
                    </Pressable>
                    <Pressable style={{ ...styles.button, backgroundColor: 'white' }} onPress={resetHandler}>
                        <Text style={{ ...styles.buttonText, color: '#333333' }}>Reset</Text>
                    </Pressable>
                </View>
            </Pressable>
        )
    }

    return (
        <Pressable style={styles.screen} onPress={tapHandler}>
            <View style={styles.dark}>
                {/* <Ionicons name='moon' color='white' size={25} /> */}
                <Ionicons name='moon' color='#333333' size={25} />
                <Switch
                    trackColor={{ false: '#ccc', true: Colors.primaryColor }}
                    thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                    value={isDark}
                    onValueChange={darkHandler}
                />
            </View>
            <View style={styles.tapsContainer}>
                {isLocked === false ?
                    <Text style={styles.taps}>{noOfTaps}</Text>
                    :
                    <Text style={{ ...styles.taps, color: 'red' }}>{noOfTaps}</Text>
                }
            </View>
            <View style={styles.buttonsContainer}>
                <Pressable style={styles.button} onPress={oneLessHandler}>
                    <Text style={styles.buttonText}>-1</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={lockHandler}>
                    {isLocked === false ?
                        <Ionicons name='lock-open-outline' color='white' size={25} />
                        :
                        <Ionicons name='lock-closed-outline' color='red' fontWeight='bold' size={25} />
                    }
                </Pressable>
                <Pressable style={styles.button} onPress={resetHandler}>
                    <Text style={styles.buttonText}>Reset</Text>
                </Pressable>
            </View>
        </Pressable>
    )
};

export default MainScreen;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#f2f2f2',
        flex: 1
    },
    dark: {
        alignItems: 'center',
        margin: 5,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        height: '5%'
    },
    tapsContainer: {
        width: '100%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '15%',
        alignItems: 'center'
    },
    button: {
        width: '30%',
        backgroundColor: '#333333',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 25,
        color: "white"
    },
    taps: {
        margin: 15,
        fontSize: 70,
        fontWeight: '700',
        color: '#333333'
    }
});
