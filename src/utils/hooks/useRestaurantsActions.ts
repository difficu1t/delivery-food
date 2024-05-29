import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { actions } from "../../store/slices/restaurantsSlice"

export const useRestaurantsActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}