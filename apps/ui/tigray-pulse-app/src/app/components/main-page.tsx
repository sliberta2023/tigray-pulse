import React, { Component } from 'react';

type PropsType = {
    children: React.ReactNode;
  };
  
  class MainPage extends Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    render() {
        return (
          <div className="select-none z-10 min-h-[100vh] flex flex-col justify-between mx-auto px-1">
            { this.props.children }
          </div>
        );
    }
}
  
export default MainPage;
