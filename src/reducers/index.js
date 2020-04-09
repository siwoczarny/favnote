const initialState = {
  notes: [
    {
      id: 1,
      title: 'Note 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
    },
    {
      id: 2,
      title: 'Note 2',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '2 day',
    },
    {
      id: 3,
      title: 'Note 3',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '5 days',
    },
    {
      id: 4,
      title: 'Note 4',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '8 days',
    },
    {
      id: 5,
      title: 'Note 5',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '11 days',
    },
  ],
  twitters: [
    {
      id: 1,
      title: 'Article 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      twitterName: 'siwoczarny',
      created: '2 day',
    },
    {
      id: 2,
      title: 'Article 2',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      twitterName: 'siwoczarny',
      created: '3 day',
    },
    {
      id: 3,
      title: 'Article 3',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      twitterName: 'siwoczarny',
      created: '6 days',
    },
    {
      id: 4,
      title: 'Article 4',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      twitterName: 'siwoczarny',
      created: '10 days',
    },
    {
      id: 5,
      title: 'Article 5',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      twitterName: 'siwoczarny',
      created: '13 days',
    },
    {
      id: 6,
      title: 'Article 6',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      twitterName: 'siwoczarny',
      created: '15 days',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'Article 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://siwoczarny.github.io/portfolio/',
      created: '1 day',
    },
    {
      id: 2,
      title: 'Article 2',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://siwoczarny.github.io/portfolio/',
      created: '1 day',
    },
    {
      id: 3,
      title: 'Article 3',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://siwoczarny.github.io/portfolio/',
      created: '3 days',
    },
    {
      id: 4,
      title: 'Article 4',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://siwoczarny.github.io/portfolio/',
      created: '4 days',
    },
  ],
};

// eslint-disable-next-line
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
