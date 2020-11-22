import './App.css';
import Button from "./components/Button";
import Header from "./components/Header";
import MenuPicture from "./components/MenuPicture";
import Star from "./components/Star";
import ReviewTextarea from "./components/ReviewTextarea";
import ReviewPicture from "./components/ReviewPicture";

function App() {
  return (
    <div className="App" style={styles.container}>
        <div style={styles.main}>
            <Header/>
            <MenuPicture/>
            <div style={styles.content}>
                <Star/>
                <ReviewTextarea/>
                <ReviewPicture/>
                <Button/>
            </div>
        </div>
    </div>
  );
}

export default App;

const styles = {
    container : {
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
        width : "100%",

    },
    main : {
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        backgroundColor : "#F4F4F4"
    },
    content : {
        width : 375,
        height: 478,
        backgroundColor: "#FFFFFF",
        display : "flex",
        flexDirection : "column",
        alignItems: "center",
    }
}
