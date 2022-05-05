/**
 * # ModalProps
 * 
 * @description
 * Modal 컴포넌트의 Props 입니다.
 */
export interface ModalProps {
  /**
   * 모달의 보임 여부
   */
  show: boolean
  /**
   * 모달이 닫힐 때 불리는 함수
   */
  onClose: () => void
}

/**
 * # ModalState
 * 
 * @description
 * 모달의 상태를 나타내는 enum 값
 */
export enum ModalState {
  /**
   * 모달이 보이지 않는 상태
   */
  INVISIBLE = 0,
  /**
   * 모달이 나타나고 있는 상태
   * 
   * (보이는 애니메이션이 재생중인 상태)
   */
  APPEAR,
  /**
   * 모달이 보여지고 있는 상태
   */
  VISIBLE,
  /**
   * 모달이 사라지고 있는 상태
   * 
   * (사라지는 애니메이션이 재생중인 상태)
   */
  DISAPPEAR
}