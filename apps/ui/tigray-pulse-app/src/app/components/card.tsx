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
    }
}

export default CardComponent;
