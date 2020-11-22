import React from 'react';
import StarPic from '../images/Star.png';
import YellowStar from '../images/StarYellow.png';


class Star extends React.Component {
    render(){
        return (
            <div style={styles.Star}>
                <img style={styles.img} src={YellowStar}/>
                <img style={styles.img} src={YellowStar}/>
                <img style={styles.img} src={YellowStar}/>
                <img style={styles.img} src={YellowStar}/>
                <img style={styles.img} src={StarPic}/>
            </div>
        );
    }
}
export default Star;
const styles = {
    Star : {
        marginTop : 30,
        display : "flex",
        flexDirection : "row",
    },
    img : {
        width : 32,
        height : 32,
        margin : "20px 12.8px",
    }
}