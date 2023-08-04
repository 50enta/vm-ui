import { useState } from "react";
import { GetParams } from "./getFetchParams";
import { OrganizeTable } from "../../utils/tableUtils/getTableHeaders";

export function GeneralFetch() {
  let baseURL = "http://localhost:8000/api/";
  const [data, setData] = useState([]);
  const { tableHeadersAndData } = OrganizeTable({ setData });
  const [load, setLoad] = useState(false);

  const { ReturnParams } = GetParams({ setLoad });

  async function FetchData(obj, endPoint, method, table, object) {
    
    let response = fetch(baseURL + "" + endPoint, ReturnParams(obj, method))
      .then((response) => response.json())
      .then((data) => {
        if (data.error || data.warning || data.success) {
        } else {
          if (object && table) {
            tableHeadersAndData(data, object)
          } else if (object && !table) {
            if (data[object]) {
              if (data.data?.[object]) {
                setData(data.data[object]);
              } else {
                setData(data[object]);
              }
            } else {
              setData(data);
            }
          }
        }
        setLoad(false);
        return data || 1;
      });
    return response;
  }

  return { FetchData, load, data };
}
