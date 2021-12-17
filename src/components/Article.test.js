import React from 'react';
import '@testing-library/jest-dom';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const fakeBook = {
    author: "Johnathan Diss",
    body: "something something I'm a writer",
    createdOn: "2021-12-16T23:56:57-07:00",
    headline: "Onions are making a comeback!",
    id: "TFZzv",
    image: 134,
    summary: "The moral of the story is... onions, man.",
}

test('renders component without errors', ()=> {
    render(<Article article={fakeBook}/>)
});

// test('renders headline, author from the article when passed in through props', ()=> {

// });

// test('renders "Associated Press" when no author is given', ()=> {
// });

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.