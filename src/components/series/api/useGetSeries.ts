import axios from "../../../modules/axios";
import { ISerie } from "../models/seriesModel";
import useSeriesStore from "../series.store";

const getParams = () => {
  const offset = useSeriesStore.currentOffset;
  return {
    offset,
    limit: 20,
  };
};

export const getSeries = async (): Promise<void> => {
  try {
    useSeriesStore.isLoading = true;
    const response = await axios.get("/series", {
      params: getParams(),
    });

    const { data } = response;
    useSeriesStore.currentOffset = data.data.offset;
    useSeriesStore.isCompleteSeries =
      data.data.total === useSeriesStore.series.length;

    if (data.data.offset === 0) {
      useSeriesStore.series = data.data.results;
      return;
    }

    useSeriesStore.series = [...useSeriesStore.series, ...data.data.results];
  } catch (error) {
    console.error(error);
  } finally {
    useSeriesStore.isLoading = false;
  }
};

export const getSerie = async (id: number): Promise<ISerie | null> => {
  try {
    useSeriesStore.isLoading = true;
    const response = await axios.get(`/series/${id}`);
    const { data } = response;
    if (data.data.count === 0) return null;
    return data.data.results[0];
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    useSeriesStore.isLoading = false;
  }
};
