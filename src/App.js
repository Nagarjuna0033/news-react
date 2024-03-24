import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import LoadingBar from "react-top-loading-bar";

import { Route, Routes } from "react-router-dom";
function App() {
    let key = process.env.REACT_APP_NEWS_API_KEY;

    const [progress, setProgress] = useState(0);

    const setProgressVal = (progress) => {
        setProgress(progress);
    };

    return (
        <>
            <LoadingBar color="#f11946" progress={progress} height={3} />
            <Navbar />

            <Routes>
                <Route
                    path="/"
                    element={
                        <News
                            apiKey={key}
                            setProgressVal={setProgressVal}
                            country="in"
                            cat="general"
                            pageSize={21}
                        />
                    }
                    loader={"Getting Data"}
                />
                <Route
                    path="Entertainment"
                    element={
                        <News
                            apiKey={key}
                            setProgressVal={setProgressVal}
                            key="Entertainment"
                            country="in"
                            cat="Entertainment"
                            pageSize={21}
                        />
                    }
                />
                <Route
                    path="Sports"
                    element={
                        <News
                            apiKey={key}
                            setProgressVal={setProgressVal}
                            key="Sports"
                            country="in"
                            cat="Sports"
                            pageSize={21}
                        />
                    }
                />
                <Route
                    path="Business"
                    element={
                        <News
                            apiKey={key}
                            setProgressVal={setProgressVal}
                            key="Business"
                            country="in"
                            cat="Business"
                            pageSize={21}
                        />
                    }
                />
                <Route
                    path="Health"
                    element={
                        <News
                            apiKey={key}
                            setProgressVal={setProgressVal}
                            key="Health"
                            country="in"
                            cat="Health"
                            pageSize={21}
                        />
                    }
                />
                <Route
                    path="Science"
                    element={
                        <News
                            apiKey={key}
                            setProgressVal={setProgressVal}
                            key="Science"
                            country="in"
                            cat="Science"
                            pageSize={21}
                        />
                    }
                />
                <Route
                    path="Technology"
                    element={
                        <News
                            apiKey={key}
                            setProgressVal={setProgressVal}
                            key="Technology"
                            country="in"
                            cat="Technology"
                            pageSize={20}
                        />
                    }
                />
            </Routes>

            {/* <News apiKey = {apiKey} setProgressVal= {setProgressVal}  changeProgress= {setProgressVal} country="in" cat="general" /> */}
        </>
    );
}

export default App;

// https://api.org/v2/top-headlines?country=in&apiKey=11be79e48217437db70f7dd282c883fb
