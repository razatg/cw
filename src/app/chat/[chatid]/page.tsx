import React from 'react'

type Props = {
    params: {
        chatId: string
    }
}

const ChatPage = ({params: {chatId}}: Props) => {
  return (
    <div className='flex max-h-screen overflow-scroll'>
        <div className='flex w-full max-h-screen overflow-scroll'>
            {/* chat sidebar*/}
            <div className='flex-[1] max-h-screen overflow-scroll'>

            </div>
            {/*pdf viewer*/}
            <div className='flex-[1] max-w-xs'>

            </div>
            {/* chat component */}
            <div className='max-h-screen p-4 overflow-scroll flex-[5]'>

            </div>
        </div>
    </div>
  )
}

export default ChatPage;