/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Check, 
  X, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Target, 
  TrendingUp, 
  Instagram, 
  Users, 
  MessageSquare, 
  Smartphone,
  ShieldCheck,
  Zap,
  BookOpen,
  PieChart,
  Layout,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Image Imports
import logo from "./img/logo.png";
import perfil from "./img/perfil.jpg";
import d1 from "./img/d1.jpg";
import d2 from "./img/d2.jpg";
import d3 from "./img/d3.jpg";
import d4 from "./img/d4.png";
import d5 from "./img/d5.jpg";
import d6 from "./img/d6.jpg";
import d7 from "./img/d7.jpg";
import d8 from "./img/d8.jpg";
import d9 from "./img/d9.jpg";
import d10 from "./img/d10.jpg";
import d11 from "./img/d11.jpg";
import d12 from "./img/d12.jpg";
import d13 from "./img/d13.jpg";
import d14 from "./img/d14.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14
  ];
  const totalSlides = testimonials.length;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const itemWidth = carouselRef.current.children[0].clientWidth;
    const gap = 24; // gap-6
    const newIndex = Math.round(scrollLeft / (itemWidth + gap));
    setCurrentSlide(newIndex);
  };

  const scrollLeftBtn = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0].clientWidth;
      carouselRef.current.scrollBy({ left: -(itemWidth + 24), behavior: 'smooth' });
    }
  };

  const scrollRightBtn = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0].clientWidth;
      carouselRef.current.scrollBy({ left: (itemWidth + 24), behavior: 'smooth' });
    }
  };

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0].clientWidth;
      carouselRef.current.scrollTo({ left: index * (itemWidth + 24), behavior: 'smooth' });
    }
  };

  const handleCTA = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5500000000000?text=${encoded}`, '_blank');
  };

  return (
    <div className="min-h-screen selection:bg-brand selection:text-ink">
      <h2 className="sr-only">Prospecção Insana 2.0 — Página de vendas da consultoria comercial jurídica com Rodrigo</h2>

      {/* TOPBAR MARQUEE */}
      <div className="bg-ink-2 border-brand-border py-4 border-b overflow-hidden relative flex">
        <div className="flex w-max animate-marquee">
          <div className="flex items-center gap-10 px-5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-10">
                <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-brand whitespace-nowrap">
                  Consultoria Comercial Jurídica
                </span>
                <span className="w-1.5 h-1.5 bg-brand-dim border border-brand-border rotate-45 shrink-0" />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-10 px-5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-10">
                <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-brand whitespace-nowrap">
                  Consultoria Comercial Jurídica
                </span>
                <span className="w-1.5 h-1.5 bg-brand-dim border border-brand-border rotate-45 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative bg-ink-2 pt-16 pb-16 px-6 text-center border-b border-brand-border overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(88,224,157,0.07),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[760px] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex justify-center"
          >
            <img 
              src={logo} 
              alt="Prospecção Insana Logo" 
              className="h-16 sm:h-20 w-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block border border-brand-border text-brand text-[11px] font-bold tracking-[0.16em] uppercase px-[18px] py-1.5 mb-8"
          >
            Vagas limitadas · 3 meses · 6 encontros
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[clamp(24px,5vw,52px)] font-black leading-[1.1] tracking-tight mb-8 uppercase"
          >
            <span className="block sm:whitespace-nowrap">Seu escritório precisa</span>
            <span className="block sm:whitespace-nowrap">de um <em className="text-brand not-italic">comercial</em>,</span>
            <span className="block sm:whitespace-nowrap">não de mais leads.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-serif italic text-[clamp(16px,2vw,20px)] text-cream-2 mb-10 leading-relaxed max-w-[680px] mx-auto"
          >
            Em 3 meses, você sai com funil montado, CRM rodando, scripts testados e um processo que fecha contratos sem depender de sorte.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-brand-dim border border-brand-border border-l-4 border-l-brand p-5 text-left mb-10 mx-auto text-[15px] leading-relaxed"
          >
            <strong className="text-brand font-bold">Não adianta gerar lead se você não sabe fechar.</strong><br />
            Aqui você aprende a transformar atendimento em faturamento — com método, dados reais e implementação obrigatória a cada encontro.
          </motion.div>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleCTA('Quero falar com o Rodrigo pelo WhatsApp sobre a consultoria Prospecção Insana 2.0')}
            className="w-full sm:w-auto inline-flex justify-center items-center bg-brand hover:bg-brand-lt text-ink text-[14px] sm:text-[17px] font-extrabold tracking-wider uppercase px-6 sm:px-14 py-4 sm:py-5.5 transition-colors cursor-pointer shadow-xl max-w-full"
          >
            Quero minha vaga no WhatsApp →
          </motion.button>
          
          <p className="mt-4 text-[13px] text-white font-medium tracking-wide">
            Clique e fale diretamente com Rodrigo
          </p>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-ink-3 border-y border-muted-15 py-10 sm:py-12 px-6">
        <div className="max-w-[860px] mx-auto grid grid-cols-1 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-muted-15">
          <div className="text-center pt-0 pb-8 sm:py-0">
            <div className="text-4xl sm:text-[44px] font-black text-brand tracking-tight mb-1">6</div>
            <div className="text-[13px] text-cream-2 font-semibold tracking-wide">Encontros ao vivo</div>
          </div>
          <div className="text-center py-8 sm:py-0">
            <div className="text-4xl sm:text-[44px] font-black text-brand tracking-tight mb-1">3</div>
            <div className="text-[13px] text-cream-2 font-semibold tracking-wide">Meses de consultoria</div>
          </div>
          <div className="text-center py-8 sm:py-0">
            <div className="text-4xl sm:text-[44px] font-black text-brand tracking-tight mb-1">7</div>
            <div className="text-[13px] text-cream-2 font-semibold tracking-wide">Pilares do método</div>
          </div>
          <div className="text-center pt-8 pb-0 sm:py-0">
            <div className="text-4xl sm:text-[44px] font-black text-brand tracking-tight mb-1">90'</div>
            <div className="text-[13px] text-cream-2 font-semibold tracking-wide">Por sessão</div>
          </div>
        </div>
      </div>

      {/* DIAGNOSTIC */}
      <section className="py-20 lg:py-24 px-6">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-brand mb-3">O diagnóstico</p>
            <h2 className="text-[24px] md:text-[36px] font-black leading-tight tracking-tight uppercase mb-6">
              <span className="block">Você não tem</span>
              <span className="block">problema de lead.</span>
              <span className="block">Você tem problema</span>
              <span className="block text-brand">de processo.</span>
            </h2>
            
            <div className="border-l-4 border-l-brand-red font-serif italic text-[17px] leading-relaxed pl-5 mb-8 text-cream-2 border-brand-red/30 py-1 text-left">
              "A maioria dos advogados acredita que o problema está na falta de leads. Mas a verdade é outra — o problema está no comercial."
            </div>
          </div>
          
          <div className="bg-ink-2 border border-muted-15 p-8 sm:p-10">
            <p className="text-[14px] font-semibold text-cream mb-6 uppercase tracking-wider">
              Se você se reconhece abaixo, o problema não está no mercado:
            </p>
            
            <motion.ul 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                "Lead chega, você atende, mas ele some depois da reunião",
                "Você depende de indicação e não sabe como controlar o volume",
                "Não sabe quantos leads entram, quantos viram reuniões, quantos fecham",
                "Manda valor pelo WhatsApp e o cliente diz \"vou pensar\"",
                "Faz follow-up uma ou duas vezes e desiste",
                "O mês fecha bem ou mal — e você não sabe exatamente por quê"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  variants={fadeIn}
                  className="flex gap-4 items-start text-[14px] text-cream-2 leading-relaxed"
                >
                  <X className="text-brand-red w-5 h-5 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FOR WHOM */}
      <section className="py-20 lg:py-24 px-6 bg-ink-2">
        <div className="max-w-[1000px] mx-auto text-center mb-12">
          <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-brand mb-3">Para quem é</p>
          <h2 className="text-[24px] md:text-[36px] font-black leading-tight tracking-tight uppercase mb-6">
            Essa consultoria é para você se:
          </h2>
        </div>
        
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-muted-15 border-collapse">
          {[
            "Você quer parar de improvisar no comercial e ter um processo que funcione todo mês.",
            "Você já tem leads chegando mas não consegue converter o suficiente para fechar.",
            "Você quer construir um funil de prospecção sustentável e que evite sazonalidade.",
            "Você quer saber quantos contatos precisam entrar para gerar previsibilidade no caixa.",
            "Você está pronto para colocar a mão na massa no intervalo entre as sessões.",
            "Você quer um playbook validado e pronto para delegar quando a equipe crescer."
          ].map((item, i) => (
            <div key={i} className="bg-ink-2 p-8 flex flex-col gap-4 hover:bg-ink-3 transition-colors duration-300">
              <div className="w-10 h-10 bg-brand-dim rounded-full flex items-center justify-center border border-brand-border mb-2">
                <Check className="text-brand w-5 h-5" />
              </div>
              <p className="text-[14px] text-cream-2 leading-relaxed font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-24 overflow-hidden relative">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div className="text-center md:text-left">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-brand mb-3">Resultados reais</p>
              <h2 className="text-[24px] md:text-[36px] font-black leading-tight tracking-tight uppercase">
                O que dizem os escritórios<br/>que já passaram pelo método
              </h2>
            </div>
            {/* Carousel Controls */}
            <div className="flex justify-center md:justify-end gap-3 mt-4 md:mt-0">
              <button 
                onClick={scrollLeftBtn}
                className="w-12 h-12 flex items-center justify-center border border-brand text-brand hover:bg-brand hover:text-ink transition-colors bg-ink-2"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={scrollRightBtn}
                className="w-12 h-12 flex items-center justify-center border border-brand text-brand hover:bg-brand hover:text-ink transition-colors bg-ink-2"
                aria-label="Próximo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="max-w-[1000px] mx-auto px-6 sm:px-6">
          <div className="relative">
            <div 
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((imgSrc, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(imgSrc)}
                  className="flex-none w-[80vw] sm:w-[350px] md:w-[calc(33.333%-16px)] bg-ink-3 border border-muted-15 aspect-[4/5] sm:aspect-square flex items-center justify-center relative overflow-hidden group snap-start cursor-pointer hover:border-brand transition-colors"
                >
                  <img 
                    src={imgSrc} 
                    alt={`Depoimento ${i + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-ink-3/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-brand font-bold uppercase tracking-wider text-sm bg-ink-2 px-4 py-2 rounded shadow-xl">Ampliar</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 mb-2">
            {[...Array(totalSlides)].map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${currentSlide === i ? 'bg-brand' : 'bg-muted-50'}`}
                aria-label={`Ir para o slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* METHOD */}
      <section className="py-20 lg:py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="max-w-[800px] mx-auto text-center mb-12 lg:mb-16">
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-brand mb-3">O método</p>
            <h2 className="text-[24px] md:text-[36px] font-black leading-tight tracking-tight uppercase mb-4">
              Os 7 pilares da consultoria
            </h2>
            <p className="text-[15px] text-cream-2 leading-relaxed">
              Cada pilar tem um lugar no processo. Nenhum funciona bem sem o anterior.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {/* Coluna 1: 4 Pilares */}
            <div className="space-y-0">
              {[
                { id: "01", name: "Mentalidade Comercial", desc: "A base. Sem isso, nenhuma técnica dura. Identificação das crenças que travam o comercial e construção dos 3 pilares: Atitude, Consistência e Confiança." },
                { id: "02", name: "Prospecção Inteligente", desc: "Leads certos, canal certo, abordagem certa. Prospecção ativa e passiva com Social Selling no Instagram e primeiro contato estruturado." },
                { id: "03", name: "Conversão no WhatsApp", desc: "Primeira mensagem, qualificação e avanço para reunião. Três modelos para testar e script de qualificação com 2 a 3 perguntas que filtram quem tem perfil real." },
                { id: "04", name: "Follow-up Estratégico", desc: "Cadência que mantém o lead vivo sem parecer insistente. Quatro tipos de mensagem, frequência certa e critério de encerramento sem queimar o lead." }
              ].map((pilar) => (
                <motion.div 
                  key={pilar.id} 
                  variants={fadeIn}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="flex gap-5 py-6 border-b border-muted-15 md:last:border-b-0 items-start"
                >
                  <div className="text-4xl font-black text-brand-dim min-w-[48px] leading-none font-serif">{pilar.id}</div>
                  <div>
                    <h3 className="text-base font-bold text-cream mb-1 uppercase tracking-wider">{pilar.name}</h3>
                    <p className="text-[14px] text-cream-2 leading-relaxed">{pilar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Coluna 2: 3 Pilares */}
            <div className="space-y-0">
              {[
                { id: "05", name: "Reunião de Fechamento", desc: "Estrutura que transforma diagnóstico em contrato. SPIN Selling aplicado ao nicho, apresentação de honorários sem hesitar e simulação ao vivo." },
                { id: "06", name: "CRM e Processo", desc: "Organização, visibilidade e controle total do funil. CRM configurado com os dados reais do mentorado e processo documentado para delegar." },
                { id: "07", name: "Escala e Crescimento", desc: "Pós-venda ativo, indicações dentro da OAB, reativação de base, uso de IA no comercial e plano de crescimento para os próximos 90 dias." }
              ].map((pilar) => (
                <motion.div 
                  key={pilar.id} 
                  variants={fadeIn}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="flex gap-5 py-6 border-b border-muted-15 last:border-b-0 items-start"
                >
                  <div className="text-4xl font-black text-brand-dim min-w-[48px] leading-none font-serif">{pilar.id}</div>
                  <div>
                    <h3 className="text-base font-bold text-cream mb-1 uppercase tracking-wider">{pilar.name}</h3>
                    <p className="text-[14px] text-cream-2 leading-relaxed">{pilar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SESSIONS */}
      <section className="py-20 lg:py-24 px-6 bg-ink-2/50 backdrop-blur-sm">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-brand mb-3 text-center">Os 6 encontros</p>
          <h2 className="text-[24px] md:text-[36px] font-black leading-tight tracking-tight uppercase mb-12 text-center">
            O que acontece em cada sessão
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mês 1 */}
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span className="text-[11px] font-bold tracking-[0.14em] uppercase py-1.5 px-4 bg-brand-red/10 text-brand-red/80 border border-brand-red/40">
                  Mês 1 — Base
                </span>
                <div className="flex-1 h-px bg-muted-15" />
              </div>
              
              <div className="space-y-4">
                <EncontroCard 
                  num="01" 
                  mes="1" 
                  sem="1" 
                  title="Mentalidade + Estrutura Comercial"
                  objective="Construir a base — mentalidade correta, funil estruturado e diagnóstico honesto do escritório. Sem isso nenhuma técnica pega."
                  tags={["Advogado técnico x estratégico", "3 crenças que travam o comercial", "6 etapas do funil", "Diagnóstico comercial completo"]}
                  delivery="Mapa do funil atual + gargalos identificados"
                />
                <EncontroCard 
                  num="02" 
                  mes="1" 
                  sem="3" 
                  title="Prospecção + Conversão Inicial"
                  objective="Gerar leads qualificados e aumentar a taxa de resposta no primeiro contato com script e abordagem testados."
                  tags={["Prospecção ativa x passiva", "Social Selling no Instagram", "3 modelos de 1ª mensagem", "Script de qualificação"]}
                  delivery="Script inicial personalizado para o nicho"
                />
              </div>
            </div>

            {/* Mês 2 */}
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span className="text-[11px] font-bold tracking-[0.14em] uppercase py-1.5 px-4 bg-brand-orange/10 text-brand-orange/80 border border-brand-orange/40">
                  Mês 2 — Conversão
                </span>
                <div className="flex-1 h-px bg-muted-15" />
              </div>
              
              <div className="space-y-4">
                <EncontroCard 
                  num="03" 
                  mes="2" 
                  sem="1" 
                  title="Follow-up que Gera Resposta"
                  objective="Eliminar a perda de leads por omissão com cadência profissional, tipos de mensagem estratégicos e reativação de frios."
                  tags={["4 tipos de mensagem", "Cadência estratégica", "Reativação de leads frios", "Prova social no follow-up"]}
                  delivery="Cadência de follow-up com 4 modelos prontos"
                />
                <EncontroCard 
                  num="04" 
                  mes="2" 
                  sem="3" 
                  title="Reunião que Fecha Contrato"
                  objective="Aumentar drasticamente a taxa de fechamento com estrutura que o mentorado controla do início ao fim — da escuta ao contrato assinado."
                  tags={["SPIN Selling aplicado ao nicho", "Dor → Solução → Confiança", "Honorários sem hesitar", "Simulação ao vivo"]}
                  delivery="Script de reunião + simulação com feedback"
                />
              </div>
            </div>

            {/* Mês 3 */}
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span className="text-[11px] font-bold tracking-[0.14em] uppercase py-1.5 px-4 bg-brand/10 text-brand border border-brand/40">
                  Mês 3 — Estrutura
                </span>
                <div className="flex-1 h-px bg-muted-15" />
              </div>
              
              <div className="space-y-4">
                <EncontroCard 
                  num="05" 
                  mes="3" 
                  sem="1" 
                  title="CRM + Processo Comercial"
                  objective="Dar controle total ao comercial com CRM operando, pipeline visível e processo documentado para delegar sem perder qualidade."
                  tags={["7 campos obrigatórios do CRM", "Pipeline de vendas", "SDR x Closer", "Método das 4 semanas"]}
                  delivery="CRM configurado + processo documentado"
                />
                <EncontroCard 
                  num="06" 
                  mes="3" 
                  sem="3" 
                  time="120"
                  title="Escala e Plano de 90 Dias"
                  objective="Consolidar os resultados dos 3 meses, criar previsibilidade de receita e montar o plano de crescimento para os próximos 90 dias."
                  tags={["Análise dos 3 meses", "Metas reversas", "Pós-venda ativo", "IA no comercial", "Plano 90 dias"]}
                  delivery="Playbook + Painel de indicadores + Plano de ação"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CTA INTERMEDIÁRIO */}
      <section className="py-20 lg:py-24 px-6 text-center">
        <div className="max-w-[680px] mx-auto">
          <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-brand mb-3">Vagas limitadas</p>
          <h2 className="text-[24px] md:text-[36px] font-black leading-tight tracking-tight uppercase mb-6">
            Pronto para parar de improvisar?
          </h2>
          <p className="text-[16px] text-cream-2 leading-relaxed mb-10">
            Cada vaga é acompanhada individualmente. Por isso o número de mentorados por ciclo é extremamente reduzido.
          </p>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleCTA('Quero garantir minha vaga na consultoria Prospecção Insana 2.0')}
            className="w-full sm:w-auto inline-flex justify-center items-center bg-brand hover:bg-brand-lt text-ink text-[14px] sm:text-[16px] font-extrabold tracking-widest uppercase px-6 sm:px-12 py-4 sm:py-5 transition-colors cursor-pointer shadow-xl max-w-full"
          >
            Garantir minha vaga →
          </motion.button>
          <p className="mt-4 text-[13px] text-zinc-500 tracking-wider font-medium">
            WhatsApp · Resposta em até 24h
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* BONUS */}
      <section className="py-20 lg:py-24 px-6 bg-ink-2">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-brand mb-3">Bônus incluídos</p>
            <h2 className="text-[24px] md:text-[36px] font-black leading-tight tracking-tight uppercase mb-4">
              O que você recebe<br/>ao longo dos 3 meses
            </h2>
            <p className="text-[15px] text-cream-2 leading-relaxed max-w-[600px] mx-auto">
              Tudo construído nos encontros e personalizado para o seu nicho. Não são modelos genéricos.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: MessageSquare, title: "Scripts de WhatsApp", desc: "Primeiro contato em 3 modelos testados, qualificação e reativação de leads frios — adaptados ao seu nicho." },
              { icon: Calendar, title: "Cadência de follow-up completa", desc: "4 tipos de mensagem com frequência, sequência e critério de encerramento definidos." },
              { icon: Users, title: "Script de reunião personalizado", desc: "Estrutura das 4 etapas com perguntas SPIN adaptadas ao seu nicho e ao seu perfil de cliente." },
              { icon: Layout, title: "Modelo de CRM configurado", desc: "Planilha ou sistema com campos, status, rotina diária e filtros de temperatura dos leads." },
              { icon: BookOpen, title: "Playbook comercial completo", desc: "Documento com processo, scripts, cadência e indicadores — pronto para usar e delegar." }
            ].map((bonus, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="bg-ink p-8 border border-muted-15 flex flex-col items-center text-center hover:border-brand-border transition-colors group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="w-12 h-12 rounded-full bg-brand-dim border border-brand-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <bonus.icon className="text-brand w-5 h-5" />
                </div>
                <h3 className="text-[16px] font-extrabold tracking-tight text-cream mb-3 uppercase">{bonus.title}</h3>
                <p className="text-[14px] text-cream-2 leading-relaxed">{bonus.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FINAL RESULT */}
      <section className="py-20 lg:py-24 px-6 relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-brand mb-3">Resultado final</p>
            <h2 className="text-[24px] md:text-[36px] font-black leading-[1.05] tracking-tight uppercase mb-6">
              O que você construirá <br className="hidden sm:block"/><span className="text-brand">em 90 dias</span>
            </h2>
            <div className="font-serif italic text-[18px] text-cream leading-relaxed border-l-4 border-brand pl-6 my-8 text-left">
              "Você não terá apenas mais leads. Você terá um comercial estruturado, previsível e lucrativo."
            </div>
          </div>
          
          <div className="bg-ink-3 border border-muted-15 p-8 sm:p-10 relative">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand to-transparent" />
            
            <div className="space-y-5">
              {[
                "Um comercial estruturado com funil, CRM e processo documentado",
                "Scripts para cada etapa — do primeiro contato ao contrato assinado",
                "Taxa de conversão maior com menos desperdício de leads",
                "Indicadores que mostram onde o processo funciona e onde quebra",
                "Playbook pronto para delegar quando vier o crescimento",
                "Previsibilidade: você saberá quantos contatos geram X contratos"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start text-[15px] font-medium text-cream-2 leading-relaxed">
                  <Check className="w-5 h-5 text-brand shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ABOUT US */}
      <section className="py-20 lg:py-24 px-6">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-ink-3 border border-muted-15 relative overflow-hidden group">
            <img 
              src={perfil} 
              alt="Rodrigo - Consultoria Comercial Jurídica" 
              className="w-full h-full object-cover object-top transition-all duration-700 opacity-90 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-[20px] font-black text-brand uppercase tracking-wider">Rodrigo</div>
              <div className="text-[13px] text-cream-2 font-medium">Especialista em Vendas Jurídicas</div>
            </div>
          </div>
          
          <div className="text-center lg:text-left">
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-brand mb-3">Quem está por trás</p>
            <h2 className="text-[22px] md:text-[28px] lg:text-[24px] xl:text-[28px] font-black leading-[1.15] tracking-tight uppercase mb-6 text-center lg:text-left">
              <span className="block whitespace-nowrap">Ajudando a advocacia</span>
              <span className="block whitespace-nowrap">a vender como negócio.</span>
            </h2>
            <div className="space-y-4 text-[15px] font-medium text-cream-2 leading-relaxed text-left">
              <p>
                O mercado jurídico mudou, mas a maioria dos escritórios continua presa a dogmas que impedem o crescimento comercial. 
              </p>
              <p>
                Minha missão não é te ensinar a fazer dancinha ou produzir conteúdo de topo de funil. O foco aqui é **venda bruta**. É transformar os contatos que já chegam até você em honorários garantidos na conta, respeitando sempre o provimento da OAB.
              </p>
              <p>
                Depois de analisar dezenas de escritórios, padronizei o que realmente funciona em reuniões e WhatsApp. É exatamente esse método validado que vou implementar pessoalmente no seu comercial.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10 p-6 border border-brand-border bg-brand-dim/30">
              <div>
                <div className="text-3xl font-black text-brand tracking-tight mb-1">+150</div>
                <div className="text-[12px] font-semibold text-cream-2 uppercase tracking-wide">Escritórios atendidos</div>
              </div>
              <div>
                <div className="text-3xl font-black text-brand tracking-tight mb-1">R$ 5M+</div>
                <div className="text-[12px] font-semibold text-cream-2 uppercase tracking-wide">Honorários gerados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* COMMITMENT */}
      <section className="py-20 lg:py-24 px-6 bg-ink-2">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-brand mb-3">Como funciona</p>
            <h2 className="text-[24px] md:text-[36px] font-black leading-tight tracking-tight uppercase mb-4">
              O compromisso das duas partes
            </h2>
            <p className="text-[15px] text-cream-2 leading-relaxed max-w-[600px] mx-auto">
              A consultoria funciona porque é uma via de mão dupla. Sem comprometimento dos dois lados, o processo não rende.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-brand/20 bg-ink p-8 sm:p-10 hover:border-brand/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center mb-6">
                <Users className="text-brand w-5 h-5" />
              </div>
              <h3 className="text-[16px] font-black tracking-widest uppercase text-cream mb-6">Do mentorado</h3>
              <ul className="space-y-4">
                {[
                  "Presença nos encontros semanais com a câmera aberta",
                  "Mão na massa: execução das tarefas ao final de cada sessão",
                  "Transparência: trazer dados reais (leads, reuniões, fechamentos)",
                  "Coragem para testar os novos scripts sem medo no dia a dia"
                ].map((item, i) => (
                  <li key={i} className="text-[14px] text-cream-2 leading-relaxed flex gap-3 font-medium">
                    <span className="text-brand mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="border border-muted-15 bg-ink-3 p-8 sm:p-10 hover:border-muted-50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-muted-15 flex items-center justify-center mb-6">
                <Target className="text-cream w-5 h-5" />
              </div>
              <h3 className="text-[16px] font-black tracking-widest uppercase text-cream mb-6">Do instrutor</h3>
              <ul className="space-y-4">
                {[
                  "Chegar tecnicamente preparado com o contexto único do seu escritório",
                  "Adaptar o passo a passo ao que os seus números e realidade mostram",
                  "Responder dúvidas no WhatsApp entre encontros com velocidade",
                  "Dar feedback direto e reto — o objetivo aqui é resultado, não conforto e ego"
                ].map((item, i) => (
                  <li key={i} className="text-[14px] text-cream-2 leading-relaxed flex gap-3 font-medium">
                    <span className="text-muted-50 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-ink-2 border-t-4 border-brand pt-20 pb-20 px-6 text-center">
        <div className="max-w-[680px] mx-auto">
          <motion.h2 
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-[clamp(30px,5vw,56px)] font-black uppercase tracking-tight leading-[1.05] mb-4"
          >
            Pronto para fechar <em className="text-brand not-italic">mais contratos?</em>
          </motion.h2>
          
          <p className="font-serif italic text-[17px] text-cream-2 mb-10 max-w-[500px] mx-auto leading-relaxed">
            Consultoria não é assistir aula. É colocar em prática, errar com acompanhamento, ajustar com método e fechar com consistência.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCTA('Quero entrar em contato pelo WhatsApp e garantir minha vaga na consultoria Prospecção Insana 2.0 com o Rodrigo')}
            className="w-full sm:w-auto inline-flex justify-center items-center bg-brand hover:bg-brand-lt text-ink text-[14px] sm:text-[17px] font-black tracking-wider uppercase px-6 sm:px-14 py-4 sm:py-5.5 transition-colors cursor-pointer shadow-2xl max-w-full leading-tight text-center"
          >
             Falar com Rodrigo no WhatsApp →
          </motion.button>
          
          <p className="mt-4 text-[13px] text-zinc-500 font-medium tracking-wide">
            6 encontros · 3 meses · Implementação real
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink border-t border-muted-15 py-10 px-6 text-center text-[12px] text-zinc-500 font-medium tracking-[0.06em] leading-loose">
        © 2026 Prospecção Insana 2.0 · Rodrigo · Consultoria Comercial Jurídica<br />
        Todas as estratégias respeitam o Código de Ética da OAB
      </footer>

      {/* Image Modal overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out"
          >
            <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 sm:-top-4 sm:-right-4 w-10 h-10 bg-brand text-ink flex items-center justify-center rounded-full shadow-2xl hover:bg-brand-lt transition-colors z-10 cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage} 
                className="max-w-full max-h-full object-contain rounded-sm"
                alt="Depoimento ampliado" 
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function EncontroCard({ num, mes, sem, title, objective, tags, delivery, time = "90" }: any) {
  return (
    <motion.div 
      variants={fadeIn}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="border border-muted-15 p-5 hover:border-brand-border transition-colors bg-ink-2/50 backdrop-blur-sm group flex flex-col h-full"
    >
      <div className="text-[10px] font-bold tracking-[0.16em] text-brand mb-2 group-hover:text-brand-lt transition-colors">
        ENC. {num} · SEM. {sem} · {time}M
      </div>
      <h3 className="text-[17px] font-extrabold text-cream mb-2 uppercase tracking-tight leading-snug">
        {title}
      </h3>
      <p className="text-[13px] text-cream-2 leading-relaxed mb-4 flex-1">
        {objective}
      </p>
      
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((tag: string, i: number) => (
          <span key={i} className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 border border-muted-15 px-2 py-0.5">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="text-[12px] text-brand mt-auto pt-3 border-t border-muted-15">
        <span className="font-bold">ENTREGÁVEL:</span> {delivery}
      </div>
    </motion.div>
  );
}
