import { motion } from "framer-motion";

interface TestimonialCardProps {
  text: string;
  name: string;
  role: string;
  delay?: number;
}

export function TestimonialCard({ text, name, role, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-secondary text-lg">
            ★
          </span>
        ))}
      </div>
      <p className="text-primary-foreground/90 text-sm mb-4 leading-relaxed">
        "{text}"
      </p>
      <div>
        <p className="font-bold text-sm">{name}</p>
        <p className="text-primary-foreground/70 text-xs">{role}</p>
      </div>
    </motion.div>
  );
}
