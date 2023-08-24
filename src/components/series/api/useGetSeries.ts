import axios from "../../../modules/axios";
import useSeriesStore from "../series.store";

const getParams = () => {
  const offset = useSeriesStore.currentOffset;
  return {
    offset,
    limit: 20,
  };
};

const getSeries = async () => {
  try {
    useSeriesStore.isLoading = true;
    const response = await axios.get("v1/public/series", {
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

export default getSeries;
