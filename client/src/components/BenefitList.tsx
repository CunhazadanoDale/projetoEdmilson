import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface BenefitListProps {
  items: string[];
  isAfter?: boolean;
}

export function BenefitList({ items, isAfter = false }: BenefitListProps) {
  const Icon = isAfter ? "✓" : "✗";
  const color = isAfter ? "text-green-500" : "text-red-500";

  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: isAfter ? 10 : -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          viewport={{ once: true }}
          className="flex items-start gap-3 text-muted-foreground text-base"
        >
          <span className={`${color} text-2xl font-bold mt-0.5 flex-shrink-0`}>
            {Icon}
          </span>
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}
