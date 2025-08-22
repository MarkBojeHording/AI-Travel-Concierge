const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  location: string;
  rating: number;
  duration: string;
  price: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  count?: number;
  error?: string;
}

export interface AiResponse {
  response: string;
  usage?: any;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Fetch destinations from Airtable
  async fetchDestinations(): Promise<Destination[]> {
    const response = await this.request<Destination[]>('/api/fetchDestinations');
    return response.data;
  }

  // Generate AI response
  async generateResponse(prompt: string): Promise<string> {
    const response = await this.request<AiResponse>('/api/generateResponse', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
    });
    return response.data.response;
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
