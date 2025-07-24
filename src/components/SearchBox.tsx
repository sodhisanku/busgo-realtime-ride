import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeftRight, Calendar, MapPin, Search } from "lucide-react";

interface SearchBoxProps {
  onSearch: (searchData: {
    from: string;
    to: string;
    date: string;
  }) => void;
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSearch = () => {
    if (from && to && date) {
      onSearch({ from, to, date });
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl border-0 bg-white/95 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="space-y-2">
            <Label htmlFor="from" className="text-sm font-medium flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              From
            </Label>
            <Input
              id="from"
              placeholder="Enter departure city"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="border-2 focus:border-primary"
            />
          </div>

          <div className="relative">
            <div className="space-y-2">
              <Label htmlFor="to" className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                To
              </Label>
              <Input
                id="to"
                placeholder="Enter destination city"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="border-2 focus:border-primary"
              />
            </div>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="absolute -left-4 top-8 z-10 bg-white border-2 hover:bg-primary hover:text-white hidden md:flex"
              onClick={handleSwap}
            >
              <ArrowLeftRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date" className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Journey Date
            </Label>
            <Input
              id="date"
              type="date"
              min={today}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border-2 focus:border-primary"
            />
          </div>

          <Button 
            onClick={handleSearch}
            variant="hero"
            size="lg"
            className="h-12 text-base font-semibold"
            disabled={!from || !to || !date}
          >
            <Search className="h-5 w-5 mr-2" />
            Search Buses
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}