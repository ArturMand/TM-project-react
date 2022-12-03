import axios from "axios"
const fetchCurrency = async () => {
  try {
    const response = await axios.get(
      "https://api.monobank.ua/bank/currency"
    );
  
    return response.data
  
  } catch (error) {
    throw error;
  }
};

// import { createAsyncThunk } from '@reduxjs/toolkit';

// import axios from 'axios';

// axios.defaults.baseURL = 'https://api.monobank.ua'




// export const fetchCurrency = createAsyncThunk(

//   'contacts/fetchAll',

//   async (_, {rejectWithValue}) => {

//     try {

//       const response = await axios.get('/bank/currency');

//       return response.data;

//     } catch (error) {

//       return rejectWithValue(error.message);

//     }

//   }

// );
export default fetchCurrency;

