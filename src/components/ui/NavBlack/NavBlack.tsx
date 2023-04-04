const NavBlack = () => {
  return (
    <NavBar>
      <GoBackButton data-testid={dataTestIdBtnGoBack} onClick={handleGoBackButton} />
      {t('load-images.steps.button-go-back')}
    </NavBar>
  );
};

export default NavBlack;
