import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users, Star } from "lucide-react";

interface BusCardProps {
  busName: string;
  busNumber: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  availableSeats: number;
  price: number;
  rating: number;
  amenities?: string[];
  onSelect: () => void;
}

export default function BusCard({
  busName,
  busNumber,
  from,
  to,
  departureTime,
  arrivalTime,
  duration,
  availableSeats,
  price,
  rating,
  amenities = [],
  onSelect
}: BusCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-foreground">{busName}</h3>
            <p className="text-sm text-muted-foreground">{busNumber}</p>
            <div className="flex items-center gap-1 mt-1">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">₹{price}</div>
            <div className="text-sm text-muted-foreground">per seat</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="font-semibold text-lg">{departureTime}</div>
              <div className="text-sm text-muted-foreground">{from}</div>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <Clock className="h-4 w-4 mx-auto text-muted-foreground mb-1" />
                <div className="text-sm text-muted-foreground">{duration}</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="font-semibold text-lg">{arrivalTime}</div>
              <div className="text-sm text-muted-foreground">{to}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              <span className="font-medium text-success">{availableSeats}</span> seats available
            </span>
          </div>
          
          <div className="flex gap-2">
            {amenities.slice(0, 3).map((amenity, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {amenity}
              </Badge>
            ))}
            {amenities.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{amenities.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
          >
            View Details
          </Button>
          <Button 
            variant="travel" 
            size="sm" 
            className="flex-1"
            onClick={onSelect}
          >
            Select Seats
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}