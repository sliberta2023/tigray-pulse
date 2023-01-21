import { Component } from 'react';

export type CardData = {
    id: string,
    imgSrc: string,
    imgAlt: string,
    title: string,
    text: string,
    linkTitle: string,
    linkAction: (e: any) => void
};

type PropsType = {
    children: CardData
}

interface TextProps {
    id: string;
    text: string;
}

const URL_REGEX = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
function Text({text, id}: TextProps) {
    const words = text.split(' ');
    return (
        <p> {
                words.map((word, index) => {
                    if (word.match(URL_REGEX)) {
                        console.log({word});
                    }
                    return word.match(URL_REGEX) ?
                        <>
                            <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                                key={`${id}_${index}`} href={word}>
                                    {word}
                            </a>
                            {' '}
                        </>
                        :
                        word + ' '
                    }
                )
            } 
        </p>
    );
}

class CardComponent extends Component<PropsType> {

    constructor(props: PropsType) {
        super(props);
    }

    render() {
        return (
            <div className='card'>
                <div className="min-w-sm max-w-lg bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className='p-5'> 
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        </p>
                        <Text key={`message_${this.props.children.id}`} id={this.props.children.id} text={this.props.children.text} />
                    </div>
                </div>
            </div>
        );
        /*return (
            <div className="min-w-sm max-w-lg bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={this.props.children.imgSrc} alt={this.props.children.imgAlt} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> { this.props.children.title } </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> { this.props.children.text } </p>
                    <a href="#" onClick={this.props.children.linkAction}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        { this.props.children.linkTitle}
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        );
        */
    }
}

export default CardComponent;
