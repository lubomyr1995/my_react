import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {AboutPage, HomePage, NotFoundPage, PostPage, PostSinglePage, UserPage, UserPostsPage, UsersPage} from "./Pages";
import {PostComments} from "./Components";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserPage/>}>
                        <Route path={':userId'} element={<UserPostsPage/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostPage/>}>
                    <Route path={':id'} element={<PostSinglePage/>}>
                        <Route path={':postId'} element={<PostComments/>}/>
                    </Route>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;