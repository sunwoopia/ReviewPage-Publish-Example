import React from 'react';

class ReviewTextarea extends React.Component {
    render(){
        return (
            <textarea className={ "input" } style={styles.ReviewTextarea} placeholder={"솔직한 리뷰를 작성해주세요!"}></textarea>
        );
    }
}
export default ReviewTextarea;
const styles = {
    ReviewTextarea : {
        width : 313,
        height : 132,
        borderRadius : "10px",
        background : "#F9F9F9",
        borderStyle : "none",
        resize : "none",
        padding : "14px 10px",

    },
}