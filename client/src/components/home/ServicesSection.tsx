import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    FileText,
    Calculator,
    BarChart3,
    Building2,
    Headphones,
} from "lucide-react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
}

const services: Service[] = [
    {
        icon: FileText,
        title: "Abertura de MEI",
        description: "Auxílio completo na abertura do MEI, regularização e orientação inicial para começar da forma correta."
    },
    {
        icon: Calculator,
        title: "Emissão de Nota Fiscal",
        description: "Suporte na emissão de NF, orientação sobre plataformas, tipos de nota e organização fiscal."
    },
    {
        icon: BarChart3,
        title: "Precificação",
        description: "Cálculo correto de preços considerando custos, margem de lucro e posicionamento de mercado."
    },
    {
        icon: Building2,
        title: "Estruturação Financeira",
        description: "Organização do financeiro do zero: fluxo de caixa, controle de despesas, receitas e processos."
    },
    {
        icon: Headphones,
        title: "Consultoria Contínua",
        description: "Acompanhamento estratégico para tomada de decisão, análise de resultados e crescimento sustentável."
    }
];

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
        >
            <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-display font-bold text-primary">
                        {service.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                    <p>{service.description}</p>
                </CardContent>
            </Card>
        </motion.div>
    );
}

export default function ServicesSection() {
    return (
        <section id="servicos" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16 space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                        Serviços
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Soluções financeiras pensadas para quem precisa de organização, segurança e crescimento.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
}
