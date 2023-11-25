import {createSlice} from "@redux/toolkit"

const initialstate = {
    deger:0
};

export const reduxDeger = createSlice({
    initialstate,
    reducers:{
        decrement: (state) => {
            state.deger -= 1
        },
        increment: (state) => {
            state.deger += 1
        }
    }
});
export const {decrement, increment} = reduxDeger.actions;
export default reduxDeger.reducer;