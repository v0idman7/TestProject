import { useDispatch } from "react-redux";

import "./JogsFilter.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { FilterActionTypes } from "../../store/types/filter";

const JogsFilter = () => {
  const dispatch = useDispatch();
  const { from, to } = useTypedSelector((state) => state.filter);

  return (
    <div className="jogsFilter">
      <label className="jogsFilter__label">
        Date from
        <input
          className="jogsFilter__input"
          type="date"
          value={
            !isNaN(from) ? new Date(from).toISOString().substring(0, 10) : ""
          }
          onInput={(e) => {
            const val = e.currentTarget.valueAsNumber;
            dispatch({ type: FilterActionTypes.SET_FROM, payload: val });
          }}
          data-testid="from"
        />
      </label>
      <label className="jogsFilter__label">
        Date to
        <input
          className="jogsFilter__input"
          type="date"
          value={!isNaN(to) ? new Date(to).toISOString().substring(0, 10) : ""}
          onInput={(e) => {
            const val = e.currentTarget.valueAsNumber;
            dispatch({ type: FilterActionTypes.SET_TO, payload: val });
          }}
          data-testid="to"
        />
      </label>
    </div>
  );
};

export default JogsFilter;
