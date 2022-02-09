import {Switch, Route} from "react-router-dom"
import { MantineProvider } from '@mantine/core';
import { useHotkeys, useLocalStorageValue } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications'
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import NotFound from "./pages/NotFound";


function App() {

  const [colorScheme, setColorScheme] = useLocalStorageValue({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <div className="App">
      <MantineProvider theme={{ colorScheme: colorScheme }} withGlobalStyles>
        <NotificationsProvider>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route exact path="/post/:id" render={(props) => <PostPage {...props} />} />
            <Route exact path="/not-found" render={(props) => <NotFound {...props}/>} />
          </Switch>
        </NotificationsProvider>
      </MantineProvider>
    </div>
  );
}

export default App;
