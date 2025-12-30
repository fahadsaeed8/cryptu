import { useQuery } from "@tanstack/react-query";
import { apiClient } from "./api-client";

type ExampleResponse = {
  message: string;
};

export const useExampleQuery = () => {
  return useQuery({
    queryKey: ["example"],
    queryFn: async (): Promise<ExampleResponse> => {
      const res = await apiClient.get<ExampleResponse>("/example");
      return res.data;
    },
  });
};


