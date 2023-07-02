import { request } from '@umijs/max';

// 获取算法模型列表
export async function queryModelList(
  params: {
    // query
    /** keyword */
    keyword?: string;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
    [propName: string]: any;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/model/modelList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

// 获取算法模型详情
export async function queryModelDetail(
  params: {
    id: string;
    [propName: string]: any;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/model/modelDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
