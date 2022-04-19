import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "./JogForm.scss";
import { addJog, editJog } from "../../services";
import { JogsActionTypes } from "../../store/types/jogs";
import { EditActionTypes } from "../../store/types/edit";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const JogForm = ({ edit }: { edit?: boolean }) => {
  const { jog } = useTypedSelector((state) => state.edit);
  const initialValues = edit
    ? {
        distance: jog!.distance,
        time: jog!.time,
        date: new Date(jog!.date * 1000).toISOString().substring(0, 10),
      }
    : { distance: "", time: "", date: "" };
  const validationSchema = Yup.object({
    distance: Yup.number().required("Required"),
    time: Yup.number().required("Required"),
    date: Yup.date().required("Required"),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAdd = async (date: string, time: number, distance: number) => {
    const newJog = await addJog(date, time, distance);
    dispatch({ type: JogsActionTypes.ADD_JOG, payload: newJog });
    navigate("/");
  };

  const handleEdit = async (date: string, time: number, distance: number) => {
    const newJog = await editJog(date, time, distance, jog!.id, jog!.user_id);
    dispatch({ type: JogsActionTypes.EDIT_JOG, payload: newJog });
    dispatch({ type: EditActionTypes.CLEAR_EDIT });
    navigate("/");
  };

  const handleClose = () => {
    if (edit) dispatch({ type: EditActionTypes.CLEAR_EDIT });
  };

  return (
    <div className="addJog">
      <Link to="/" className="addJog__close" onClick={handleClose} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnBlur
        onSubmit={(values) => {
          if (edit) {
            handleEdit(values.date, +values.time, +values.distance);
          } else {
            handleAdd(values.date, +values.time, +values.distance);
          }
        }}
      >
        {({ errors, touched, handleChange, handleBlur, isValid, dirty }) => (
          <Form className="addJog__form">
            <div className="addJog__wrap">
              <label className="addJog__label" htmlFor="distance">
                Distance
                <Field
                  id="distance"
                  type="number"
                  className="addJog__input"
                  name="distance"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              {touched.distance && errors.distance && (
                <div className="addJog__error">{errors.distance}</div>
              )}
            </div>
            <div className="addJog__wrap">
              <label className="addJog__label" htmlFor="time">
                Time
                <Field
                  id="time"
                  type="number"
                  className="addJog__input"
                  name="time"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              {touched.time && errors.time && (
                <div className="addJog__error">{errors.time}</div>
              )}
            </div>
            <div className="addJog__wrap">
              <label className="addJog__label" htmlFor="date">
                Date
                <Field
                  id="date"
                  type="date"
                  className="addJog__input"
                  name="date"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              {touched.date && errors.date && (
                <div className="addJog__error">{errors.date}</div>
              )}
            </div>
            <button
              className="addJog__button"
              type="submit"
              disabled={!isValid || !dirty}
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default JogForm;
