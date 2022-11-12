import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
    direction: "oneway",
    flightClass: "M",
    adults: 1,
    children: 0,
    infants: 0,
    inputFromIATA: null,
    inputFromLocation: null,
    inputToIATA: null,
    inputToLocation: null,
    calendarStart: null,
    calendarFinish: null,
    inputRandomWaysIATA: null,
    inputRandomWaysLocation: null,
};


const dataTicketAvia: any = createSlice({
    name: 'Data for air ticket search',
    initialState,
    reducers: {
        direction: (state: any, action: PayloadAction<string>) => {
            state.direction = action.payload;
        },

        flightClass: (state: any, action: PayloadAction<string>) => {
            state.flightClass = action.payload;
        },

        adults: (state: any, action: PayloadAction<number>) => {
            state.adults = action.payload;
        },

        children: (state: any, action: PayloadAction<number>) => {
            state.children = action.payload;
        },

        infants: (state: any, action: PayloadAction<string>) => {
            state.infants = action.payload;
        },

        inputFromIATA: (state: any, action: PayloadAction<string>) => {
            state.inputFromIATA = action.payload;
        },

        inputFromLocation: (state: any, action: PayloadAction<string>) => {
            state.inputFromLocation = action.payload;
        },
        inputToIATA: (state: any, action: PayloadAction<string>) => {
            state.inputToIATA = action.payload;
        },

        inputToLocation: (state: any, action: PayloadAction<string>) => {
            state.inputToLocation = action.payload;
        },
        calendarStart: (state: any, action: PayloadAction<string>) => {
            state.calendarStart = action.payload;
        },

        calendarFinish: (state: any, action: PayloadAction<string>) => {
            state.calendarFinish = action.payload;
        },
        reverse: (state: any) => {
            const temporaryObject = {
                newInputFromIATA: state.inputToIATA,
                newInputFromLocation: state.inputToLocation,
                newInputToIATA: state.inputFromIATA,
                newInputToLocation: state.inputFromLocation,
            };

            state.inputFromIATA = temporaryObject.newInputFromIATA;
            state.inputFromLocation = temporaryObject.newInputFromLocation;
            state.inputToIATA = temporaryObject.newInputToIATA;
            state.inputToLocation = temporaryObject.newInputToLocation;
        },
        inputRandomWaysIATA: (state: any, action: PayloadAction<string>) => {
            state.inputRandomWaysIATA = action.payload;
        },
        inputRandomWaysLocation: (state: any, action: PayloadAction<string>) => {
            state.inputRandomWaysLocation = action.payload;
        },
    },

});


export const { direction, flightClass, adults, children, infants, inputFromIATA, inputFromLocation, inputToIATA, inputToLocation, calendarStart, calendarFinish, reverse, inputRandomWaysIATA, inputRandomWaysLocation } = dataTicketAvia.actions;
export default dataTicketAvia.reducer;