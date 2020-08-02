import { ajax } from "../plugins/api";

export default {
  data: {
    countries: () => ajax.get("locations/countries"),
    cities: (countryId, q) => ajax.post(`locations/cities/${countryId}`, { city: q }),
    sexs: () => ajax.get("sexes")
  }
};
