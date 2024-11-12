import React from 'react';
import Main from '../../pages/main';
import events from '../../shared/mocks/historic-events';

export default function App(): React.ReactNode {
  return (
    <Main
      events={events}
    />
  );
}
