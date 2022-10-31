import axios from "axios";
import itemsReducer from "../reducer/itemsReducer";
import { initItemsAction } from "../actions/action-creators";

/*
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
*/

const { configureStore } = require("@reduxjs/toolkit")

const state = {
    
    items : [
        {
            id: 1,
            name : "helment",
            description: " white security helment",
            expriation_date : "2023-10-31 ",
            location : "warehouse",
            comments : [ ]
        }
    ]
}

const store = configureStore({
    reducer : itemsReducer,
    preloadedState : {items : []}
});

    // *Otra opcion, Trae la data desde el store
  /*  let accion = initItemsAction(state.items); 

    store.dispatch(accion); */

  // conecta a la API
  

axios.get(" http://localhost:3001/items").then((resp)=>{
    let accion = initItemsAction(resp.data);
    store.dispatch(accion);
}); 


/*

const fetchQuotes = async () => {
	try {
		const res = await axios.get(
			`https://peuubzvguftabxejytup.supabase.com`,
			{
				headers: {
					'x-rapidapi-host': 'peuubzvguftabxejytup.supabase.com',
					'x-rapidapi-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBldXVienZndWZ0YWJ4ZWp5dHVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYxMTg2NjYsImV4cCI6MTk4MTY5NDY2Nn0.DPJfkHNtV3o4B7SDwXgmPVQhpdkgaDI59rS7rnAGCTg'
				},
				params: {category: 'all', count: '10'}
			}
		);
	} catch (err) {
		console.log(err);
	}
};

*/

export default store;