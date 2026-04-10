import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Target, Users, X, UploadCloud, CheckCircle2 } from "lucide-react";


const perks = [
  {
    icon: <Sparkles className="w-5 h-5 text-[#2c5270] dark:text-[#4281b3]" />,
    title: "Work from Anywhere",
    description: "100% remote. We care about output, not your zip code."
  },
  {
    icon: <Zap className="w-5 h-5 text-[#2c5270] dark:text-[#4281b3]" />,
    title: "Unlimited PTO",
    description: "Mandatory minimum of 3 weeks off. Recharge when you need to."
  },
  {
    icon: <Target className="w-5 h-5 text-[#2c5270] dark:text-[#4281b3]" />,
    title: "Top-Tier Gear",
    description: "MacBook Pro M-Series and $1k home office stipend on day one."
  },
  {
    icon: <Users className="w-5 h-5 text-[#2c5270] dark:text-[#4281b3]" />,
    title: "Annual Retreats",
    description: "We fly the whole team out globally once a year. Last year: Lisbon."
  }
];

const jobs = [
  {
    title: "Senior Graphic Designer",
    type: "Full-Time",
    experience: "4+ Years",
    location: "Remote",
    category: "Design",
    description: "Lead visual identities for high-ticket campaigns. Requires deep expertise in modern typography, premium branding, and conversion-focused aesthetic design."
  },
  {
    title: "UI/UX Designer",
    type: "Full-Time",
    experience: "3+ Years",
    location: "Remote",
    category: "Product",
    description: "Craft highly intuitive, premium interfaces for our SaaS clients and internal platforms. Mastery of Figma and component-driven design systems is mandatory."
  },
  {
    title: "Social Media Strategist",
    type: "Full-Time",
    experience: "2-4 Years",
    location: "Remote",
    category: "Strategy",
    description: "Architect viral growth engines and multi-platform content calendars. You must possess an obsessive understanding of vertical video algorithms and audience psychology."
  },
  {
    title: "Graphic Design Intern",
    type: "Internship (Paid)",
    experience: "0-1 Years",
    location: "Remote",
    category: "Design",
    description: "Assist our senior art directors in producing daily high-fidelity content. Perfect for a hungry junior looking to build a world-class agency portfolio."
  }
];

