import {
    BarChart3,
    LineChart,
    PieChart,
    Target,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface TimelineItem {
    icon: LucideIcon;
    title: string;
    period: string;
    company: string;
    location: string;
    description: string;
    skills: string[];
    isActive?: boolean;
}

const timelineItems: TimelineItem[] = [
    {
        icon: BarChart3,
        title: "Gestor Financeiro",
        period: "Atual",
        company: "Athena Office",
        location: "João Pessoa – PB",
        description: "Gestão financeira com foco em conferência, análise de faturamento e dashboards. Suporte a contas a pagar/receber e conciliação bancária.",
        skills: ["Conexa", "Odoo"],
        isActive: true
    },
    {
        icon: LineChart,
        title: "Analista Financeiro",
        period: "mar/2024 – mai/2025",
        company: "IOA IOP João Pessoa",
        location: "João Pessoa – PB",
        description: "Elaboração de DRE, controle de folha, conciliações e gestão de contas. Organização financeira de pacientes e alunos.",
        skills: ["Clinicorp", "Cerbrum"]
    },
    {
        icon: PieChart,
        title: "Assistente Financeiro",
        period: "mar/2023 – mar/2024",
        company: "Vida Escola",
        location: "João Pessoa – PB",
        description: "Controle de títulos, folha de pagamento, negociação de pendências e relatórios financeiros.",
        skills: ["Superlógica", "Bitrix"]
    },
    {
        icon: Target,
        title: "Aprendiz Auxiliar Adm.",
        period: "set/2021 – dez/2022",
        company: "Padeirão Food Service",
        location: "João Pessoa – PB",
        description: "Faturamento, conferência de notas fiscais, baixas no sistema e rotinas administrativas gerais.",
        skills: ["ERP Fusion", "TOTVS"]
    }
];

function TimelineItemComponent({ item, index }: { item: TimelineItem; index: number }) {
    const Icon = item.icon;

    return (
        <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${item.isActive ? 'is-active' : ''}`}>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${item.isActive
                    ? 'bg-secondary text-white'
                    : 'bg-slate-100'
                }`}>
                <Icon className={`w-5 h-5 ${!item.isActive ? 'text-muted-foreground' : ''}`} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-6 rounded-xl border border-border shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h4 className="font-bold text-lg text-primary">{item.title}</h4>
                    {item.isActive ? (
                        <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">Atual</span>
                    ) : (
                        <span className="text-xs text-muted-foreground">{item.period}</span>
                    )}
                </div>
                <p className="text-sm font-medium text-muted-foreground mb-2">{item.company} | {item.location}</p>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <div className="flex gap-2 flex-wrap">
                    {item.skills.map((skill, i) => (
                        <span key={i} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function TimelineSection() {
    return (
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-display font-bold text-primary mb-8 text-center">Trajetória Profissional</h3>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                    {timelineItems.map((item, index) => (
                        <TimelineItemComponent key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
