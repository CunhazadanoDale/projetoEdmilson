import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface WhyHireItemProps {
  benefit: string;
  index: number;
}

export function WhyHireItem({ benefit, index }: WhyHireItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:border-secondary/50 border border-transparent"
    >
      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
      <span className="text-muted-foreground font-medium">{benefit}</span>
    </motion.div>
  );
}
