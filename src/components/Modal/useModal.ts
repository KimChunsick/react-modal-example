import { useEffect, useState } from "react";
import { ModalProps, ModalState } from "./type";


export function useModal<T extends ModalProps>({ show, ...otherProps }: T) {
  const [state, setState] = useState<ModalState>(ModalState.INVISIBLE)
  const needHide = !show && state === ModalState.INVISIBLE

  useEffect(() => {
    if (show) {
      setState(ModalState.APPEAR)
    } else if (!show && state === ModalState.VISIBLE) {
      setState(ModalState.DISAPPEAR)
    }
  }, [show])

  return {
    state,
    show,
    needHide,
    handleAnimationEnd,
    ...otherProps
  }

  // 애니메이션이 종료 되었을 때 호출됩니다.
  function handleAnimationEnd() {
    // 다음 상태를 가져옵니다.
    // Ex. APPEAR -> VISIBLE, VISIBLE -> DISAPPEAR
    const nextState = state + 1
    // 만약 DISAPPEAR 상태를 넘어선다면 다시 INVISIBLE 상태로 변경합니다.
    if (nextState > ModalState.DISAPPEAR) {
      setState(ModalState.INVISIBLE)
      return
    }
    setState(nextState)
  }
}