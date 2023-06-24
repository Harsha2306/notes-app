import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendNotesData, fetchNotes } from "./redux-store/notesSlice";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import NewNotePage from "./pages/NewNotePage";
import EditNotePage from "./pages/EditNotePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/newNote",
        element: <NewNotePage />,
      },
      {
        path: "/editNote/:noteId",
        element: <EditNotePage />,
        loader: (params) => {
          return params;
        },
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notesReducer.myList);
  const isChanged = useSelector((state) => state.notesReducer.isChanged);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  useEffect(() => {
    if (isChanged) dispatch(sendNotesData(notes));
  }, [notes, dispatch, isChanged]);

  return <RouterProvider router={router} />;
}

export default App;
