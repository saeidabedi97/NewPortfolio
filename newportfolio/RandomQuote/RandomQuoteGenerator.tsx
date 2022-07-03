import {
    AnswerButtonContainer,
    DeclineMessage,
    NoButton,
    QuestionQuote,
    QuestionQuoteContainer,
    QuoteContainer,
    QuoteGeneratorContainer,
    SelectionContainer,
    SelectOption,
    YesAndNoButton,
    YesButton,
} from './RandomQuoteGenerator.styles';
import useSWR from 'swr';
import { useState } from 'react';

const headers = {
    'x-rapidapi-key': '48d30276b0msha480ba075aefe4bp1f70f0jsn8a952842dfc7',
    'x-rapidapi-host': 'quotes15.p.rapidapi.com',
};
const endpoint = 'https://quotes15.p.rapidapi.com/quotes/random/';

const fetcher = async (endpoint: RequestInfo | URL) =>
    await fetch(endpoint, { headers }).then((x) => x.json());

const InternationalizedQuote = ({ language }: any) => {
    const { data, error } = useSWR(
        `${endpoint}?language_code=${language}`,
        fetcher
    );

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return <span>{JSON.stringify(data.content)}</span>;
};

export default function RandomQuoteGenerator() {
    const [languageSelected, setLanguageSelected] = useState('');
    const [formState, setFormState] = useState('initial');
    return (
        <div>
            <QuoteGeneratorContainer>
                <QuestionQuoteContainer>
                    <QuestionQuote>
                        Hey, Can i tell you something?
                    </QuestionQuote>{' '}
                </QuestionQuoteContainer>
                <AnswerButtonContainer>
                    <YesAndNoButton>
                        <YesButton onClick={() => setFormState('accept')}>
                            Yes
                        </YesButton>
                        <NoButton onClick={() => setFormState('decline')}>
                            No
                        </NoButton>
                    </YesAndNoButton>
                    {formState === 'accept' && (
                        <SelectionContainer>
                            <SelectOption
                                onChange={(e) =>
                                    setLanguageSelected(e.target.value)
                                }
                            >
                                <option>Select langauge...</option>
                                <option value="en">English</option>
                                <option value="hu">Hungarian</option>
                                <option value="es">Spanish</option>
                                <option value="it">Italian</option>
                            </SelectOption>
                        </SelectionContainer>
                    )}
                    {formState === 'decline' && (
                        <DeclineMessage>
                            Alright then. enjoy exploring
                        </DeclineMessage>
                    )}
                </AnswerButtonContainer>

                <QuoteContainer>
                    {languageSelected && (
                        <InternationalizedQuote language={languageSelected} />
                    )}
                </QuoteContainer>
            </QuoteGeneratorContainer>
        </div>
    );
}
