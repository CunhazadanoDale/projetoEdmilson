import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const beforeItems = [
    "Sem controle de receitas e despesas",
    "Não sabe se está ganhando ou perdendo dinheiro",
    "Decisões baseadas em intuição",
    "Despesas desnecessárias não identificadas",
    "Precificação incorreta dos serviços",
    "Medo constante com a situação financeira",
    "Impossível planejar o crescimento"
];

const afterItems = [
    "Visão clara de toda a situação financeira",
    "Sabe exatamente quanto ganha por mês",
    "Decisões baseadas em dados reais",
    "Elimina gastos desnecessários",
    "Preços calculados corretamente para lucrar",
    "Tranquilidade e segurança financeira",
    "Planejamento estratégico para crescimento"
];

export default function TransformationSection() {
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
                        A Transformação do Seu Negócio
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Veja como a consultoria financeira pode mudar a realidade da sua empresa.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Antes */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">
                            Antes da Consultoria
                        </div>
                        <h3 className="text-2xl font-display font-bold text-primary">
                            Caos Financeiro
                        </h3>
                        <ul className="space-y-3">
                            {beforeItems.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-3 text-muted-foreground"
                                >
                                    <span className="text-red-500 text-xl mt-1">✗</span>
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Depois */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                            Depois da Consultoria
                        </div>
                        <h3 className="text-2xl font-display font-bold text-secondary">
                            Controle Total
                        </h3>
                        <ul className="space-y-3">
                            {afterItems.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-3 text-muted-foreground"
                                >
                                    <span className="text-green-500 text-xl mt-1">✓</span>
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/20"
                        onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Comece Sua Transformação Agora
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
