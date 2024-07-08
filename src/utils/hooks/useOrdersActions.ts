import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { actions } from "../../store/slices/ordersSlice"

export const useOrdersActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}