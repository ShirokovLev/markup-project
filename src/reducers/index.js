const InitialState = {
  games: [
      {
        id: 1,
        genre: 'Action RPG',
        title: 'Saints Row',
        rating: 0,
        description: 'Platinum Edition',
        votes: '0',
        price: '$649',
        oldPrice: '$1,299',
        discount: '-50%',
        picUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202108/0915/LYNyURhCVmK6zcNwYjFMpln9.png?w=440',
      },
      {
        id: 2,
        genre: 'Multiplayer RPG',
        title: 'Paladins',
        rating: 4,
        description: 'Get the Captain Price Operator included with purchase',
        votes: '1820',
        price: 'Free',
        oldPrice: '',
        discount: '',
        picUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202201/2523/tMWmeYSAviGXmoea3HxzpYgP.png?w=440',
      },
      {
        id: 3,
        genre: 'Action',
        title: 'Far Cry 6',
        rating: 4,
        description: 'In-Game Content',
        votes: '2,888',
        price: '$649',
        oldPrice: '$1,299',
        discount: '-50%',
        picUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202106/1514/D5IockH4MUF5F3iXDIq1S7KK.png',
      },
      {
        id: 4,
        genre: 'Action',
        title: 'Need for Speed: Heat',
        rating: 4.5,
        description: 'Includes access to World of Warcraft, Burning Crusade Classic, and WoW Classic!',
        votes: '2,911',
        price: '$649',
        oldPrice: '',
        discount: '',
        picUrl: 'https://image.api.playstation.com/vulcan/img/cfn/11307cwSLoQYh6OciEuK47snWzZlmpQm99OAVknLgmppz0NQ88zNIWC3i9Jec-kApe0727OE9mT3ZHAXZeQV9K5F8NYRQQrM.png',
      },
      {
        id: 5,
        genre: 'Action',
        title: 'Spider-Man: Miles Morales',
        rating: 3,
        description: 'Get the Captain Price Operator included with purchase',
        votes: '920',
        price: '$649',
        oldPrice: '$1,299',
        discount: '-50%',
        picUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2911/dsIDUFuR15Vo8qeEEM4CfDZZ.png?w=440',
      },
      {
        id: 6,
        genre: 'Shooter',
        title: 'Guardians of the Galaxy',
        rating: 3,
        description: 'In-Game Content',
        votes: '299,890',
        price: '$649',
        oldPrice: '$1,299',
        discount: '-50%',
        picUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202106/0215/Pw9cWnyqkix3EoCOGqrN1cgN.png',
      },
      {
        id: 7,
        genre: 'Card Game',
        title: 'Witcher 3: Wild Hunt',
        rating: 5,
        description: 'Will only be usable in the new Classic Format when it is released',
        votes: '299,890',
        price: '$649',
        oldPrice: '$1,299',
        discount: '-50%',
        picUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202009/2913/msyJ2kVdCzoy6ChWjSE6b0D5.jpg',
      }
  ],
  messages: [
    {
      id: 1,
      message: 'Refer a friend and get $10 off! 🔥 Offer ends February 27!',
    },
    {
      id: 2,
      message: 'Refer a friend and get $20 off! 🔥 Offer ends February 24!',
    }
  ],
  isPopupVisible: false
}
  
  // Actions
  
  const reducer = (state = InitialState, action)=> {
  
      switch(action.type){
  
          case "SHOW_POPUP": {
              return {
                  ...state,
                  isPopupVisible: true,
              }
          }

          case "HIDE_POPUP": {
            return {
                ...state,
                isPopupVisible: false,
            }
          }

          case "ADD_CARD": {
            return {
                ...state,
                games: [...state.games, 
                  {
                    id: state.games.length+1,
                    title: action.title,
                    genre: action.genre,
                    rating: action.rating,
                    description: action.description,
                    votes: action.votes,
                    price: action.price,
                    oldPrice: action.oldPrice,
                    discount: action.discount,
                    picUrl: action.picUrl
                  }
                ]
            }
          }


          default: return state
      }
          
  }
  
  export default reducer