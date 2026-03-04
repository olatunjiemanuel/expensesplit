import './App.css'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import CustomHeader from "./Components/CustomHeader";
import CustomFooter from "./Components/CustomFooter";
import Expenses from "./Pages/Expenses/index.tsx";
import People from "./Pages/People";

function App() {

    return (
        <div className="appLayout">
            <div><CustomHeader/></div>
            <main className="content">
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/expenses" element={<Expenses/>}/>
                    <Route path="/people" element={<People/>}/>
                </Routes>
            </main>
            <div><CustomFooter/></div>
        </div>


    )
}

export default App

