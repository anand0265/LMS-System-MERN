import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { authApi } from "@/features/api/authApi";
import { userLoggedIn } from "@/features/authSlice";
import { courseApi } from "@/features/api/courseApi";

// export const appStore = configureStore({
//   reducer: {
//     ...rootReducer, // If rootReducer is an object of slice reducers
//     [authApi.reducerPath]: authApi.reducer, // Required to enable RTK Query
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(authApi.middleware),
// });

export const appStore = configureStore({
  reducer: rootReducer,
  // [authApi.reducerPath]: authApi.reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, courseApi.middleware),
});

// Correct code
const initializeApp = async () => {
  await appStore.dispatch(
    authApi.endpoints.loadUser.initiate({}, { forceRefetch: true })
  );
};

// const initializeApp = async () => {
//   try {
//     const result = await appStore.dispatch(
//       authApi.endpoints.loadUser.initiate({}, { forceRefetch: true })
//     );

//     if (result?.data?.user) {
//       appStore.dispatch(userLoggedIn({ user: result.data.user }));
//     }
//   } catch (err) {
//     console.error("Failed to load user", err);
//   }
// };

initializeApp();
