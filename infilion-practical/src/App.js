import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="bg-gray-200 border-b-2 border-b-gray-400 p-4">
          <ul className="flex items-center">
            <li className="px-2 hover:text-gray-500">
              <Link to="/tab1">Tab 1</Link>
            </li>
            <li className="px-2 hover:text-gray-500">
              <Link to="/tab2">Tab 2</Link>
            </li>
            <li className="px-2 hover:text-gray-500">
              <Link to="/tab3">Tab 3</Link>
            </li>
          </ul>
        </nav>
        {/* Your navigation goes here if needed */}
        <Routes>
          <Route path="/tab1" element={<Tab1 />} />
          <Route path="/tab2" element={<Tab2 />} />
          <Route path="/tab3" element={<Tab3 />} />

          {/* Add more routes if needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
