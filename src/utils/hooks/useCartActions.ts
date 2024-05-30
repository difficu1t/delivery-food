import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { actions } from "../../store/slices/cartSlice"

export const useCartActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}