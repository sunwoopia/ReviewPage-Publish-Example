import React from 'react';

class Button extends React.Component {
    render(){
        return (
            <div style={styles.button}>
                <div style={styles.buttonText}>
                    리뷰작성
                </div>
            </div>
        );
    }
}
export default Button;
const styles = {
    button : {
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        background: "linear-gradient(94.03deg, #82C3FF 0%, #C464FF 100%)",
        boxShadow: "0px 1px 14px rgba(0, 0, 0, 0.25)",
        borderRadius: 10,
        width: 326,
        height : 43,
    },
    buttonText : {
        fontSize : "18px",
        lineHeight : "21px",
        fontFamily : "Roboto",
        color : "#FFFFFF",
        textShadow : "1px 1px 1px rgba(0, 0, 0, 0.25)",
    },
}