import { ArrowRight } from "lucide-react";

export default function AboutSection() {
    return (
        <div className="container mx-auto px-4 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 relative">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted relative group">
                        <img
                            src="/images/edmilson-profissional.jpg"
                            alt="Edmilson Junior - Consultor Financeiro"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="font-display font-bold text-2xl">Edmilson Junior</p>
                            <p className="text-white/80">Consultor Financeiro</p>
                        </div>
                    </div>
                    {/* Decorative Pattern */}
                    <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-secondary/30 rounded-2xl"></div>
                </div>

                <div className="order-1 md:order-2 space-y-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        Quem sou eu
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                        Experiência sólida para guiar seu negócio
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            Sou profissional da área financeira com atuação prática na organização, estruturação e gestão financeira de empresas de diferentes segmentos. Minha trajetória é marcada por lidar diretamente com rotinas financeiras, análise de dados e apoio estratégico à tomada de decisão.
                        </p>
                        <p>
                            Minha vivência me permitiu acompanhar de perto os desafios de MEIs e pequenas empresas: falta de controle, dificuldade na precificação e decisões sem base em números.
                        </p>
                        <p>
                            <strong>Meu propósito é claro:</strong> traduzir o financeiro de forma simples, sem "economês", para que você entenda seus números e tenha segurança para crescer.
                        </p>
                    </div>

                    <div className="pt-4">
                        <a
                            href="https://www.linkedin.com/in/edmilson-junior-a11629150"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors"
                        >
                            Ver perfil completo no LinkedIn <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
