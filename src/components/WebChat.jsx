import { Container, Header, MessageList, Composer, useWebchat, Fab } from '@botpress/webchat'
import { useState, useMemo } from 'react'
import logo from '../logo192.png'

const headerConfig = {
  botName: 'Anshuman Kalathiya',
  botAvatar: logo,
  botDescription: 'Ask me anything',
  phone: {
    title: 'Call Me',
    link: 'tel:+12267246454',
  },
  email: {
    title: 'Email Me',
    link: 'mailto:anshumankalathiya@gmail.com',
  },
}

const WebChat = () => {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false)
  const { client, messages, isTyping, user, clientState, newConversation } = useWebchat({
    clientId: 'ed9ac573-6428-4bab-8b06-405a8fa31edd', // Insert your Client ID here
  })

  const config = {
    botName: 'Want to chat with me?',
    botAvatar: logo,
    botDescription: 'Ask me anything',
  }

  const enrichedMessages = useMemo(
    () =>
      messages.map((message) => {
        const { authorId } = message
        const direction = authorId === user?.userId ? 'outgoing' : 'incoming'
        return {
          ...message,
          direction,
          sender:
            direction === 'outgoing'
              ? { name: user?.name ?? 'You', avatar: user?.pictureUrl }
              : { name: config.botName ?? 'Bot', avatar: config.botAvatar },
        }
      }),
    [config.botAvatar, config.botName, messages, user?.userId, user?.name, user?.pictureUrl]
  )

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState)
  }

  return (
    <>
      <Container
        connected={clientState !== 'disconnected'}
        className="webchat-container"
        style={{
          zIndex: '1000',
          display: isWebchatOpen ? 'flex' : 'none',
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          borderRadius: '12px',
        }}
      >
        <Header
          // onOpenChange={() => console.log('Override the header open change')}
          defaultOpen={false}
          closeWindow={() => setIsWebchatOpen(false)}
          restartConversation={newConversation}
          disabled={false}
          configuration={headerConfig}
          
        />
        <MessageList
          botAvatar={config.botAvatar}
          botName={config.botName}
          botDescription={config.botDescription}
          isTyping={isTyping}
          headerMessage="Chat History"
          showMarquee={true}
          messages={enrichedMessages}
          sendMessage={client?.sendMessage}
        />
        <Composer
          disableComposer={false}
          isReadOnly={false}
          connected={clientState !== 'disconnected'}
          sendMessage={client?.sendMessage}
          uploadFile={client?.uploadFile}
          composerPlaceholder="Type a message..."
        />
      </Container>
      <Fab onClick={() => toggleWebchat()} style={{ position: 'fixed', bottom: '20px', right: '20px', width: '64px', height: '64px' }}/>
    </>
  )
}

export default WebChat
