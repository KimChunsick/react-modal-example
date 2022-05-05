import styled from '@emotion/styled';
import { useState } from 'react';
import { Button } from './components/Button';
import { Modal } from './components/Modal';

function App() {
  // Modal의 열림 여부 값
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <Page>
      <Button onClick={() => setShowModal(true)}>
        모달 띄우기
      </Button>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`

export default App;
