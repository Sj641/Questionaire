import Home from "./Pages/Home";
import Topics from "./Pages/Topics";
import ErrorPage from "./Pages/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="bg-slate-800 h-screen w-screen text-white flex flex-col">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                    </Route>
                    <Route path="topics" element={<Topics />} />
                    <Route>{/* Add a Page to access */}</Route>
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
