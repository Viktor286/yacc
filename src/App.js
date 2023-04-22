import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import theme from './theme';
import HubList from "./components/HubList";
import hubs from "./components/HubList.data.json";
import StreamList from "./components/StreamList";
import streams from "./components/StreamList.data.json";
import ChatArea from "./components/ChatArea";
import events from "./components/ChatArea.data.json";
import MessageInput from "./components/MessageInput";
import EventThreadArea from "./components/EventThreadArea";
import eventThreadAreaData from "./components/EventThreadArea.data.json";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  grid-template-rows: 1fr auto;
  height: 100vh;
  width: 100vw;
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppContainer>
                <HubList hubs={hubs}/>
                <StreamList streams={streams}/>
                <ChatArea events={events}/>
                <EventThreadArea
                    events={events}
                    originalEvent={eventThreadAreaData.originalEvent}
                    replies={eventThreadAreaData.replies}
                />
                <MessageInput/>
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;
