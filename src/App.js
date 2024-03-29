import "./App.css";
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
    return (
        <div className="app-wrapper">
            < HeaderContainer/>
            <div className="app-wrapper-nav">
                < Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<ProfileContainer />}>
                            <Route path=":userId" element={<ProfileContainer />} />
                        </Route>
                        < Route path='/dialogs' element={<DialogsContainer/>}/>
                        < Route path='/news' element={<News/>}/>
                        < Route path='/music' element={<Music/>}/>
                        < Route path='/setting' element={<Setting/>}/>
                        < Route path='/users' element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
