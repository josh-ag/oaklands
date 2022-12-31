import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { AppLayout } from "./components/layout";
import { HomeScreen } from "./screens/homeScreen";

const RenderError = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="container flex flex-col justify-center items-center rounded-md p-5 bg-gray-200 w-3/5 h-60">
        <h2 className="text-gray-700 text-6xl text-center">Oop!</h2>
        <p className="text-gray-400 font-serif p-2 text-center text-xl">
          This page cannot be located at the moment
        </p>

        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-5 px-4 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <RenderError />,
    children: [{ element: <HomeScreen />, index: true }],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
