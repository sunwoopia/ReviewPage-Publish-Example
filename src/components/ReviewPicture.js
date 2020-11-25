import React from 'react';
import xbutton from '../images/xbutton.png';
import reviewimg from '../images/reviewimg.png';
import camera from '../images/camera.png';


class ReviewPicture extends React.Component {

    render(){
        return (
            <div style={styles.ReviewPicture}>
                <div style={styles.addPic}> <img style={styles.cameraCss} src={camera}/>사진 추가</div>
                <div style={styles.reviewImg}><img style={styles.xbtn} src={xbutton}></img></div>
                <div style={styles.reviewImg}><img style={styles.xbtn} src={xbutton}></img></div>
            </div>
        );
    }
}
export default ReviewPicture;
const styles = {
    ReviewPicture : {
        display : "flex",
        flexDirection : "row",
    },
    addPic : {
        display: "flex",
        flexDirection: "column",
        alignItems : "center",
        justifyContent : "center",
        width : 102,
        height : 102,
        border : "1px solid #DDDDDD",
        borderRadius : 3,
        margin : "25px 6px 30px 6px",
        fontSize : 12,
        fontWeight : 500,
        fontFamily : "Roboto",
        color : "#333333",
    },
    reviewImg : {
        width : 102,
        height : 102,
        borderRadius: "3px",
        border : "none",
        backgroundImage: `url(${reviewimg})`,
        margin : "25px 6px 30px 6px",
        backgroundRepeat : "no-repeat",
        position : "relative",
    },
    cameraCss : {
        width : 32,
        height : 30,
        margin : 6,
    },
    xbtn : {
        width : 12,
        height : 12,
        position: "absolute",
        left : 84,
        top : 5,
    },
}