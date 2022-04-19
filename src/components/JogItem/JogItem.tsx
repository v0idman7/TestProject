import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./JogItem.scss";
import jogItem from "../../asset/images/icon.png";
import { deleteJog } from "../../services";
import { JogType } from "../../shared/constants";
import { getSpeed } from "../../shared/utils";
import { EditActionTypes } from "../../store/types/edit";
import { JogsActionTypes } from "../../store/types/jogs";
import { useCallback } from "react";

const JogItem = ({ jog }: { jog: JogType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = useCallback(() => {
    dispatch({ type: EditActionTypes.SET_EDIT, payload: jog });
    navigate("/edit");
  }, [dispatch, jog, navigate]);

  const handleDelete = useCallback(async () => {
    const response = await deleteJog(jog.id, jog.user_id);
    if (response)
      dispatch({ type: JogsActionTypes.DELETE_JOG, payload: jog.id });
  }, [dispatch, jog]);

  return (
    <li key={jog.id} className="jogItem">
      <img className="jogItem__image" src={jogItem} alt="Jog item" />
      <div className="jogItem__info">
        <span className="jogItem__infoItem">
          {new Date(jog.date * 1000).toLocaleDateString()}
        </span>
        <span className="jogItem__infoItem">
          <span className="jogItem__infoName">Speed:</span>
          {` ${getSpeed(jog.distance, jog.time)}`}
        </span>
        <span className="jogItem__infoItem">
          <span className="jogItem__infoName">Distance:</span>
          {` ${jog.distance}km`}
        </span>
        <span className="jogItem__infoItem">
          <span className="jogItem__infoName">Time:</span>
          {` ${jog.time}min`}
        </span>
      </div>
      <button className="jogItem__button jogItem__edit" onClick={handleEdit} />
      <button
        className="jogItem__button jogItem__delete"
        onClick={handleDelete}
      />
    </li>
  );
};

export default JogItem;
