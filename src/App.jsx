import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./ui/AppLayout";
import Characters from "./Pages/Characters";
import MainPage from "./Pages/MainPage";
import Epizode from "./Pages/Epizode";
import Location from "./Pages/Location";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/epizodes" element={<Epizode />} />
            <Route path="/locations" element={<Location />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
