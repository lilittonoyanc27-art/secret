import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, ArrowLeft, 
  RotateCcw, Sparkles, 
  Zap, CheckCircle2,
  AlertCircle, Box, MapPin, Key
} from 'lucide-react';
import { ERNESTO_CHALLENGES } from './vocabData';

export default function ErnestoGameView({ onBack }: { onBack: () => void }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const currentChallenge = ERNESTO_CHALLENGES[currentIdx];
  const shuffledOptions = useMemo(() => {
    return [...currentChallenge.options].sort(() => Math.random() - 0.5);
  }, [currentChallenge]);

  const handleAnswer = (option: string) => {
    if (isCorrect !== null) return;
    
    setSelectedOption(option);
    const correct = option === currentChallenge.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      setSelectedOption(null);
      if (currentIdx < ERNESTO_CHALLENGES.length - 1) {
        setCurrentIdx(prev => prev + 1);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, correct ? 1500 : 2500);
  };

  const resetGame = () => {
    setCurrentIdx(0);
    setScore(0);
    setIsCorrect(null);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotateZ: -10 }}
          animate={{ scale: 1, opacity: 1, rotateZ: 0 }}
          className="bg-stone-900 text-amber-50 rounded-[64px] p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-4 border-amber-900/50 space-y-10 relative overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          
          <div className="relative">
            <Trophy className="w-24 h-24 text-amber-500 mx-auto drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]" />
            <Sparkles className="absolute top-0 right-1/4 text-amber-300 w-8 h-8 animate-pulse" />
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-black uppercase italic tracking-widest text-amber-200">ԳԱՂՏՆԻՔԸ ԲԱՑԱՀԱՅՏՎԱԾ Է</h2>
            <div className="text-8xl font-black text-amber-500 drop-shadow-xl">
              {score}/{ERNESTO_CHALLENGES.length}
            </div>
            <p className="text-xl font-bold text-amber-100/60 uppercase tracking-[0.3em]">
              {score === ERNESTO_CHALLENGES.length ? 'ԴՈՒ ԳՏԱՐ ՈՍԿԻՆ!' : 'ԷՌՆԵՍՏՈՆ ԴԵՌ ԳԱՂՏՆԻՔՆԵՐ ՈՒՆԻ'}
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-8">
            <button 
              onClick={resetGame}
              className="bg-amber-600 text-stone-900 py-6 rounded-3xl font-black italic uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-amber-500 transition-all shadow-xl"
            >
              <RotateCcw className="w-6 h-6" /> ՆՈՐԻՑ ՓՈՐՁԵԼ
            </button>
            <button onClick={onBack} className="text-amber-500/40 font-black uppercase text-xs tracking-widest hover:text-amber-500 transition-colors">
               ԳԼԽԱՎՈՐ ՄԵՆՅՈՒ
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 [perspective:1200px]">
      {/* HUD */}
      <div className="flex justify-between items-center text-slate-400 font-black uppercase text-[10px] tracking-[0.4em]">
        <button onClick={onBack} className="flex items-center gap-2 hover:text-slate-900 transition-colors">
          <ArrowLeft className="w-4 h-4" /> ԵՏ
        </button>
        <div className="bg-stone-900 px-6 py-2 rounded-full text-amber-500 shadow-xl border border-amber-900/30 flex items-center gap-3">
          <MapPin className="w-3 h-3" /> ՔԱՅԼ {currentIdx + 1} / {ERNESTO_CHALLENGES.length}
        </div>
      </div>

      {/* 3D Progress Bar */}
      <div className="h-6 bg-stone-900 rounded-full overflow-hidden shadow-2xl border-2 border-stone-800 relative">
        <motion.div 
          className="h-full bg-gradient-to-r from-amber-900 via-amber-600 to-amber-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIdx + 1) / ERNESTO_CHALLENGES.length) * 100}%` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
      </div>

      {/* Chest Card 3D */}
      <motion.div
        key={currentIdx}
        initial={{ rotateX: 20, y: 100, opacity: 0 }}
        animate={{ rotateX: 0, y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        className="bg-stone-50 rounded-[40px] sm:rounded-[64px] p-6 sm:p-20 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.4)] border-b-[12px] border-stone-200 text-center space-y-8 sm:space-y-12 relative overflow-hidden group mb-12"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Adventure elements */}
        <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-r from-amber-900 via-amber-600 to-amber-900 opacity-20" />
        <Key className="absolute -top-10 -left-10 w-48 h-48 text-stone-100 rotate-45 pointer-events-none" />
        <Box className="absolute -bottom-10 -right-10 w-48 h-48 text-stone-100 -rotate-12 pointer-events-none" />

        {/* Feedback Layer */}
        <AnimatePresence>
          {isCorrect !== null && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute inset-0 z-50 flex flex-col items-center justify-center text-white space-y-4 shadow-inner ${
                isCorrect ? 'bg-amber-500' : 'bg-stone-900/40 backdrop-blur-sm pointer-events-none'
              }`}
              style={{ transform: 'translateZ(100px)' }}
            >
              {isCorrect ? (
                <>
                  <Sparkles className="w-24 h-24 sm:w-32 sm:h-32 text-white animate-spin-slow" />
                  <h3 className="text-5xl sm:text-7xl font-black italic uppercase drop-shadow-2xl">ՈՍԿԻ!</h3>
                </>
              ) : (
                <motion.div 
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  className="bg-rose-600 p-6 sm:p-10 rounded-[32px] shadow-2xl border-4 border-rose-400 space-y-4 max-w-xs sm:max-w-md mx-4"
                >
                  <div className="flex items-center justify-center gap-3">
                    <AlertCircle className="w-8 h-8 sm:w-12 sm:h-12" />
                    <h3 className="text-3xl sm:text-5xl font-black italic uppercase">ՍԽԱԼ Է</h3>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-80">ՃԻՇՏ ՏԱՐԲԵՐԱԿՆ Է`</p>
                    <p className="text-3xl sm:text-5xl font-black uppercase text-amber-300 drop-shadow-md">{currentChallenge.correctAnswer}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-6" style={{ transform: 'translateZ(50px)' }}>
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] bg-stone-900 text-amber-500 shadow-xl">
             <Zap className="w-4 h-4" /> {currentChallenge.verb.toUpperCase()}
          </div>
          <h2 className="text-3xl sm:text-7xl font-black text-stone-900 italic uppercase tracking-tighter leading-none mb-4 break-words">
             {currentChallenge.sentence}
          </h2>
          <div className="h-1.5 w-40 bg-amber-500/20 mx-auto rounded-full" />
          <p className="text-stone-400 font-black italic text-xl uppercase tracking-widest mt-6">
            {currentChallenge.translation}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8" style={{ transform: 'translateZ(30px)' }}>
          {shuffledOptions.map((opt, i) => {
            const isSelected = selectedOption === opt;
            const showsError = isCorrect === false && isSelected;
            
            return (
              <motion.button
                key={i}
                whileHover={{ 
                  scale: 1.05, 
                  translateZ: 40,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAnswer(opt)}
                className={`p-5 sm:p-8 rounded-[32px] sm:rounded-[40px] text-xl sm:text-2xl font-black border-4 transition-all uppercase italic tracking-tighter ${
                  showsError 
                    ? 'bg-rose-600 text-white border-rose-400 shadow-[0_15px_0_0_#9f1239]' 
                    : 'bg-stone-900 text-amber-400 border-stone-800 shadow-[0_15px_0_0_#1c1917]'
                } hover:shadow-[0_8px_0_0_#1c1917] hover:translate-y-[7px]`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {opt}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      <div className="text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.6em] flex items-center justify-center gap-3">
         <Box className="w-4 h-4" /> ԷՌՆԵՍՏՈՅԻ ՍՆԴՈՒԿԸ <Box className="w-4 h-4" />
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
