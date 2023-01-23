export interface ApiResponse<T>{
  code:number
  status: boolean
  message?:string
  data: T
}

export function apiResponse<T>(code:number, status: boolean, data:T, message?: string ):ApiResponse<T>{
  return {code: code, status: status, message: message, data:data}
}