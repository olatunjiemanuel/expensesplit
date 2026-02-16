import './App.css'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import CustomHeader from "./Components/CustomHeader";
import CustomFooter from "./Components/CustomFooter";
import Expenses from "./Pages/Expenses/index.tsx";

function App() {

    return (
        <div className="appLayout">
            <div><CustomHeader/></div>
            <main className="content">
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/*" element={<Expenses/>}/>1§
                </Routes>
            </main>
            <div><CustomFooter/></div>
        </div>


    )
}

export default App

