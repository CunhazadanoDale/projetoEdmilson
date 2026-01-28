import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    CheckCircle2,
    TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function HeroSection() {
    return (
        <section id="hero" className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background"></div>

            {/* Floating gradient blobs */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float -z-10"></div>
            <div className="absolute -bottom-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float -z-10" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float -z-10" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/40 text-secondary-foreground text-sm font-medium border border-secondary/30">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                            </span>
                            Consultoria Financeira Estratégica
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-tight">
                            Transforme seus números em <span className="text-secondary">crescimento real</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                            Organização, controle e direção para MEIs, pequenas empresas e prestadores de serviço. Pare de apenas pagar contas e comece a gerir seu negócio.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/20"
                                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Agendar Diagnóstico Gratuito
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="text-lg px-8 h-14 rounded-full border-primary/20 hover:bg-primary/5 text-primary"
                                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Conhecer Serviços
                            </Button>
                        </motion.div>

                        <motion.div variants={fadeIn} className="pt-8 flex items-center gap-8 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-secondary w-5 h-5" />
                                <span>Controle Total</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-secondary w-5 h-5" />
                                <span>Decisões Assertivas</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-secondary w-5 h-5" />
                                <span>Lucratividade</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 border border-border/50 max-w-md mx-auto rotate-3 hover:rotate-0 transition-transform duration-500">
                            {/* Abstract Dashboard UI */}
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <div className="h-2 w-24 bg-muted rounded"></div>
                                        <div className="h-4 w-32 bg-primary/20 rounded"></div>
                                    </div>
                                    <div className="h-10 w-10 bg-secondary/20 rounded-full flex items-center justify-center">
                                        <TrendingUp className="text-secondary w-6 h-6" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-1 p-4 bg-muted/30 rounded-xl space-y-2">
                                        <div className="h-2 w-12 bg-muted rounded"></div>
                                        <div className="h-6 w-20 bg-primary rounded"></div>
                                    </div>
                                    <div className="flex-1 p-4 bg-muted/30 rounded-xl space-y-2">
                                        <div className="h-2 w-12 bg-muted rounded"></div>
                                        <div className="h-6 w-20 bg-secondary rounded"></div>
                                    </div>
                                </div>
                                <div className="h-32 bg-muted/20 rounded-xl flex items-end justify-between p-4 gap-2">
                                    {[40, 60, 45, 70, 55, 80, 65].map((h, i) => (
                                        <div key={i} className="w-full bg-primary/80 rounded-t-sm" style={{ height: `${h}%`, opacity: 0.5 + (i * 0.08) }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute top-10 -right-10 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
