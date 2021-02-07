import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
    },
    circle: {
        justifyContent: 'center',
        color: '#668cff',
        fontSize: 28,
        marginTop: 20,
        alignItems: 'center',
        height: 120,
        width: 120,
        borderWidth: 1,
        borderRadius: 60,
        borderColor: '#e0e0d1',
        marginLeft: 120,
    },
    text: {
        color: '#2566ff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center'
    },
    inputs: {
        flex: 1,
        marginLeft: 15,
        fontSize:15,
    },
    sectionStyle: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        backgroundColor: '#f8fafc',
        height: 45,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 15,
        borderRadius: 10,
    },
    inputIcon: {
        marginRight: 20,
        color:'#2566ff',
        fontSize:20,
    },
    checkView: {
        flexDirection: 'row',
        alignContent:"center"
    },
    checkbox: {
        marginTop: 14,
        marginLeft:12,
    },
    remember: {
        color: '#000000',
        fontSize: 15,
        marginTop: 20,
    },
    forgot: {
        color: '#2566ff',
        fontSize: 15,
        marginLeft:80,
        marginTop: 20,
        fontWeight: 'bold',
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 200,
        width: 350,
    },
    signIn: {
        backgroundColor: '#2566ff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
    },
    signintext: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    line: {
        marginTop: 20,
        marginBottom: 5,
        marginLeft: 25,
        marginRight:25,
        color: '#adad85',
    },
    dont: {
        fontWeight: 'bold',
    },
    register: {
        color: '#668cff',
        fontWeight: 'bold',
    },
    registerView: {
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 60,
    },
    socialStyle: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignContent:"center",
        height: 42,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 15,
        borderWidth:1,
        borderColor:"#f6f6f7"
    },
    imageSocial: {
        padding: 10,
        height: 40,
        width: 40,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    socialText: {
        color: '#000000',
        marginLeft: 20,
        fontFamily:"sans-serif",
    },
    safeview: {
        flex: 1,
    },
    iconButton:{
        height:40,
        borderRightWidth:1,
        borderColor:"#f6f6f7"
    },
    snackbar:{
        backgroundColor:"red"
    },
    signinButton:{
        backgroundColor: '#2566ff',
        width:320,
        borderRadius:5,
        height: 40,
        marginLeft: 20,
        marginRight: 20,
    }
});
