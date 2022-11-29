import { stringify } from "query-string";
import axios from "axios";

import config from "../config";

const pkDictionary = {
  "genres/rows": "GenreId",
  "artists/rows": "ArtistId",
  "customers/rows": "CustomerId",
  "employees/rows": "EmployeeId",
  "invoices/rows": "InvoiceId",
  "media_types/rows": "MediaTypeId",
  "playlists/rows": "PlayListId",
  "playlist_track/rows": "PlayListId",
  "tracks/rows": "TrackId",
};

export const dataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const query = {
      _page: page,
      _limit: perPage,
      _ordering: order === "ASC" ? `${field}` : `-${field}`,
    };

    const url = `${config.apiUrl}/${resource}?${stringify(query)}`;

    return axios.get(url).then((response) => {
      const { data } = response.data;

      //manually add an id key
      const modifiedData = [];
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const primaryKey = pkDictionary[resource];

        item.id = item[primaryKey];
        modifiedData.push(item);
      }

      response.data.data = modifiedData;
      return response.data;
    });
  },

  create: (resource, params) => {
    const url = `${config.apiUrl}/${resource}`;

    return axios.post(url, { fields: params.data }).then((response) => {
      return { data: { id: response.data.lastInsertRowId, ...params.data } };
    });
  },

  getOne: (resource, params) => {
    const url = `${config.apiUrl}/${resource}/${params.id}`;

    return axios.get(url).then((response) => {
      const { data } = response.data;
      return { data: { id: data[0].GenreId, ...data[0] } };
    });
  },

  update: (resource, params) => {
    const url = `${config.apiUrl}/${resource}/${params.id}`;

    // remove the id property
    const { id, ...editData } = params.data;

    return axios.put(url, { fields: editData }).then((response) => {
      return { data: { id: response.data.lastInsertRowId, ...params.data } };
    });
  },
};
