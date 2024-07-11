import PRoductCard from "../ProductCard/PRoductCard";
import Adven from "./Adven";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Slider/>
            <Adven/> 
            <PRoductCard/>
        </div>
    );
};

export default Home;