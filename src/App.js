import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout";
import {
    AboutPage,
    HomePage, LoginPage,
    NotFoundPage,
    PostCommentsPage,
    PostPage,
    PostsPage,
    UserPage,
    UserPostsPage,
    UsersPage
} from "./pages";
import {RequireAuth} from "./hoc";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={
                    <RequireAuth>
                        <UsersPage/>
                    </RequireAuth>
                }>
                    <Route path={':id'} element={<UserPage/>}>
                        <Route path={':userId'} element={<UserPostsPage/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostPage/>}>
                        <Route path={':postId'} element={<PostCommentsPage/>}/>
                    </Route>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;