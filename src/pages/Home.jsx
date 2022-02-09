import React, {useState, useEffect} from 'react';
import { Container, Title, Alert, Skeleton, Card, Space, Kbd } from '@mantine/core';
import PostList from '../components/PostList';
import { XCircleFillIcon, LightBulbIcon } from '@primer/octicons-react'
import { useNotifications } from '@mantine/notifications';


const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const notificationText = (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <p style={{ margin: '0 5px' }}>You can switch theme by pressing: </p>
    <Kbd>Ctrl</Kbd>
    <span style={{ margin: '0 5px' }}>+</span>
    <Kbd>J</Kbd>
  </div>
);

function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const notifications = useNotifications();

  useEffect(() => {
    notifications.showNotification({
      disallowClose: false,
      autoClose: false,
      title: "Hey, listen!",
      message: notificationText,
      color: 'blue',
      icon: <LightBulbIcon />,
    });

    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const url =`https://jsonplaceholder.typicode.com/posts`
      const response = await fetch(url)
      const data = await response.json()
      await sleep(2500)
      setPosts(data)
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  return (
    <Container>
      <Card shadow='md' padding='xl'>
        <Title align='center' order={1}>Home Page</Title>

        <Space h={10} />

        <Skeleton visible={isLoading} height='100%'>
          {posts.length === 0 ? (
              <Alert icon={<XCircleFillIcon size={16} />} title="Bummer!" color="red">
                Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
              </Alert>
            ) : (
              <PostList posts={posts}/>
            )
          }
        </Skeleton>
      </Card>
    </Container>
  );
}

export default Home;
