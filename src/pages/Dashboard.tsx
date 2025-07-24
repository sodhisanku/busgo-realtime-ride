import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  CreditCard, 
  Download, 
  RefreshCw,
  Star,
  Bus,
  User,
  Phone,
  Mail
} from "lucide-react";

const mockBookings = [
  {
    id: "BG001234",
    busName: "Volvo Multi-Axle",
    busNumber: "KA-05-HB-1234",
    from: "Bangalore",
    to: "Mumbai",
    date: "2024-01-25",
    departureTime: "22:30",
    arrivalTime: "12:30+1",
    seatNumbers: ["A1", "A2"],
    status: "Confirmed",
    amount: 2400,
    bookingDate: "2024-01-20"
  },
  {
    id: "BG001235",
    busName: "Scania Express",
    busNumber: "MH-12-AB-5678",
    from: "Mumbai",
    to: "Pune",
    date: "2024-01-18",
    departureTime: "15:30",
    arrivalTime: "19:00",
    seatNumbers: ["B3"],
    status: "Completed",
    amount: 450,
    bookingDate: "2024-01-15"
  },
  {
    id: "BG001236",
    busName: "Mercedes Luxury",
    busNumber: "KA-03-CD-9012",
    from: "Delhi",
    to: "Agra",
    date: "2024-02-05",
    departureTime: "08:00",
    arrivalTime: "12:30",
    seatNumbers: ["C1"],
    status: "Upcoming",
    amount: 680,
    bookingDate: "2024-01-22"
  }
];

const userProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+91 9876543210",
  totalBookings: 15,
  memberSince: "January 2023"
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("bookings");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-blue-100 text-blue-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Upcoming":
        return "bg-yellow-100 text-yellow-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {userProfile.name}!
          </h1>
          <p className="text-muted-foreground">
            Manage your bookings and account settings
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="shadow-md border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Bookings</p>
                      <p className="text-2xl font-bold text-primary">{userProfile.totalBookings}</p>
                    </div>
                    <Bus className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Upcoming Trips</p>
                      <p className="text-2xl font-bold text-travel-orange">
                        {mockBookings.filter(b => b.status === "Upcoming" || b.status === "Confirmed").length}
                      </p>
                    </div>
                    <Calendar className="h-8 w-8 text-travel-orange" />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Spent</p>
                      <p className="text-2xl font-bold text-success">
                        ₹{mockBookings.reduce((sum, booking) => sum + booking.amount, 0).toLocaleString()}
                      </p>
                    </div>
                    <CreditCard className="h-8 w-8 text-success" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Recent Bookings</h2>
              
              {mockBookings.map((booking) => (
                <Card key={booking.id} className="shadow-md border-0 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{booking.busName}</CardTitle>
                        <CardDescription>{booking.busNumber}</CardDescription>
                      </div>
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          Route
                        </div>
                        <div className="font-medium">
                          {booking.from} → {booking.to}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          Journey Date
                        </div>
                        <div className="font-medium">{booking.date}</div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          Timing
                        </div>
                        <div className="font-medium">
                          {booking.departureTime} - {booking.arrivalTime}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">
                          Seats: {booking.seatNumbers.join(", ")}
                        </div>
                        <div className="font-semibold text-lg">₹{booking.amount}</div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download Ticket
                        </Button>
                        {booking.status === "Upcoming" && (
                          <Button variant="destructive" size="sm">
                            Cancel Booking
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Manage your personal information and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                        <p className="font-medium">{userProfile.name}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Email Address</p>
                        <p className="font-medium">{userProfile.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Phone Number</p>
                        <p className="font-medium">{userProfile.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <h3 className="font-semibold mb-2">Account Statistics</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Member Since:</span>
                          <span className="font-medium">{userProfile.memberSince}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total Bookings:</span>
                          <span className="font-medium">{userProfile.totalBookings}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Account Status:</span>
                          <Badge className="bg-green-100 text-green-800">Verified</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <Button variant="travel">
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account preferences and security settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Email Notifications</h3>
                      <p className="text-sm text-muted-foreground">
                        Receive booking confirmations and updates
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">SMS Notifications</h3>
                      <p className="text-sm text-muted-foreground">
                        Get trip reminders and important updates
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Change Password</h3>
                      <p className="text-sm text-muted-foreground">
                        Update your account password
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Two-Factor Authentication</h3>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security
                      </p>
                    </div>
                    <Button variant="travel" size="sm">
                      Enable
                    </Button>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <Button variant="destructive">
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}