'use client';

import { useCursor } from '@/hooks/useCursor';

export const CustomCursor = () => {
  const { position, isHovering, isClicking, isVisible } = useCursor();

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
        willChange: 'transform, opacity',
      }}
    />
  );
};
