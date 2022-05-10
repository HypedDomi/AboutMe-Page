import Modal from "./components/Modal/Modal";

export default function WebContent() {
  return (
    (<>
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
        <Modal />
      </div>
    </>)
  );
}
