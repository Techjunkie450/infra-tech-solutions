import { Button } from "@/components/ui/button";
import { Calendar, Mail, ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-soft">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 bg-gradient-primary text-primary-foreground shadow-elegant">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-foreground/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary-foreground/10 blur-3xl pointer-events-none" />
          <div className="relative text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready to Build Something Great?
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed">
              Let's discuss your project. Whether it's web, mobile, cloud infrastructure, or a combination — we'll craft the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button asChild size="lg" variant="secondary" className="px-8 py-6 text-base font-semibold group">
                <a href="#contact">
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule Your Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-6 text-base font-semibold border-2 border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="mailto:hello@infrarisetech.com">
                  <Mail className="mr-2 w-5 h-5" />
                  hello@infrarisetech.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};