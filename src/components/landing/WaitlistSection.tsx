import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { lang, t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      toast.success(t.waitlist.success[lang]);
      setEmail("");
      setLoading(false);
    }, 800);
  };

  return (
    <section id="waitlist" className="py-24 sm:py-32 bg-secondary/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <div className="flex justify-center gap-2 text-3xl sm:text-4xl mb-8">
            {["🥑", "🍕", "🥗", "🍜", "🧁"].map((e, i) => (
              <span key={i} className="inline-block" style={{ animation: `float ${3 + i * 0.5}s ease-in-out ${i * 0.3}s infinite` }}>{e}</span>
            ))}
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-4">{t.waitlist.title[lang]}</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">{t.waitlist.subtitle[lang]}</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input type="email" placeholder={t.waitlist.placeholder[lang]} value={email} onChange={(e) => setEmail(e.target.value)} required className="flex-1 rounded-full px-6 h-12 bg-background" />
            <Button type="submit" disabled={loading} className="rounded-full px-8 h-12 text-base font-semibold shadow-lg">
              {loading ? t.waitlist.sending[lang] : t.waitlist.button[lang]}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">{t.waitlist.spam[lang]}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;
