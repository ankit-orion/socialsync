import { Button } from "../ui/button";

export function CTA() {
  return (
    <section id="cta" className="py-32 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/40 via-primary/40 to-transparent z-0 opacity-80" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] z-10"></div>
      </div>
      
      <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight max-w-4xl">
          Ready to scale your brand?
        </h2>
        <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl px-2">
          Join 50+ modern brands who trust us to handle their social presence and drive measurable top-line revenue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Button size="lg" className="h-14 w-full sm:w-auto px-8 text-base rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium">
            Book your free discovery call
          </Button>
          <Button size="lg" variant="outline" className="h-14 w-full sm:w-auto px-8 text-base rounded-full border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent text-primary-foreground">
            Shoot us an email
          </Button>
        </div>
        <p className="mt-8 text-sm opacity-60">
          No commitment. Just a 30-minute chat to see if we're a fit.
        </p>
      </div>
    </section>
  );
}
