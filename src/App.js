import { Routes, Route, Navigate, BrowserRouter, Outlet } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import { contact, addresses, theme, events } from "./Helpers";
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
                  element={<Meetings addresses={addresses} />}
                />
                <Route path="events" element={<Events events={events} />} />
                <Route
                  path="contacts"
                  element={<Contact contact={contact} />}
                />
                <Route
                  path="panel"
                  element={<ProtectedRoute user={superUser} />}
                >
                  <Route path="home" element={<Panel>Home</Panel>} />
                  <Route path="posts" element={<Panel><div>Posty</div></Panel>}/>
                  <Route path="files" element={<Panel><div>Files</div></Panel>}/>
                  <Route path="users" element={<Panel><Users/></Panel>}/>
                  <Route path="addresses" element={<Panel><div>Adresy</div></Panel>}/>

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
