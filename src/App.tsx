import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "./pages/Browse";
import SearchDetails from "./pages/SearchDetails";
import CategoryDetails from "./pages/CategoryDetails";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/search" element={<SearchDetails />} />
        <Route path="/category/:slug" element={<CategoryDetails />} />
        <Route path="/recipe/:slug" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
