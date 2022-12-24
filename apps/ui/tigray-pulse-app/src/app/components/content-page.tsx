import Card, { CardData } from "./card";

const tweets: CardData[] = [
    {
        title: 'Noteworthy technology acquisitions 2021',
        message: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        imgSrc: '/assets/image.jpeg',
        imgAlt: 'sample image from the internet',
        linkTitle: 'go to the source',
        linkAction: (e) => console.log('Go to the source to read the details...')
    },
    {
        title: 'Second noteworthy technology acquisitions 2021',
        message: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        imgSrc: '/assets/image.jpeg',
        imgAlt: 'sample image from the internet',
        linkTitle: 'go to the source',
        linkAction: (e) => console.log('Go to the source to read the details...')
    },
    {
        title: 'Third noteworthy technology acquisitions 2021',
        message: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        imgSrc: '/assets/image.jpeg',
        imgAlt: 'sample image from the internet',
        linkTitle: 'go to the source',
        linkAction: (e) => console.log('Go to the source to read the details...')
    }
];
function ContentPage() {
    return (
        <div className='flex'>
            {
                tweets.map((tweet, index) => {
                    return (
                        <div key={`${tweet.title}_${index}`} className='m-5'>
                            <Card>{tweet}</Card>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ContentPage;
