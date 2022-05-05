import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Button } from "../Button";
import { Portal } from "../Portal";
import { ModalProps, ModalState } from "./type";
import { useModal } from "./useModal";

/**
 * # Modal
 * 
 * @description
 * 예제에서 사용되는 모달 컴포넌트
 * 
 * @example
 * ```tsx
 * const [show, setShow] = useState<boolean>(false)
 * 
 * <Modal show={show} onClose={() => setShow(false)} />
 * ```
 */
export function Modal(props: ModalProps) {
  const { state, needHide, onClose, handleAnimationEnd } = useModal(props)
  
  if (needHide) {
    return null
  }

  return (
    <Portal selector="#modal">
      <Dimmed state={state} onClick={onClose}>
        <StyledModal state={state} onClick={(event) => event.stopPropagation()} onAnimationEnd={handleAnimationEnd}>
          <Title>제목.</Title>
          <Content>안녕 세상아!</Content>
          <Button onClick={onClose}>
            확인
          </Button>
        </StyledModal>
      </Dimmed>
    </Portal>
  )
}

const fadeIn = keyframes`
0% {
  background-color: rgba(0, 0, 0, 0);
}
100% {
  background-color: rgba(0, 0, 0, 0.5);
}
`

const fadeOut = keyframes`
0% {
  background-color: rgba(0, 0, 0, 0.5);
}
100% {
  background-color: rgba(0, 0, 0, 0);
}
`

const zoomIn = keyframes`
0% {
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
}
100% {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
`

const zoomOut = keyframes`
0% {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
100% {
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
}
`

const Dimmed = styled.div<{ state: ModalState }>`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);

  ${({ state }) => css`
    ${state > ModalState.INVISIBLE &&
    state < ModalState.DISAPPEAR &&
    css`
      animation: ${fadeIn} 0.25s ease;
    `}
    ${state === ModalState.DISAPPEAR &&
    css`
      animation: ${fadeOut} 0.25s ease;
    `}
    animation-fill-mode: both;
    pointer-events: ${state === ModalState.INVISIBLE ? 'none' : 'unset'};
  `}
`

const StyledModal = styled.div<{ state: ModalState }>`
  position: absolute;
  transform: translate(-50%, -50%) scale(0);
  top: 50%;
  left: 50%;
  width: 30rem;
  height: 12rem;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: white;
  opacity: 0;

  & > button {
    float: right;
  }

  ${({ state }) => css`
  ${state > ModalState.INVISIBLE &&
    state < ModalState.DISAPPEAR &&
    css`
      animation: ${zoomIn} 0.25s ease;
    `}
    ${state === ModalState.DISAPPEAR &&
    css`
      animation: ${zoomOut} 0.25s ease;
    `}
    animation-fill-mode: both;
  `}
`

const Title = styled.h3`
  margin-bottom: 1.5rem;
  font-size: 2rem;
`

const Content = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`
