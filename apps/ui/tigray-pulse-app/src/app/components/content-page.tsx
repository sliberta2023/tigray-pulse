import { Component } from 'react';

import CardComponent, { CardData } from './card';

type PropsType = {
    tweets: CardData[]
}

class ContentPage extends Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    render() {
        return (
            <div className='flex flex-wrap justify-center items-center'>
                {
                    this.props.tweets.length > 0 ?
                        this.props.tweets.map((tweet: CardData) => {
                            return (
                                <div key={`${tweet.id}`} className='m-5'>
                                    <CardComponent key={`card_${tweet.id}`}>{tweet}</CardComponent>
                                </div>
                            )
                        })
                        :
                        <p className='font-bold'> There are no tweets matching your search criteria.</p>
                }
            </div>
        );
    }
}

export default ContentPage;
