import { ButtonRed, ButtonWhite } from './styles';
export default function Button({ children, red }) {
  return (
    <>
      {red ? (
        <ButtonRed> {children}</ButtonRed>
      ) : (
        <ButtonWhite>{children}</ButtonWhite>
      )}
      ;
    </>
  );
}
