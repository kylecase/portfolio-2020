import { createSlice } from '@reduxjs/toolkit'
import * as req from './requests'

export const initialState = {
  projects: [],
  fetchingProjects: false,
  fetchProjectsResponse: {},
  fetchProjectsError: {},
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjects(state, action) {
      const projects = action.payload
      return {
        ...state,
        projects,
      }
    },
    clearProjects(state) {
      return {
        ...state,
        projects: [],
      }
    },
    //
    // GETS
    //
    fetchingProjects(state) {
      return {
        ...state,
        fetchingProjects: true,
        fetchProjectsResponse: {},
        fetchProjectsError: {},
      }
    },
    fetchProjectsSuccess(state, action) {
      const response = action.payload
      return {
        ...state,
        fetchingProjects: false,
        fetchProjectsResponse: response,
        fetchProjectsError: {},
      }
    },
    fetchProjectsError(state, action) {
      const error = action.payload
      return {
        ...state,
        fetchingProjects: false,
        fetchProjectsResponse: {},
        fetchProjectsError: error,
      }
    },
  },
})

export function fetchProjects() {
  return function (dispatch) {
    dispatch(fetchingProjects())
    req
      .fetchProjects()
      .then((response) => {
        dispatch(fetchProjectsSuccess(response))
        dispatch(setProjects(response.data))
      })
      .catch((error) => {
        dispatch(fetchProjectsError(error))
      })
  }
}

export const {
  setProjects,
  clearProjects,
  fetchingProjects,
  fetchProjectsSuccess,
  fetchProjectsError,
} = projectSlice.actions

export default projectSlice.reducer
