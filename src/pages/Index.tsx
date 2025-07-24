import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import BusCard from "@/components/BusCard";
import { Shield, Clock, MapPin, Star, Users, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-bus.jpg";

const mockBuses = [
  {
    busName: "Volvo Multi-Axle",
    busNumber: "KA-05-HB-1234",
    from: "Bangalore",
    to: "Mumbai",
    departureTime: "22:30",
    arrivalTime: "12:30+1",
    duration: "14h 00m",
    availableSeats: 15,
    price: 1200,
    rating: 4.5,
    amenities: ["AC", "WiFi", "Charging Point", "Blanket", "Water Bottle"]
  },
  {
    busName: "Scania Express",
    busNumber: "MH-12-AB-5678",
    from: "Bangalore",
    to: "Mumbai", 
    departureTime: "21:00",
    arrivalTime: "11:00+1",
    duration: "14h 00m",
    availableSeats: 8,
    price: 1350,
    rating: 4.7,
    amenities: ["AC", "Sleeper", "Entertainment", "Meal"]
  },
  {
    busName: "Mercedes Luxury",
    busNumber: "KA-03-CD-9012",
    from: "Bangalore",
    to: "Mumbai",
    departureTime: "23:45",
    arrivalTime: "13:45+1",
    duration: "14h 00m",
    availableSeats: 22,
    price: 980,
    rating: 4.2,
    amenities: ["AC", "Reading Light", "USB Charging"]
  }
];

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "100% secure payment with trusted bus operators"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support for hassle-free travel"
  },
  {
    icon: MapPin,
    title: "Wide Network",
    description: "Connect to 1000+ destinations across India"
  },
  {
    icon: Star,
    title: "Best Prices",
    description: "Guaranteed lowest prices with exclusive offers"
  }
];

const Index = () => {
  const [searchResults, setSearchResults] = useState<typeof mockBuses>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (searchData: { from: string; to: string; date: string }) => {
    console.log("Searching for:", searchData);
    setSearchResults(mockBuses);
    setHasSearched(true);
  };

  const handleSelectBus = (busName: string) => {
    console.log("Selected bus:", busName);
    // Navigate to seat selection page
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-travel-blue/80 to-travel-teal/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Book Your
              <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Perfect Journey
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Travel comfortably across India with our premium bus booking platform. 
              Safe, reliable, and affordable journeys await you.
            </p>
          </div>
          
          <SearchBox onSearch={handleSearch} />
        </div>
      </section>

      {/* Search Results */}
      {hasSearched && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Available Buses
              </h2>
              <p className="text-muted-foreground">
                {searchResults.length} buses found for your journey
              </p>
            </div>
            
            <div className="space-y-4">
              {searchResults.map((bus, index) => (
                <BusCard
                  key={index}
                  {...bus}
                  onSelect={() => handleSelectBus(bus.busName)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {!hasSearched && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose BusGO?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the best in bus travel with our comprehensive platform designed for your comfort and convenience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="space-y-4">
                    <div className="flex justify-center">
                      <div className="p-3 bg-gradient-to-r from-travel-blue to-travel-teal rounded-full">
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      {!hasSearched && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "10M+", label: "Happy Customers" },
                { number: "50K+", label: "Bus Routes" },
                { number: "2K+", label: "Bus Partners" },
                { number: "100+", label: "Cities Connected" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-travel-blue to-travel-teal rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">BusGO</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for comfortable and affordable bus travel across India.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Customer Support</li>
                <li>Booking Guide</li>
                <li>Cancellation Policy</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Headphones className="h-4 w-4" />
                  +91 1800-123-4567
                </div>
                <div>support@busgo.com</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BusGO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
