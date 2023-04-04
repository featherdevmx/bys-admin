export const NavBar = styled.div`
  position: fixed;
  top: 0;
  width: calc(100% - 240px);
  background: ${({ theme }) => theme.colors.neutrals[100]};
  height: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 0.5px solid #e0e3e5;

  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #1a2732;
  z-index: 200;
`;
