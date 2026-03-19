import { motion } from "framer-motion";
import { Clock, Video, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

export function BookCall() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const upcomingDays = useMemo(() => {
    const days = [];
    let d = new Date();
    while (days.length < 3) {
      d.setDate(d.getDate() + 1);
      if (d.getDay() !== 0 && d.getDay() !== 6) { 
        days.push(new Date(d));
      }
    }
    return days;
  }, []);

  const timeSlots = ['10:00 AM', '1:30 PM', '3:00 PM', '4:30 PM'];

  const [selectedDate, setSelectedDate] = useState<Date>(upcomingDays[0]);
  const [selectedTime, setSelectedTime] = useState<string>(timeSlots[0]);

  const handleBookCall = async () => {
    if (!name || !email) {
      alert("Please enter your name and email.");
      return;
    }

    setLoading(true);
    try {
      const [timeStr, modifier] = selectedTime.split(' ');
      let [hours, minutes] = timeStr.split(':').map(Number);
      if (hours === 12 && modifier === 'AM') hours = 0;
      if (hours < 12 && modifier === 'PM') hours += 12;

      const finalDate = new Date(selectedDate);
      finalDate.setHours(hours, minutes, 0, 0);

      const response = await fetch("https://social-media-agency-backend.vercel.app/api/calendar/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          startTime: finalDate.toISOString(),
          notes: "Booked automatically from frontend UI",
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setSuccess(true);
      } else {
        alert(data.error || "Failed to book call.");
      }
    } catch (err) {
      console.error(err);
      alert("Backend is not running or unreachable.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex-1 w-full flex justify-center pt-28 pb-20 overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-primary/5 blur-3xl -z-10 rounded-b-full"></div>
      
      <div className="container px-4 md:px-6 max-w-6xl relative z-10 w-full">
        <motion.div 
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="mb-8"
        >
          <Link to="/" className="text-muted-foreground hover:text-foreground inline-flex items-center text-sm font-medium transition-colors mb-4 bg-muted/50 px-3 py-1.5 rounded-full border border-border/50">
            &larr; Back to home
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
                Let's scale your brand.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance">
                Book a free 30-minute discovery call with our growth team. No pressure, no commitment.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/30 border border-border/50 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <h3 className="text-lg font-semibold mb-4">What happens on this call?</h3>
                <ul className="space-y-4">
                  {[
                    "Audit of your current social presence",
                    "Identification of immediate growth opportunities",
                    "Custom roadmap strategy preview",
                    "Pricing and service fit assessment"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-muted-foreground p-2 rounded-xl border border-border/30 bg-background/50">
                <div className="flex items-center gap-2 px-3 py-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">30 Minutes</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <div className="flex items-center gap-2 px-3 py-1">
                  <Video className="w-4 h-4" />
                  <span className="text-sm font-medium">Phone or Video Call</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Booking Form Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl border border-border/50 bg-card/50 backdrop-blur-xl shadow-2xl p-6 md:p-8"
          >
            {success ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight mb-2">You're Booked!</h3>
                <p className="text-lg font-semibold text-primary mb-4">
                  {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedTime}
                </p>
                <p className="text-muted-foreground">We've locked this time exclusively for you. You will receive a confirmation email shortly.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold tracking-tight">Select a Time</h3>
                  <p className="text-sm text-muted-foreground mt-2">Times are shown in your local timezone.</p>
                </div>

                <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6">
                  {upcomingDays.map((date, i) => {
                    const isSelected = selectedDate.getDate() === date.getDate();
                    const dayString = date.toLocaleDateString('en-US', { weekday: 'short' });
                    const dateNum = date.getDate();
                    return (
                      <div 
                        key={i} 
                        onClick={() => setSelectedDate(date)}
                        className={`p-3 md:p-4 rounded-xl border flex flex-col items-center justify-center cursor-pointer transition-all ${isSelected ? 'bg-primary/10 border-primary shadow-sm scale-[1.02]' : 'bg-background hover:bg-muted border-border/50'}`}
                      >
                        <span className={`text-[10px] md:text-xs font-medium uppercase tracking-wider ${isSelected ? 'text-primary' : 'text-muted-foreground'}`}>{dayString}</span>
                        <span className={`text-xl md:text-2xl font-bold mt-1 ${isSelected ? 'text-primary' : ''}`}>{dateNum}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-2 mb-6">
                  {timeSlots.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button 
                        key={time} 
                        onClick={() => setSelectedTime(time)}
                        className={`w-full py-3 px-6 rounded-xl border flex justify-between items-center transition-all ${isSelected ? 'border-primary ring-1 ring-primary bg-primary/5 text-foreground' : 'border-border/50 hover:border-primary/50 text-muted-foreground bg-background/50 hover:bg-background'}`}
                      >
                        <span className="font-semibold">{time}</span>
                        {isSelected ? <ArrowRight className="w-4 h-4 text-primary" /> : null}
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-4 mb-6">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-background border border-border/50 text-foreground px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-background border border-border/50 text-foreground px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                <Button 
                  size="lg" 
                  onClick={handleBookCall}
                  disabled={loading}
                  className="w-full h-14 rounded-xl text-base font-semibold group bg-gradient-to-r from-blue-600 to-primary text-white hover:opacity-90 border-0 shadow-xl shadow-primary/20 transition-all disabled:opacity-50"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Confirm Booking"}
                  {!loading && <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />}
                </Button>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
