import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
    },
    draweImageView:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:20,
        marginBottom:50,
    },
    drawerImage:{
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50
    },
    drawerName:{
        fontWeight:"bold",
        fontSize:20,
        fontFamily:"notoserif"
    },
    labelView:{
        marginTop:-10,
    },
    homeTabIcon:{
        fontSize:25
    },
    nativeHeaderIconText:{
        color:'#ffffff'
    }
})