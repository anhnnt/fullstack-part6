import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    showNotification(state, action) {
      return action.payload
    },
    removeNotification(state, action) {
      return null
    }
  }
})

export const { showNotification, removeNotification } = notificationSlice.actions

export const setNotification = (noti, time) => {
  return async dispatch => {
    dispatch(showNotification(noti))
    setTimeout(() => dispatch(removeNotification(time*1000)), time*1000)
  }
}

export default notificationSlice.reducer