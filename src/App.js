import './App.css';
import Button from "./components/Button";
import Header from "./components/Header";
import MenuPicture from "./components/MenuPicture";

function App() {
  return (
    <div className="App" style={styles.container}>
        <Header/>
        <MenuPicture/>
        <Button/>
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
}
