import { motion } from "framer-motion";

interface Testimonial {
    rating: number;
    text: string;
    name: string;
    role: string;
}

const testimonials: Testimonial[] = [
    {
        rating: 5,
        text: "Com a consultoria do Edmilson, consegui enxergar meus números de forma clara. Em 3 meses, eliminei gastos desnecessários e aumentei meu lucro em 35%. Recomendo muito!",
        name: "Maria Silva",
        role: "Consultora Financeira"
    },
    {
        rating: 5,
        text: "Não tinha controle sobre meu fluxo de caixa e vivia com medo de não conseguir pagar contas. Agora tenho uma visão clara de tudo e posso planejar meu crescimento com segurança.",
        name: "João Santos",
        role: "Prestador de Serviço"
    },
    {
        rating: 5,
        text: "Além de organizar meu financeiro, o Edmilson me ajudou a estruturar meu negócio de forma profissional. Hoje tenho processos claros e consigo escalar com confiança.",
        name: "Ana Costa",
        role: "Proprietária de E-commerce"
    }
];

function TestimonialCard({ testimonial, delay }: { testimonial: Testimonial; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
        >
            <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-secondary text-lg">★</span>
                ))}
            </div>
            <p className="text-primary-foreground/90 text-sm mb-4 leading-relaxed">
                "{testimonial.text}"
            </p>
            <div>
                <p className="font-bold text-sm">{testimonial.name}</p>
                <p className="text-primary-foreground/70 text-xs">{testimonial.role}</p>
            </div>
        </motion.div>
    );
}

export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background gradient animation */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16 space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                        O que meus clientes dizem
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Histórias reais de transformação financeira e crescimento empresarial.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
}
