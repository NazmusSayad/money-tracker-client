import { createSlice } from 'react-rtk'

type InitialState = {
  [_id: string]: {}
}

export default createSlice('categories', {
  initialState: {
    income: {} as InitialState,
    expense: {} as InitialState,
    local: {
      created: {} as InitialState,
      updated: {} as InitialState,
      deleted: {} as InitialState,
    },
  },
  reducers: {
    addCategories(state, categories: unknown[]) {
      categories.forEach((category: any) => {
        if (category.type === 'income') {
          state.income[category._id] = category
        } else if (category.type === 'expense') {
          state.expense[category._id] = category
        }
      })
    },

    setCategories(state, categories: unknown[]) {
      state.income = {}
      state.expense = {}
      this.addCategories(state, categories)
    },
  },
})
