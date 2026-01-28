import { Button } from "@/components/ui/button";
import {
    BarChart3,
    CheckCircle2,
    Target,
    TrendingUp,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, createElement } from "react";
import { useCounter } from "@/hooks/useCounter";
import { LucideIcon } from "lucide-react";

interface Benefit {
    icon: LucideIcon;
    title: string;
    description: string;
}

const benefits: Benefit[] = [
    {
        icon: Target,
        title: "Direcionamento Estratégico",
        description: "Análise rápida da realidade do negócio para indicar caminhos eficientes de organização e crescimento."
    },
    {
        icon: BarChart3,
        title: "Decisões com Números",
        description: "Transformo dados em informações práticas para corrigir falhas e dar segurança na tomada de decisão."
    },
    {
        icon: CheckCircle2,
        title: "Processos Simples",
        description: "Aplicação de processos claros e organizados, evitando retrabalho e erros, mesmo sem conhecimento técnico."
    },
    {
        icon: TrendingUp,
        title: "Base para Crescimento",
        description: "Estruturação financeira para crescer de forma sustentável, com visão de futuro e tranquilidade na gestão."
    }
];

export default function ExperienceSection() {
    const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);
    const [isInView, setIsInView] = useState(false);

    // Contadores animados
    const clientsCount = useCounter(5, 2000, isInView);
    const projectsCount = useCounter(20, 2000, isInView);
    const yearsCount = useCounter(3, 2000, isInView);

    // UseEffect para detectar quando a seção é visível
    useEffect(() => {
        const handleScroll = () => {
            const experienciaSection = document.getElementById('experiencia');
            if (experienciaSection) {
                const rect = experienciaSection.getBoundingClientRect();
                setIsInView(rect.top < window.innerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const nextBenefit = () => {
        setCurrentBenefitIndex((prev) => (prev + 1) % benefits.length);
    };

    const prevBenefit = () => {
        setCurrentBenefitIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
    };

    return (
        <section id="experiencia" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                        Como minha experiência ajuda seu negócio
                    </h2>
                    <p className="text-primary-foreground/80 text-lg leading-relaxed">
                        Toda a bagagem adquirida em diferentes segmentos me permite analisar rapidamente a realidade da sua empresa e indicar os caminhos mais eficientes.
                    </p>
                </div>

                {/* Carousel/Tabs Version */}
                <div className="max-w-3xl mx-auto mb-12">
                    <motion.div
                        key={currentBenefitIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center">
                                    {createElement(benefits[currentBenefitIndex].icon, {
                                        className: "w-8 h-8 text-secondary"
                                    })}
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-xl mb-3">{benefits[currentBenefitIndex].title}</h3>
                                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                                    {benefits[currentBenefitIndex].description}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigation Dots and Arrows */}
                    <div className="flex items-center justify-between mt-8">
                        <button
                            onClick={prevBenefit}
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            aria-label="Benefício anterior"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="flex gap-2">
                            {benefits.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentBenefitIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentBenefitIndex
                                            ? 'bg-secondary w-8'
                                            : 'bg-white/30 w-2 hover:bg-white/50'
                                        }`}
                                    aria-label={`Ir para benefício ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextBenefit}
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            aria-label="Próximo benefício"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 pt-12 border-t border-white/20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="text-4xl md:text-5xl font-display font-bold text-secondary mb-2">
                            +{clientsCount}
                        </div>
                        <p className="text-sm text-primary-foreground/80">Empresas Assessoradas</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-center"
                    >
                        <div className="text-4xl md:text-5xl font-display font-bold text-secondary mb-2">
                            +{projectsCount}
                        </div>
                        <p className="text-sm text-primary-foreground/80">Processos Otimizados</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center"
                    >
                        <div className="text-4xl md:text-5xl font-display font-bold text-secondary mb-2">
                            {yearsCount}+
                        </div>
                        <p className="text-sm text-primary-foreground/80">Anos de Experiência</p>
                    </motion.div>
                </div>

                <div className="mt-16 text-center">
                    <Button
                        className="bg-secondary text-primary font-bold hover:bg-secondary/90 text-lg px-8 h-12 rounded-full shadow-lg shadow-secondary/20"
                        onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Quero estruturar meu financeiro
                    </Button>
                </div>
            </div>
        </section>
    );
}
