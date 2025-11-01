
import React, { useEffect, useState, useRef } from 'react';

interface ConfettiPieceProps {
    id: number;
    left: number;
    top: number;
    size: number;
    color: string;
    duration: number;
    delay: number;
    onComplete: (id: number) => void;
}

const ConfettiPiece: React.FC<ConfettiPieceProps> = ({ id, left, top, size, color, duration, delay, onComplete }) => {
    const [opacity, setOpacity] = useState(1);
    const [transform, setTransform] = useState(`translate(0, 0) rotate(${Math.random() * 360}deg)`);

    useEffect(() => {
        const animationStart = setTimeout(() => {
            setTransform(`translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 + 100}px) rotate(${Math.random() * 720}deg)`);
            setOpacity(0);
        }, delay);

        const timer = setTimeout(() => onComplete(id), duration + delay);

        return () => {
            clearTimeout(animationStart);
            clearTimeout(timer);
        };
    }, [duration, delay, onComplete, id]);

    return (
        <div
            className="absolute"
            style={{
                left: `${left}px`,
                top: `${top}px`,
                width: `${size}px`,
                height: `${size / 2}px`, // Rectangle shape
                backgroundColor: color,
                opacity,
                transform,
                transition: `transform ${duration}ms ease-out, opacity ${duration}ms ease-in`,
                borderRadius: '2px',
                zIndex: 9999,
            }}
        />
    );
};

interface ConfettiEffectProps {
    isActive: boolean;
    onComplete: () => void;
    duration?: number; // Total duration for the effect to run
    count?: number; // Number of confetti pieces
    colors?: string[]; // Array of colors
    originX?: number; // X-coordinate of the burst origin
    originY?: number; // Y-coordinate of the burst origin
}

export const ConfettiEffect: React.FC<ConfettiEffectProps> = ({
    isActive,
    onComplete,
    duration = 1500, // milliseconds
    count = 50,
    colors = ['#a78bfa', '#f472b6', '#22c55e', '#f97316', '#38bdf8'],
    originX = window.innerWidth / 2,
    originY = window.innerHeight / 2,
}) => {
    const [confettiPieces, setConfettiPieces] = useState<ConfettiPieceProps[]>([]);
    const nextId = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isActive) {
            const newPieces: ConfettiPieceProps[] = [];
            for (let i = 0; i < count; i++) {
                newPieces.push({
                    id: nextId.current++,
                    left: originX + (Math.random() - 0.5) * 50, // Slight spread
                    top: originY + (Math.random() - 0.5) * 50,  // Slight spread
                    size: Math.random() * 10 + 5,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    duration: duration * 0.8 + Math.random() * duration * 0.4,
                    delay: Math.random() * duration * 0.3,
                    onComplete: (id) => setConfettiPieces(prev => prev.filter(p => p.id !== id)),
                });
            }
            setConfettiPieces(newPieces);
            const cleanupTimer = setTimeout(onComplete, duration + 500); // Ensure all pieces fade out

            return () => clearTimeout(cleanupTimer);
        } else {
            setConfettiPieces([]);
        }
    }, [isActive, count, colors, duration, onComplete, originX, originY]);

    if (!isActive) return null;

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]">
            {confettiPieces.map(piece => (
                <ConfettiPiece key={piece.id} {...piece} />
            ))}
        </div>
    );
};
