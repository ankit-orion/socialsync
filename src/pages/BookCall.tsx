import { motion, AnimatePresence } from "framer-motion";
import { Clock, Video, CheckCircle2, ArrowRight, Loader2, ChevronLeft, ChevronRight, ChevronDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo, useRef } from "react";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-[#0d0d0d]/[0.08] dark:border-white/10 py-6 pr-4 cursor-pointer group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center gap-4">
        <h3 className="font-bold text-left text-[#0d0d0d] dark:text-white text-base md:text-lg group-hover:text-[#0d0d0d]/70 dark:group-hover:text-white/70 transition-colors">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#0d0d0d] dark:text-white" : "text-[#0d0d0d]/70 dark:text-white/40 group-hover:text-[#0d0d0d] dark:group-hover:text-white"
          }`}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-[#0d0d0d]/70 dark:text-white/70 text-left leading-relaxed font-medium text-sm">
              {answer}
            </p>
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

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === "left" ? -200 : 200;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const upcomingDays = useMemo(() => {
    const days: Date[] = [];
    let d = new Date();
    while (days.length < 15) {
      d.setDate(d.getDate() + 1);
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        days.push(new Date(d));
      }
    }
    return days;
  }, []);

  const timeSlots = ["10:00 AM", "1:30 PM", "3:00 PM", "4:30 PM"];

  const [selectedDate, setSelectedDate] = useState<Date>(upcomingDays[0]);
  const [selectedTime, setSelectedTime] = useState<string>(timeSlots[0]);

  const handleBookCall = async () => {
    if (!name || !email) {
      alert("Please enter your name and email.");
      return;
    }

    setLoading(true);
    try {
      const [timeStr, modifier] = selectedTime.split(" ");
      let [hours, minutes] = timeStr.split(":").map(Number);
      if (hours === 12 && modifier === "AM") hours = 0;
      if (hours < 12 && modifier === "PM") hours += 12;

      const finalDate = new Date(selectedDate);
      finalDate.setHours(hours, minutes, 0, 0);

      const response = await fetch(
        "https://social-media-agency-backend.vercel.app/api/calendar/book",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            startTime: finalDate.toISOString(),
            notes: "Booked automatically from frontend UI",
          }),
        }
      );

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
    <main className="flex-1 w-full bg-[#e8e8e8] pt-28 pb-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10 w-full">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Link
            to="/"
            className="text-[#0d0d0d]/60 hover:text-[#0d0d0d] dark:text-white/60 dark:hover:text-white inline-flex items-center text-sm font-bold transition-colors bg-white dark:bg-white/5 px-4 py-2 rounded-full border border-[#0d0d0d]/[0.06] dark:border-white/10 shadow-sm"
          >
            ← Back to home
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ── Left: Info ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0d0d0d] dark:text-white tracking-tight leading-[1.05] mb-5">
                Let's scale
                <br />
                your brand.
              </h1>
              <p className="text-[#0d0d0d]/70 dark:text-white/70 text-base md:text-lg font-medium leading-relaxed max-w-md">
                Book a free 30-minute discovery call with our growth team. No pressure, no commitment — just real strategy.
              </p>
            </div>

            {/* What happens */}
            <div className="bg-white dark:bg-white/5 rounded-[24px] border border-[#0d0d0d]/[0.05] dark:border-white/10 p-7 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.04)]">
              <h3 className="text-base font-black text-[#0d0d0d] dark:text-white mb-5 uppercase tracking-tight">
                What happens on this call?
              </h3>
              <ul className="space-y-4">
                {[
                  "Audit of your current social presence",
                  "Identification of immediate growth opportunities",
                  "Custom roadmap strategy preview",
                  "Pricing and service fit assessment",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#2c5270] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[#0d0d0d]/80 dark:text-white/80 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Meta info */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <div className="flex items-center gap-2 bg-white dark:bg-white/5 rounded-full px-4 py-2.5 border border-[#0d0d0d]/[0.05] dark:border-white/10 shadow-sm">
                <Clock className="w-4 h-4 text-[#0d0d0d]/60 dark:text-white/60" />
                <span className="text-sm font-bold text-[#0d0d0d]/80 dark:text-white/80">30 Minutes</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-white/5 rounded-full px-4 py-2.5 border border-[#0d0d0d]/[0.05] dark:border-white/10 shadow-sm">
                <Video className="w-4 h-4 text-[#0d0d0d]/60 dark:text-white/60" />
                <span className="text-sm font-bold text-[#0d0d0d]/80 dark:text-white/80">Phone or Video</span>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Booking form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-white/5 rounded-[28px] border border-[#0d0d0d]/[0.05] dark:border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] p-6 md:p-8"
          >
            {success ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-[#2c5270]/15 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-[#2c5270]" />
                </div>
                <h3 className="text-3xl font-black text-[#0d0d0d] dark:text-white tracking-tight mb-2">
                  You're Booked!
                </h3>
                <p className="text-base font-bold text-[#0d0d0d] dark:text-white/80 mb-4">
                  {selectedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  at {selectedTime}
                </p>
                <p className="text-[#0d0d0d]/60 dark:text-white/60 font-medium text-sm">
                  We've locked this time exclusively for you. You will receive a confirmation email shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-[#0d0d0d] dark:text-white tracking-tight">
                    Pick a Time
                  </h3>
                  <p className="text-sm text-[#0d0d0d]/60 dark:text-white/60 mt-2 font-medium">
                    Shown in your local timezone.
                  </p>
                </div>

                {/* Date picker */}
                <div className="relative mb-6 group">
                  <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-white to-transparent z-10 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <button
                      onClick={() => scroll("left")}
                      className="p-1 rounded-full bg-white border border-[#0d0d0d]/[0.08] shadow-sm text-[#0d0d0d] hover:bg-[#f5f5f5] ml-0.5 transition-all pointer-events-auto"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-white to-transparent z-10 flex items-center justify-end opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <button
                      onClick={() => scroll("right")}
                      className="p-1 rounded-full bg-white border border-[#0d0d0d]/[0.08] shadow-sm text-[#0d0d0d] hover:bg-[#f5f5f5] mr-0.5 transition-all pointer-events-auto"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div
                    ref={scrollContainerRef}
                    className="flex w-full overflow-x-auto pb-3 gap-2 snap-x scroll-smooth scrollbar-none"
                  >
                    {upcomingDays.map((date, i) => {
                      const isSelected = selectedDate.getDate() === date.getDate();
                      const dayString = date.toLocaleDateString("en-US", { weekday: "short" });
                      const dateNum = date.getDate();
                      return (
                        <div
                          key={i}
                          onClick={() => setSelectedDate(date)}
                          className={`min-w-[72px] shrink-0 snap-start p-3 rounded-2xl border flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? "bg-[#0d0d0d] dark:bg-white border-[#0d0d0d] dark:border-white shadow-lg scale-[1.03]"
                              : "bg-[#f7f7f8] dark:bg-white/5 border-[#0d0d0d]/[0.04] dark:border-white/10 hover:border-[#0d0d0d]/[0.15] dark:hover:border-white/20"
                          }`}
                        >
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider ${
                              isSelected ? "text-white/60 dark:text-[#0d0d0d]/60" : "text-[#0d0d0d]/60 dark:text-white/60"
                            }`}
                          >
                            {dayString}
                          </span>
                          <span
                            className={`text-xl font-black mt-0.5 ${
                              isSelected ? "text-white dark:text-[#0d0d0d]" : "text-[#0d0d0d] dark:text-white"
                            }`}
                          >
                            {dateNum}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Time slots */}
                <div className="space-y-2 mb-6">
                  {timeSlots.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`w-full py-3.5 px-5 rounded-2xl border flex justify-between items-center transition-all duration-200 ${
                          isSelected
                            ? "border-[#0d0d0d] dark:border-white bg-[#0d0d0d]/[0.03] dark:bg-white/10 ring-1 ring-[#0d0d0d] dark:ring-white"
                            : "border-[#0d0d0d]/[0.06] dark:border-white/10 bg-[#f7f7f8] dark:bg-white/5 hover:border-[#0d0d0d]/[0.15] dark:hover:border-white/20"
                        }`}
                      >
                        <span
                          className={`font-bold text-sm ${
                            isSelected ? "text-[#0d0d0d] dark:text-white" : "text-[#0d0d0d]/60 dark:text-white/60"
                          }`}
                        >
                          {time}
                        </span>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-[#0d0d0d] dark:bg-white flex items-center justify-center">
                            <ArrowRight className="w-3 h-3 text-white dark:text-[#0d0d0d]" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Inputs */}
                <div className="space-y-3 mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#f7f7f8] border border-[#0d0d0d]/[0.06] text-[#0d0d0d] placeholder:text-[#0d0d0d]/60 px-5 py-3.5 rounded-2xl outline-none focus:ring-2 focus:ring-[#2c5270]/30 focus:border-[#0d0d0d]/[0.15] transition-all font-medium text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#f7f7f8] border border-[#0d0d0d]/[0.06] text-[#0d0d0d] placeholder:text-[#0d0d0d]/60 px-5 py-3.5 rounded-2xl outline-none focus:ring-2 focus:ring-[#2c5270]/30 focus:border-[#0d0d0d]/[0.15] transition-all font-medium text-sm"
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleBookCall}
                  disabled={loading}
                  className="w-full h-14 rounded-2xl bg-[#0d0d0d] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#222] transition-colors disabled:opacity-50 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.3)]"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Confirm Booking
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </>
            )}
          </motion.div>
        </div>

        {/* ── What Happens Next ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28 md:mt-36"
        >
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mb-5"
            >
              <div className="inline-flex items-center gap-2 bg-white dark:bg-white/5 border border-[#0d0d0d]/[0.08] dark:border-white/10 rounded-full px-4 py-2 shadow-sm text-[#0d0d0d] dark:text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[11px] font-bold tracking-wide uppercase">Process</span>
              </div>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0d0d0d] dark:text-white tracking-tight mb-4">
              What happens next?
            </h2>
            <p className="text-[#0d0d0d]/70 dark:text-white/70 font-medium text-sm max-w-md mx-auto">
              Our simple, fully transparent onboarding process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-[40px] left-[18%] right-[18%] h-[2px] bg-[#0d0d0d]/[0.06] dark:bg-white/10 -z-0" />

            {[
              {
                num: "01",
                title: "The Discovery",
                desc: "We dive deep into your current social metrics and outline immediate low-hanging fruit for your brand.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                num: "02",
                title: "Action Plan",
                desc: "If we're a fit, we design a transparent, growth-engineered roadmap tailored exactly to your niche.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                num: "03",
                title: "Scale & Conquer",
                desc: "We deploy content, analyze performance data, and scale your brand's presence week over week.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-white dark:bg-white/5 rounded-[24px] border border-[#0d0d0d]/[0.05] dark:border-white/10 p-7 text-center shadow-[0_8px_30px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0d0d0d]/[0.05] dark:bg-white/10 flex items-center justify-center mx-auto mb-5 relative z-10 text-[#0d0d0d] dark:text-white">
                  {step.icon}
                </div>
                <span className="text-[#0d0d0d]/60 dark:text-white/20 text-3xl font-black">{step.num}</span>
                <h4 className="text-lg font-black text-[#0d0d0d] dark:text-white tracking-tight mt-1 mb-3">
                  {step.title}
                </h4>
                <p className="text-[#0d0d0d]/70 dark:text-white/70 text-sm font-medium leading-relaxed max-w-[220px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Social Proof Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28 mb-16 bg-[#0d0d0d] rounded-[28px] p-10 md:p-14 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"
        >
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4">
            You're in elite company.
          </h2>
          <p className="text-white/40 font-medium text-sm mb-10 max-w-2xl mx-auto leading-relaxed">
            We've generated tens of millions of views for brands just like yours. A single 30-minute discovery call could rewrite the trajectory of your entire digital presence.
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {["Khan Academy", "W3Schools", "Shopify", "Gymshark", "Duolingo"].map((brand) => (
              <span key={brand} className="text-lg font-black text-white/15 tracking-tight">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── FAQ Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl mx-auto"
        >
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mb-5"
            >
              <div className="inline-flex items-center gap-2 bg-white dark:bg-white/5 border border-[#0d0d0d]/[0.08] dark:border-white/10 rounded-full px-4 py-2 shadow-sm text-[#0d0d0d] dark:text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="text-[11px] font-bold tracking-wide uppercase">FAQ</span>
              </div>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0d0d0d] dark:text-white tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#0d0d0d]/70 dark:text-white/70 font-medium text-sm">
              Everything you need to know before we jump on the call.
            </p>
          </div>

          <div className="flex flex-col bg-white dark:bg-white/5 rounded-[24px] border border-[#0d0d0d]/[0.05] dark:border-white/10 px-7 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.04)]">
            <FaqItem
              question="Is there an upfront cost for the discovery call?"
              answer="Absolutely not. This is a complimentary, zero-pressure 30-minute session designed to see if we can scale your brand."
            />
            <FaqItem
              question="What do I need to prepare before we speak?"
              answer="Nothing except yourself and a rough idea of your current revenue and traffic goals. We handle the heavy lifting, deep-diving into your accounts prior to the call."
            />
            <FaqItem
              question="Who will I actually be speaking with?"
              answer="You will be speaking directly with our lead growth strategist. No sales reps, no fluff — just raw, actionable strategies right out of the gate."
            />
            <FaqItem
              question="What happens if we aren't a good fit?"
              answer="If we analyze your metrics during the call and realize we can't meaningfully grow your presence, we'll tell you honestly. We'll even share some free strategies before parting ways."
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