export function Careers() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate an API network request
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => {
        setSelectedJob(null);
        setFormStatus("idle");
        setFile(null);
      }, 2000);
    }, 1500);
  };

  return (
    <main className="w-full bg-[#f8f9fa] dark:bg-[#0a0a0a] min-h-screen pt-32 pb-24 transition-colors duration-300 relative">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 md:mb-32"
        >
          <div className="inline-flex items-center gap-2 bg-white dark:bg-white/5 border border-[#0d0d0d]/10 dark:border-white/10 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#14bf96] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0d0d0d]/80 dark:text-white/80">We are hiring</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#0d0d0d] dark:text-white leading-[1.05] tracking-tight mb-8">
            Don't build campaigns. <br className="hidden md:block" />
            <span className="text-[#2c5270] dark:text-[#4281b3]">Build culture.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#0d0d0d]/70 dark:text-white/60 font-medium leading-relaxed">
            We are a lean, elite engineering firm for the creator economy. If you want to move slow and hide in corporate bureaucracy, close this tab. If you want to do the best work of your life, keep reading.
          </p>
        </motion.div>

        {/* Perks Section */}
        <div className="mb-24 md:mb-32">
          <motion.h3 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-2xl font-black text-[#0d0d0d] dark:text-white mb-10 text-center tracking-tight"
          >
            How we take care of you
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white dark:bg-[#121212] border border-[#0d0d0d]/[0.06] dark:border-white/10 rounded-2xl p-6 hover:shadow-xl dark:hover:border-white/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2c5270]/10 dark:bg-[#4281b3]/20 flex items-center justify-center mb-5">
                  {perk.icon}
                </div>
                <h4 className="font-bold text-[#0d0d0d] dark:text-white mb-3">{perk.title}</h4>
                <p className="text-sm text-[#0d0d0d]/60 dark:text-white/60 leading-relaxed font-medium">
                  {perk.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[#0d0d0d] dark:text-white tracking-tight mb-4">Open Roles</h2>
              <p className="text-[#0d0d0d]/60 dark:text-white/60 font-medium">Come build the future of absolute growth.</p>
            </div>
            <a href="mailto:careers@socialsync.agency" className="text-sm font-bold text-[#2c5270] dark:text-[#4281b3] hover:underline underline-offset-4">
              Don't see your role? Pitch us.
            </a>
          </motion.div>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white dark:bg-[#121212] border border-[#0d0d0d]/[0.06] dark:border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#2c5270]/50 dark:hover:border-[#4281b3]/50 transition-colors"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2.5 mb-5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2c5270] dark:text-[#4281b3] bg-[#2c5270]/10 dark:bg-[#4281b3]/20 px-3 py-1.5 rounded-full">
                      {job.category}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0d0d0d]/60 dark:text-white/60 border border-[#0d0d0d]/10 dark:border-white/10 px-3 py-1.5 rounded-full">
                      {job.type}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0d0d0d]/60 dark:text-white/60 border border-[#0d0d0d]/10 dark:border-white/10 px-3 py-1.5 rounded-full">
                      {job.experience} Exp.
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-[#0d0d0d] dark:text-white tracking-tight mb-3">
                    {job.title}
                  </h3>
                  <p className="text-[#0d0d0d]/60 dark:text-white/60 text-sm leading-relaxed font-medium">
                    {job.description}
                  </p>
                </div>
                
                <div className="flex flex-col md:items-end gap-5 shrink-0 mt-2 md:mt-0">
                   <div className="text-sm font-bold text-[#0d0d0d]/70 dark:text-white/70">
                     📍 {job.location}
                   </div>
                   <button 
                     onClick={() => setSelectedJob(job.title)}
                     className="flex items-center justify-center gap-2 bg-[#0d0d0d] dark:bg-white text-white dark:text-[#0d0d0d] px-7 py-3.5 rounded-full text-sm font-black hover:scale-105 transition-transform group-hover:bg-[#2c5270] dark:group-hover:bg-[#4281b3] dark:group-hover:text-white shadow-md w-full md:w-auto"
                   >
                     Apply Now <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Application Form Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d0d0d]/60 dark:bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white dark:bg-[#12141a] w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#0d0d0d]/[0.05] dark:border-white/10 relative overflow-hidden"
            >
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#0d0d0d]/5 dark:hover:bg-white/10 transition-colors"
                disabled={formStatus === "submitting"}
              >
                <X className="w-5 h-5 text-[#0d0d0d] dark:text-white" />
              </button>

              <div className="mb-8 pr-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#2c5270] dark:text-[#4281b3] mb-2 block">Application Form</span>
                <h3 className="text-2xl font-black text-[#0d0d0d] dark:text-white leading-none">
                  {selectedJob}
                </h3>
              </div>

              {formStatus === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-16 h-16 bg-[#14bf96]/20 text-[#14bf96] rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black text-[#0d0d0d] dark:text-white mb-2">Application Received</h4>
                  <p className="text-sm text-[#0d0d0d]/60 dark:text-white/60 font-medium">
                    We'll review your details and get back to you within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0d0d0d]/70 dark:text-white/70 mb-1.5 uppercase tracking-wider">Full Name</label>
                    <input required type="text" className="w-full bg-[#f8f9fa] dark:bg-white/5 border border-[#0d0d0d]/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#0d0d0d] dark:text-white outline-none focus:border-[#2c5270] dark:focus:border-[#4281b3] transition-colors" placeholder="Jane Doe" disabled={formStatus === "submitting"} />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0d0d0d]/70 dark:text-white/70 mb-1.5 uppercase tracking-wider">Email Address</label>
                    <input required type="email" className="w-full bg-[#f8f9fa] dark:bg-white/5 border border-[#0d0d0d]/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#0d0d0d] dark:text-white outline-none focus:border-[#2c5270] dark:focus:border-[#4281b3] transition-colors" placeholder="jane@example.com" disabled={formStatus === "submitting"} />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0d0d0d]/70 dark:text-white/70 mb-1.5 uppercase tracking-wider">Portfolio / LinkedIn URL</label>
                    <input required type="url" className="w-full bg-[#f8f9fa] dark:bg-white/5 border border-[#0d0d0d]/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#0d0d0d] dark:text-white outline-none focus:border-[#2c5270] dark:focus:border-[#4281b3] transition-colors" placeholder="https://" disabled={formStatus === "submitting"} />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0d0d0d]/70 dark:text-white/70 mb-1.5 uppercase tracking-wider">Resume (PDF)</label>
                    <div className="w-full relative">
                      <input 
                        type="file" 
                        accept=".pdf" 
                        required 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        disabled={formStatus === "submitting"}
                      />
                      <div className={`w-full flex items-center justify-between border ${file ? "border-[#2c5270] dark:border-[#4281b3] bg-[#2c5270]/5 dark:bg-[#4281b3]/10" : "border-[#0d0d0d]/10 dark:border-white/10 border-dashed bg-[#f8f9fa] dark:bg-white/5"} rounded-xl px-4 py-3 transition-colors`}>
                        <span className="text-sm font-medium text-[#0d0d0d]/60 dark:text-white/60 truncate mr-4">
                          {file ? file.name : "Upload your resume..."}
                        </span>
                        <UploadCloud className={`w-5 h-5 shrink-0 ${file ? "text-[#2c5270] dark:text-[#4281b3]" : "text-[#0d0d0d]/40 dark:text-white/40"}`} />
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === "submitting"}
                    className="w-full mt-4 bg-[#0d0d0d] dark:bg-white text-white dark:text-[#0d0d0d] py-4 rounded-xl text-sm font-black flex items-center justify-center gap-2 hover:bg-[#2c5270] dark:hover:bg-[#e2e4eb] transition-colors shadow-lg disabled:opacity-70"
                  >
                    {formStatus === "submitting" ? (
                      <span className="animate-pulse">Uploading securely...</span>
                    ) : (
                      <>Submit Application <ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
