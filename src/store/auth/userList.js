import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  login: null,
  register: null,
  token: null,
  getUserInfo: null,
};

export const getUserInfo = createAsyncThunk(
    "/matches",
    async (data) => {
      try {
        const response = await axios.get(
            `https://sozhiyavellalarmarriage.com/matrimonyApp/UserController/getUsersList`,
            data,
        );
        // console.log("response", response);
        if (response.status === 200) {
          return {
            usr_id:   response.data.id,
            usr_email:  response.data.emailAddress,
            usr_password:  response.data.password,
            usr_name:  response.data.name,
            usr_gender:  response.data.sex,
            usr_image:  response.data.image,
            usr_dob:  response.data.dob,
            usr_marital_status:  response.data.maritalStatus,
            usr_contact_person:  response.data.contactPerson,
            usr_mobile:  response.data.phoneNumber,
            usr_alternate_number:  response.data.alternativeNumber,
            usr_kothram:  response.data.kulam,
            usr_vellalar_sub_caste:  response.data.communityName,
            usr_created_by:  response.data.createdBy,
            usr_profile:  response.data.profile,
            usr_birth_time:  response.data.timeOfBirth,
            usr_birth_day:  response.data.dayofBirth,
            usr_birth_place:  response.data.placeofBirth,
            usr_rasi:  response.data.rasi,
            usr_star:  response.data.star,
            usr_padham:  response.data.padham,
            usr_lagnam:  response.data.lagnam,
            usr_janana_kaala_thisai:  response.data.jananaKaala,
            usr_sevvai:  response.data.sevvai,
            usr_raaghu:  response.data.raaghu,
            usr_education:  response.data.education,
            usr_education_details:  response.data.education_details,
            usr_college:  response.data.college,
            usr_occupation:  response.data.occupation,
            usr_job_title:  response.data.jobDetails,
            usr_employer_details:  response.data.employerDetails,
            usr_current_employed_country:  response.data.employedCountry,
            usr_income:  response.data.income,
            usr_address:  response.data.address,
            usr_country:  response.data.country,
            usr_state:  response.data.state,
            usr_city:  response.data.city,
            usr_living_country:  response.data.living_country,
            usr_native:  response.data.native,
            usr_personal_website:  response.data.website,
          };
        } else {
          return new Error();
        }
      } catch (error) {
        throw new Error(error.response.data);
      }
  });


  export const userListSlice = createSlice({
    name: "userList",
    initialState,
    reducers: {},
    extraReducers(build) {
      build
        .addCase(getUserInfo.pending, (state) => {
          state.getUserInfo = {
            loading: true,
          };
        })        
        .addCase(getUserInfo.fulfilled, (state, action) => {
          state.getUserInfo = {
            isLoading: false,
            userInfo: action?.payload,
          };
        })
        .addCase(getUserInfo.rejected, (state, action) => {
          state.getUserInfo = {
            isError: action?.error?.message,
            loading: false,
          };
        })
    },
});

export const { disableModal } = userListSlice.actions;

export default userListSlice.reducer;