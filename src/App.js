import { Routes, Route, Navigate, BrowserRouter, Outlet } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import { contact, theme } from "./Helpers";
import {
  Home,
  Events,
  Steps,
  Traditions,
  Conceptions,
  History,
  Meetings,
  Contact,
} from "./Components/Pages/";
import { Wave } from "./Components/Wave/";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./Helpers/ScrollToTop";
import { Questionnaire } from "./Components/Questionnaire";
import { Layout } from "./Components/Layout/Layout";
import { useContext } from "react";
import { AuthContext } from "./context/authContext.js";
import { Panel } from "./Components/Panel/Panel.jsx";
import { Users } from "./Components/Users/Users.jsx";
import { Write } from "./Components/Write/Write.jsx";
import { PostsEditor } from "./Components/PostsEditor/PostsEditor.jsx";
import { SingleEvent } from "./Components/Pages/SingleEvent/SingleEvent.jsx";
import { FilesEditor } from "./Components/FilesEditor/FilesEditor.jsx";
import { Files } from "./Components/Pages/Files/Files.jsx";
import { MeetingsEditor } from "./Components/MeetingsEditor/MeetingsEditor.jsx";
import { MeetingSingleEdit } from "./Components/MeetingSingleEdit/MeetingSingleEdit.jsx";

function App() {
  const { currentUser } = useContext(AuthContext);

  const superUser =
    currentUser?.roles === "admin" ||
    currentUser?.roles === "moderator" ||
    currentUser?.roles === "author";

  const ProtectedRoute = ({ user }) => {
    if (!user) {
      return <Navigate to="/" replace />;
    }

    return <Outlet/>;
  };

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Wave />
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<Navigate to="/" />} />
                <Route path="steps" element={<Steps />} />
                <Route path="traditions" element={<Traditions />} />
                <Route path="conceptions" element={<Conceptions />} />
                <Route path="history" element={<History />} />
                <Route path="questionnaire" element={<Questionnaire />} />
                <Route
                  path="meetings"
                  element={<Meetings/>}
                />
                <Route path="events" element={<Events/>} />
                <Route path="events/:id" element={<SingleEvent/>}/>
                <Route
                  path="contacts"
                  element={<Contact contact={contact} />}
                />
                
                  <Route path="files" element={<Files/>} />
                 
             
                <Route
                  path="panel"
                  element={<ProtectedRoute user={superUser} />}
                >
                  <Route path="home" element={<Panel><Write/></Panel>} />
                  <Route path="posts" element={<Panel><PostsEditor/></Panel>}/>
                  <Route path="files" element={<Panel><FilesEditor/></Panel>}/>
                  <Route path="users" element={<Panel><Users/></Panel>}/>
                  <Route path="addresses" element={<Panel><MeetingsEditor/></Panel>}/>
                  <Route path="address" element={<Panel><MeetingSingleEdit/></Panel>}/>
                </Route>

                <Route path="*" element={<Home />} />
              </Route>
            </Routes>
          </ScrollToTop>
          <ToastContainer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
