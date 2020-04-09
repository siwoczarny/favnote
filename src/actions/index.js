export const removeItem = (itemType, id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      itemType,
      id,
    },
  };
};

export const addItem = (itemType, itemContent) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

//  id: 1,
//   title: 'Example content',
//   content:
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad voluptatibus ullam numquam nihil deserunt dolore officiis laborum, quasi iste unde? Est placeat quasi laudantium possimus debitis? Sapiente, debitis eaque.',
//   twitterName: 'siwoczarny',
//   articleUrl: 'https://siwoczarny.github.io/portfolio/',
//   created: '20/02/2020',
