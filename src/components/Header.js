import React from 'react';
import back from '../images/<.png';

class Header extends React.Component {
    render(){
        return (
            <div style={styles.header}>
                <div>
                    <img style={styles.img} src={back}/>
                </div>
                <div style={styles.comment}>리뷰 남기기</div>
            </div>
        );
    }
}
export default Header;
const styles = {
    header : {
        width : 375,
        height : 52,
        background : "#FFFFFF",
        boxShadow : "0px 4px 6px rgba(0,0,0,0.25)",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        position: "relative"
    },
    img : {
        width: 12,
        height: 19,
        position: "absolute",
        top : 19,
        left : 17.5,
    },
    comment : {
        fontFamily : "Roboto",
        fontWeight : "bold",
        fontSize : "18px",
        lineHeight : "21px",
        color : "#333333",
    }
}