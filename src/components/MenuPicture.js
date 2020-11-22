import React from 'react';
import Menu from '../images/Menu.png';
class MenuPicture extends React.Component {
    render(){
        return (
            <div style={styles.MenuPicture}>
                <div style={styles.MenuName}>소융대 비빔면 + 삼겹살</div>
                <div style={styles.Area}>B-1</div>
            </div>
        );
    }
}
export default MenuPicture;
const styles = {
    MenuPicture : {
        position : "relative",
        width : 375,
        height : 219,
        backgroundImage: `url(${Menu})`,
        marginBottom : 26,
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        fontFamily : "Roboto",
        fontWeight : "bold",
        textShadow : "text-shadow: 0px 3.17333px 3.17333px rgba(0, 0, 0, 0.25)"
    },
    MenuName : {
        fontSize : "24px",
        lineHeight : "28px",
        color : "#FFFFFF",
    },
    Area : {
        position: "absolute",
        fontSize : "14px",
        lineHeight : "16px",
        color : "#FFFFFF",
        bottom : 10,
    },
}