import axios from "../../../modules/axios";
import useSeriesStore from "../series.store";

const getParams = () => {
  const offset = useSeriesStore.currentOffset;
  const params = new URLSearchParams();
  params.append("limit", "20");
  params.append("offset", String(offset));
  return params;
};

const getSeries = async () => {
  try {
    const response = await axios.get("v1/public/series", {
      params: getParams(),
    });

    const { data } = response;
    useSeriesStore.currentOffset = data.data.offset;
    useSeriesStore.series = data.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default getSeries;
