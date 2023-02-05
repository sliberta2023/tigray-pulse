import { Component } from 'react';
import axios from 'axios';
import ContentPage from './content-page';
import { CardData } from './card';

const API_URL = 'http://localhost:3333/api/twitter/search';

type PropsType = {
  searchText: string;
}
  class MainPage extends Component<PropsType> {
    state = {
      searchText: '',
      tweets: []
    }

    fetchTweets = async (searchText: string = "") => {
      try {
        const { data } = await axios.get(`${API_URL}?q=${searchText}`);
        console.log('Fetching from DB...');
        if (Array.isArray(data)) {
          this.setState({tweets: [...data]});
        } else {
          this.setState({tweets: []});  
        }
      } catch(err) {
        console.log('Fetching from DB has failed.');
        this.setState({tweets: []});
      }
    }

    async componentDidMount(): Promise<void> {
        await this.fetchTweets();
    }

    async componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any): Promise<void> {
      console.log('Inside componentDidUpdate of MainPage...');
      console.log({prevProps});
      console.log({currentSearchText: this.props.searchText});  
      if (this.props.searchText !== prevProps.searchText) {
          console.log({searchText: this.props.searchText});
          await this.fetchTweets(this.props.searchText)
        }
    }

    render() {
        return (
          <div className="select-none z-10 min-h-[100vh] flex flex-col justify-between mx-auto px-1">
            <ContentPage tweets={this.state.tweets as CardData[]}/>
          </div>
        );
    }
}
  
export default MainPage;
