import styled from "@emotion/styled";
import { ButtonProps } from "./type";

/**
 * # Button
 * 
 * @description
 * 예제에서 공통적으로 사용하는 Button 컴포넌트
 * 
 * @example
 * ```tsx
 * <Button onClick={() => console.log('Hello World!')}>
 * Hello World!
 * </Button>
 * ```
 */
export function Button({ children, onClick }: ButtonProps) {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  transition: 0.25s background-color ease;
  padding: 0.4rem 0.5rem;
  border: 0;
  border-radius: 0.25rem;
  color: white;
  background-color: #228be6;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #1971c2;
  }
`