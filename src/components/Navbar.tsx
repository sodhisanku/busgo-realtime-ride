import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bus, Menu, User, LogIn, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "My Bookings", href: "/dashboard" },
    { label: "Help", href: "/help" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="p-2 bg-gradient-to-r from-travel-blue to-travel-teal rounded-lg">
              <Bus className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-travel-blue to-travel-teal bg-clip-text text-transparent">
              BusGO
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/login")}
              className="flex items-center gap-2"
            >
              <LogIn className="h-4 w-4" />
              Login
            </Button>
            <Button 
              variant="travel" 
              size="sm"
              onClick={() => navigate("/signup")}
              className="flex items-center gap-2"
            >
              <UserPlus className="h-4 w-4" />
              Sign Up
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2"
            >
              <User className="h-4 w-4" />
              Dashboard
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        navigate(item.href);
                        setIsOpen(false);
                      }}
                      className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <div className="border-t pt-4 space-y-3">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start gap-2"
                      onClick={() => {
                        navigate("/login");
                        setIsOpen(false);
                      }}
                    >
                      <LogIn className="h-4 w-4" />
                      Login
                    </Button>
                    <Button 
                      variant="travel" 
                      className="w-full justify-start gap-2"
                      onClick={() => {
                        navigate("/signup");
                        setIsOpen(false);
                      }}
                    >
                      <UserPlus className="h-4 w-4" />
                      Sign Up
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start gap-2"
                      onClick={() => {
                        navigate("/dashboard");
                        setIsOpen(false);
                      }}
                    >
                      <User className="h-4 w-4" />
                      Dashboard
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}