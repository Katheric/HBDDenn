import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Heart, 
  Palette, 
  Users, 
  Zap, 
  Smile, 
  Sun, 
  Layout, 
  Star, 
  Gift,
  ChevronDown,
  Camera,
  MousePointer2,
  Command
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

const bentoItems = [
{ 
  title: "Sos un crack.", 
  subtitle: "Y se nota en todo lo que creás.", 
  icon: <Zap className="w-8 h-8" />, 
  className: "md:col-span-2 md:row-span-1 bg-zinc-900",
  img: "/images/WhatsApp Image 2026-03-12 at 13.56.45.jpeg"
},
  { 
  title: "El mejor diseñador.", 
  subtitle: "Pero sobre todo, una gran persona.", 
  icon: <Palette className="w-8 h-8" />, 
  className: "md:col-span-1 md:row-span-2 bg-white text-black",
  img: "/images/WhatsApp Image 2026-03-12 at 14.06.58.jpeg"
},
{ 
  title: "Noble de corazón.", 
  subtitle: "Gigante en talento.", 
  icon: <Heart className="w-8 h-8 text-red-500" />, 
  className: "md:col-span-1 md:row-span-1 bg-zinc-800",
  img: "/images/WhatsApp Image 2026-03-12 at 14.05.57.jpeg"
},
{ 
  title: "Brillante con las ideas.", 
  subtitle: "Bueno con la gente.", 
  icon: <Sparkles className="w-8 h-8 text-yellow-400" />, 
  className: "md:col-span-1 md:row-span-1 bg-zinc-900",
  img: "/images/WhatsApp Image 2026-03-12 at 14.07.17.jpeg"
},
{ 
  title: "Tierno en los detalles.", 
  subtitle: "Que nadie más ve.", 
  icon: <Star className="w-8 h-8 text-blue-400" />, 
  className: "md:col-span-2 md:row-span-1 bg-zinc-800 overflow-hidden",
  img: "/images/WhatsApp Image 2026-03-12 at 14.11.09.jpeg"
},
];

