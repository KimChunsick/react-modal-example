import { createPortal } from "react-dom"
import { PortalProps } from "./type"

/**
 * # Portal
 * 
 * @description
 * React의 `createPortal`을 쉽게 사용하기 위한 컴포넌트
 * 
 * @example
 * ```tsx
 * <Portal selector='SOME_SELECTOR'>
 * ...
 * </Portal>
 * ```
 */
export function Portal({ children, selector }: PortalProps) {
  const root = document.querySelector(selector)
  if (!root) {
    console.error(`경고! '${selector}'와 일치하는 Element를 찾지 못했습니다!`)
    return null
  }

  return createPortal(children, root)
}