import { useState } from 'react';

const ToggleReadMore = ({ text }) => {
    const [showMore, setShowMore] = useState(false);

    const toggleReadMore = () => {
        setShowMore(!showMore);
    };

    const displayText = showMore ? text : text.split('\n').slice(0, 3).join('\n');
    const buttonColor = showMore ? 'red' : 'green';

    return (
        <div>
            <p dangerouslySetInnerHTML={{ __html: displayText }} />
            {/* <p>{displayText}</p> */}

            <button
                onClick={toggleReadMore}
                style={{
                    marginTop: '8px',
                    marginBottom: '8px',
                    padding: '6px 10px',
                    backgroundColor: buttonColor,
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}
            >
                {showMore ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
};

export default ToggleReadMore;
