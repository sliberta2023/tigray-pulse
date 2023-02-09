import { Component } from 'react';

class HeaderComponent extends Component {

    render() {
      return (
        <header className="text-center py-5 md:py-14">
          <h1 className="text-xl md:text-4xl dark:text-white">
            More features to come <span className="font-extrabold"> soon! </span>
          </h1>
          <p className="text-sm md:text-lg py-5 text-gray-500 dark:text-white">
            Stay tuned.
          </p>
        </header>
      );
    }
}

export default HeaderComponent;
