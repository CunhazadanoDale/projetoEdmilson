import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ContactSection() {
    return (
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
    );
}
