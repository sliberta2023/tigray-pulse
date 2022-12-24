type props = {
    children: JSX.Element | JSX.Element[] | String;
  };
  
  function MainPage({ children }: props) {
    return (
      <div className="select-none z-10 min-h-[100vh] flex flex-col justify-between mx-auto px-1">
        {children}
      </div>
    );
  }
  
  export default MainPage;
