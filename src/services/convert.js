import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const convertApi = createApi({
  reducerPath: "convertApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.frankfurter.app", // Base URL for the API
    // If authentication or headers are needed, you can add them here
    // headers: {
    //   'X-RapidAPI-Key': rapidApiKey,
    //   'X-RapidAPI-Host': 'api.frankfurter.app'
    // },
  }),
  endpoints: (builder) => ({
    // Fetch conversion data for a specific base currency and symbols
    convertCurrency: builder.query({
      query: ({ base, symbols }) => `/latest?base=${base}&symbols=${symbols}`, // Adjusting the query to match the API's expected parameters
    }),

    // Fetch conversion data for a specific date and base currency
    convertCurrencyByDate: builder.query({
      query: ({ base, date, symbols }) =>
        `/${date}?base=${base}&symbols=${symbols}`, // Adjusting the query to match the API's expected parameters
    }),

    // Fetch conversion data for a specific base currency with date
    convertCurrencyByDateRange: builder.query({
      query: ({ base, startDate, endDate, symbols }) =>
        `/history?start_date=${startDate}&end_date=${endDate}&base=${base}&symbols=${symbols}`, // Adjusting for historical data
    }),
    convertDate: builder.query({
      //base default e euro
      query: ({ date }) => `https://api.frankfurter.app/${date}`, // Adjusting for historical data
    }),
    convertCurrencyBase: builder.query({
      query: ({ base }) => `/latest?base=${base}`, // Adjusting the query to match the API's expected parameters
    }),
  }),
});

// Export the hooks for usage in components
export const {
  useConvertCurrencyQuery,
  useConvertCurrencyByDateQuery,
  useConvertCurrencyByDateRangeQuery,
  useConvertDateQuery,
  useConvertCurrencyBaseQuery,
} = convertApi;
