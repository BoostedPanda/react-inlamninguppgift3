import React, {useState, useEffect} from 'react';
import { Container, Grid, Title, Card, Space, Breadcrumbs, Anchor, Text } from '@mantine/core';
import {useParams, useHistory} from "react-router-dom"
import Comment from '../components/Comment';

function PostPage({location}) {
  const {postData} = location
  const { id } = useParams()
  const [comments, setComments] = useState([]);
  const [data, setData] = useState([]);
  const history = useHistory()

  const items = [
    { title: 'Home', href: '/' },
    { title: `Post #${id}`, href: '#' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  const fetchcomment = async () => {
    const url =`https://jsonplaceholder.typicode.com/comments?postId=${id}`
    const response = await fetch(url)
    const data = await response.json()

    if (response.ok) {
        setComments(data)
      } else {
        history.push('/not-found')
      }
  }

  const fetchdata = async () => {
    const url =`https://jsonplaceholder.typicode.com/posts/${id}`
    const response = await fetch(url)
    const data = await response.json()

    if (response.ok) {
      setData(data)
    } else {
      history.push('/not-found')
    }
  }

  useEffect(() => {
    fetchdata();
    fetchcomment();
  }, []);

  return(
    <Container>
      <Card shadow="md" padding="sm">
        <Breadcrumbs separator="→">{items}</Breadcrumbs>
        <Title align='center' order={1}>Post #{postData ? postData.id : data.id}</Title>
        <Container size="sm">
          <Title order={3}>{postData ? postData.title : data.title}</Title>
          <Space h="sm"/>
          <Text size="md">{postData ? postData.body : data.body}</Text>
        </Container>
        <Space h="xl" />
        <Container size="sm">
          { comments.map((comment, i) => <Comment key={i} comment={comment}/>) }
        </Container>
      </Card>
    </Container>
  );
}

export default PostPage;
