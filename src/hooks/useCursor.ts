import React, { useState, useEffect, useRef } from 'react';
import { CursorState } from '@/types';

export const useCursor = () => {
  const [cursorState, setCursorState] = useState<CursorState>({
    position: { x: 0, y: 0 },
    isHovering: false,
    isClicking: false,
    isVisible: false
  });
  
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        setCursorState(prev => ({
          ...prev,
          position: { x: e.clientX, y: e.clientY },
          isVisible: true
        }));
      });
    };

    const handleMouseEnter = () => setCursorState(prev => ({ ...prev, isHovering: true }));
    const handleMouseLeave = () => setCursorState(prev => ({ ...prev, isHovering: false }));
    const handleMouseDown = () => setCursorState(prev => ({ ...prev, isClicking: true }));
    const handleMouseUp = () => setCursorState(prev => ({ ...prev, isClicking: false }));
    const handleMouseOut = () => setCursorState(prev => ({ ...prev, isVisible: false }));
    const handleMouseOver = () => setCursorState(prev => ({ ...prev, isVisible: true }));

    // Add event listeners
    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseOut);
    document.addEventListener('mouseenter', handleMouseOver);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseOut);
      document.removeEventListener('mouseenter', handleMouseOver);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return cursorState;
};
