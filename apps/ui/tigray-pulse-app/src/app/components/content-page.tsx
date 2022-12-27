import { Component } from 'react';

import CardComponent, { CardData } from './card';

const { tweets } = require('../../assets/mock-data/tweets.js');

class ContentPage extends Component {

    render() {

        return (
            <div className='flex flex-wrap'>
                {
                    tweets.map((tweet: CardData, index: number) => {
                        return (
                            <div key={`${tweet.title}_${index}`} className='m-5'>
                                <CardComponent>{tweet}</CardComponent>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default ContentPage;
