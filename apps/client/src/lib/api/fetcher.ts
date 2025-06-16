import type { ApiResponse } from '../types/art-api/api-response';

export const fetchWithApiKey = async <T>(endpoint: string): Promise<T> => {
  const resp = await fetch(
    `${import.meta.env.VITE_ART_API_BASE_URL}${endpoint}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': import.meta.env.VITE_ART_API_PUBLISHABLE_KEY,
      },
    }
  );

  const result: ApiResponse<T> = await resp.json();
  if (!resp.ok || !result.data) {
    throw new Error(`${result.status}: ${result.message}`);
  }

  return result.data;
};
