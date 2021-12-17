// All imports here
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';
import Article from './Article';
import EditForm from './EditForm';


// Styled Components 

const Container = styled.div`
    padding: 0.5em;
`
const HeaderContainer = styled.h1`
    border-bottom: solid black 2px;
    padding: 1em;
    margin:0;
    font-size: 1.5em;
    background: black;
    color: white;
`
const ArticleDivider = styled.div`
    border-bottom: 1px solid black;
    padding: 1em;
`
const ComponentContainer = styled.div`
    display:flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection};
`
const ArticleContainer = styled.div`
    background: grey;
`;


// Start View component 
const View = (props) => {
    // Set all state
    const [articles, setArticles] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editId, setEditId] = useState();
    // Get token from localStorage
    const token = localStorage.getItem('token');

    // Use our axiosWithAuth to display articles and set them to state
    useEffect(() => {
        axiosWithAuth().get('/articles', {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                setArticles(res.data);
            })
            .catch(err => console.log(err.response.data))
    }, []);
    // remove the selected movie and return the edited list of movies
    const handleDelete = (id) => {
        setArticles(articles.filter(article => (article.id !== id)));
    }

    // update the selected article and add it to state.
    const handleEdit = (article) => {
        axiosWithAuth().put(`/articles/${editId}`, article, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                setArticles(res.data)
            })
            .catch(err => console.log(err))
    }

    const handleEditSelect = (id)=> {
        setEditing(true);
        setEditId(id);
    }

    const handleEditCancel = ()=>{
        setEditing(false);
    }

    return(<ComponentContainer>
        <HeaderContainer>View Articles</HeaderContainer>
        <ContentContainer flexDirection="row">
            <ArticleContainer>
                {
                    articles.map(article => {
                        return <ArticleDivider key={article.id}>
                            <Article key={article.id} article={article} handleDelete={handleDelete} handleEditSelect={handleEditSelect}/>
                        </ArticleDivider>
                    })
                }
            </ArticleContainer>
            
            {
                editing && <EditForm editId={props.editId} handleEdit={handleEdit} handleEditCancel={handleEditCancel}/>
            }
        </ContentContainer>
    </ComponentContainer>);
}

export default View;
