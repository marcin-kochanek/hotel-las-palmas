import { css, styled } from 'styled-components';

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(24rem 1fr 1.2fr);
  gap: 1.2rem;

  padding: 3rem;
  padding-bottom: 0;

  ${(props) =>
    props.position === 'vertically'
      ? css`
          grid-template-columns: repeat(24rem 1fr 1.2fr);
        `
      : css`
          grid-template-columns: 24rem 1fr 1.2fr;
        `}

  /* &:first-child {
    padding-bottom: 0;
  }*/

  &:last-child {
    padding-bottom: 3rem;
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
    padding: 3rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({ label, error, children, position }) {
  return (
    <StyledFormRow position={position}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
