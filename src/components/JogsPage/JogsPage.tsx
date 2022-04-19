import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./JogsPage.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { filterJogs } from "../../shared/utils";
import { JogType } from "../../shared/constants";
import JogItem from "../JogItem/JogItem";
import Loader from "../Loader/Loader";
import NoJogs from "../NoJogs/NoJogs";

const JogsPage = () => {
  const dispatch = useDispatch();
  const { jogs, user, loading } = useTypedSelector((state) => state.jogs);
  const { from, to } = useTypedSelector((state) => state.filter);
  const [userJogs, setUserJogs] = useState<Array<JogType>>([]);

  const filterArr = useMemo(
    () => filterJogs(from, to, userJogs),
    [from, to, userJogs]
  );

  useEffect(() => {
    if (!jogs.length && !user) dispatch({ type: "LOAD_DATA" });
    if (jogs.length && user) {
      setUserJogs(
        jogs
          .sort((one, two) => two.date - one.date)
          .filter((jog) => jog.user_id === user.id)
      );
    }
  }, [jogs, user, dispatch]);

  if (loading) return <Loader />;

  return (
    <div className="jogsPage">
      {userJogs.length > 0 ? (
        <>
          <ul className="jogsPage__list" data-testid="list">
            {filterArr.map((jog) => (
              <JogItem key={jog.id} jog={jog} />
            ))}
          </ul>
          <Link to="/add" className="jogsPage__add" />
        </>
      ) : (
        <NoJogs />
      )}
    </div>
  );
};

export default JogsPage;