const qualities = [
  { text: "Divertido", sub: "Risas garantizadas", color: "from-orange-500 to-red-500" },
  { text: "Alegre", sub: "Iluminas espacios", color: "from-yellow-400 to-orange-500" },
  { text: "Acogedor", sub: "Todos somos parte", color: "from-green-400 to-emerald-600" },
  { text: "Pura Vibra", sub: "Buena energía siempre", color: "from-blue-400 to-indigo-600" },
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isGiftOpen, setIsGiftOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.8]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const rotateX = useTransform(smoothProgress, [0, 0.2], [0, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Custom Cursor for Desktop */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-50 hidden md:block mix-blend-difference"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      />

      {/* Hero Section: The "Pro" Intro */}
      <section className="relative h-[120vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity, rotateX }}
          className="relative z-10 text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold tracking-widest uppercase"
          >
            <Command className="w-3 h-3" /> Denn Jack OS v2026
          </motion.div>
          
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-none mb-6">
            CELEBRANDO <br />
            <span className="apple-gradient-text">AL CRACK.</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-2xl mx-auto leading-tight">
            Hoy celebramos a alguien que hace todo <span className="text-white font-medium italic">más bonito.</span>
          </p>
        </motion.div>

        {/* Floating Abstract Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full blur-[120px] opacity-20"
              style={{
                background: i % 2 === 0 ? "var(--color-apple-red, #ff3b30)" : "var(--color-apple-blue, #007aff)",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </section>

      {/* Bento Grid: The Visual Story */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[400px]">
          {bentoItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative rounded-[2.5rem] p-8 flex flex-col justify-end group overflow-hidden ${item.className}`}
            >
              {/* Background Image with Parallax-ish feel */}
              <motion.img 
                src={item.img} 
                alt={item.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="relative z-10">
                <div className="mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                <p className="text-zinc-400 group-hover:text-white transition-colors">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Horizontal Scroll Qualities */}
      <section className="py-40 overflow-hidden">
        <motion.div 
          className="flex gap-8 px-6"
          style={{ x: useTransform(smoothProgress, [0.3, 0.6], [0, -1000]) }}
        >
          {qualities.map((q, i) => (
            <div key={i} className="flex-shrink-0 w-[300px] md:w-[500px]">
              <div className={`h-[400px] rounded-[3rem] p-12 flex flex-col justify-between bg-gradient-to-br ${q.color}`}>
                <h4 className="text-6xl font-black italic">{q.text}</h4>
                <div>
                  <p className="text-2xl font-medium opacity-80">{q.sub}</p>
                  <div className="w-12 h-1 bg-white/30 mt-4 rounded-full" />
                </div>
              </div>
            </div>
          ))}
          {/* Repeat for continuous feel */}
          {qualities.map((q, i) => (
            <div key={`repeat-${i}`} className="flex-shrink-0 w-[300px] md:w-[500px]">
              <div className={`h-[400px] rounded-[3rem] p-12 flex flex-col justify-between bg-gradient-to-br ${q.color}`}>
                <h4 className="text-6xl font-black italic">{q.text}</h4>
                <div>
                  <p className="text-2xl font-medium opacity-80">{q.sub}</p>
                  <div className="w-12 h-1 bg-white/30 mt-4 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Disruptive Quote Section */}
      <section className="py-40 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-7xl md:text-[12rem] font-black leading-none tracking-tighter mb-12"
          >
            OTRO <br />
            <span className="apple-gradient-text">NIVEL.</span>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <p className="text-2xl md:text-4xl font-light text-zinc-400 leading-tight">
              Tu nivel visual y estético… simplemente <span className="text-white font-medium">otro nivel.</span> 
              Hacés que todos se sientan parte de algo gigante.
            </p>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden glass">
              <img 
                src="https://picsum.photos/seed/aesthetic/800/800" 
                alt="Aesthetic" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Layout className="w-20 h-20 text-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Gift Section */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-3xl mx-auto glass p-12 md:p-24 rounded-[4rem] relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isGiftOpen ? (
              <motion.div
                key="gift"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                className="cursor-pointer"
                onClick={() => setIsGiftOpen(true)}
              >
                <motion.div
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                  className="mb-8 inline-block"
                >
                  <Gift className="w-32 h-32 text-white" />
                </motion.div>
                <h2 className="text-4xl font-bold mb-4">Un pequeño detalle...</h2>
                <p className="text-zinc-400">Haz clic para abrir</p>
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="space-y-8"
              >
                <div className="flex justify-center gap-4">
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                  <Heart className="w-8 h-8 text-red-500 fill-current" />
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                </div>
                <h2 className="text-5xl md:text-7xl font-black">¡TE QUEREMOS!</h2>
                <p className="text-2xl text-zinc-300">
                  Gracias por tu talento, tu energía y por ser esa persona que ilumina cualquier espacio.
                </p>
                <button 
                  onClick={() => setIsGiftOpen(false)}
                  className="px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform"
                >
                  Cerrar con amor
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Final Reveal */}
      <section className="h-screen flex flex-col items-center justify-center px-6 text-center relative">
        <div className="absolute inset-0 apple-gradient-bg opacity-10 blur-[150px]" />
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-bold tracking-[0.5em] uppercase text-zinc-500 mb-8">The Grand Finale</p>
          <h4 className="text-7xl md:text-[15rem] font-black tracking-tighter leading-none mb-12">
            FELIZ <br />
            <span className="apple-gradient-text">CUMPLE.</span>
          </h4>
          <p className="text-4xl md:text-6xl font-bold text-white">Denn Jack</p>
          
          <div className="mt-20 flex flex-wrap justify-center gap-6">
            <div className="glass px-6 py-3 rounded-full text-sm font-medium">Creatividad ∞</div>
            <div className="glass px-6 py-3 rounded-full text-sm font-medium">Inspiración +100</div>
            <div className="glass px-6 py-3 rounded-full text-sm font-medium">Buena Vibra Max</div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="flex justify-center gap-8 mb-8 text-zinc-500">
          <Camera className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
          <MousePointer2 className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
          <Command className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
        </div>
        <p className="text-zinc-600 text-sm font-medium tracking-widest uppercase">
          © 2026 Designed for a Legend
        </p>
      </footer>
    </div>
  );
}
