import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
        <CardHeader>
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-lg font-display font-bold text-primary">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          <p>{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
