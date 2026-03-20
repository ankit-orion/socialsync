import { motion, AnimatePresence } from "framer-motion";
import { Clock, Video, CheckCircle2, ArrowRight, Loader2, ChevronLeft, ChevronRight, MessageSquare, Zap, BarChart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useMemo, useRef } from "react";
import { useSound } from "@/hooks/useSound";

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const { playHover } = useSound();

  return (
    <div 
      className="border-b border-border/40 py-6 pr-4 cursor-pointer group"
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={playHover}
    >
      <div className="flex justify-between items-center gap-4">
        <h3 className="font-semibold text-left text-lg group-hover:text-primary transition-colors">{question}</h3>
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-muted-foreground group-hover:text-primary'}`} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-muted-foreground text-left leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function BookCall() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -200 : 200;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const { playHover, playClick } = useSound();

  const upcomingDays = useMemo(() => {
    const days = [];
    let d = new Date();
    while (days.length < 15) {
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

                <div className="relative mb-6 group">
                  <div className="absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-background to-transparent z-10 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <button onClick={() => scroll('left')} onMouseEnter={playHover} className="p-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-md text-foreground hover:bg-muted ml-1 transition-all pointer-events-auto">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-background to-transparent z-10 flex items-center justify-end opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <button onClick={() => scroll('right')} onMouseEnter={playHover} className="p-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-md text-foreground hover:bg-muted mr-1 transition-all pointer-events-auto">
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </button>
                  </div>

                  <div 
                    ref={scrollContainerRef}
                    className="flex w-full overflow-x-auto pb-4 gap-2 md:gap-3 snap-x scroll-smooth" 
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    <style>{`
                      .flex::-webkit-scrollbar { display: none; }
                    `}</style>
                    {upcomingDays.map((date, i) => {
                      const isSelected = selectedDate.getDate() === date.getDate();
                      const dayString = date.toLocaleDateString('en-US', { weekday: 'short' });
                      const dateNum = date.getDate();
                      return (
                        <div 
                          key={i} 
                          onMouseEnter={playHover}
                          onClick={() => { playHover(); setSelectedDate(date); }}
                          className={`min-w-[80px] md:min-w-[90px] shrink-0 snap-start p-3 md:p-4 rounded-xl border flex flex-col items-center justify-center cursor-pointer transition-all ${isSelected ? 'bg-primary/10 border-primary shadow-sm scale-[1.02]' : 'bg-background hover:bg-muted border-border/50'}`}
                        >
                          <span className={`text-[10px] md:text-sm font-medium uppercase tracking-wider ${isSelected ? 'text-primary' : 'text-muted-foreground'}`}>{dayString}</span>
                          <span className={`text-2xl md:text-3xl font-bold mt-1 ${isSelected ? 'text-primary' : ''}`}>{dateNum}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {timeSlots.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button 
                        key={time} 
                        onMouseEnter={playHover}
                        onClick={() => { playHover(); setSelectedTime(time); }}
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
                  onMouseEnter={playHover}
                  onClick={() => { playClick(); handleBookCall(); }}
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

        {/* What Happens Next Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 pt-20 border-t border-border/40"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What happens next?</h2>
            <p className="text-muted-foreground">Our simple, completely transparent onboarding process.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-border/40 -z-10" />
            
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-xl shadow-primary/5">
                <MessageSquare className="text-primary w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">1. The Discovery</h4>
              <p className="text-muted-foreground text-sm leading-relaxed px-4 max-w-xs">We dive deep into your current social metrics and outline immediate low-hanging fruit for your brand.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-xl shadow-primary/5">
                <Zap className="text-primary w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">2. Action Plan</h4>
              <p className="text-muted-foreground text-sm leading-relaxed px-4 max-w-xs">If we're a fit, we design a transparent, viral-engineered roadmap tailored exactly to your niche.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-xl shadow-primary/5">
                <BarChart className="text-primary w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">3. Scale & Conquer</h4>
              <p className="text-muted-foreground text-sm leading-relaxed px-4 max-w-xs">We start deploying content, analyzing massive data, and scaling your brand vertically week over week.</p>
            </div>
          </div>
        </motion.div>

        {/* Minimal Social Proof Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 mb-32 p-8 md:p-12 rounded-3xl bg-card border border-border/50 text-center shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">You're in elite company.</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">We've generated tens of millions of views for brands just like yours. A single 30-minute discovery call could rewrite the trajectory of your entire digital presence.</p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-500">
             <div className="text-2xl font-black tracking-tighter">AURA</div>
             <div className="text-2xl font-serif italic font-bold">Lumina</div>
             <div className="text-2xl font-mono font-bold tracking-widest">NEXUS</div>
             <div className="text-2xl font-sans font-bold flex items-center"><Zap className="w-5 h-5 mr-1"/> VOLT</div>
          </div>
        </motion.div>

        {/* Dynamic FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32 max-w-3xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know before we jump on the call.</p>
          </div>
          
          <div className="flex flex-col border-t border-border/40">
            <FaqItem 
              question="Is there an upfront cost for the discovery call?" 
              answer="Absolutely not. This is a complimentary, zero-pressure 30-minute session strictly designed to see if we have the mathematical capacity to scale your exact brand." 
            />
            <FaqItem 
              question="What do I need to prepare before we speak?" 
              answer="Nothing except yourself and a rough idea of your current revenue and traffic goals. We will handle the heavy lifting, deep-diving into your active accounts prior to the call." 
            />
            <FaqItem 
              question="Who will I actually be speaking with?" 
              answer="You will be speaking directly with our lead growth engineer. No sales reps, no fluff—just raw, actionable data and viral strategies right out of the gate." 
            />
            <FaqItem 
              question="What happens if we aren't a good fit?" 
              answer="If we analyze your metrics during the call and realize we can't legitimately double or triple your presence, we will explicitly tell you. We'll even hand you over some free strategies before parting ways." 
            />
          </div>
        </motion.div>

      </div>
    </main>
  );
}
