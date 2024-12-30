export type ApiResponse<ResponseData> = {
  isSuccess: boolean;
  statusCode: number;
  path: string;
  timestamp: string;
  method: string;
  data: ResponseData;
};
