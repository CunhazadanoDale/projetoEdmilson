import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
    "Clareza total sobre a real situação financeira do negócio",
    "Redução de erros operacionais, retrabalho e desperdícios financeiros",
    "Tomada de decisão baseada em dados e indicadores reais",
    "Organização e padronização dos processos financeiros",
    "Controle eficiente de receitas, despesas e fluxo de caixa",
    "Precificação correta para garantir lucro e sustentabilidade",
    "Prevenção de problemas fiscais e financeiros futuros",
    "Economia de tempo para o empreendedor focar no crescimento",
    "Visão estratégica para expansão e planejamento financeiro",
    "Apoio profissional contínuo para decisões mais seguras"
];

export default function WhyHireSection() {
    return (
        <section className="py-20 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16 space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                        Por que contratar uma consultoria financeira?
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Transforme a forma como você gerencia seu negócio e conquiste resultados reais.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:border-secondary/50 border border-transparent"
                        >
                            <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground font-medium">{benefit}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
