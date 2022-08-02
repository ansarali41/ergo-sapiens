import './App.css';
import Creators from './Components/Creators/Creators';
import Home from './Components/Home/Home';
import Showcase from './Components/Showcase/Showcase';
import Traits from './Components/Trails/Traits';

function App() {
    return (
        <div className="body">
            <Home />
            <Showcase />
            <Traits />
            <Creators />
        </div>
    );
}

export default App;
