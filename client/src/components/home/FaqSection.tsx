import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface FaqItem {
    question: string;
    answer: string;
}

const faqItems: FaqItem[] = [
    {
        question: "Quanto tempo leva para ver resultados?",
        answer: "Os primeiros resultados aparecem entre 1 a 3 meses, dependendo da situação inicial da empresa. A organização financeira é progressiva, mas desde o primeiro mês você terá mais clareza sobre seus números e poderá tomar decisões mais assertivas."
    },
    {
        question: "Como funciona o processo de consultoria?",
        answer: "Começamos com um diagnóstico detalhado da sua situação financeira atual. Depois, definimos os objetivos e criamos um plano de ação personalizado. O acompanhamento é contínuo, com reuniões periódicas para revisar resultados e ajustar estratégias conforme necessário."
    },
    {
        question: "Qual é o valor da consultoria?",
        answer: "Os valores variam conforme a complexidade do seu negócio e a modalidade de serviço. Oferecemos um diagnóstico financeiro gratuito para que você entenda suas necessidades e podamos apresentar uma proposta personalizada."
    },
    {
        question: "Preciso ser MEI ou posso ser PJ/Autônomo?",
        answer: "Trabalho com MEIs, autônomos, prestadores de serviço, pequenas empresas e até microempresas. Cada segmento tem suas particularidades, e adapto a consultoria às suas necessidades específicas. O importante é que você queira organizar e crescer."
    },
    {
        question: "Como é feito o acompanhamento contínuo?",
        answer: "O acompanhamento pode ser feito via reuniões agendadas (mensais, quinzenais ou conforme necessário), análise de relatórios financeiros, orientação em decisões importantes e suporte para dúvidas pontuais. Você fica tranquilo sabendo que tem um profissional para consultar quando precisar."
    },
    {
        question: "Posso fazer uma consultoria pontual?",
        answer: "Sim! Oferecemos consultorias pontuais para temas específicos como precificação, estruturação de fluxo de caixa, abertura de MEI, análise de viabilidade, entre outros. Você escolhe o tipo de serviço que melhor atende sua necessidade no momento."
    }
];

export default function FaqSection() {
    return (
        <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16 space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Encontre respostas para as dúvidas mais comuns sobre consultoria financeira e como posso ajudar seu negócio.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-3xl mx-auto"
                >
                    <Accordion type="single" collapsible className="w-full space-y-2">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index + 1}`}
                                className="border border-border rounded-lg px-6 py-2 mb-3 bg-white dark:bg-slate-800"
                            >
                                <AccordionTrigger className="hover:text-secondary transition-colors">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
