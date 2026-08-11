import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./features/landing/LandingPage";
import { LoginPage } from "./features/auth/LoginPage";

function App() {
  const [currentView, setCurrentView] = useState<"home" | "login">("home");
  const [cartCount, setCartCount] = useState<number>(0);

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F8F8]">
      <Navbar
        currentView={currentView}
        cartCount={cartCount}
        onNavigateHome={() => setCurrentView("home")}
        onOpenAuth={() =>
          setCurrentView(currentView === "login" ? "home" : "login")
        }
      />
      <main className="flex-1">
        {currentView === "home" ? (
          <LandingPage
            cartCount={cartCount}
            onUpdateCartCount={(count) => setCartCount(count)}
            onOpenAuth={() => setCurrentView("login")}
          />
        ) : (
          <div className="relative">
            {/* Return to Landing Page Breadcrumb */}
            <div className="bg-[#181818] border-b border-[#2D2D2D] px-4 py-2 text-center">
              <button
                type="button"
                onClick={() => setCurrentView("home")}
                className="text-xs text-[#C69A63] hover:underline font-semibold"
              >
                ← Back to House of MIT Atelier Landing Page
              </button>
            </div>
            <LoginPage onBackToHome={() => setCurrentView("home")} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
