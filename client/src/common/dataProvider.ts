import axios from "axios";
import { stringify } from "query-string";
import { DataProvider } from 'ra-core';

export const dataProvider = (pkDictionary: any, apiUrl: string): DataProvider => ({
  getList: (resource: string, params: any) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const ordering = order === "ASC" ? `${field}` : `-${field}`;

    //since the soul api requires comma separated filters, remove the quotes and curly braces from the filter
    const filter = JSON.stringify(params.filter).replace(/[{} ""]/g, "");

    const query = {
      _page: page,
      _limit: perPage,
      _ordering: field !== "id" ? ordering : undefined,
      _filters: filter ? filter : undefined,
    };

    const url = `${apiUrl}/${resource}/rows?${stringify(query)}`;

    return axios.get(url).then((response) => {
      const { data } = response.data;

      //manually add an id key
      const modifiedData = [];
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const primaryKey = pkDictionary[resource];

        if (primaryKey !== undefined) {
          item.id = item[primaryKey];
          delete item[primaryKey];
        }

        modifiedData.push(item);
      }

      return { data: modifiedData, total: response.data.total };
    });
  },

  create: (resource: string, params: any) => {
    const url = `${apiUrl}/${resource}/rows`;

    return axios.post(url, { fields: params.data }).then((response) => {
      return { data: { id: response.data.lastInsertRowId, ...params.data } };
    });
  },

  getOne: (resource: string, params: any) => {
    const url = `${apiUrl}/${resource}/rows/${params.id}`;

    return axios.get(url).then((response) => {
      let { data } = response.data;
      data = data[0];

      const primaryKey = pkDictionary[resource];
      if (primaryKey !== undefined) {
        data.id = data[primaryKey];
        delete data[primaryKey];
      }

      return { data };
    });
  },

  getMany: (resource: string, params: any) => {
    const url = `${apiUrl}/${resource}/rows/${params.ids.toString()}`;

    return axios.get(url).then((response) => {
      const { data } = response.data;

      //manually add an id key
      const modifiedData = [];
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const primaryKey = pkDictionary[resource];

        if (primaryKey !== undefined) {
          item.id = item[primaryKey];
          delete item[primaryKey];
        }

        modifiedData.push(item);
      }

      return { data: modifiedData, total: response.data.total };
    });
  },

  getManyReference: (resource: string, params: any) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const ordering = order === "ASC" ? `${field}` : `-${field}`;
    const filter = JSON.stringify(params.filter).replace(/[{} ""]/g, "");
    
    const query = {
      _page: page,
      _limit: perPage,
      _ordering: field !== "id" ? ordering : undefined,
      _filters: filter ? `${filter},${params.target}:${params.id}` : undefined,
    };

    const url = `${apiUrl}/${resource}/rows?${stringify(query)}`;

    return axios.get(url).then((response) => {
      const { data } = response.data;

      //manually add an id key
      const modifiedData = [];
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const primaryKey = pkDictionary[resource];

        if (primaryKey !== undefined) {
          item.id = item[primaryKey];
          delete item[primaryKey];
        }

        modifiedData.push(item);
      }

      return { data: modifiedData, total: response.data.total };
    });
  },

  update: (resource: string, params: any) => {
    const url = `${apiUrl}/${resource}/rows/${params.id}`;

    // remove the id property
    const { id, ...editData } = params.data;

    return axios.put(url, { fields: editData }).then((response) => {
      return { data: { id: response.data.lastInsertRowId, ...params.data } };
    });
  },

  updateMany: (resource: string, params: any) => {},

  delete: (resource: string, params: any) => {
    const url = `${apiUrl}/${resource}/rows/${params.id}`;

    return axios.delete(url).then((response) => {
      return { data: params.id };
    });
  },
  
  deleteMany: (resource: string, params: any) => {
    const ids = params.ids.toString();
    const url = `${apiUrl}/${resource}/rows/${ids}`;

    return axios.delete(url).then((response) => {
      return { data: params.ids };
    });
  },
});
