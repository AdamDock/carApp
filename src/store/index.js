import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

export {
    store,
    addCar,
    removeCar,
    changeSearchTerm,
    changeName,
    changeCost
}