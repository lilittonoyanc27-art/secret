import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, ArrowLeft,
  Sparkles, Zap, MessageSquare,
  Volume2, Ear, User
} from 'lucide-react';
import { ERNESTO_GRAMMAR } from './vocabData';

export default function VocabView({ onBack, onPlay }: { onBack: () => void, onPlay: () => void }) {
  const sections = [
    {
      verb: "HABLAR / DECIR",
      title: "ԽՈՍԵԼ vs ԱՍԵԼ",
      color: "amber",
      items: [
        { icon: <MessageSquare />, title: "HABLAR", desc: "Գործընթացը (խոսել)։ Yo hablo español." },
        { icon: <User />, title: "DECIR", desc: "Բովանդակությունը (ասել)։ Yo digo la verdad." }
      ]
    },
    {
      verb: "OÍR / ESCUCHAR",
      title: "ԼՍԵԼ vs ԼՍԵԼ",
      color: "indigo",
      items: [
        { icon: <Volume2 />, title: "OÍR", desc: "Ֆիզիկական (լսել ձայնը)։ Oigo un ruido." },
        { icon: <Ear />, title: "ESCUCHAR", desc: "Ուշադիր (ունկնդրել)։ Escucho música." }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 pb-32 pt-8 space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <div className="inline-flex p-3 bg-amber-100 rounded-2xl shadow-inner text-amber-600">
           <BookOpen className="w-8 h-8" />
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
          ԷՌՆԵՍՏՈՅԻ <br/> ԳԱՂՏՆԻՔԸ
        </h2>
        <p className="text-slate-500 font-bold italic max-w-xl mx-auto uppercase tracking-widest text-[10px] sm:text-xs">
          HABLAR, DECIR, OÍR & ESCUCHAR
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((section, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[32px] sm:rounded-[48px] p-6 sm:p-8 border border-slate-100 shadow-2xl space-y-6 sm:space-y-8"
          >
            <div className="text-center space-y-1">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 italic uppercase">{section.title}</h3>
              <div className="h-1 w-12 bg-slate-100 mx-auto rounded-full" />
            </div>

            <div className="space-y-4">
              {section.items.map((item, j) => (
                <div key={j} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-slate-50 rounded-2xl sm:rounded-3xl group hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
                  <div className={`shrink-0 p-2 sm:p-3 rounded-xl sm:rounded-2xl ${i === 0 ? 'bg-amber-100 text-amber-600' : 'bg-indigo-100 text-indigo-600'}`}>
                    {item.icon}
                  </div>
                  <div className="space-y-1 overflow-hidden">
                    <p className="font-black text-slate-900 uppercase italic text-lg sm:text-xl truncate">{item.title}</p>
                    <p className="text-[12px] sm:text-sm font-bold text-slate-400 italic leading-snug break-words">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Box */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-900 text-white rounded-[48px] p-10 space-y-8 relative overflow-hidden shadow-2xl"
      >
        <Sparkles className="absolute top-4 right-4 text-amber-400 w-12 h-12 opacity-10" />
        <div className="text-center space-y-2">
           <h4 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500">Ինչպես հիշել</h4>
           <p className="text-2xl font-black italic uppercase leading-tight text-white">
             Ուշադիր եղիր <span className="text-amber-400">Էռնեստոյի</span> յուրաքանչյուր բառին
           </p>
        </div>
      </motion.div>

      {/* CTA */}
      <section className="bg-amber-500 rounded-[48px] p-8 sm:p-12 text-white text-center space-y-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
           <Zap className="w-32 h-32 rotate-12" />
        </div>
        <div className="relative z-10 space-y-4">
          <h3 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tighter leading-tight">Պատրա՞ստ ես խաղալ</h3>
          <p className="text-amber-100 font-bold opacity-80 italic uppercase tracking-widest text-xs">Բացիր գաղտնի սնդուկը արկածային խաղում:</p>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onPlay}
            className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black italic uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            ՍԿՍԵԼ ԽԱՂԸ
          </button>
          <button 
            onClick={onBack}
            className="bg-amber-400 text-white border border-amber-300 px-10 py-5 rounded-2xl font-black italic uppercase tracking-widest hover:bg-amber-300 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> ՀԵՏ
          </button>
        </div>
      </section>
    </div>
  );
}

