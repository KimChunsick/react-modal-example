import React from "react";

/**
 * # PortalProps
 * 
 * @description
 * Portal 컴포넌트의 Props
 */
export interface PortalProps {
  /**
   * 자식 컴포넌트
   */
  children: React.ReactNode
  /**
   * document.querySelector에 사용될 selector string
   */
  selector: string
}