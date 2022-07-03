import { useState } from 'react';
import { ClickMeButton } from './RandomQuote.styles';
import RandomQuoteGenerator from './RandomQuoteGenerator';

export default function RandomQuote() {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <ClickMeButton onClick={() => setVisible(true)}>
                Click Me
            </ClickMeButton>
            {visible && <RandomQuoteGenerator />}
        </>
    );
}
