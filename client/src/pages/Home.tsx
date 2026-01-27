import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Headphones
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium">
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
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Serviços
            </h2>
            <p className="text-muted-foreground text-lg">
              Soluções financeiras pensadas para quem precisa de organização, segurança e crescimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Serviço 1 - Abertura de MEI */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
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

            {/* Serviço 2 - Emissão de Nota Fiscal */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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

            {/* Serviço 3 - Precificação */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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

            {/* Serviço 4 - Estruturação Financeira */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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

            {/* Serviço 5 - Consultoria Contínua */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-3">Direcionamento Estratégico</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                Análise rápida da realidade do negócio para indicar caminhos eficientes de organização e crescimento.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-3">Decisões com Números</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                Transformo dados em informações práticas para corrigir falhas e dar segurança na tomada de decisão.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-3">Processos Simples</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                Aplicação de processos claros e organizados, evitando retrabalho e erros, mesmo sem conhecimento técnico.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-3">Base para Crescimento</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                Estruturação financeira para crescer de forma sustentável, com visão de futuro e tranquilidade na gestão.
              </p>
            </div>
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
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Por que contratar uma consultoria financeira?
            </h2>
            <p className="text-muted-foreground text-lg">
              Transforme a forma como você gerencia seu negócio e conquiste resultados reais.
            </p>
          </div>

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
              <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contato Section */}
      <section id="contato" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-muted/30 rounded-3xl p-8 md:p-12 border border-border text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Pronto para organizar suas finanças?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Não deixe para depois o controle que seu negócio precisa hoje. Entre em contato e vamos conversar sobre como posso ajudar sua empresa a crescer de forma sustentável.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white gap-2 h-14 px-8 text-lg rounded-full"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5583988880292', '_blank')}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                Chamar no WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 h-14 px-8 text-lg rounded-full"
                onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=ejdirecionamentofinanceiro@gmail.com', '_blank')}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                Enviar E-mail
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
