import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/MovieApi';
import {APIKey} from '../../common/apis/MovieApiKey';

// This thunk is used for movies
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {


    const response = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=movie`)
    console.log("Faraz")

    return response.data;
});


//this thunk is used for series
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {


  const response = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=series`)
 

  return response.data;
});

//this thunk is used for Details
export const fetchAsyncMoviesOrShowDetails = createAsyncThunk('movies/fetchAsyncMoviesOrShowDetails', async (id) => {


  const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`)
 

  return response.data;
});



const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {},
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        // addMovies: (state, action) => {
        //     state.movies = action.payload;
        // },

        // both are working

        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log('fullfiled');
            return {...state, movies: payload};
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('rejected');
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log('fullfiled');
            return {...state, shows: payload};
        },
        [fetchAsyncMoviesOrShowDetails.fulfilled]: (state, {payload}) => {
            console.log('fullfiled');
            return {...state, selectMovieOrShow: payload};
    },
    }
});

export const {removeSelectedMovieOrShow} = movieSlice.actions;
// if i want to get a value from store, to do that create a function
export const getAllMovies = (state) => state.movies.movies; 
//                                    state.sliceName.and the property which we want to export in our case movies
export const getAllShows = (state) => state.movies.shows; 
//                                    state.sliceName.and the state or property we want to export
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow; 
//                                    state.sliceName.and the state or property we want to export
export default movieSlice.reducer;