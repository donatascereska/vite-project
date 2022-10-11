type ActionProps = {
  type: string;
  payload?: any;
};

const reducer = (state: any, action: ActionProps): any => {
  switch (action.type) {
    case 'SET': {
      const data = action.payload;
      return data;
    }
    case 'MARK': {
      const id = action.payload;
      const dataWithActiveId = state.map((item: any) => ({
        ...item,
        ...(item.id === id && { isMarked: true })
      }));

      return dataWithActiveId;
    }
    case 'UNMARK': {
      const id = action.payload;
      const dataWithActiveId = state.map((item: any) => ({
        ...item,
        ...(item.id === id && { isMarked: false })
      }));

      return dataWithActiveId;
    }
    case 'REMOVE': {
      const id = action.payload;
      const dataWithActiveId = state.map((item: any) => ({
        ...item,
        ...(item.id === id && { isActive: false })
      }));

      return dataWithActiveId;
    }
  }

  return state;
};

export default reducer;
