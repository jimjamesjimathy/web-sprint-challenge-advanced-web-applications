import React from 'react';
import '@testing-library/jest-dom';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const fakeBook = {
    author: "author",
    body: "body",
    createdOn: "2021-12-16T23:56:57-07:00",
    headline: "headline",
    id: "TFZzv",
    image: 134,
    summary: "summary",
}

const fakeBook2 = {
    author: "",
    body: "body",
    createdOn: "2021-12-16T23:56:57-07:00",
    headline: "headline",
    id: "TFZzv",
    image: 134,
    summary: "summary",
}

test('renders component without errors', ()=> {
    render(<Article article={fakeBook}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={fakeBook}/>)

        const headline = screen.queryByText(/headline/);
            expect(headline).toBeInTheDocument();
        const author = screen.queryByText(/author/);
            expect(author).toBeInTheDocument();
        const body = screen.queryByText(/body/);
            expect(body).toBeInTheDocument();
        const summary = screen.queryByText(/summary/);
            expect(summary).toBeInTheDocument();

});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={fakeBook2}/>)

    const assPress = screen.queryByText(/Associated Press/i)
        expect(assPress).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', async ()=> {
    const mockDelete = jest.fn();

  render(
    <Article article={fakeBook} handleDelete={mockDelete}/>
  );
  
  userEvent.click(screen.queryByTestId('deleteButton'))
  await expect(mockDelete).toBeCalled();
});
