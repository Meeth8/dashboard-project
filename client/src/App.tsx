import Dashboard from "@/components/Dashboard";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Dashboard />
    </TooltipProvider>
  );
}

export default App;
