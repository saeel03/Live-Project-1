import axios from "axios";

export interface Organization {
  id: string;
  name: string;
}

export const getOrganizations = async (): Promise<Organization[]> => {
  const res = await axios.get(
    "https://app-dev-azcin-ggiis-api.azurewebsites.net/api/lookups/organizations"
  );
  return res.data;
};
