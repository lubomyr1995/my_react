import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {episodesService} from "../../services";

const initialState = {
    episodes: [],
    pages: null,
    next: null,
    prev: null,
    currentEpisode: null
};

const getAll = createAsyncThunk(
    'episodeSlice/getAll',
    async ({page}) => {
        const {data} = await episodesService.getAll(page);
        return data
    }
);

const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {
        currentEpisode: (state, action) => {
            const {episodeName} = action.payload;
            state.currentEpisode = episodeName
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info: {pages, next, prev}, results} = action.payload;
                state.pages = pages
                state.next = next
                state.prev = prev
                state.episodes = results
            })
    }
});

const {reducer: episodeReducer, actions: {currentEpisode}} = episodeSlice;

export default episodeReducer;
export const episodeAction = {getAll, currentEpisode}