import First from "./Class 1/First";
import Second from "./Class 1/Second";
import Card from "./Class 2/Card";
import New from "./Class 2/New";
import SecondC,{ Hello, NewComponent }  from "./Class 2/SecondC";
import ThemeUpdate from "./Class 2/ThemeUpdate";

function App(){
  return(
    <>
    {/* First Class */}
    {/* <First/>
    <Second/> */}

    {/* Second Class */}
    {/* <SecondC/>
    <NewComponent/>
    <Hello/> */}

    {/* <Card id="1" name="Gulshan" course="Mern" city="Gurgaon"/>
    <Card id="2" name="Heena" course="Python FS" city="Gurgaon"/>
    <Card id="3" name="Rakes" course="MERN" city="Gurgaon"/>
    <Card id="4" name="Pradeep" course="MERN" city="Gurgaon"/> */}

    {/* <New/> */}

    <ThemeUpdate/>

    </>
  )
}

export default App;