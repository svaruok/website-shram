import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, RefreshCw, Trophy } from 'lucide-react';

interface BuildingGameProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BuildingGame({ isOpen, onClose }: BuildingGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<'start' | 'playing' | 'gameover'>('start');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Game constants
  const CANVAS_WIDTH = 300;
  const CANVAS_HEIGHT = 400;
  const INITIAL_BLOCK_WIDTH = 100;
  const BLOCK_HEIGHT = 20;

  // Game state refs (mutable, avoid react state for 60fps loop)
  const gameRef = useRef({
    blocks: [] as Array<{ x: number, y: number, w: number, h: number, color: string }>,
    movingBlock: null as null | { x: number, y: number, w: number, h: number, speed: number, direction: number, color: string },
    cameraY: 0,
    animationFrameId: 0,
  });

  const colors = [
    '#A63A50', // Burgundy
    '#F2A900', // Yellow
    '#2563EB', // Blue
    '#10B981', // Green
    '#8B5CF6', // Purple
  ];

  const getColor = (index: number) => colors[index % colors.length];

  const initGame = () => {
    setGameState('playing');
    setScore(0);
    gameRef.current = {
      blocks: [{
        x: CANVAS_WIDTH / 2 - INITIAL_BLOCK_WIDTH / 2,
        y: CANVAS_HEIGHT - BLOCK_HEIGHT,
        w: INITIAL_BLOCK_WIDTH,
        h: BLOCK_HEIGHT,
        color: getColor(0)
      }],
      movingBlock: {
        x: 0,
        y: CANVAS_HEIGHT - BLOCK_HEIGHT * 2,
        w: INITIAL_BLOCK_WIDTH,
        h: BLOCK_HEIGHT,
        speed: 3,
        direction: 1,
        color: getColor(1)
      },
      cameraY: 0,
      animationFrameId: 0
    };
    startGameLoop();
  };

  const startGameLoop = () => {
    const render = () => {
      update();
      draw();
      if (gameRef.current.movingBlock) {
        gameRef.current.animationFrameId = requestAnimationFrame(render);
      }
    };
    cancelAnimationFrame(gameRef.current.animationFrameId);
    gameRef.current.animationFrameId = requestAnimationFrame(render);
  };

  const update = () => {
    const state = gameRef.current;
    if (!state.movingBlock) return;

    // Move block
    state.movingBlock.x += state.movingBlock.speed * state.movingBlock.direction;

    // Bounce off walls
    if (state.movingBlock.x <= 0) {
      state.movingBlock.x = 0;
      state.movingBlock.direction = 1;
    } else if (state.movingBlock.x + state.movingBlock.w >= CANVAS_WIDTH) {
      state.movingBlock.x = CANVAS_WIDTH - state.movingBlock.w;
      state.movingBlock.direction = -1;
    }
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const state = gameRef.current;

    // Clear canvas
    ctx.fillStyle = '#f9fafb'; // gray-50
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.save();
    // Move camera up as blocks stack higher
    ctx.translate(0, state.cameraY);

    // Draw placed blocks
    state.blocks.forEach(b => {
      ctx.fillStyle = b.color;
      ctx.fillRect(b.x, b.y, b.w, b.h);
      ctx.strokeStyle = 'rgba(0,0,0,0.1)';
      ctx.strokeRect(b.x, b.y, b.w, b.h);
    });

    // Draw moving block
    if (state.movingBlock) {
      ctx.fillStyle = state.movingBlock.color;
      ctx.fillRect(state.movingBlock.x, state.movingBlock.y, state.movingBlock.w, state.movingBlock.h);
      ctx.strokeStyle = 'rgba(0,0,0,0.1)';
      ctx.strokeRect(state.movingBlock.x, state.movingBlock.y, state.movingBlock.w, state.movingBlock.h);
    }

    ctx.restore();
  };

  const handleDrop = () => {
    if (gameState !== 'playing') return;

    const state = gameRef.current;
    if (!state.movingBlock) return;

    const topBlock = state.blocks[state.blocks.length - 1];
    const mb = state.movingBlock;

    // Calculate overlap
    const overlapStart = Math.max(topBlock.x, mb.x);
    const overlapEnd = Math.min(topBlock.x + topBlock.w, mb.x + mb.w);
    const overlap = overlapEnd - overlapStart;

    if (overlap > 0) {
      // Success! Place block
      const newScore = score + 1;
      setScore(newScore);

      state.blocks.push({
        x: overlapStart,
        y: mb.y,
        w: overlap,
        h: BLOCK_HEIGHT,
        color: mb.color
      });

      // Spawn next block
      const nextY = mb.y - BLOCK_HEIGHT;
      state.movingBlock = {
        x: mb.direction === 1 ? 0 : CANVAS_WIDTH - overlap,
        y: nextY,
        w: overlap,
        h: BLOCK_HEIGHT,
        speed: Math.min(3 + newScore * 0.2, 8), // Increase speed gradually
        direction: mb.direction === 1 ? -1 : 1, // Alternate side
        color: getColor(newScore + 1)
      };

      // Move camera if stacking too high
      if (nextY + state.cameraY < CANVAS_HEIGHT / 2) {
        state.cameraY += BLOCK_HEIGHT;
      }
    } else {
      // Game Over
      cancelAnimationFrame(state.animationFrameId);
      state.movingBlock = null;
      setGameState('gameover');
      if (score > highScore) setHighScore(score);
      draw(); // Draw final state without moving block
    }
  };

  // Cleanup animation frame
  useEffect(() => {
    if (!isOpen) {
      cancelAnimationFrame(gameRef.current.animationFrameId);
    } else if (gameState === 'playing') {
      startGameLoop(); // Resume if left open
    }
    return () => cancelAnimationFrame(gameRef.current.animationFrameId);
  }, [isOpen]);


  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 z-10 w-full max-w-sm"
          >
            {/* Top Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-burgundy" />
            
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/80 hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors z-20 shadow-sm backdrop-blur-md"
            >
              <X size={18} />
            </button>

            <div className="p-6 pb-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-gray-900 text-xl tracking-tight">Worker Break</h3>
                <p className="text-xs text-gray-500 font-medium">Build the highest tower!</p>
              </div>
              <div className="bg-orange-50 px-3 py-1.5 rounded-xl border border-orange-100 flex items-center gap-1.5 shadow-inner">
                <Trophy size={14} className="text-orange-600" />
                <span className="font-bold text-orange-700 text-sm">{highScore}</span>
              </div>
            </div>

            {/* Game Area */}
            <div 
              className="relative bg-gray-50 flex flex-col items-center justify-center cursor-pointer touch-none select-none"
              style={{ height: CANVAS_HEIGHT }}
              onClick={handleDrop}
            >
              <canvas 
                ref={canvasRef}
                width={CANVAS_WIDTH}
                height={CANVAS_HEIGHT}
                className="bg-gray-50 rounded-lg shadow-inner absolute inset-0 mx-auto pointer-events-none"
              />

              {/* Start Screen */}
              {gameState === 'start' && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 mb-4 animate-bounce">
                    <Play size={28} className="text-white fill-white ml-1" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Stack the Blocks</h4>
                  <p className="text-sm text-gray-500 mb-6 text-center px-8">
                    Tap anywhere on the screen to drop the block. Stack as high as you can!
                  </p>
                  <button 
                    onClick={(e) => { e.stopPropagation(); initGame(); }}
                    className="bg-gray-900 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-800 transition-all hover:-translate-y-1"
                  >
                    Start Game
                  </button>
                </div>
              )}

              {/* Game Over Screen */}
              {gameState === 'gameover' && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
                  <h4 className="font-extrabold text-gray-900 text-3xl mb-1">Game Over</h4>
                  <p className="text-sm text-gray-500 font-medium mb-2">You stacked</p>
                  <div className="text-5xl font-black text-burgundy mb-6 drop-shadow-md">
                    {score}
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); initGame(); }}
                    className="bg-burgundy text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-burgundy/30 hover:bg-[#a01030] transition-all hover:-translate-y-1 flex items-center gap-2"
                  >
                    <RefreshCw size={18} />
                    Try Again
                  </button>
                </div>
              )}
            </div>

            {/* In-game score indicator */}
            {gameState === 'playing' && (
              <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-50 font-black text-6xl text-gray-200 select-none">
                {score}
              </div>
            )}
            
            <div className="bg-white p-4 text-center">
              <p className="text-xs text-gray-400 font-medium">Built by Shramico Workers</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
