import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#2566ff"
    },
    headerMenuIcon: {
        color: "white",
        marginRight: 300,
        fontSize: 35,
    },
    headerText: {
        color: "white",
        fontSize: 22,
        position: "absolute"
    },
    nativeHeaderIconText: {
        color: "white",
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#2566ff",
    },
    footerHomeButton1: {
        height: 55,
        width: 60,
        marginHorizontal:60,
        backgroundColor:"#2566ff",
        borderRadius:10,
    },
    footerHomeButton2: {
        height: 55,
        width: 60,
        marginHorizontal:70,
        backgroundColor:"#2566ff",
        borderRadius:10,
    },
    textFooterHomeButton: {
        fontSize: 15,
        marginLeft: 10,
        marginRight:7,
    },
});