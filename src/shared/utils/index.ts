import { JogType } from "../constants";

export const getSpeed = (distance: number, time: number) => {
  if (time === 0) return 0;
  if ((distance * 60) % time === 0) return (distance / time) * 60;
  return ((distance / time) * 60).toFixed(2);
};

export const filterJogs = (from: number, to: number, jogs: Array<JogType>) => {
  if (!isNaN(from) && !isNaN(to))
    return jogs.filter(
      (jog) => jog.date >= from / 1000 && jog.date <= to / 1000
    );
  if (!isNaN(from) && isNaN(to))
    return jogs.filter((jog) => jog.date >= from / 1000);
  if (isNaN(from) && !isNaN(to))
    return jogs.filter((jog) => jog.date <= to / 1000);
  return jogs;
};
