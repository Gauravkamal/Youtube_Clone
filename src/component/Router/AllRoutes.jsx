import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Library } from "../Pages/Library/Library";
import { LikedVideo } from "../Pages/LikedVideo/LikedVideo";
import { WatchHistory } from "../Pages/WatchHistory/WatchHistory";
import { YourVideo } from "../Pages/YourVideo/YourVideo";
import { VideoPage } from "../Pages/VideoPage/VideoPage";
import WatchLater from "../Pages/WatchLater/WatchLater";



export function AllRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Library" element={<Library />} />
            <Route path="/LikedVideos" element={<LikedVideo />} />
            <Route path="/WatchHistory" element={<WatchHistory />} />
            <Route path="/YourVideo" element={<YourVideo />} />
            <Route path="/VideoPage/:vid" element={<VideoPage />} />
            <Route path="/WatchLater" element={<WatchLater />} />
        </Routes>
    )
}