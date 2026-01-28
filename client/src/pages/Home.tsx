import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  LineChart,
  PieChart,
  Target,
  TrendingUp,
  Users,
  FileText,
  Calculator,
  Building2,
  Headphones,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, createElement } from "react";
import { useCounter } from "@/hooks/useCounter";

export default function Home() {
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  
  // Contadores animados
  const clientsCount = useCounter(500, 2000, isInView);
  const projectsCount = useCounter(200, 2000, isInView);
  const yearsCount = useCounter(3, 2000, isInView);

  // Dados dos benefícios/vantagens
  const benefits = [
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

  return (
    <Layout>
      {/* Hero Section */}
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

      {/* Sobre Mim Section */}
      <section id="sobre" className="py-20 bg-white dark:bg-slate-900">
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

        {/* Timeline de Experiência */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-primary mb-8 text-center">Trajetória Profissional</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">

              {/* Item 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-[.is-active]:bg-secondary group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-6 rounded-xl border border-border shadow-sm">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h4 className="font-bold text-lg text-primary">Gestor Financeiro</h4>
                    <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">Atual</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Athena Office | João Pessoa – PB</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Gestão financeira com foco em conferência, análise de faturamento e dashboards. Suporte a contas a pagar/receber e conciliação bancária.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">Conexa</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">Odoo</span>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <LineChart className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-6 rounded-xl border border-border shadow-sm">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h4 className="font-bold text-lg text-primary">Analista Financeiro</h4>
                    <span className="text-xs text-muted-foreground">mar/2024 – mai/2025</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">IOA IOP João Pessoa | João Pessoa – PB</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Elaboração de DRE, controle de folha, conciliações e gestão de contas. Organização financeira de pacientes e alunos.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">Clinicorp</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">Cerbrum</span>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <PieChart className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-6 rounded-xl border border-border shadow-sm">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h4 className="font-bold text-lg text-primary">Assistente Financeiro</h4>
                    <span className="text-xs text-muted-foreground">mar/2023 – mar/2024</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Vida Escola | João Pessoa – PB</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Controle de títulos, folha de pagamento, negociação de pendências e relatórios financeiros.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">Superlógica</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">Bitrix</span>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Target className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-6 rounded-xl border border-border shadow-sm">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h4 className="font-bold text-lg text-primary">Aprendiz Auxiliar Adm.</h4>
                    <span className="text-xs text-muted-foreground">set/2021 – dez/2022</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Padeirão Food Service | João Pessoa – PB</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Faturamento, conferência de notas fiscais, baixas no sistema e rotinas administrativas gerais.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">ERP Fusion</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">TOTVS</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
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
            {/* Serviço 1 - Abertura de MEI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-display font-bold text-primary">
                    Abertura de MEI
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  <p>
                    Auxílio completo na abertura do MEI, regularização e orientação inicial para começar da forma correta.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Serviço 2 - Emissão de Nota Fiscal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-display font-bold text-primary">
                    Emissão de Nota Fiscal
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  <p>
                    Suporte na emissão de NF, orientação sobre plataformas, tipos de nota e organização fiscal.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Serviço 3 - Precificação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-display font-bold text-primary">
                    Precificação
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  <p>
                    Cálculo correto de preços considerando custos, margem de lucro e posicionamento de mercado.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Serviço 4 - Estruturação Financeira */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-display font-bold text-primary">
                    Estruturação Financeira
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  <p>
                    Organização do financeiro do zero: fluxo de caixa, controle de despesas, receitas e processos.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Serviço 5 - Consultoria Contínua */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Headphones className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-display font-bold text-primary">
                    Consultoria Contínua
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  <p>
                    Acompanhamento estratégico para tomada de decisão, análise de resultados e crescimento sustentável.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Por que contratar (Experiência) */}
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
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentBenefitIndex
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

      {/* Por que contratar uma consultoria financeira */}
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
            {[
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
            ].map((benefit, index) => (
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

      {/* Depoimentos/Social Proof Section */}
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
            {/* Depoimento 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-secondary text-lg">★</span>
                ))}
              </div>
              <p className="text-primary-foreground/90 text-sm mb-4 leading-relaxed">
                "Com a consultoria do Edmilson, consegui enxergar meus números de forma clara. Em 3 meses, eliminei gastos desnecessários e aumentei meu lucro em 35%. Recomendo muito!"
              </p>
              <div>
                <p className="font-bold text-sm">Maria Silva</p>
                <p className="text-primary-foreground/70 text-xs">Consultora Financeira</p>
              </div>
            </motion.div>

            {/* Depoimento 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-secondary text-lg">★</span>
                ))}
              </div>
              <p className="text-primary-foreground/90 text-sm mb-4 leading-relaxed">
                "Não tinha controle sobre meu fluxo de caixa e vivia com medo de não conseguir pagar contas. Agora tenho uma visão clara de tudo e posso planejar meu crescimento com segurança."
              </p>
              <div>
                <p className="font-bold text-sm">João Santos</p>
                <p className="text-primary-foreground/70 text-xs">Prestador de Serviço</p>
              </div>
            </motion.div>

            {/* Depoimento 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-secondary text-lg">★</span>
                ))}
              </div>
              <p className="text-primary-foreground/90 text-sm mb-4 leading-relaxed">
                "Além de organizar meu financeiro, o Edmilson me ajudou a estruturar meu negócio de forma profissional. Hoje tenho processos claros e consigo escalar com confiança."
              </p>
              <div>
                <p className="font-bold text-sm">Ana Costa</p>
                <p className="text-primary-foreground/70 text-xs">Proprietária de E-commerce</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transformação Section (Antes e Depois) */}
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
                {[
                  "Sem controle de receitas e despesas",
                  "Não sabe se está ganhando ou perdendo dinheiro",
                  "Decisões baseadas em intuição",
                  "Despesas desnecessárias não identificadas",
                  "Precificação incorreta dos serviços",
                  "Medo constante com a situação financeira",
                  "Impossível planejar o crescimento"
                ].map((item, i) => (
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
                {[
                  "Visão clara de toda a situação financeira",
                  "Sabe exatamente quanto ganha por mês",
                  "Decisões baseadas em dados reais",
                  "Elimina gastos desnecessários",
                  "Preços calculados corretamente para lucrar",
                  "Tranquilidade e segurança financeira",
                  "Planejamento estratégico para crescimento"
                ].map((item, i) => (
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

      {/* FAQ Section */}
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
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6 py-2 mb-3 bg-white dark:bg-slate-800">
                <AccordionTrigger className="hover:text-secondary transition-colors">
                  Quanto tempo leva para ver resultados?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Os primeiros resultados aparecem entre 1 a 3 meses, dependendo da situação inicial da empresa. A organização financeira é progressiva, mas desde o primeiro mês você terá mais clareza sobre seus números e poderá tomar decisões mais assertivas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6 py-2 mb-3 bg-white dark:bg-slate-800">
                <AccordionTrigger className="hover:text-secondary transition-colors">
                  Como funciona o processo de consultoria?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Começamos com um diagnóstico detalhado da sua situação financeira atual. Depois, definimos os objetivos e criamos um plano de ação personalizado. O acompanhamento é contínuo, com reuniões periódicas para revisar resultados e ajustar estratégias conforme necessário.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6 py-2 mb-3 bg-white dark:bg-slate-800">
                <AccordionTrigger className="hover:text-secondary transition-colors">
                  Qual é o valor da consultoria?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Os valores variam conforme a complexidade do seu negócio e a modalidade de serviço. Oferecemos um diagnóstico financeiro gratuito para que você entenda suas necessidades e podamos apresentar uma proposta personalizada.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6 py-2 mb-3 bg-white dark:bg-slate-800">
                <AccordionTrigger className="hover:text-secondary transition-colors">
                  Preciso ser MEI ou posso ser PJ/Autônomo?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Trabalho com MEIs, autônomos, prestadores de serviço, pequenas empresas e até microempresas. Cada segmento tem suas particularidades, e adapto a consultoria às suas necessidades específicas. O importante é que você queira organizar e crescer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6 py-2 mb-3 bg-white dark:bg-slate-800">
                <AccordionTrigger className="hover:text-secondary transition-colors">
                  Como é feito o acompanhamento contínuo?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O acompanhamento pode ser feito via reuniões agendadas (mensais, quinzenais ou conforme necessário), análise de relatórios financeiros, orientação em decisões importantes e suporte para dúvidas pontuais. Você fica tranquilo sabendo que tem um profissional para consultar quando precisar.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border rounded-lg px-6 py-2 mb-3 bg-white dark:bg-slate-800">
                <AccordionTrigger className="hover:text-secondary transition-colors">
                  Posso fazer uma consultoria pontual?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim! Oferecemos consultorias pontuais para temas específicos como precificação, estruturação de fluxo de caixa, abertura de MEI, análise de viabilidade, entre outros. Você escolhe o tipo de serviço que melhor atende sua necessidade no momento.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA / Contato Section */}
      <section id="contato" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-muted/30 rounded-3xl p-8 md:p-12 border border-border text-center space-y-8 hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Pronto para organizar suas finanças?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Não deixe para depois o controle que seu negócio precisa hoje. Entre em contato e vamos conversar sobre como posso ajudar sua empresa a crescer de forma sustentável.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white gap-2 h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5583988880292', '_blank')}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                Chamar no WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 h-14 px-8 text-lg rounded-full hover:border-secondary/50 transition-all duration-300"
                onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=ejdirecionamentofinanceiro@gmail.com', '_blank')}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                Enviar E-mail
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
