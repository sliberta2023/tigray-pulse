import { Component } from 'react';

import CardComponent, { CardData } from './card';
import InstagramPostComponent from './instagram-post';

const { tweetsReal } = require('../../assets/mock-data/tweets.js');

class ContentPage extends Component {

    render() {

        return (
            <div className='flex flex-wrap'>
                {
                    tweetsReal.map((tweet: CardData) => {
                        return (
                            <div key={`${tweet.id}`} className='m-5'>
                                <CardComponent key={`card_${tweet.id}`}>{tweet}</CardComponent>
                            </div>
                        )
                    })
                }
                {
                    <InstagramPostComponent />
                }
            </div>
        );
    }
}

export default ContentPage;
